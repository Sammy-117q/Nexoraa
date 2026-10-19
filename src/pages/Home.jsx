
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Menu,
  MessageCircle,
  Moon,
  Palette,
  Send,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Sun,
  TrendingUp,
  X,
  Zap,
  Globe,
  LayoutDashboard,
  Clock,
  Wallet,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import SocialDock from "../components/SocialDock";
import SettingsPanel from "../components/SettingsPanel";
import AIAssistant from "../components/AIAssistant";

const WHATSAPP_NUMBER = "254700000000";

const services = [
  {
    icon: Globe,
    number: "01",
    title: "Business websites",
    description:
      "Professional websites that make your business easier to discover, trust and contact.",
    tags: ["Responsive", "SEO-ready", "Fast"],
  },
  {
    icon: ShoppingBag,
    number: "02",
    title: "Online stores",
    description:
      "Showcase products, organise your catalogue and give customers a smoother buying journey.",
    tags: ["Product pages", "Cart UI", "Checkout"],
  },
  {
    icon: LayoutDashboard,
    number: "03",
    title: "Web applications",
    description:
      "Custom digital tools built around the actual workflows your business needs.",
    tags: ["Custom UI", "Data flows", "Integrations"],
  },
  {
    icon: Smartphone,
    number: "04",
    title: "UI and redesigns",
    description:
      "Turn an outdated or confusing website into a polished, mobile-friendly experience.",
    tags: ["Modern design", "UX", "Mobile-first"],
  },
];

const demos = [
  {
    title: "Hospitality",
    category: "Hospitality",
    description:
      "A premium online presence for hotels, lodges, restaurants and stays.",
    path: "/hospitality",
    number: "01",
    accent: "from-cyan-400/20 to-blue-600/5",
    icon: Globe,
  },
  {
    title: "Business website",
    category: "Business",
    description:
      "A professional landing page designed to turn visitors into enquiries.",
    path: "/business",
    number: "02",
    accent: "from-violet-500/20 to-fuchsia-500/5",
    icon: LayoutDashboard,
  },
  {
    title: "Finance experience",
    category: "Finance",
    description:
      "A financial-services interface with clear information and a modern layout.",
    path: "/finance",
    number: "03",
    accent: "from-emerald-400/20 to-teal-500/5",
    icon: TrendingUp,
  },
  {
    title: "Online store",
    category: "E-commerce",
    description:
      "A product-focused shopping interface with an organised catalogue.",
    path: "/store",
    number: "04",
    accent: "from-orange-400/20 to-rose-500/5",
    icon: ShoppingBag,
  },
];

const packages = [
  {
    name: "Starter",
    price: "From KSh 8,000",
    description: "For individuals and small businesses getting online.",
    features: [
      "Clean responsive design",
      "Core business information",
      "Contact links",
      "Basic search optimisation",
    ],
  },
  {
    name: "Professional",
    price: "From KSh 18,000",
    description: "For businesses ready for a stronger online presence.",
    featured: true,
    features: [
      "Everything in Starter",
      "Multiple custom sections",
      "Interactive elements",
      "Enquiry form integration",
      "Deployment assistance",
    ],
  },
  {
    name: "Custom",
    price: "Let's discuss",
    description: "For specialised websites and web applications.",
    features: [
      "Custom functionality",
      "Database integration where needed",
      "Tailored user experience",
      "Project-specific scope",
    ],
  },
];

