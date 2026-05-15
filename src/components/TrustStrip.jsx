export default function TrustStrip() {
  const items = [
    "Responsive Design",
    "Modern UI",
    "Fast Loading",
    "Client Focused",
  ];

  return (
    <section className="bg-[#050816] py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/10 rounded-3xl p-8 text-center min-h-[150px] flex flex-col items-center justify-center"
            >
              <div className="w-14 h-14 rounded-full bg-cyan-400/20 flex items-center justify-center mb-5">
                <span className="text-cyan-400 text-3xl font-black">✓</span>
              </div>

              <p className="font-bold text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}