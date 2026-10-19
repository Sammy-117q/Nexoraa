import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT || 5000;

app.disable("x-powered-by");
app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  phone: { type: String, default: "" },
  subject: { type: String, default: "Website enquiry" },
  message: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now }
});

const orderSchema = new mongoose.Schema({
  customerName: { type: String, default: "" },
  name: { type: String, default: "" },
  email: { type: String, default: "" },
  phone: { type: String, default: "" },
  items: { type: mongoose.Schema.Types.Mixed, default: [] },
  total: { type: Number, default: 0 },
  paymentMethod: { type: String, default: "" },
  status: { type: String, default: "pending" },
  payload: { type: mongoose.Schema.Types.Mixed, default: {} },
  createdAt: { type: Date, default: Date.now }
});

const ContactMessage =
  mongoose.models.ContactMessage ||
  mongoose.model("ContactMessage", contactSchema);

const Order =
  mongoose.models.Order ||
  mongoose.model("Order", orderSchema);

let databaseStatus = "disconnected";

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "NEXORA backend is running.",
    health: "/api/health"
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    server: "online",
    database: mongoose.connection.readyState === 1
      ? "connected"
      : databaseStatus,
    mongoUriAvailable: Boolean(process.env.MONGODB_URI),
    timestamp: new Date().toISOString()
  });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone = "", subject = "Website enquiry", message } =
      req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required."
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address."
      });
    }

    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: "Database unavailable. Please try again later."
      });
    }

    const saved = await ContactMessage.create({
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      subject: String(subject).trim(),
      message: String(message).trim()
    });

    return res.status(201).json({
      success: true,
      message: "Message received successfully.",
      id: saved._id
    });
  } catch (error) {
    console.error("[CONTACT]", error.message);
    return res.status(500).json({
      success: false,
      message: "Could not save the contact message."
    });
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

    return res.status(201).json({
      success: true,
      message: "Order received successfully.",
      orderId: order._id,
      status: order.status
    });
  } catch (error) {
    console.error("[ORDERS]", error.message);
    return res.status(500).json({
      success: false,
      message: "Could not save the order."
    });
  }
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found.",
    path: req.path
  });
});

app.use((error, req, res, next) => {
  console.error("[API]", error.message);

  if (res.headersSent) return next(error);

  res.status(500).json({
    success: false,
    message: "An unexpected server error occurred."
  });
});

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`[SERVER] NEXORA listening on port ${PORT}`);
  console.log(
    `[SERVER] MongoDB URI available: ${Boolean(process.env.MONGODB_URI)}`
  );

  if (!process.env.MONGODB_URI) {
    databaseStatus = "missing MONGODB_URI";
    console.error("[DATABASE] Set MONGODB_URI in Render Environment.");
    return;
  }

  mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 10000
  })
    .then(() => {
      databaseStatus = "connected";
      console.log("[DATABASE] MongoDB connected.");
    })
    .catch((error) => {
      databaseStatus = "connection failed";
      console.error("[DATABASE] Connection failed:", error.message);
    });
});

server.on("error", (error) => {
  console.error("[SERVER] Startup error:", error.message);
  process.exitCode = 1;
});

async function shutdown() {
  console.log("[SERVER] Shutting down.");

  server.close(async () => {
    try {
      await mongoose.disconnect();
    } finally {
      process.exit(0);
    }
  });
}

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
