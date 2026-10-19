const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "1mb" }));

let databaseStatus = "disconnected";

app.get("/", (req, res) => {
  res.json({ success: true, message: "NEXORA backend is running." });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    server: "online",
    database: mongoose.connection.readyState === 1 ? "connected" : databaseStatus,
    mongoUriAvailable: Boolean(process.env.MONGODB_URI),
    timestamp: new Date().toISOString()
  });
});

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  subject: String,
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const ContactMessage =
  mongoose.models.ContactMessage ||
  mongoose.model("ContactMessage", contactSchema);

const orderSchema = new mongoose.Schema({
  customerName: String,
  name: String,
  email: String,
  phone: String,
  items: mongoose.Schema.Types.Mixed,
  total: Number,
  paymentMethod: String,
  status: { type: String, default: "pending" },
  payload: mongoose.Schema.Types.Mixed,
  createdAt: { type: Date, default: Date.now }
});

const Order =
  mongoose.models.Order ||
  mongoose.model("Order", orderSchema);

app.post("/api/contact", async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: "Database unavailable. Please try again later."
      });
    }

    const { name, email, phone = "", subject = "Website enquiry", message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required."
      });
    }

    const saved = await ContactMessage.create({
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      subject: String(subject).trim(),
      message: String(message).trim()
    });

    res.status(201).json({
      success: true,
      message: "Message received.",
      id: saved._id
    });
  } catch (error) {
    console.error("[CONTACT]", error.message);
    res.status(500).json({ success: false, message: "Could not save contact message." });
  }
});

app.post("/api/orders", async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: "Database unavailable. Please try again later."
      });
    }

    const body = req.body || {};
    const order = await Order.create({
      customerName: body.customerName || body.name || "",
      name: body.name || "",
      email: body.email || "",
      phone: body.phone || "",
      items: body.items || [],
      total: Number(body.total) || 0,
      paymentMethod: body.paymentMethod || "",
      payload: body
    });

    res.status(201).json({
      success: true,
      message: "Order received.",
      orderId: order._id,
      status: order.status
    });
  } catch (error) {
    console.error("[ORDERS]", error.message);
    res.status(500).json({ success: false, message: "Could not save order." });
  }
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: "API endpoint not found." });
});

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`[SERVER] NEXORA listening on port ${PORT}`);
  console.log(`[SERVER] MongoDB URI available: ${Boolean(process.env.MONGODB_URI)}`);

  if (!process.env.MONGODB_URI) {
    databaseStatus = "missing MONGODB_URI";
    console.error("[DATABASE] Set MONGODB_URI in Render Environment.");
    return;
  }

  mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 10000
  }).then(() => {
    databaseStatus = "connected";
    console.log("[DATABASE] MongoDB connected.");
  }).catch(error => {
    databaseStatus = "connection failed";
    console.error("[DATABASE] Connection failed:", error.message);
  });
});

process.on("SIGTERM", () => {
  server.close(() => {
    mongoose.disconnect().finally(() => process.exit(0));
  });
});
