import { FaQuestionCircle } from "react-icons/fa";

export default function FAQ() {
  const faqs = [
    {
      q: "How long does a website take?",
      a: "A simple website can take a few days. A bigger website depends on the sections, design, and features needed.",
    },
    {
      q: "Will it work on phones?",
      a: "Yes. The website is built to work on phones, tablets, laptops, and desktop screens.",
    },
    {
      q: "Can customers contact me through the website?",
      a: "Yes. Your website can include WhatsApp, email, Instagram, TikTok, and a contact form.",
    },
    {
      q: "Can you help me go online?",
      a: "Yes. Deployment support can be added so the website can be shared using a live link.",
    },
  ];

  return (
    <section id="faq" className="max-w-5xl mx-auto px-8 py-24">
      <div className="text-center mb-16">
        <p className="text-cyan-400 uppercase tracking-[6px] mb-4">Questions</p>
        <h2 className="text-4xl md:text-5xl font-black">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white/5 border border-white/10 rounded-3xl p-7">
            <h3 className="text-xl font-black mb-3 flex items-center gap-3">
              <FaQuestionCircle className="text-cyan-400" />
              {faq.q}
            </h3>
            <p className="text-gray-300 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}