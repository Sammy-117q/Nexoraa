import { FaQuoteLeft, FaStar, FaCheckCircle } from "react-icons/fa";
import Reveal from "./Reveal";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Business Client",
      role: "Small Business Owner",
      type: "Business Website",
      initials: "BC",
      text: "The design looks modern, clean, and professional. It gives the business a serious online presence.",
    },
    {
      name: "Startup Founder",
      role: "Digital Brand Owner",
      type: "Startup Website",
      initials: "SF",
      text: "The layout is clear and customer-friendly. The demo sections make it easy to imagine a real website.",
    },
    {
      name: "Online Seller",
      role: "E-Commerce Client",
      type: "Store Website",
      initials: "OS",
      text: "The store prototype looks premium and trustworthy. It makes products feel more valuable.",
    },
  ];

  return (
    <Reveal>
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[6px] mb-4">
            Client Trust
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Website Experiences That Build Confidence
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-300">
            These preview reviews show the kind of confidence clients should feel
            when they see a professional website prototype.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:-translate-y-2 transition duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 rounded-full bg-cyan-400 text-black flex items-center justify-center text-xl font-black">
                  {item.initials}
                </div>

                <span className="text-xs bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 px-3 py-2 rounded-full flex items-center gap-2">
                  <FaCheckCircle />
                  Preview Review
                </span>
              </div>

              <FaQuoteLeft className="text-cyan-400 text-3xl mb-5" />

              <div className="flex gap-1 text-cyan-400 mb-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-300 leading-relaxed mb-8">
                “{item.text}”
              </p>

              <div className="border-t border-white/10 pt-5">
                <h3 className="font-black text-lg">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.role}</p>
                <p className="text-cyan-400 text-sm mt-2">{item.type}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}