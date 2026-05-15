import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({  menuOpen, setMenuOpen }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex justify-between items-center">
        <a href="#home" className="text-2xl font-black tracking-[5px] text-cyan-400">
          NEXORA
        </a>

        <div className="hidden md:flex gap-8 items-center text-sm">
          <a href="#home" className="hover:text-cyan-400 transition">Home</a>
          <a href="#services" className="hover:text-cyan-400 transition">Services</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#pricing" className="hover:text-cyan-400 transition">Pricing</a>
          <a href="#faq" className="hover:text-cyan-400 transition">FAQ</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>

        
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl text-cyan-400">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/90 px-8 py-6 space-y-5 border-t border-white/10">
          {["home", "services", "projects", "pricing", "faq", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className="block capitalize hover:text-cyan-400"
            >
              {item}
            </a>
          ))}

          <button onClick={() => setDarkMode(!darkMode)} className="text-cyan-400 font-bold">
            Toggle Theme
          </button>
        </div>
      )}
    </nav>
  );
}