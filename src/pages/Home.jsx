import { useEffect, useState } from "react";
import Testimonials from "../components/Testimonials";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import SocialDock from "../components/SocialDock";
import SettingsPanel from "../components/SettingsPanel";
import AIAssistant from "../components/AIAssistant";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const mouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-cyan-400 text-5xl font-black tracking-[10px]">
        NEXORA
      </div>
    );
  }

  return (
    <div
     className="bg-[#050816] text-white min-h-screen overflow-hidden">
    
      <div
        className="fixed w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none z-0 hidden md:block"
        style={{
          left: mousePosition.x - 160,
          top: mousePosition.y - 160,
        }}
      />

      <Navbar
      
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <SocialDock />
      <Hero />
      <TrustStrip />
      <Services />
      <Projects />
      <Pricing />
      <FAQ />
      <Contact />
      <Testimonials />
      <Footer />

      <WhatsAppButton />
      <SettingsPanel />
      <AIAssistant />
    </div>
  );
}