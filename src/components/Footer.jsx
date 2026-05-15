import {
  FaEnvelope,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaArrowUp,
  FaRocket,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#030611] text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-black tracking-[5px] text-cyan-400 mb-5">
              NEXORA
            </h2>

            <p className="text-gray-300 leading-relaxed max-w-lg">
              NEXORA is a futuristic website portfolio and prototype platform
              built to showcase modern business websites, digital experiences,
              and professional online presence.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 mt-8 px-7 py-4 rounded-full bg-cyan-400 text-black font-black hover:scale-105 transition"
            >
              Start a Website
              <FaRocket />
            </a>
          </div>

          <div>
            <h3 className="text-xl font-black mb-5">Quick Links</h3>

            <div className="space-y-3 text-gray-300">
              <a href="#home" className="block hover:text-cyan-400">Home</a>
              <a href="#services" className="block hover:text-cyan-400">Services</a>
              <a href="#projects" className="block hover:text-cyan-400">Projects</a>
              <a href="#pricing" className="block hover:text-cyan-400">Pricing</a>
              <a href="#faq" className="block hover:text-cyan-400">FAQ</a>
              <a href="#contact" className="block hover:text-cyan-400">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black mb-5">Contact</h3>

            <div className="space-y-4 text-gray-300">
              <a
                href="mailto:samuelmugambi262@gmail.com"
                className="flex items-center gap-3 hover:text-cyan-400"
              >
                <FaEnvelope />
                Email
              </a>

              <a
                href="https://wa.me/254114610168"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-green-400"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

              <a
                href="https://www.instagram.com/prime._.him"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-pink-400"
              >
                <FaInstagram />
                Instagram
              </a>

              <a
                href="https://www.tiktok.com/@s.a.m.m.y_j.n.r"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <FaTiktok />
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400">
          <p>© 2026 NEXORA. Premium Website Prototypes.</p>

          <a
            href="#home"
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-cyan-400 hover:text-black transition"
          >
            Back to Top
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}