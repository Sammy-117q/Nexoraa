import { FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6 pt-28 pb-24 md:pt-40 md:pb-40 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(5,8,22,0.45), rgba(5,8,22,1)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1800&auto=format&fit=crop')",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-5xl"
      >
        <p className="uppercase tracking-[6px] md:tracking-[8px] text-cyan-400 mb-5 text-sm md:text-base">
          Future Digital Studio
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black leading-tight">
          WE BUILD
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
            WEBSITES THAT SELL
          </span>
        </h1>

        <div className="mt-6 md:mt-8 text-lg md:text-2xl font-semibold text-gray-300 min-h-[32px]">
          <Typewriter
            words={[
              "Business Websites",
              "E-Commerce Stores",
              "Modern Portfolios",
              "Premium UI Design",
              "Mobile-Friendly Websites",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={65}
            deleteSpeed={45}
            delaySpeed={1400}
          />
        </div>

        <p className="max-w-3xl mx-auto mt-6 md:mt-8 text-base md:text-lg text-gray-300 leading-relaxed">
          NEXORA creates futuristic, professional, and client-focused websites
          for businesses that want to look serious online and attract real attention.
        </p>

        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-5">
          <a
            href="#projects"
            className="px-7 py-4 bg-cyan-400 text-black rounded-full font-bold hover:scale-105 transition inline-flex items-center justify-center gap-3"
          >
            View Website Prototypes
            <FaRocket />
          </a>

          <a
            href="#contact"
            className="px-7 py-4 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition font-bold inline-flex items-center justify-center"
          >
            Request a Website
          </a>
        </div>
      </motion.div>
    </section>
  );
}