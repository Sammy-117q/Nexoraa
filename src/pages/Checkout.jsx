
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaMobileAlt,
  FaUniversity,
  FaPaypal,
} from "react-icons/fa";

const API_URL = import.meta.env.DEV
  ? "http://localhost:5000"
  : "https://nexoraa-backend-r3q3.onrender.com";

export default function Checkout() {
  const [searchParams] = useSearchParams();

  const packageName = searchParams.get("package") || "Website Package";
  const price = searchParams.get("price") || "0";

  const [method, setMethod] = useState("mpesa");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setStatusType("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const order = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      description: formData.get("description"),
      packageName,
      price,
      paymentMethod: method,
    };

    try {
      const response = await fetch(`${API_URL}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "We could not submit your request."
        );
      }

      setStatus(
        data.emailNotification === "sent"
          ? `Request submitted successfully! Reference: ${data.orderId}. NEXORA has also been notified by email. No payment has been taken.`
          : `Your request was saved. Reference: ${data.orderId}. However, the email notification failed, so NEXORA may not have received an email yet.`
      );
      setStatusType("success");
      form.reset();
      setMethod("mpesa");
    } catch (error) {
      console.error("Checkout submission failed:", error);
      setStatus(
        error.message === "Failed to fetch"
          ? "Unable to reach the server. Please make sure the backend is running and try again."
          : error.message || "Something went wrong. Please try again."
      );
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  }

  const paymentOptions = [
    { id: "mpesa", label: "M-Pesa", Icon: FaMobileAlt },
    { id: "bank", label: "Bank", Icon: FaUniversity },
    { id: "paypal", label: "PayPal", Icon: FaPaypal },
  ];

  return (
    <div className="min-h-screen bg-[#050816] px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-3 text-cyan-400"
        >
          <FaArrowLeft />
          Back to NEXORA
        </Link>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="mb-4 uppercase tracking-[5px] text-cyan-400">
              Checkout
            </p>

            <h1 className="mb-6 text-4xl font-black">
              Complete Your Website Request
            </h1>

            <div className="mb-8 rounded-3xl bg-black/30 p-6">
              <p className="text-gray-400">Selected Package</p>
              <h2 className="mt-2 text-2xl font-black text-cyan-400">
                {packageName}
              </h2>

              <p className="mt-5 text-gray-400">Requested Amount</p>
              <h3 className="mt-2 text-4xl font-black">
                KSh {price}
              </h3>
            </div>

            <p className="leading-relaxed text-gray-300">
              Submit your website requirements and our team will contact
              you to discuss the project and payment arrangements.
              Selecting a payment method here does not process a payment.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-[2rem] border border-white/10 bg-white/5 p-8"
          >
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              autoComplete="name"
              maxLength={100}
              required
              className="w-full rounded-2xl border border-white/10 bg-black/30 p-4 outline-none focus:border-cyan-400"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              autoComplete="email"
              maxLength={254}
              required
              className="w-full rounded-2xl border border-white/10 bg-black/30 p-4 outline-none focus:border-cyan-400"
            />

            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              autoComplete="tel"
              maxLength={30}
              required
              className="w-full rounded-2xl border border-white/10 bg-black/30 p-4 outline-none focus:border-cyan-400"
            />

            <textarea
              name="description"
              rows={4}
              placeholder="Briefly describe the website you want..."
              maxLength={3000}
              required
              className="w-full resize-y rounded-2xl border border-white/10 bg-black/30 p-4 outline-none focus:border-cyan-400"
            />

            <div>
              <p className="mb-4 font-bold">Preferred Payment Method</p>

              <div className="grid grid-cols-3 gap-3">
                {paymentOptions.map(({ id, label, Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setMethod(id)}
                    aria-pressed={method === id}
                    className={`rounded-2xl border p-4 transition ${
                      method === id
                        ? "border-cyan-400 bg-cyan-400 text-black"
                        : "border-white/10 bg-black/30 hover:border-cyan-400"
                    }`}
                  >
                    <Icon className="mx-auto mb-3 text-2xl" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>

            <p className="text-sm text-gray-400">
              This is a website request, not a completed payment.
            </p>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-cyan-400 py-4 font-black text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Website Request"}
            </button>

            {status && (
              <p
                role="status"
                className={`break-words rounded-xl p-4 text-sm ${
                  statusType === "success"
                    ? "bg-green-500/10 text-green-300"
                    : "bg-red-500/10 text-red-300"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
