import { Link } from "react-router-dom";
import { FaCheckCircle, FaTags } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Pricing() {
  const packages = [
    {
      name: "Starter Website",
      price: "From KSh 3,500",
      features: ["1-3 pages", "Mobile responsive", "Contact section", "Modern layout"],
    },
    {
      name: "Business Website",
      price: "From KSh 7,500",
      features: ["Service sections", "WhatsApp button", "Gallery/projects", "Deployment support"],
    },
    {
      name: "Premium Website",
      price: "From KSh 12,000",
      features: ["Advanced UI", "Animations", "Multiple sections", "Launch support"],
    },
  ];

  return (
    <section id="pricing" className="max-w-7xl mx-auto px-8 py-24">
      <div className="text-center mb-16">
        <p className="text-cyan-400 uppercase tracking-[6px] mb-4">Website Packages</p>
        <h2 className="text-4xl md:text-5xl font-black">Simple Options for Clients</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className={`rounded-[2rem] p-8 border ${
              index === 1 ? "bg-cyan-400 text-black border-cyan-400" : "bg-white/5 border-white/10"
            }`}
          >
            <FaTags className="text-4xl mb-6" />
            <h3 className="text-2xl font-black mb-3">{item.name}</h3>
            <p className="text-3xl font-black mb-6">{item.price}</p>

            <div className="space-y-3 mb-8">
              {item.features.map((feature, i) => (
                <p key={i} className="flex items-center gap-3">
                  <FaCheckCircle />
                  {feature}
                </p>
              ))}
            </div>
            <a>
<Link
  to={`/checkout?package=${encodeURIComponent(item.name)}&price=${item.price.replace("From KSh ", "").replace(",", "")}`}
  className={`inline-block w-full text-center px-6 py-4 rounded-full font-bold ${
    index === 1 ? "bg-black text-white" : "bg-cyan-400 text-black"
  }`}
>
  Choose Package
</Link>
            </a>
             
          </motion.div>
        ))}
      </div>
    </section>
  );
}