import { useState } from "react";
import { FaCog, FaTimes, FaInfoCircle, FaPalette, FaPhoneAlt } from "react-icons/fa";

export default function SettingsPanel() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-44 right-6 z-50 bg-white/10 backdrop-blur-xl border border-white/10 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl hover:bg-cyan-400 hover:text-black transition"
      >
        <FaCog />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex justify-end">
          <div className="w-full max-w-md bg-[#08111f] text-white p-8 border-l border-white/10 overflow-y-auto">
            <button
              onClick={() => setOpen(false)}
              className="text-2xl text-cyan-400 mb-8"
            >
              <FaTimes />
            </button>

            <h2 className="text-3xl font-black mb-4">Website Settings</h2>

            <p className="text-gray-300 mb-8">
              This panel explains the website and gives visitors quick actions.
            </p>

            <div className="space-y-5">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <FaInfoCircle className="text-cyan-400 text-3xl mb-4" />
                <h3 className="text-xl font-black mb-2">About NEXORA</h3>
                <p className="text-gray-300">
                  NEXORA is a futuristic website portfolio that shows modern
                  website prototypes, pricing packages, services, and contact
                  options for clients who need a professional website.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <FaPalette className="text-cyan-400 text-3xl mb-4" />
                <h3 className="text-xl font-black mb-2">Design Style</h3>
                <p className="text-gray-300">
                  The current theme is a premium dark futuristic style because
                  it fits the NEXORA brand identity best.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <FaPhoneAlt className="text-cyan-400 text-3xl mb-4" />
                <h3 className="text-xl font-black mb-2">Contact</h3>
                <p className="text-gray-300 mb-5">
                  Visitors can contact the developer through WhatsApp, email,
                  Instagram, or TikTok.
                </p>

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block text-center bg-cyan-400 text-black rounded-full py-4 font-bold"
                >
                  Go to Contact Section
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}