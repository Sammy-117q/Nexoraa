import { useState } from "react";
import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaTrash,
} from "react-icons/fa";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text:
        "Hello 👋 I am the NEXORA assistant. Ask me about websites, business ideas, packages, demos, payments, contact options, or how to get your own website.",
    },
  ]);

  const rudeWords = [
    "fuck",
    "shit",
    "bitch",
    "asshole",
    "idiot",
    "stupid",
    "dumb",
  ];

  const allowedKeywords = [
    "hello",
    "hi",
    "hey",
    "good morning",
    "good afternoon",
    "good evening",
    "thanks",
    "thank",
    "okay",
    "ok",
    "cool",
    "nice",
    "bye",
    "goodbye",

    "website",
    "web",
    "site",
    "business",
    "company",
    "brand",
    "startup",
    "client",
    "customer",
    "portfolio",
    "shop",
    "store",
    "ecommerce",
    "e-commerce",
    "school",
    "organization",
    "restaurant",
    "hotel",
    "church",
    "salon",
    "boutique",
    "agency",
    "office",

    "design",
    "ui",
    "ux",
    "mobile",
    "responsive",
    "page",
    "pages",
    "section",
    "layout",
    "feature",
    "features",
    "service",
    "services",
    "project",
    "demo",
    "prototype",

    "price",
    "pricing",
    "package",
    "packages",
    "cost",
    "budget",
    "cheap",
    "expensive",

    "pay",
    "payment",
    "mpesa",
    "m-pesa",
    "paypal",
    "bank",
    "checkout",

    "contact",
    "whatsapp",
    "instagram",
    "tiktok",
    "email",
    "developer",
    "nexora",

    "domain",
    "hosting",
    "online",
    "launch",
    "deploy",
    "delivery",
    "time",
    "duration",
    "changes",
    "update",
    "support",

    "html",
    "css",
    "javascript",
    "react",
    "tailwind",
    "coding",
    "programming",
    "build it myself",
    "do it myself",
    "without contacting",
    "create my own website",
    "make my own website",

    "worth",
    "need a website",
    "why choose",
    "why nexora",
    "requirements",
    "before starting",
    "what do i need",
  ];

  const quickQuestions = [
    "I want a website for my business",
    "What packages do you offer?",
    "How can I contact the developer?",
    "Can I build a website myself?",
  ];

  const hasRudeWords = (message) => {
    const msg = message.toLowerCase();
    return rudeWords.some((word) => msg.includes(word));
  };

  const isAllowedTopic = (message) => {
    const msg = message.toLowerCase();
    return allowedKeywords.some((word) => msg.includes(word));
  };

  const createBotMessage = (text) => {
    return {
      sender: "bot",
      text,
    };
  };

  const createUserMessage = (text) => {
    return {
      sender: "user",
      text,
    };
  };

  const getBotReply = (message) => {
    const msg = message.toLowerCase().trim();

    if (hasRudeWords(msg)) {
      return (
        "Let’s keep the conversation respectful 😊 " +
        "I can still help with websites, business website ideas, services, pricing, payments, demos, and contact information."
      );
    }

    if (
      msg.includes("hello") ||
      msg.includes("hi") ||
      msg.includes("hey") ||
      msg.includes("good morning") ||
      msg.includes("good afternoon") ||
      msg.includes("good evening")
    ) {
      return (
        "Hello 👋 Welcome to NEXORA. " +
        "You can ask me about getting a website, choosing a package, viewing demos, payment options, or contacting the developer."
      );
    }

    if (msg.includes("how are you")) {
      return (
        "I'm doing great 😊 I am here to help visitors understand NEXORA, website services, packages, demos, and how to get started."
      );
    }

    if (msg.includes("thank") || msg.includes("thanks")) {
      return (
        "You're welcome 😊 If you need a website, you can check the Pricing section, view the demos, or contact the developer directly."
      );
    }

    if (
      msg === "ok" ||
      msg === "okay" ||
      msg === "cool" ||
      msg === "nice" ||
      msg === "alright"
    ) {
      return (
        "Great 😊 You can ask about services, packages, demos, payments, or how to request a website."
      );
    }

    if (msg.includes("bye") || msg.includes("goodbye") || msg.includes("see you")) {
      return "Goodbye 👋 Thank you for visiting NEXORA.";
    }

    if (!isAllowedTopic(msg)) {
      return (
        "I can only help with website, business, NEXORA services, pricing, demos, payments, " +
        "contact options, and website-building guidance. I cannot answer unrelated personal, family, entertainment, or random questions."
      );
    }

    if (
      msg.includes("without contacting") ||
      msg.includes("do it myself") ||
      msg.includes("build it myself") ||
      msg.includes("create my own website") ||
      msg.includes("make my own website") ||
      msg.includes("can i build") ||
      msg.includes("how to create my website")
    ) {
      return (
        "Yes, you can create a website yourself. A simple path is: learn HTML for structure, CSS for styling, JavaScript for interaction, " +
        "then React for modern interfaces. You can also use website builders. But if you want a polished professional result faster, " +
        "NEXORA can help with layout, design, responsiveness, demos, contact sections, and launch support."
      );
    }

    if (
      msg.includes("i want") ||
      msg.includes("i need") ||
      msg.includes("need a website") ||
      msg.includes("want a website") ||
      msg.includes("build me") ||
      msg.includes("create") ||
      msg.includes("make")
    ) {
      return (
        "Great. To request a website, choose a package from the Pricing section or contact the developer through WhatsApp, Instagram, TikTok, or Email. " +
        "Prepare your business name, type of website, preferred colors, images, contact details, and the sections you want."
      );
    }

    if (
      msg.includes("why should i choose") ||
      msg.includes("why choose") ||
      msg.includes("why nexora")
    ) {
      return (
        "NEXORA is useful if you want a website that looks modern, works on phones, presents your services clearly, has demos, " +
        "includes contact options, and gives customers a professional first impression."
      );
    }

    if (
      msg.includes("what do i need") ||
      msg.includes("requirements") ||
      msg.includes("before starting")
    ) {
      return (
        "Before starting, prepare your business name, logo if available, services, images, contact details, social media links, " +
        "preferred colors, examples of websites you like, and the type of website you want."
      );
    }

    if (
      msg.includes("business") ||
      msg.includes("company") ||
      msg.includes("brand") ||
      msg.includes("startup") ||
      msg.includes("agency") ||
      msg.includes("office")
    ) {
      return (
        "For a business website, useful sections include Home, About, Services, Projects, Pricing, FAQ, Contact, testimonials, " +
        "social media links, and a clear call-to-action such as Request a Website or Contact Us."
      );
    }

    if (
      msg.includes("shop") ||
      msg.includes("store") ||
      msg.includes("ecommerce") ||
      msg.includes("e-commerce")
    ) {
      return (
        "For an online store, the website can include product collections, product images, prices, trust badges, delivery information, " +
        "payment options, checkout prototype, and contact buttons."
      );
    }

    if (msg.includes("portfolio")) {
      return (
        "A portfolio website can show your skills, projects, about section, contact details, social media links, testimonials, " +
        "and a strong homepage that explains what you do."
      );
    }

    if (
      msg.includes("school") ||
      msg.includes("organization") ||
      msg.includes("church")
    ) {
      return (
        "A school, church, or organization website can include announcements, leadership/team, departments, gallery, events, contact details, " +
        "forms, location, and information pages."
      );
    }

    if (
      msg.includes("restaurant") ||
      msg.includes("hotel") ||
      msg.includes("salon") ||
      msg.includes("boutique")
    ) {
      return (
        "That type of business can have a beautiful website with service lists, product or room photos, booking/contact buttons, prices, location, " +
        "opening hours, gallery, and social media links."
      );
    }

    if (
      msg.includes("price") ||
      msg.includes("pricing") ||
      msg.includes("package") ||
      msg.includes("packages") ||
      msg.includes("cost")
    ) {
      return (
        "NEXORA has package examples such as Starter Website, Business Website, and Premium Website. " +
        "The final cost depends on pages, design quality, animations, images, contact features, and launch support."
      );
    }

    if (
      msg.includes("cheap") ||
      msg.includes("expensive") ||
      msg.includes("budget")
    ) {
      return (
        "The best option depends on your budget and goals. A simple website is cheaper, while a premium website costs more because it includes " +
        "more sections, better visuals, animations, and stronger presentation."
      );
    }

    if (
      msg.includes("payment") ||
      msg.includes("pay") ||
      msg.includes("mpesa") ||
      msg.includes("m-pesa") ||
      msg.includes("paypal") ||
      msg.includes("bank") ||
      msg.includes("checkout")
    ) {
      return (
        "The checkout page includes M-Pesa, Bank, and PayPal options as a frontend prototype. " +
        "Real payment processing can be connected later with a backend and official payment APIs."
      );
    }

    if (
      msg.includes("demo") ||
      msg.includes("prototype") ||
      msg.includes("project")
    ) {
      return (
        "NEXORA includes Business, Finance, and Store prototypes. These demos help customers imagine what their own website could look like."
      );
    }

    if (
      msg.includes("service") ||
      msg.includes("services") ||
      msg.includes("design") ||
      msg.includes("ui") ||
      msg.includes("ux")
    ) {
      return (
        "NEXORA focuses on website development, UI/UX design, mobile-friendly layouts, modern visuals, customer-focused sections, " +
        "and professional digital presentation."
      );
    }

    if (
      msg.includes("mobile") ||
      msg.includes("responsive") ||
      msg.includes("phone")
    ) {
      return (
        "Yes. A professional website should work on phones, tablets, laptops, and desktop screens. Responsive design helps customers use the site comfortably."
      );
    }

    if (
      msg.includes("time") ||
      msg.includes("duration") ||
      msg.includes("delivery") ||
      msg.includes("how long")
    ) {
      return (
        "A simple website can take a few days. Bigger websites take longer depending on the number of pages, images, animations, revisions, and features."
      );
    }

    if (
      msg.includes("domain") ||
      msg.includes("hosting") ||
      msg.includes("online") ||
      msg.includes("launch") ||
      msg.includes("deploy")
    ) {
      return (
        "The website can be deployed online so visitors can access it through a live link. A custom domain can also be connected later."
      );
    }

    if (
      msg.includes("changes") ||
      msg.includes("edit later") ||
      msg.includes("update later") ||
      msg.includes("support")
    ) {
      return (
        "Yes. A website can be updated later. Text, images, colors, prices, sections, services, and contact details can be changed when needed."
      );
    }

    if (
      msg.includes("is it worth") ||
      msg.includes("do i need a website") ||
      msg.includes("need website")
    ) {
      return (
        "Yes, a website is worth it for many businesses because it makes the brand look professional, helps customers find information, " +
        "shows services clearly, and gives people a direct way to contact you."
      );
    }

    if (
      msg.includes("html") ||
      msg.includes("css") ||
      msg.includes("javascript") ||
      msg.includes("react") ||
      msg.includes("tailwind") ||
      msg.includes("coding") ||
      msg.includes("programming")
    ) {
      return (
        "Those are good tools for building websites. HTML structures the page, CSS styles it, JavaScript adds interaction, React builds modern interfaces, " +
        "and Tailwind helps create fast responsive designs."
      );
    }

    if (
      msg.includes("contact") ||
      msg.includes("whatsapp") ||
      msg.includes("instagram") ||
      msg.includes("tiktok") ||
      msg.includes("email")
    ) {
      return (
        "You can contact the developer through WhatsApp, Instagram, TikTok, or Email using the social icons and contact section on the website."
      );
    }

    if (msg.includes("nexora")) {
      return (
        "NEXORA is a futuristic website portfolio and prototype platform. It shows services, pricing, demos, contact options, and website ideas for clients."
      );
    }

    return (
      "Yes, that relates to websites or business presentation. NEXORA can help turn that idea into a professional website. " +
      "For the best result, check the Pricing section or contact the developer with details about what you want."
    );
  };

  const sendMessage = (customText) => {
    const textToSend = customText || input;

    if (!textToSend.trim()) return;

    const userMessage = createUserMessage(textToSend);
    const botMessage = createBotMessage(getBotReply(textToSend));

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  const clearChat = () => {
    setMessages([
      {
        sender: "bot",
        text:
          "Chat cleared 😊 Ask me anything about websites, business website ideas, demos, packages, payments, or contacting NEXORA.",
      },
    ]);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-50 bg-cyan-400 text-black px-5 py-4 rounded-full font-black flex items-center gap-3 shadow-2xl hover:scale-105 transition"
      >
        <FaRobot />
        Ask NEXORA
      </button>

      {open && (
        <div className="fixed bottom-24 left-6 z-[100] w-[95%] max-w-md bg-[#08111f] text-white border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="flex justify-between items-center px-6 py-5 border-b border-white/10 bg-black/30">
            <div>
              <h2 className="text-xl font-black">NEXORA Assistant</h2>
              <p className="text-sm text-gray-400">
                Website and business questions only
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button onClick={clearChat} className="text-gray-400 hover:text-cyan-400">
                <FaTrash />
              </button>

              <button
                onClick={() => setOpen(false)}
                className="text-cyan-400 text-xl"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          <div className="px-5 pt-4 flex gap-2 flex-wrap">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => sendMessage(question)}
                className="text-xs bg-white/10 border border-white/10 px-3 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition"
              >
                {question}
              </button>
            ))}
          </div>

          <div className="h-[350px] overflow-y-auto p-5 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-cyan-400 text-black ml-auto"
                    : "bg-white/10 text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 p-4">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Ask about websites or NEXORA..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 bg-black/30 border border-white/10 rounded-2xl px-4 py-3 outline-none"
              />

              <button
                onClick={() => sendMessage()}
                className="bg-cyan-400 text-black px-5 rounded-2xl font-bold hover:scale-105 transition"
              >
                <FaPaperPlane />
              </button>
            </div>

            <div className="flex justify-center gap-5 mt-4 text-xl">
              <a href="mailto:samuelmugambi262@gmail.com" className="hover:text-cyan-400">
                <FaEnvelope />
              </a>

              <a href="https://wa.me/254114610168" target="_blank" rel="noreferrer" className="hover:text-green-400">
                <FaWhatsapp />
              </a>

              <a href="https://www.instagram.com/prime._.him" target="_blank" rel="noreferrer" className="hover:text-pink-400">
                <FaInstagram />
              </a>

              <a href="https://www.tiktok.com/@s.a.m.m.y_j.n.r" target="_blank" rel="noreferrer" className="hover:text-white">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}