const faqs = [
  {
    question: "How long does a website take?",
    answer:
      "A straightforward business website may take around one to two weeks. Larger projects depend on the features, content and feedback required.",
  },
  {
    question: "Can you build a website for a Kenyan business?",
    answer:
      "Yes. We can tailor the design and contact flow to your business, audience and preferred communication channels in Kenya.",
  },
  {
    question: "Will my website work on phones?",
    answer:
      "The design approach is mobile-first, so the layout is planned to work across phones, tablets and desktop screens.",
  },
  {
    question: "Do the prices include every possible feature?",
    answer:
      "No. The prices shown are starting estimates, not fixed quotations. Hosting, domains, paid services and advanced integrations may cost extra.",
  },
  {
    question: "Can you improve an existing website?",
    answer:
      "Yes. We can discuss a redesign, performance improvements, clearer content, responsive layouts or specific features.",
  },
];

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p
        className={`mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] ${
          light ? "text-cyan-700" : "text-cyan-400"
        }`}
      >
        <span className="h-px w-8 bg-current" />
        {eyebrow}
      </p>

      <h2
        className={`text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl ${
          light ? "text-slate-950" : "text-white"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 max-w-xl text-base leading-7 ${
            light ? "text-slate-600" : "text-slate-400"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function WhatsAppLink({ message, children, className = "" }) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedService, setSelectedService] = useState("Business website");
  const [budget, setBudget] = useState("15000");
  const [timeline, setTimeline] = useState("2–3 weeks");
  const [faqOpen, setFaqOpen] = useState(0);
  const [demoFilter, setDemoFilter] = useState("All");
  const [scrollProgress, setScrollProgress] = useState(0);

  const isDark = darkMode;

  useEffect(() => {
    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(
        scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0
      );

      const sections = [
        "home",
        "services",
        "work",
        "process",
        "pricing",
        "faq",
        "contact",
      ];

      let current = "home";

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element && element.getBoundingClientRect().top <= 150) {
          current = section;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const pageClasses = isDark
    ? "bg-[#070910] text-white"
    : "bg-slate-50 text-slate-950";

  const mutedText = isDark ? "text-slate-400" : "text-slate-600";
  const cardClasses = isDark
    ? "border-white/10 bg-white/[0.035] hover:border-cyan-300/30 hover:bg-white/[0.06]"
    : "border-slate-200 bg-white hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-950/5";

  const sectionClasses = isDark
    ? "border-white/[0.07]"
    : "border-slate-200";

  const navItems = [
    ["Services", "services"],
    ["Our work", "work"],
    ["Process", "process"],
    ["Pricing", "pricing"],
    ["Contact", "contact"],
  ];

  const filteredDemos =
    demoFilter === "All"
      ? demos
      : demos.filter((demo) => demo.category === demoFilter);

  const estimatorMessage = [
    "Hello NEXORA, I would like a project estimate.",
    `Project type: ${selectedService}`,
    `Budget: KSh ${Number(budget || 0).toLocaleString("en-KE")}`,
    `Timeline: ${timeline}`,
    "Please let me know the next steps.",
  ].join("\n");

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const scrollToSection = (id) => {
    closeMobileMenu();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main
      className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${pageClasses}`}
    >
      <div
        className="fixed left-0 top-0 z-[100] h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-cyan-500/[0.07] blur-[120px]" />
        <div className="absolute -right-40 top-[35rem] h-96 w-96 rounded-full bg-violet-500/[0.08] blur-[120px]" />
        <div
          className={`absolute inset-0 ${
            isDark
              ? "opacity-[0.035]"
              : "opacity-[0.025]"
          }`}
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Main navigation */}
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-2xl ${
          isDark
            ? "border-white/[0.08] bg-[#070910]/80"
            : "border-slate-200 bg-white/85"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-3"
            aria-label="NEXORA home"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-lg font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition-transform group-hover:rotate-6">
              N
            </span>

            <span className="text-left">
              <span className="block text-lg font-black tracking-[0.17em]">
                NEXORA
              </span>
              <span
                className={`block text-[9px] font-semibold uppercase tracking-[0.22em] ${mutedText}`}
              >
                Digital experiences
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className={`relative py-2 text-sm transition-colors ${
                  activeSection === id
                    ? "font-semibold text-cyan-400"
                    : `${mutedText} hover:text-cyan-400`
                }`}
              >
                {label}
                {activeSection === id && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-cyan-400" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setDarkMode((current) => !current)}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border transition ${
                isDark
                  ? "border-white/10 bg-white/5 hover:bg-white/10"
                  : "border-slate-200 bg-white hover:bg-slate-100"
              }`}
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              title="Switch theme"
            >
              {isDark ? (
                <Sun size={17} className="text-amber-300" />
              ) : (
                <Moon size={17} />
              )}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="hidden items-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 sm:flex"
            >
              Start a project
              <ArrowUpRight size={16} />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border lg:hidden ${
                isDark ? "border-white/10" : "border-slate-200"
              }`}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav
            className={`border-t px-5 py-4 lg:hidden ${
              isDark ? "border-white/10 bg-[#0b0e17]" : "border-slate-200 bg-white"
            }`}
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navItems.map(([label, id]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className={`rounded-lg px-3 py-3 text-left text-sm transition ${
                    activeSection === id
                      ? "bg-cyan-400/10 font-semibold text-cyan-500"
                      : `${mutedText} hover:bg-black/5`
                  }`}
                >
                  {label}
                </button>
              ))}

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 font-bold text-slate-950"
              >
                Let's talk <ArrowUpRight size={16} />
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative z-10 scroll-mt-28 px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div
              className={`mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium ${
                isDark
                  ? "border-cyan-300/20 bg-cyan-300/[0.06] text-cyan-200"
                  : "border-cyan-600/20 bg-cyan-50 text-cyan-800"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Websites built for real businesses
              <ArrowUpRight size={13} />
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl md:text-7xl xl:text-[82px]">
              Your next big idea.
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text pb-2 text-transparent">
                Built for the web.
              </span>
            </h1>

            <p
              className={`mt-7 max-w-xl text-base leading-8 sm:text-lg ${mutedText}`}
            >
              We design and build modern websites and digital experiences that
              help businesses look credible, reach customers and grow online.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="group flex items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 py-4 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
              >
                Build with NEXORA
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("work")}
                className={`flex items-center justify-center gap-3 rounded-xl border px-6 py-4 font-semibold transition hover:-translate-y-1 ${
                  isDark
                    ? "border-white/15 hover:border-cyan-300/40 hover:bg-white/5"
                    : "border-slate-300 hover:border-cyan-500 hover:bg-white"
                }`}
              >
                Explore our work
                <ArrowDownRight size={18} />
              </button>
            </div>

            <div
              className={`mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs ${mutedText}`}
            >
              <span className="flex items-center gap-2">
                <Check size={15} className="text-cyan-400" />
                Mobile-first design
              </span>
              <span className="flex items-center gap-2">
                <Check size={15} className="text-cyan-400" />
                Clear project scope
              </span>
              <span className="flex items-center gap-2">
                <Check size={15} className="text-cyan-400" />
                Built around your goals
              </span>
            </div>
          </div>

          {/* Interactive design preview */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-cyan-500/15 via-blue-500/5 to-violet-500/15 blur-2xl" />

            <div
              className={`relative overflow-hidden rounded-3xl border shadow-2xl ${
                isDark
                  ? "border-white/15 bg-[#0c101a] shadow-black/30"
                  : "border-slate-200 bg-white shadow-slate-300/40"
              }`}
            >
              <div
                className={`flex items-center justify-between border-b px-5 py-4 ${
                  isDark ? "border-white/10" : "border-slate-200"
                }`}
              >
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className={`text-[10px] tracking-wide ${mutedText}`}>
                  nexora.studio / preview
                </span>
                <Sparkles size={15} className="text-cyan-400" />
              </div>

              <div className="p-5 sm:p-7">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className={`text-[10px] uppercase tracking-[0.2em] ${mutedText}`}>
                      Digital studio
                    </p>
                    <p className="mt-2 text-lg font-bold">Ideas into experiences.</p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-600 text-slate-950">
                    <Code2 size={22} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-600/10 p-4">
                    <Globe className="mb-5 text-cyan-400" size={21} />
                    <p className="text-sm font-semibold">Web design</p>
                    <p className={`mt-1 text-xs ${mutedText}`}>Built around users</p>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 p-4">
                    <Zap className="mb-5 text-violet-400" size={21} />
                    <p className="text-sm font-semibold">Development</p>
                    <p className={`mt-1 text-xs ${mutedText}`}>Made to work</p>
                  </div>

                  <div className="col-span-2 rounded-2xl border border-cyan-300/20 p-4 sm:p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className={`text-xs ${mutedText}`}>The next step</p>
                        <p className="mt-1 font-semibold">Your business, online.</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => scrollToSection("contact")}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-slate-950 transition hover:scale-105"
                        aria-label="Start your project"
                      >
                        <ArrowUpRight size={20} />
                      </button>
                    </div>
                    <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-500/15">
                      <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                    </div>
                    <div className={`mt-2 flex justify-between text-[10px] ${mutedText}`}>
                      <span>Design direction</span>
                      <span>Ready to explore</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`flex items-center justify-between border-t px-5 py-4 text-xs ${
                  isDark ? "border-white/10" : "border-slate-200"
                }`}
              >
                <span className={mutedText}>Concept preview</span>
                <span className="flex items-center gap-2 text-cyan-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  Interactive
                </span>
              </div>
            </div>

            <div
              className={`absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl border p-4 shadow-xl sm:flex ${
                isDark
                  ? "border-white/10 bg-[#111521]"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-400">
                <ShieldCheck size={21} />
              </div>
              <div>
                <p className="text-sm font-semibold">Built with purpose</p>
                <p className={`mt-1 text-xs ${mutedText}`}>Designed for real users</p>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => scrollToSection("services")}
          className={`mx-auto mt-20 flex items-center gap-3 text-xs uppercase tracking-[0.2em] transition hover:text-cyan-400 ${mutedText}`}
        >
          Discover NEXORA
          <ArrowDown size={15} className="animate-bounce" />
        </button>
      </section>

      {/* Trust strip: existing component */}
      <div className="relative z-10">
        <TrustStrip />
      </div>

      {/* Services */}
      <section
        id="services"
        className={`relative z-10 scroll-mt-28 border-t px-5 py-24 sm:px-8 sm:py-32 ${sectionClasses}`}
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What we do"
            title="Digital work that has a purpose."
            description="From your first business website to a more involved web application, every project starts with what you need it to achieve."
            light={!isDark}
          />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <button
                  type="button"
                  key={service.number}
                  onClick={() => {
                    setSelectedService(service.title);
                    scrollToSection("estimator");
                  }}
                  className={`group relative overflow-hidden rounded-2xl border p-6 text-left transition duration-300 hover:-translate-y-1 ${cardClasses}`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                        isDark
                          ? "bg-cyan-300/10 text-cyan-300"
                          : "bg-cyan-50 text-cyan-700"
                      }`}
                    >
                      <Icon size={23} />
                    </div>
                    <span className={`text-xs ${mutedText}`}>
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-lg font-semibold">{service.title}</h3>
                  <p className={`mt-3 min-h-[84px] text-sm leading-6 ${mutedText}`}>
                    {service.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-md px-2 py-1 text-[10px] ${
                          isDark
                            ? "bg-white/[0.06] text-slate-300"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between text-sm font-semibold text-cyan-500">
                    Explore service
                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Existing services component kept available */}
      <section className="relative z-10">
        <Services />
      </section>

      {/* Work and demos */}
      <section
        id="work"
        className={`relative z-10 scroll-mt-28 border-t px-5 py-24 sm:px-8 sm:py-32 ${sectionClasses}`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Selected concepts"
              title="Explore what we can build."
              description="Browse our interactive concepts. These are demonstrations of design direction and functionality, not claims that every feature is connected to a live production system."
              light={!isDark}
            />

            <div className="mb-12 flex flex-wrap gap-2">
              {["All", "Hospitality", "Business", "Finance", "E-commerce"].map(
                (filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setDemoFilter(filter)}
                    className={`rounded-full border px-3 py-2 text-xs transition ${
                      demoFilter === filter
                        ? "border-cyan-400 bg-cyan-400 text-slate-950"
                        : isDark
                          ? "border-white/10 text-slate-400 hover:border-cyan-400/40 hover:text-white"
                          : "border-slate-200 text-slate-600 hover:border-cyan-500"
                    }`}
                  >
                    {filter}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {filteredDemos.map((demo) => {
              const Icon = demo.icon;

              return (
                <Link
                  key={demo.path}
                  to={demo.path}
                  className={`group overflow-hidden rounded-3xl border transition duration-300 hover:-translate-y-1 ${cardClasses}`}
                >
                  <div
                    className={`relative flex min-h-[210px] items-center justify-center overflow-hidden bg-gradient-to-br ${demo.accent}`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)]" />

                    <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/20 bg-white/[0.08] shadow-2xl backdrop-blur-xl transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <Icon size={38} className="text-cyan-300" />
                    </div>

                    <span className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                      {demo.category}
                    </span>

                    <span className="absolute right-6 top-6 text-xs text-white/50">
                      {demo.number}
                    </span>

                    <ArrowUpRight
                      size={22}
                      className="absolute bottom-6 right-6 text-white/70 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                    />
                  </div>

                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl font-semibold">{demo.title}</h3>
                    <p className={`mt-3 max-w-lg text-sm leading-6 ${mutedText}`}>
                      {demo.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-cyan-500">
                      Open demo
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-7 flex items-start gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-4">
            <Sparkles size={18} className="mt-0.5 shrink-0 text-cyan-400" />
            <p className={`text-xs leading-6 ${mutedText}`}>
              Want to see a different kind of website? Tell us your industry
              and we can discuss a concept that fits your business.
            </p>
          </div>
        </div>
      </section>

      {/* Existing projects showcase */}
      <section className="relative z-10">
        <Projects />
      </section>

      {/* Process */}
      <section
        id="process"
        className={`relative z-10 scroll-mt-28 border-t px-5 py-24 sm:px-8 sm:py-32 ${sectionClasses}`}
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How we work"
            title="A clear path from idea to launch."
            description="No mystery process. We define the goal, agree on the scope, build in stages and review the result with you."
            light={!isDark}
          />

          <div className="grid gap-4 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Discover",
                text: "We learn about your business, customers and goals.",
                icon: MessageCircle,
              },
              {
                number: "02",
                title: "Design",
                text: "We plan the structure, content and visual direction.",
                icon: Palette,
              },
              {
                number: "03",
                title: "Build",
                text: "We develop the agreed features and responsive layouts.",
                icon: Code2,
              },
              {
                number: "04",
                title: "Launch",
                text: "We review, test and prepare the project for deployment.",
                icon: Zap,
              },
            ].map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className={`rounded-2xl border p-6 transition hover:-translate-y-1 ${cardClasses}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-cyan-500">
                      {step.number}
                    </span>
                    <Icon size={21} className="text-cyan-400" />
                  </div>
                  <h3 className="mt-8 text-lg font-semibold">{step.title}</h3>
                  <p className={`mt-3 text-sm leading-6 ${mutedText}`}>
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project estimator */}
      <section
        id="estimator"
        className="relative z-10 scroll-mt-28 px-5 py-24 sm:px-8 sm:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center">
            <SectionHeading
              eyebrow="Plan your project"
              title="Let's put a number to your idea."
              description="Choose a project type, set your approximate budget and timeline, then send the details to NEXORA on WhatsApp."
              light={!isDark}
            />

            <div className={`flex items-start gap-3 text-sm leading-6 ${mutedText}`}>
              <Wallet size={19} className="mt-0.5 shrink-0 text-cyan-500" />
              <p>
                This tool prepares an enquiry, not a binding quotation. Final
                pricing depends on the agreed features and scope.
              </p>
            </div>
          </div>

          <div
            className={`rounded-3xl border p-6 shadow-2xl sm:p-8 ${
              isDark
                ? "border-white/10 bg-[#0c101a] shadow-black/20"
                : "border-slate-200 bg-white shadow-slate-200/60"
            }`}
          >
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className={`text-xs uppercase tracking-[0.2em] ${mutedText}`}>
                  Project planner
                </p>
                <h3 className="mt-2 text-xl font-semibold">Your brief</h3>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-500">
                <Sparkles size={23} />
              </div>
            </div>

            <label className="mb-2 block text-sm font-medium" htmlFor="projectType">
              What do you want to build?
            </label>
            <select
              id="projectType"
              value={selectedService}
              onChange={(event) => setSelectedService(event.target.value)}
              className={`mb-6 w-full rounded-xl border px-4 py-3.5 outline-none transition focus:border-cyan-400 ${
                isDark
                  ? "border-white/10 bg-[#111521] text-white"
                  : "border-slate-200 bg-slate-50 text-slate-950"
              }`}
            >
              <option>Business website</option>
              <option>Online store</option>
              <option>Web application</option>
              <option>Website redesign</option>
              <option>Hospitality website</option>
              <option>Other custom project</option>
            </select>

            <div className="mb-6">
              <div className="mb-3 flex items-center justify-between gap-3">
                <label className="text-sm font-medium" htmlFor="projectBudget">
                  Approximate budget
                </label>
                <span className="text-sm font-bold text-cyan-500">
                  KSh {Number(budget || 0).toLocaleString("en-KE")}
                </span>
              </div>

              <input
                id="projectBudget"
                type="range"
                min="5000"
                max="100000"
                step="5000"
                value={budget}
                onChange={(event) => setBudget(event.target.value)}
                className="w-full cursor-pointer accent-cyan-400"
              />

              <div className={`mt-2 flex justify-between text-xs ${mutedText}`}>
                <span>KSh 5,000</span>
                <span>KSh 100,000+</span>
              </div>
            </div>

            <label className="mb-2 block text-sm font-medium" htmlFor="timeline">
              Preferred timeline
            </label>
            <select
              id="timeline"
              value={timeline}
              onChange={(event) => setTimeline(event.target.value)}
              className={`mb-7 w-full rounded-xl border px-4 py-3.5 outline-none transition focus:border-cyan-400 ${
                isDark
                  ? "border-white/10 bg-[#111521] text-white"
                  : "border-slate-200 bg-slate-50 text-slate-950"
              }`}
            >
              <option>As soon as possible</option>
              <option>1–2 weeks</option>
              <option>2–3 weeks</option>
              <option>1 month or more</option>
              <option>Flexible</option>
            </select>

            <WhatsAppLink
              message={estimatorMessage}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 px-5 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Send project brief
              <Send size={17} />
            </WhatsAppLink>

            <p className={`mt-3 text-center text-[11px] ${mutedText}`}>
              Opens WhatsApp with your selected details.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className={`relative z-10 scroll-mt-28 border-t px-5 py-24 sm:px-8 sm:py-32 ${sectionClasses}`}
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Starting prices"
            title="Choose a starting point."
            description="These are indicative starting prices to help you plan. We'll confirm a proper quote after discussing your requirements."
            light={!isDark}
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {packages.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 ${
                  plan.featured
                    ? "border-cyan-400/60 bg-gradient-to-b from-cyan-400/[0.10] to-blue-500/[0.03] shadow-xl shadow-cyan-500/[0.06]"
                    : cardClasses
                }`}
              >
                {plan.featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-cyan-400 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-950">
                    Popular
                  </span>
                )}

                <p className={`text-sm font-semibold ${mutedText}`}>
                  {plan.name}
                </p>
                <p className="mt-4 text-2xl font-bold tracking-tight">
                  {plan.price}
                </p>
                <p className={`mt-3 min-h-[48px] text-sm leading-6 ${mutedText}`}>
                  {plan.description}
                </p>

                <div
                  className={`my-6 h-px ${
                    isDark ? "bg-white/10" : "bg-slate-200"
                  }`}
                />

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        size={17}
                        className="mt-0.5 shrink-0 text-cyan-500"
                      />
                      <span className={mutedText}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedService(
                      plan.name === "Custom"
                        ? "Other custom project"
                        : plan.name === "Professional"
                          ? "Web application"
                          : "Business website"
                    );
                    scrollToSection("estimator");
                  }}
                  className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-bold transition ${
                    plan.featured
                      ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                      : isDark
                        ? "border border-white/15 hover:border-cyan-400/40 hover:bg-white/5"
                        : "border border-slate-300 hover:border-cyan-500 hover:bg-slate-50"
                  }`}
                >
                  Discuss this option
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing pricing component */}
      <section className="relative z-10">
        <Pricing />
      </section>

      {/* Testimonials */}
      <section className="relative z-10">
        <Testimonials />
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className={`relative z-10 scroll-mt-28 border-t px-5 py-24 sm:px-8 sm:py-32 ${sectionClasses}`}
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Good to know"
            title="Questions, answered."
            description="A few things worth knowing before starting a website project with NEXORA."
            light={!isDark}
          />

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = faqOpen === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition ${
                    isOpen
                      ? "border-cyan-400/35"
                      : isDark
                        ? "border-white/10"
                        : "border-slate-200"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setFaqOpen(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-cyan-500 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className={`px-5 pb-5 text-sm leading-7 ${mutedText}`}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact component */}
      <section
        id="contact"
        className={`relative z-10 scroll-mt-28 border-t px-5 py-20 sm:px-8 sm:py-28 ${sectionClasses}`}
      >
        <div className="mx-auto mb-10 max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.10] via-blue-500/[0.06] to-violet-500/[0.10] p-7 sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-cyan-500">
                  <span className="h-px w-7 bg-cyan-400" />
                  Your next move
                </p>
                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                  Ready to make your idea real?
                </h2>
                <p className={`mt-4 max-w-xl leading-7 ${mutedText}`}>
                  Tell us what you're building, what problem it solves and
                  where you'd like to take it. We'll work through the next
                  steps together.
                </p>
              </div>

              <WhatsAppLink
                message="Hello NEXORA, I would like to discuss a website or web application project."
                className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 py-4 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
              >
                Start a conversation
                <ArrowUpRight size={18} />
              </WhatsAppLink>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl">
          <Contact />
        </div>
      </section>

      {/* Existing reusable widgets */}
      <div className="relative z-20">
        <Footer />
        <WhatsAppButton />
        <SocialDock />
        <SettingsPanel />
        <AIAssistant />
      </div>
    </main>
  );
}
