import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "NEXORA backend is running 🚀",
  });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, service, budget, message } = req.body;

    const { data, error } = await supabase
      .from("contact_messages")
      .insert([
        {
          name,
          email,
          phone,
          service,
          budget,
          message,
        },
      ]);

    if (error) {
      throw error;
    }

    res.status(201).json({
      success: true,
      message: "Message saved successfully",
      data,
    });

  } catch (error) {
    console.log(error.message);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});