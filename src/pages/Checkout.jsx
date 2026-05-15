import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FaArrowLeft, FaMobileAlt, FaUniversity, FaPaypal } from "react-icons/fa";

export default function Checkout() {
  const [searchParams] = useSearchParams();

  const packageName = searchParams.get("package") || "Website Package";
  const price = searchParams.get("price") || "0";

  const [method, setMethod] = useState("mpesa");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Order received!\nPackage: ${packageName}\nAmount: KSh ${price}\nPayment: ${method.toUpperCase()}\n\nReal payment integration will be connected later.`
    );
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-3 text-cyan-400 mb-10">
          <FaArrowLeft />
          Back to NEXORA
        </Link>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8">
            <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
              Checkout
            </p>

            <h1 className="text-4xl font-black mb-6">
              Complete Your Website Request
            </h1>

            <div className="bg-black/30 rounded-3xl p-6 mb-8">
              <p className="text-gray-400">Selected Package</p>
              <h2 className="text-2xl font-black text-cyan-400 mt-2">
                {packageName}
              </h2>

              <p className="text-gray-400 mt-5">Total Amount</p>
              <h3 className="text-4xl font-black mt-2">
                KSh {price}
              </h3>
            </div>

            <p className="text-gray-300 leading-relaxed">
              This checkout page is currently a working frontend prototype.
              Later, we can connect real M-Pesa, PayPal, and bank confirmation using a backend.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-[2rem] p-8 space-y-5"
          >
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 outline-none"
            />

            <textarea
              rows="4"
              placeholder="Briefly describe the website you want..."
              required
              className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 outline-none"
            />

            <div>
              <p className="font-bold mb-4">Choose Payment Method</p>

              <div className="grid sm:grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => setMethod("mpesa")}
                  className={`p-5 rounded-2xl border ${
                    method === "mpesa"
                      ? "bg-cyan-400 text-black border-cyan-400"
                      : "bg-black/30 border-white/10"
                  }`}
                >
                  <FaMobileAlt className="text-3xl mx-auto mb-3" />
                  M-Pesa
                </button>

                <button
                  type="button"
                  onClick={() => setMethod("bank")}
                  className={`p-5 rounded-2xl border ${
                    method === "bank"
                      ? "bg-cyan-400 text-black border-cyan-400"
                      : "bg-black/30 border-white/10"
                  }`}
                >
                  <FaUniversity className="text-3xl mx-auto mb-3" />
                  Bank
                </button>

                <button
                  type="button"
                  onClick={() => setMethod("paypal")}
                  className={`p-5 rounded-2xl border ${
                    method === "paypal"
                      ? "bg-cyan-400 text-black border-cyan-400"
                      : "bg-black/30 border-white/10"
                  }`}
                >
                  <FaPaypal className="text-3xl mx-auto mb-3" />
                  PayPal
                </button>
              </div>
            </div>

            <button className="w-full py-4 rounded-full bg-cyan-400 text-black font-black hover:scale-105 transition">
              Submit Website Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}