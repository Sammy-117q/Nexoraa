
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "10kb" }));

// Email configuration
const transporter =
  process.env.EMAIL_USER &&
  process.env.EMAIL_APP_PASSWORD
    ? nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_APP_PASSWORD.replace(/\s/g, ""),
        },
      })
    : null;

// Send a notification to the NEXORA inbox.
// Email failure must not delete a saved enquiry or order.
async function sendAdminEmail(subject, text) {
  if (!transporter || !process.env.ADMIN_EMAIL) {
    console.error(
      "Email not configured. Check EMAIL_USER, EMAIL_APP_PASSWORD and ADMIN_EMAIL."
    );
    return false;
  }

  try {
    await transporter.sendMail({
      from: `"NEXORA Notifications" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject,
      text,
    });

    console.log(`Email notification sent: ${subject}`);
    return true;
  } catch (error) {
    console.error("Email notification failed:", error.message);
    return false;
  }
}

// Contact enquiry model
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 254,
    },
    phone: { type: String, trim: true, maxlength: 30, default: "" },
    subject: {
      type: String,
      trim: true,
      maxlength: 150,
      default: "Website enquiry",
    },
    message: { type: String, required: true, trim: true, maxlength: 3000 },
    status: {
      type: String,
      enum: ["new", "contacted", "converted", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

const ContactMessage =
  mongoose.models.ContactMessage ||
  mongoose.model("ContactMessage", contactSchema);

// Website order/request model
const orderSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true, trim: true, maxlength: 100 },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 254,
    },
    phone: { type: String, required: true, trim: true, maxlength: 30 },
    packageName: { type: String, required: true, trim: true, maxlength: 150 },
    description: { type: String, required: true, trim: true, maxlength: 3000 },
    amount: { type: Number, required: true, min: 0 },
    paymentMethod: {
      type: String,
      enum: ["mpesa", "bank", "paypal"],
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["not_paid", "paid"],
      default: "not_paid",
    },
    status: {
      type: String,
      enum: ["new", "contacted", "in_progress", "completed", "cancelled"],
      default: "new",
    },
  },
  { timestamps: true }
);

const Order =
  mongoose.models.Order || mongoose.model("Order", orderSchema);

// Home route
app.get("/", (req, res) => {
  res.json({
    name: "NEXORA API",
    message: "NEXORA backend is running!",
    status: "OK",
  });
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    server: "running",
    database:
      mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    emailConfigured: Boolean(
      transporter && process.env.ADMIN_EMAIL
    ),
  });
});

// Contact enquiry endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Name, valid email and message are required.",
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    const enquiry = await ContactMessage.create({
      name,
      email,
      phone: typeof phone === "string" ? phone : "",
      subject:
        typeof subject === "string" && subject.trim()
          ? subject.trim()
          : "Website enquiry",
      message,
    });

    const emailSent = await sendAdminEmail(
      `New NEXORA enquiry: ${enquiry.subject}`,
      [
        "A new enquiry has been submitted through the NEXORA website.",
        "",
        `Name: ${enquiry.name}`,
        `Email: ${enquiry.email}`,
        `Phone: ${enquiry.phone || "Not provided"}`,
        `Subject: ${enquiry.subject}`,
        `Received: ${enquiry.createdAt.toISOString()}`,
        `Enquiry ID: ${enquiry._id}`,
        "",
        "Message:",
        enquiry.message,
      ].join("\n")
    );

    return res.status(201).json({
      success: true,
      message: "Your enquiry has been received successfully.",
      enquiryId: enquiry._id,
      emailNotification: emailSent ? "sent" : "failed",
    });
  } catch (error) {
    console.error("Contact submission failed:", error.message);
    return res.status(500).json({
      success: false,
      message: "We could not save your enquiry. Please try again.",
    });
  }
});

// New website order/request endpoint
app.post("/api/orders", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      description,
      packageName,
      price,
      paymentMethod,
    } = req.body;

    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
      typeof phone !== "string" ||
      !phone.trim() ||
      typeof description !== "string" ||
      !description.trim() ||
      typeof packageName !== "string" ||
      !packageName.trim() ||
      !["mpesa", "bank", "paypal"].includes(paymentMethod)
    ) {
      return res.status(400).json({
        success: false,
        message: "Please complete all fields with valid information.",
      });
    }

    const amount = Number(String(price).replace(/,/g, ""));

    if (!Number.isFinite(amount) || amount < 0 || amount > 100000000) {
      return res.status(400).json({
        success: false,
        message: "The requested amount is invalid.",
      });
    }

    // Save the order before attempting email delivery.
    const order = await Order.create({
      customerName: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      description: description.trim(),
      packageName: packageName.trim(),
      amount,
      paymentMethod,
    });

    const emailSent = await sendAdminEmail(
      `New NEXORA website order: ${order.packageName}`,
      [
        "A new website request has been submitted through NEXORA.",
        "",
        `Customer: ${order.customerName}`,
        `Email: ${order.email}`,
        `Phone: ${order.phone}`,
        `Package: ${order.packageName}`,
        `Requested amount: KSh ${order.amount.toLocaleString("en-KE")}`,
        `Selected payment method: ${order.paymentMethod.toUpperCase()}`,
        "Payment status: NOT PAID — no payment gateway is connected.",
        `Order status: ${order.status}`,
        `Received: ${order.createdAt.toISOString()}`,
        `Order ID: ${order._id}`,
        "",
        "Website requirements:",
        order.description,
      ].join("\n")
    );

    return res.status(201).json({
      success: true,
      message: "Your website request has been saved successfully.",
      orderId: order._id,
      emailNotification: emailSent ? "sent" : "failed",
    });
  } catch (error) {
    console.error("Order submission failed:", error.message);
    return res.status(500).json({
      success: false,
      message: "We could not save your order. Please try again.",
    });
  }
});

// Unknown routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found.",
  });
});

// Error handler
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && "body" in err) {
    return res.status(400).json({
      success: false,
      message: "Invalid JSON request.",
    });
  }

  console.error("API error:", err.message);
  return res.status(500).json({
    success: false,
    message: "An unexpected server error occurred.",
  });
});

// Start server after connecting to MongoDB
async function startServer() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing from backend/.env");
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Atlas connected successfully.");

    app.listen(PORT, () => {
      console.log(`NEXORA backend running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Backend startup failed:", error.message);
    process.exitCode = 1;
  }
}

startServer();
