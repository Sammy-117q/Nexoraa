import { useState } from "react";
import { FaCode, FaLaptopCode, FaMobileAlt, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Services() {
  const [selected, setSelected] = useState(null);

  const services = [
    {
      icon: <FaCode />,
      title: "Website Development",
      text: "Modern responsive websites for businesses, portfolios, shops, and organizations.",
      details:
        "This includes landing pages, business websites, portfolio websites, service websites, contact sections, responsive layouts, and deployment support.",
    },
    {
      icon: <FaLaptopCode />,
      title: "UI/UX Design",
      text: "Clean layouts, modern visuals, and user-friendly interface design.",
      details:
        "This focuses on how the website looks and feels: colors, sections, spacing, buttons, navigation, user flow, and customer experience.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile-First Design",
      text: "Websites that look good on phones, tablets, laptops, and desktops.",
      details:
        "Most people browse using phones, so every website is designed to work smoothly on small screens before expanding to larger screens.",
    },
  ];

  return (
    <Reveal>
      <section id="services" className="max-w-7xl mx-auto px-8 py-28">
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[6px] mb-4">
            What We Build
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Website Designs That Make Brands Look Serious
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-300">
            Click any service card to understand what it means and how it helps
            a client’s website.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.button
              type="button"
              key={index}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(service)}
              className="text-left bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-lg hover:border-cyan-400/50 transition"
            >
              <div className="text-5xl text-cyan-400 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {service.text}
              </p>

              <p className="mt-6 text-cyan-400 font-bold">
                Click to learn more →
              </p>
            </motion.button>
          ))}
        </div>

        {selected && (
          <div className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-md flex items-center justify-center px-6">
            <div className="bg-[#08111f] border border-white/10 rounded-3xl p-8 max-w-xl w-full relative shadow-2xl">
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 text-2xl text-cyan-400 hover:scale-110 transition"
              >
                <FaTimes />
              </button>

              <div className="text-5xl text-cyan-400 mb-5">
                {selected.icon}
              </div>

              <h2 className="text-3xl font-black mb-4">
                {selected.title}
              </h2>

              <p className="text-gray-300 leading-relaxed">
                {selected.details}
              </p>

              <a
                href="#contact"
                onClick={() => setSelected(null)}
                className="inline-block mt-8 px-7 py-4 rounded-full bg-cyan-400 text-black font-bold hover:scale-105 transition"
              >
                Request This Service
              </a>
            </div>
          </div>
        )}
      </section>
    </Reveal>
  );
}