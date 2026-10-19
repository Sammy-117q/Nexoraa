
import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.DEV
  ? "http://localhost:5000"
  : "https://nexoraa-backend-r3q3.onrender.com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Website development",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));

    setStatus("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setSuccess(false);

    try {
      const response = await axios.post(
        `${API_URL}/api/contact`,
        formData,
        { timeout: 20000 }
      );

      setSuccess(true);
      setStatus(
        response.data.message || "Your enquiry was received successfully!"
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Website development",
        message: "",
      });
    } catch (error) {
      console.error("Contact submission failed:", error);

      if (error.response) {
        setStatus(
          error.response.data?.message ||
            "We couldn't submit your enquiry. Please try again."
        );
      } else if (error.code === "ECONNABORTED") {
        setStatus("The request timed out. Please try again.");
      } else {
        setStatus(
          "Unable to reach the server. Please try again shortly."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full p-4 rounded-xl bg-black border border-gray-700 text-white placeholder-gray-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30";

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20"
    >
      <div className="w-full max-w-2xl bg-[#111] p-6 sm:p-10 rounded-3xl border border-cyan-500/20 shadow-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-3">
          Let's build something
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Start A Project
        </h2>

        <p className="text-gray-400 mb-8 leading-relaxed">
          Tell us what you have in mind. We'll review your enquiry
          and get back to you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="contact-name" className="block text-sm text-gray-300 mb-2">
              Your name *
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              maxLength={100}
              autoComplete="name"
              required
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="contact-email" className="block text-sm text-gray-300 mb-2">
                Email address *
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                maxLength={254}
                autoComplete="email"
                required
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="contact-phone" className="block text-sm text-gray-300 mb-2">
                Phone number
              </label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                maxLength={30}
                autoComplete="tel"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-subject" className="block text-sm text-gray-300 mb-2">
              What do you need?
            </label>
            <select
              id="contact-subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="Website development">Website development</option>
              <option value="Hotel or restaurant system">Hotel or restaurant system</option>
              <option value="School or institution system">School or institution system</option>
              <option value="E-commerce website">E-commerce website</option>
              <option value="Website redesign">Website redesign</option>
              <option value="Other enquiry">Other enquiry</option>
            </select>
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-sm text-gray-300 mb-2">
              Tell us about your project *
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="What would you like us to build?"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              maxLength={3000}
              required
              className={`${inputClass} resize-y`}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-400 text-black font-bold py-4 rounded-xl hover:bg-cyan-300 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Sending your enquiry..." : "Send Project Enquiry →"}
          </button>
        </form>

        {status && (
          <div
            role="status"
            aria-live="polite"
            className={`mt-6 p-4 rounded-xl text-center font-medium border ${
              success
                ? "text-green-400 bg-green-400/10 border-green-400/20"
                : "text-red-400 bg-red-400/10 border-red-400/20"
            }`}
          >
            {status}
          </div>
        )}

        <p className="text-xs text-gray-500 text-center mt-6">
          Fields marked * are required.
        </p>
      </div>
    </section>
  );
}
