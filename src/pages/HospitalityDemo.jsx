import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, Hotel, Coffee, Trees } from "lucide-react";
import "./HospitalityDemo.css";

const demos = [
  {
    id: "hotel",
    number: "01",
    title: "Hotel & Restaurant",
    description:
      "A refined hotel experience with room listings, dining, facilities and reservations.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
    tag: "HOSPITALITY",
    icon: Hotel,
  },
  {
    id: "bnb",
    number: "02",
    title: "Bed & Breakfast",
    description:
      "A welcoming stay with beautiful rooms, breakfast details and direct enquiries.",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85",
    tag: "BOUTIQUE STAYS",
    icon: Coffee,
  },
  {
    id: "lodge",
    number: "03",
    title: "Safari Lodge",
    description:
      "An immersive lodge website for accommodation, experiences and getaway packages.",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=85",
    tag: "NATURE & ESCAPES",
    icon: Trees,
  },
];

export default function HospitalityDemo() {
  return (
    <main className="hospitality-hub">
      <nav className="hospitality-topbar">
        <Link to="/" className="hospitality-brand">
          NEXORA<span>.</span>
        </Link>
        <Link to="/" className="hospitality-back">
          <ArrowLeft size={16} /> Back to portfolio
        </Link>
      </nav>

      <section className="hospitality-intro">
        <p className="hospitality-eyebrow">NEXORA / SELECTED INDUSTRIES</p>
        <h1>
          Hospitality, <span>beautifully presented.</span>
        </h1>
        <p className="hospitality-lead">
          Explore website concepts designed to help hotels, intimate stays and
          lodges turn online visitors into guests.
        </p>
      </section>

      <section className="hospitality-grid">
        {demos.map((demo) => {
          const Icon = demo.icon;

          return (
            <Link
              to={`/hospitality/${demo.id}`}
              className="hospitality-card"
              key={demo.id}
            >
              <div className="hospitality-card-image">
                <img src={demo.image} alt={demo.title} />
                <span className="hospitality-card-number">{demo.number}</span>
                <span className="hospitality-card-arrow">
                  <ArrowUpRight size={22} />
                </span>
                <span className="hospitality-card-tag">{demo.tag}</span>
              </div>

              <div className="hospitality-card-content">
                <div className="hospitality-card-title">
                  <div>
                    <h2>{demo.title}</h2>
                    <p>{demo.description}</p>
                  </div>
                  <Icon size={23} strokeWidth={1.5} />
                </div>
                <div className="hospitality-card-footer">
                  <span>EXPLORE DEMO</span>
                  <span className="hospitality-card-line" />
                </div>
              </div>
            </Link>
          );
        })}
      </section>

      <footer className="hospitality-hub-footer">
        <span>NEXORA DIGITAL</span>
        <span>Thoughtful websites. Real business goals.</span>
      </footer>
    </main>
  );
}