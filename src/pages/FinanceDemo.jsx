import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaShieldAlt,
  FaChartPie,
  FaWallet,
  FaRocket,
} from "react-icons/fa";

export default function FinanceDemo() {
  const features = [
    {
      icon: <FaWallet />,
      title: "Smart Saving",
      text: "Help users track income, spending, savings goals, and financial progress.",
    },
    {
      icon: <FaChartPie />,
      title: "Investment Insights",
      text: "Clean dashboards showing growth, analytics, performance, and projections.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Finance UI",
      text: "A premium trust-focused design for fintech platforms and money apps.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-[4px] text-emerald-400">
            VAULTIQ
          </h1>

          <div className="hidden md:flex gap-8 text-sm">
            <a href="#features" className="hover:text-emerald-400 transition">
              Features
            </a>
            <a href="#dashboard" className="hover:text-emerald-400 transition">
              Dashboard
            </a>
            <a href="#contact" className="hover:text-emerald-400 transition">
              Start
            </a>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm hover:text-emerald-400 transition"
          >
            <FaArrowLeft />
            Back
          </Link>
        </div>
      </nav>

      <section
        className="min-h-screen flex items-center px-8 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(5,8,22,0.98), rgba(5,8,22,0.7), rgba(5,8,22,1)), url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-emerald-400 uppercase tracking-[6px] mb-5">
              Fintech Website Prototype
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Control Money With Confidence
            </h1>

            <p className="mt-8 text-gray-300 text-lg leading-relaxed max-w-xl">
              VAULTIQ is a futuristic fintech website concept for savings apps,
              investment platforms, SACCO systems, and digital finance brands.
            </p>

            <div className="mt-10 flex gap-5 flex-wrap">
              <a
                href="#dashboard"
                className="px-8 py-4 rounded-full bg-emerald-400 text-black font-bold hover:scale-105 transition"
              >
                View Dashboard
              </a>

              <a
                href="#features"
                className="px-8 py-4 rounded-full border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black transition"
              >
                Explore Features
              </a>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl">
            <p className="text-gray-400 mb-2">Total Portfolio</p>
            <h2 className="text-5xl font-black text-emerald-400 mb-8">
              KSh 486,250
            </h2>

            <div className="space-y-5">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Savings Goal</span>
                  <span className="text-emerald-400">78%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[78%] bg-emerald-400 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Investment Growth</span>
                  <span className="text-emerald-400">42%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[42%] bg-emerald-400 rounded-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-black/30 rounded-2xl p-5">
                  <p className="text-gray-400">Monthly Saved</p>
                  <h3 className="text-2xl font-black text-emerald-400">
                    KSh 18K
                  </h3>
                </div>

                <div className="bg-black/30 rounded-2xl p-5">
                  <p className="text-gray-400">Profit Rate</p>
                  <h3 className="text-2xl font-black text-emerald-400">
                    +14%
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}