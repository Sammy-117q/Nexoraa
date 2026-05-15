import { FaEnvelope, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function SocialDock() {
  return (
    <div className="fixed left-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      <a href="mailto:samuelmugambi262@gmail.com" className="bg-white/10 p-4 rounded-full hover:bg-cyan-400 hover:text-black">
        <FaEnvelope />
      </a>

      <a href="https://wa.me/254114610168" target="_blank" rel="noreferrer" className="bg-white/10 p-4 rounded-full hover:bg-green-500">
        <FaWhatsapp />
      </a>

      <a href="https://www.instagram.com/prime._.him" target="_blank" rel="noreferrer" className="bg-white/10 p-4 rounded-full hover:bg-pink-500">
        <FaInstagram />
      </a>

      <a href="https://www.tiktok.com/@s.a.m.m.y_j.n.r" target="_blank" rel="noreferrer" className="bg-white/10 p-4 rounded-full hover:bg-black">
        <FaTiktok />
      </a>
    </div>
  );
}