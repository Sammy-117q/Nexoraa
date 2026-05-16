import { FaArrowRight, FaCheckCircle, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050816] text-white px-5 pt-28 pb-16 md:px-8 md:pt-40 md:pb-28 flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom,rgba(37,99,235,0.18),transparent_35%)]" />

      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1800&auto=format&fit=crop')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/80 via-[#050816]/95 to-[#050816]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/5 px-4 py-2 text-xs md:text-sm font-semibold text-cyan-300 backdrop-blur-md mb-5">
            <FaCheckCircle />
            Premium websites for serious brands
          </p>

          <h1 className="text-[2.7rem] sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
            Build a Website
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 text-transparent bg-clip-text">
              That Wins Trust
            </span>
          </h1>

          <div className="mt-5 md:mt-7 text-base sm:text-lg md:text-2xl font-semibold text-gray-200 min-h-[30px]">
            <Typewriter
              words={[
                "Business Websites",
                "Online Stores",
                "Portfolio Sites",
                "Landing Pages",
                "Modern Web Apps",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={65}
              deleteSpeed={45}
              delaySpeed={1400}
            />
          </div>

          <p className="max-w-xl mx-auto lg:mx-0 mt-5 md:mt-7 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            Nexoraa helps businesses look professional online with fast,
            responsive, and clean websites designed to attract real customers.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-cyan-400 px-6 py-4 text-sm md:text-base font-black text-black hover:bg-cyan-300 transition shadow-[0_0_30px_rgba(34,211,238,0.25)]"
            >
              View Work
              <FaRocket />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm md:text-base font-bold text-white hover:border-cyan-400 hover:text-cyan-300 transition backdrop-blur-md"
            >
              Start Project
              <FaArrowRight />
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0">
            {[
              ["Fast", "Loading"],
              ["Mobile", "Ready"],
              ["Clean", "Design"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-4 text-center backdrop-blur-md"
              >
                <h3 className="text-cyan-300 font-black text-sm md:text-base">
                  {title}
                </h3>
                <p className="text-gray-400 text-xs mt-1">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Desktop visual only */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl shadow-2xl">
            <div className="rounded-[1.5rem] overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop"
                alt="Website dashboard preview"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-cyan-400/20 bg-[#07111f]/90 p-5 backdrop-blur-xl shadow-[0_0_35px_rgba(34,211,238,0.2)]">
              <p className="text-sm text-gray-400">Project requests</p>
              <h3 className="text-3xl font-black text-cyan-300">Live</h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}