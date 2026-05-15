import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

export default function BusinessDemo() {
  const services = [
    {
      icon: <FaChartLine />,
      title: "Business Growth",
      text: "We help companies improve visibility, attract clients, and increase revenue through smart digital systems.",
    },
    {
      icon: <FaUsers />,
      title: "Client Strategy",
      text: "Clear customer-focused strategies designed to turn visitors into loyal paying clients.",
    },
    {
      icon: <FaLightbulb />,
      title: "Brand Innovation",
      text: "Modern branding, strong messaging, and creative positioning for competitive markets.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-[4px] text-cyan-400">
            NOVACORE
          </h1>

          <div className="hidden md:flex gap-8 text-sm">
            <a href="#services" className="hover:text-cyan-400 transition">
              Services
            </a>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm hover:text-cyan-400 transition"
          >
            <FaArrowLeft />
            Back
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="min-h-screen flex items-center px-8 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(5,8,22,0.95), rgba(5,8,22,0.55), rgba(5,8,22,1)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-[6px] mb-5">
              Business Growth Agency
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              Build a Brand That Customers Trust
            </h2>

            <p className="mt-8 text-gray-300 text-lg leading-relaxed max-w-xl">
              NOVACORE is a modern business website prototype designed for
              companies that want to look professional, attract clients, and
              present their services with confidence.
            </p>

            <div className="mt-10 flex gap-5 flex-wrap">
              <a
                href="#services"
                className="px-8 py-4 rounded-full bg-cyan-400 text-black font-bold hover:scale-105 transition"
              >
                View Services
              </a>

              <a
                href="#contact"
                className="px-8 py-4 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
              >
                Request Website
              </a>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl shadow-2xl">
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-black/30 rounded-3xl p-6">
                <h3 className="text-4xl font-black text-cyan-400">95%</h3>
                <p className="text-gray-300 mt-2">Client Satisfaction</p>
              </div>

              <div className="bg-black/30 rounded-3xl p-6">
                <h3 className="text-4xl font-black text-cyan-400">3x</h3>
                <p className="text-gray-300 mt-2">Faster Visibility</p>
              </div>

              <div className="bg-black/30 rounded-3xl p-6 col-span-2">
                <h3 className="text-2xl font-bold mb-3">Digital Presence</h3>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[82%] bg-cyan-400 rounded-full"></div>
                </div>
                <p className="text-gray-400 mt-3">
                  Designed to help businesses look modern and trustworthy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-8 py-28">
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-black">
            Professional Business Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-lg hover:scale-105 transition duration-300"
            >
              <div className="text-5xl text-cyan-400 mb-6">{service.icon}</div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

              <p className="text-gray-300 leading-relaxed">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop"
            alt="Business team"
            className="rounded-[2rem] h-[450px] w-full object-cover"
          />

          <div>
            <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
              About This Demo
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-6">
              A Complete Website Prototype for Real Businesses
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              This demo is made to show clients how their business website could
              look. It includes a professional hero section, service cards,
              trust statistics, strong visuals, and a clear call-to-action.
            </p>

            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="text-3xl font-black text-cyan-400">24/7</h3>
                <p className="text-gray-300">Online Presence</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="text-3xl font-black text-cyan-400">100%</h3>
                <p className="text-gray-300">Responsive Design</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-8 py-28 text-center"
      >
        <div className="bg-cyan-400 text-black rounded-[2rem] p-12">
          <FaRocket className="text-5xl mx-auto mb-6" />

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Want a Website Like This?
          </h2>

          <p className="max-w-2xl mx-auto mb-8">
            This section is designed to make a client imagine their own brand
            using a similar website layout.
          </p>

          <Link
            to="/"
            className="inline-block px-8 py-4 rounded-full bg-black text-white font-bold hover:scale-105 transition"
          >
            Return to NEXORA
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-400">
        © 2026 NOVACORE — Business Website Prototype
      </footer>
    </div>
  );
}