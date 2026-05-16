import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const links = ["home", "services", "projects", "pricing", "faq", "contact"];

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        <a href="#home" className="group flex items-center gap-3">
          <span className="h-9 w-9 rounded-xl bg-cyan-400 text-black grid place-items-center font-black shadow-[0_0_25px_rgba(34,211,238,0.45)]">
            N
          </span>
          <span className="text-xl md:text-2xl font-black tracking-[4px] text-white group-hover:text-cyan-300 transition">
            NEXORA
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm font-semibold text-gray-300">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="capitalize relative hover:text-cyan-300 transition after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-black text-black hover:scale-105 transition shadow-[0_0_30px_rgba(34,211,238,0.35)]"
        >
          Start Project
          <FaArrowRight />
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-cyan-300"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-white/10 bg-[#050816]/95 px-8 py-6 backdrop-blur-2xl"
          >
            <div className="space-y-5">
              {links.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="block capitalize text-lg font-bold text-gray-200 hover:text-cyan-300 transition"
                >
                  {item}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-4 font-black text-black"
              >
                Start Project
                <FaArrowRight />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}