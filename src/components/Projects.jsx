import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Projects() {
  const demos = [
    {
      title: "Business Website Prototype",
      category: "Corporate / Agency",
      bestFor: "Companies, consultants, agencies, service businesses",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop",
      link: "/business",
    },
    {
      title: "Finance Platform Prototype",
      category: "Fintech / Dashboard",
      bestFor: "Savings apps, SACCOs, investment systems",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1400&auto=format&fit=crop",
      link: "/finance",
    },
    {
      title: "Luxury Store Prototype",
      category: "E-Commerce / Brand",
      bestFor: "Online shops, product brands, fashion, gadgets",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1400&auto=format&fit=crop",
      link: "/store",
    },
  ];

  return (
    <section id="projects" className="max-w-7xl mx-auto px-8 py-24">
      <div className="text-center mb-16">
        <p className="text-cyan-400 uppercase tracking-[6px] mb-4">
          Website Prototypes
        </p>
        <h2 className="text-4xl md:text-5xl font-black">
          Demos Customers Can Imagine Owning
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {demos.map((demo, index) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            key={index}
            className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-lg"
          >
            <img src={demo.image} alt={demo.title} className="h-60 w-full object-cover" />

            <div className="p-8">
              <p className="text-sm text-cyan-400 uppercase tracking-[3px] mb-3">
                {demo.category}
              </p>

              <h3 className="text-2xl font-black mb-4">{demo.title}</h3>

              <div className="bg-black/20 rounded-2xl p-4 mb-6 border border-white/10">
                <p className="text-sm text-gray-400">Best for:</p>
                <p className="text-sm font-semibold">{demo.bestFor}</p>
              </div>

              <Link
                to={demo.link}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cyan-400 text-black font-bold hover:scale-105 transition"
              >
                View Prototype
                <FaExternalLinkAlt />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}