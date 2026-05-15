import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await axios.post(
        "https://nexoraa-backend-r3q3.onrender.com/api/contact",
        formData
      );

      setStatus(res.data.message || "Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      setStatus("Message failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20"
    >
      <div className="w-full max-w-2xl bg-[#111] p-10 rounded-3xl border border-cyan-500/20 shadow-2xl">
        <h2 className="text-4xl font-bold mb-6 text-cyan-400">
          Start A Project
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-black border border-gray-700 outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-black border border-gray-700 outline-none focus:border-cyan-400"
          />

          <textarea
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            rows="6"
            required
            className="w-full p-4 rounded-xl bg-black border border-gray-700 outline-none focus:border-cyan-400 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-400 text-black font-bold py-4 rounded-xl hover:bg-cyan-300 transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status && (
          <p className="mt-6 text-center text-cyan-400 font-semibold">
            {status}
          </p>
        )}
      </div>
    </section>
  );
}