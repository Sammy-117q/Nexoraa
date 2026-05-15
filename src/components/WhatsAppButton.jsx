import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/254114610168"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-24 right-6 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition"
    >
      <FaWhatsapp />
    </a>
  );
}