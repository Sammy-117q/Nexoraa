import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  CalendarDays,
  Check,
  ChevronDown,
  Clock,
  Coffee,
  Compass,
  Heart,
  MapPin,
  Menu,
  Minus,
  Plus,
  Star,
  Utensils,
  Waves,
  Wifi,
  X,
} from "lucide-react";
import "./HospitalitySiteDemo.css";

const photos = {
  hotel:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=90",
  hotelRoom:
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85",
  dining:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85",
  food:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85",
  bnb:
    "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=2000&q=90",
  bnbRoom:
    "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1000&q=85",
  breakfast:
    "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1000&q=85",
  garden:
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
  lodge:
    "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=90",
  safari:
    "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=85",
  tent:
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1000&q=85",
  nature:
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1000&q=85",
};

function DemoNotice() {
  return (
    <div className="hs-demo-notice">
      <span>✳</span>
      <span>DESIGNED BY NEXORA</span>
      <span className="hs-notice-divider">/</span>
      <span>INTERACTIVE WEBSITE CONCEPT</span>
      <Link to="/hospitality">
        ALL DEMOS <ArrowRight size={13} />
      </Link>
    </div>
  );
}

function BookingForm({ business, variant = "default" }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form
      className={`hs-booking-form ${variant}`}
      onSubmit={handleSubmit}
    >
      <div className="hs-form-title">
        <span>MAKE IT HAPPEN</span>
        <h3>Plan your stay.</h3>
        <p>
          This is a website concept. Submit the form to preview the
          enquiry confirmation.
        </p>
      </div>

      <label>
        Your name
        <input
          name="name"
          placeholder="Enter your name"
          required
        />
      </label>

      <label>
        Email or phone
        <input
          name="contact"
          placeholder="How can they reach you?"
          required
        />
      </label>

      <div className="hs-form-row">
        <label>
          Arrival
          <input type="date" name="arrival" required />
        </label>
        <label>
          Departure
          <input type="date" name="departure" required />
        </label>
      </div>

      <label>
        What are you interested in?
        <select name="interest" defaultValue="" required>
          <option value="" disabled>
            Choose an option
          </option>
          {business === "hotel" && (
            <>
              <option>Hotel room</option>
              <option>Restaurant reservation</option>
              <option>Private dining</option>
              <option>Event or celebration</option>
            </>
          )}
          {business === "bnb" && (
            <>
              <option>Room and breakfast</option>
              <option>Weekend getaway</option>
              <option>Couple's stay</option>
              <option>Extended stay</option>
            </>
          )}
          {business === "lodge" && (
            <>
              <option>Lodge accommodation</option>
              <option>Safari experience</option>
              <option>Family getaway</option>
              <option>Private group package</option>
            </>
          )}
        </select>
      </label>

      <button className="hs-submit-button" type="submit">
        {sent ? "ENQUIRY PREVIEWED" : "SEND ENQUIRY"}
        {sent ? <Check size={17} /> : <ArrowRight size={17} />}
      </button>

      {sent && (
        <p className="hs-form-success" role="status">
          Your demo enquiry has been captured on this page only.
          No real reservation was sent.
        </p>
      )}
    </form>
  );
}

/* -------------------------------------------------------
   1. HOTEL & RESTAURANT — EDITORIAL LUXURY DESIGN
------------------------------------------------------- */

function HotelSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <main className="hs-site hs-hotel">
      <DemoNotice />

      <header className="hh-header">
        <Link className="hh-brand" to="/hospitality">
          <span className="hh-brand-mark">A.</span>
          <span>
            THE ALDER HOUSE
            <small>HOTEL · DINING · EXPERIENCE</small>
          </span>
        </Link>

        <button
          className="hh-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "hh-nav hh-nav-open" : "hh-nav"}>
          <a href="#hh-rooms" onClick={() => setMenuOpen(false)}>
            STAY
          </a>
          <a href="#hh-dining" onClick={() => setMenuOpen(false)}>
            DINING
          </a>
          <a href="#hh-story" onClick={() => setMenuOpen(false)}>
            OUR STORY
          </a>
          <a href="#hh-gallery" onClick={() => setMenuOpen(false)}>
            GALLERY
          </a>
          <a className="hh-nav-cta" href="#hh-book">
            BOOK YOUR STAY <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <section className="hh-hero">
        <img src={photos.hotel} alt="Elegant hotel exterior and pool" />
        <div className="hh-hero-shade" />
        <div className="hh-hero-copy">
          <div className="hh-eyebrow">
            <span />
            A MORE CONSIDERED ESCAPE
          </div>
          <h1>
            Stay for
            <br />
            <i>the feeling.</i>
          </h1>
          <p>
            Thoughtful rooms, exceptional dining and the kind of
            hospitality that makes you want to stay a little longer.
          </p>
          <div className="hh-hero-actions">
            <a className="hh-button hh-button-gold" href="#hh-rooms">
              DISCOVER THE ROOMS <ArrowRight size={17} />
            </a>
            <a className="hh-text-link" href="#hh-dining">
              EXPLORE DINING <ArrowDown size={15} />
            </a>
          </div>
        </div>

        <div className="hh-hero-index">
          <span>01</span>
          <span />
          <span>03</span>
        </div>

        <button
          className="hh-save-button"
          onClick={() => setSaved(!saved)}
        >
          <Heart size={16} fill={saved ? "currentColor" : "none"} />
          {saved ? "SAVED" : "SAVE THIS PLACE"}
        </button>

        <div className="hh-photo-caption">
          <MapPin size={14} /> LAIKIPIA COUNTY, KENYA
        </div>
      </section>

      <section className="hh-intro" id="hh-story">
        <div className="hh-intro-label">
          <span>01 / THE EXPERIENCE</span>
          <span>DESIGNED FOR SLOWER MOMENTS</span>
        </div>
        <div className="hh-intro-content">
          <h2>
            Luxury isn't
            <br />
            <i>loud.</i> It's personal.
          </h2>
          <div>
            <p>
              The Alder House is a boutique hotel concept built around
              the details: welcoming spaces, attentive service,
              beautiful food and rooms that feel like a retreat.
            </p>
            <a className="hh-underlined-link" href="#hh-gallery">
              GET TO KNOW US <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="hh-stat-row">
          <div>
            <strong>12</strong>
            <span>UNIQUE ROOMS</span>
          </div>
          <div>
            <strong>01</strong>
            <span>DESTINATION RESTAURANT</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>GUEST CARE CONCEPT</span>
          </div>
          <div>
            <strong>4.9/5</strong>
            <span>ILLUSTRATIVE GUEST RATING</span>
          </div>
        </div>
      </section>

      <section className="hh-rooms" id="hh-rooms">
        <div className="hh-section-heading">
          <div>
            <span className="hh-section-kicker">YOUR PRIVATE RETREAT</span>
            <h2>Rooms with <i>character.</i></h2>
          </div>
          <p>
            Choose the space that fits your escape. Sample prices are
            illustrative and can be customised for the real business.
          </p>
        </div>

        <div className="hh-room-grid">
          <article className="hh-room-card hh-room-featured">
            <div className="hh-room-image">
              <img src={photos.hotelRoom} alt="Boutique hotel bedroom" />
              <span>THE SIGNATURE STAY</span>
            </div>
            <div className="hh-room-info">
              <div>
                <h3>Signature Room</h3>
                <p>King bed · Ensuite · Garden view</p>
              </div>
              <div className="hh-room-price">
                <strong>KSh 12,500</strong>
                <span>/ NIGHT · SAMPLE</span>
              </div>
              <a href="#hh-book">
                ENQUIRE ABOUT THIS ROOM <ArrowUpRight size={16} />
              </a>
            </div>
          </article>

          <article className="hh-room-card">
            <div className="hh-room-image">
              <img src={photos.bnbRoom} alt="Comfortable premium bedroom" />
              <span>FOR A LITTLE MORE SPACE</span>
            </div>
            <div className="hh-room-info">
              <div>
                <h3>Deluxe Suite</h3>
                <p>King bed · Lounge · Private balcony</p>
              </div>
              <div className="hh-room-price">
                <strong>KSh 18,000</strong>
                <span>/ NIGHT · SAMPLE</span>
              </div>
              <a href="#hh-book">
                EXPLORE THE SUITE <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        </div>

        <div className="hh-amenities">
          <span><Wifi size={17} /> HIGH-SPEED WI-FI</span>
          <span><Coffee size={17} /> IN-ROOM COFFEE</span>
          <span><Waves size={17} /> POOL ACCESS</span>
          <span><BedDouble size={17} /> PREMIUM BEDDING</span>
        </div>
      </section>

      <section className="hh-dining" id="hh-dining">
        <div className="hh-dining-image">
          <img src={photos.dining} alt="Fine dining restaurant setting" />
        </div>
        <div className="hh-dining-copy">
          <span className="hh-section-kicker">GOOD FOOD. GOOD COMPANY.</span>
          <h2>Gather around <i>the table.</i></h2>
          <p>
            From a slow breakfast to an intimate dinner, our restaurant
            concept puts seasonal ingredients and considered service
            at the centre of every meal.
          </p>

          <div className="hh-menu-preview">
            <div>
              <span>01</span>
              <div>
                <strong>Breakfast & brunch</strong>
                <small>Fresh, relaxed, beautifully served</small>
              </div>
              <ArrowUpRight size={17} />
            </div>
            <div>
              <span>02</span>
              <div>
                <strong>Lunch & dinner</strong>
                <small>Thoughtful menus, seasonal flavours</small>
              </div>
              <ArrowUpRight size={17} />
            </div>
            <div>
              <span>03</span>
              <div>
                <strong>Private dining</strong>
                <small>Celebrations and intimate gatherings</small>
              </div>
              <ArrowUpRight size={17} />
            </div>
          </div>

          <a className="hh-button hh-button-dark" href="#hh-book">
            REQUEST A TABLE <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section className="hh-gallery" id="hh-gallery">
        <div className="hh-section-heading">
          <div>
            <span className="hh-section-kicker">A CLOSER LOOK</span>
            <h2>The art of <i>staying.</i></h2>
          </div>
          <a className="hh-underlined-link" href="#hh-book">
            PLAN YOUR VISIT <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="hh-gallery-grid">
          <img src={photos.food} alt="Restaurant interior" />
          <img src={photos.hotelRoom} alt="Hotel room" />
          <img src={photos.hotel} alt="Hotel exterior" />
        </div>
      </section>

      <section className="hh-booking" id="hh-book">
        <div className="hh-booking-copy">
          <span className="hh-section-kicker">YOUR NEXT CHAPTER STARTS HERE</span>
          <h2>Make room for <i>something good.</i></h2>
          <p>
            Planning a stay, dinner or special occasion? Tell us what
            you have in mind.
          </p>
          <div className="hh-contact-line">
            <MapPin size={17} /> Laikipia County, Kenya — sample location
          </div>
          <div className="hh-contact-line">
            <Clock size={17} /> Check-in and dining times set by the business
          </div>
        </div>
        <BookingForm business="hotel" variant="hotel-form" />
      </section>

      <footer className="hh-footer">
        <Link className="hh-brand" to="/hospitality">
          <span className="hh-brand-mark">A.</span>
          <span>
            THE ALDER HOUSE
            <small>HOTEL · DINING · EXPERIENCE</small>
          </span>
        </Link>
        <p>Illustrative hospitality website concept by NEXORA.</p>
        <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          BACK TO TOP ↑
        </a>
      </footer>
    </main>
  );
}

/* -------------------------------------------------------
   2. BED & BREAKFAST — WARM COTTAGE / SLOW-LIVING DESIGN
------------------------------------------------------- */

function BnBSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeRoom, setActiveRoom] = useState(0);

  const rooms = [
    {
      name: "The Garden Room",
      description: "A quiet room opening onto the garden.",
      price: "KSh 7,500",
      image: photos.bnbRoom,
      details: "Queen bed · Ensuite · Garden access",
    },
    {
      name: "The Hearth Suite",
      description: "A little extra space for a longer stay.",
      price: "KSh 10,500",
      image: photos.bnb,
      details: "King bed · Sitting area · Breakfast",
    },
    {
      name: "The Hideaway",
      description: "A private corner for a weekend together.",
      price: "KSh 12,000",
      image: photos.garden,
      details: "Private patio · King bed · Breakfast",
    },
  ];

  return (
    <main className="hs-site hs-bnb">
      <DemoNotice />

      <header className="hb-header">
        <Link className="hb-brand" to="/hospitality">
          <span className="hb-brand-icon">w.</span>
          <span>
            willow & hearth
            <small>A BED & BREAKFAST</small>
          </span>
        </Link>

        <button
          className="hb-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "hb-nav hb-nav-open" : "hb-nav"}>
          <a href="#hb-stay" onClick={() => setMenuOpen(false)}>THE STAY</a>
          <a href="#hb-breakfast" onClick={() => setMenuOpen(false)}>BREAKFAST</a>
          <a href="#hb-local" onClick={() => setMenuOpen(false)}>EXPLORE</a>
          <a href="#hb-rooms" onClick={() => setMenuOpen(false)}>OUR ROOMS</a>
          <a className="hb-book-button" href="#hb-book">FIND YOUR ROOM <ArrowRight size={15} /></a>
        </nav>
      </header>

      <section className="hb-hero">
        <img src={photos.bnb} alt="A peaceful cottage surrounded by greenery" />
        <div className="hb-hero-card">
          <span className="hb-handwritten">Come as you are.</span>
          <h1>A little place<br />to <i>feel at home.</i></h1>
          <p>
            Slow mornings, homemade breakfast and rooms that make
            leaving feel just a little harder.
          </p>
          <a className="hb-button" href="#hb-rooms">
            FIND YOUR LITTLE ESCAPE <ArrowRight size={16} />
          </a>
          <div className="hb-hero-rating">
            <span>★★★★★</span>
            <small>Guest-love inspired concept</small>
          </div>
        </div>
        <div className="hb-hero-sticker">
          <Coffee size={24} />
          <span>BREAKFAST<br />IS ON US</span>
        </div>
      </section>

      <section className="hb-welcome" id="hb-stay">
        <div className="hb-welcome-image">
          <img src={photos.garden} alt="Quiet countryside landscape" />
          <div className="hb-image-note">
            <span>01</span>
            <span>A SLOWER KIND OF STAY</span>
          </div>
        </div>
        <div className="hb-welcome-copy">
          <span className="hb-kicker">A WARM WELCOME</span>
          <h2>Small details.<br /><i>Big exhale.</i></h2>
          <p>
            Willow & Hearth is a welcoming bed-and-breakfast concept
            for people who want to pause, recharge and feel looked
            after. Think soft linen, a favourite book, a friendly hello
            and coffee before the day begins.
          </p>
          <p>
            Whether you are visiting for a weekend, celebrating
            something special or just need a change of scenery, your
            room is ready to feel like your own.
          </p>
          <a className="hb-text-link" href="#hb-rooms">
            GET TO KNOW YOUR STAY <ArrowRight size={16} />
          </a>
          <div className="hb-perks">
            <span><Check size={16} /> Breakfast included in selected rates</span>
            <span><Check size={16} /> Thoughtfully prepared rooms</span>
            <span><Check size={16} /> Local tips from your host</span>
          </div>
        </div>
      </section>

      <section className="hb-breakfast" id="hb-breakfast">
        <div className="hb-breakfast-copy">
          <span className="hb-kicker">THE MOST IMPORTANT PART</span>
          <h2>Wake up to<br /><i>something lovely.</i></h2>
          <p>
            Freshly brewed coffee, fruit, warm bread and a relaxed
            start to the day. The sample menu can be tailored to the
            actual property's kitchen and dietary options.
          </p>
          <div className="hb-breakfast-menu">
            <div>
              <span>01</span>
              <strong>The Slow Start</strong>
              <small>Fresh fruit, yoghurt, granola and tea or coffee</small>
            </div>
            <div>
              <span>02</span>
              <strong>The Country Breakfast</strong>
              <small>Eggs, toast, seasonal sides and a hot drink</small>
            </div>
            <div>
              <span>03</span>
              <strong>Something Plant-Based</strong>
              <small>A fresh, satisfying plant-based option</small>
            </div>
          </div>
          <a className="hb-button hb-button-green" href="#hb-book">
            ASK ABOUT BREAKFAST <ArrowRight size={16} />
          </a>
        </div>
        <div className="hb-breakfast-image">
          <img src={photos.breakfast} alt="Fresh breakfast spread" />
          <div className="hb-breakfast-badge">
            <Coffee size={24} />
            <span>MADE WITH CARE</span>
          </div>
        </div>
      </section>

      <section className="hb-rooms" id="hb-rooms">
        <div className="hb-section-title">
          <span className="hb-kicker">YOUR ROOM IS WAITING</span>
          <h2>Find your <i>favourite.</i></h2>
          <p>Three sample room concepts. Choose one to see its details.</p>
        </div>

        <div className="hb-room-selector">
          <div className="hb-room-tabs">
            {rooms.map((room, index) => (
              <button
                key={room.name}
                className={activeRoom === index ? "hb-room-tab active" : "hb-room-tab"}
                onClick={() => setActiveRoom(index)}
              >
                <span>0{index + 1}</span>
                {room.name}
                <ArrowUpRight size={16} />
              </button>
            ))}
          </div>

          <article className="hb-selected-room">
            <img src={rooms[activeRoom].image} alt={rooms[activeRoom].name} />
            <div className="hb-selected-room-copy">
              <span className="hb-kicker">A PLACE TO UNWIND</span>
              <h3>{rooms[activeRoom].name}</h3>
              <p>{rooms[activeRoom].description}</p>
              <span className="hb-room-details">{rooms[activeRoom].details}</span>
              <div className="hb-room-price">
                <strong>{rooms[activeRoom].price}</strong>
                <span>PER NIGHT · SAMPLE PRICE</span>
              </div>
              <a className="hb-button hb-button-green" href="#hb-book">
                ENQUIRE ABOUT THIS ROOM <ArrowRight size={16} />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="hb-local" id="hb-local">
        <div className="hb-local-image">
          <img src={photos.garden} alt="Nature near a peaceful getaway" />
        </div>
        <div className="hb-local-copy">
          <span className="hb-kicker">OUTSIDE YOUR FRONT DOOR</span>
          <h2>A little exploring<br />goes a <i>long way.</i></h2>
          <p>
            A great B&B is about more than the room. Give guests ideas
            for nearby walks, local cafés, markets, attractions and
            day trips.
          </p>
          <div className="hb-local-list">
            <div><Compass size={20} /><span><strong>Local favourites</strong><small>Places worth discovering</small></span><ArrowUpRight size={16} /></div>
            <div><MapPin size={20} /><span><strong>Getting around</strong><small>Useful directions and travel tips</small></span><ArrowUpRight size={16} /></div>
            <div><Heart size={20} /><span><strong>Made for your weekend</strong><small>Thoughtful ideas for every guest</small></span><ArrowUpRight size={16} /></div>
          </div>
        </div>
      </section>

      <section className="hb-booking" id="hb-book">
        <div className="hb-booking-heading">
          <span className="hb-handwritten">Your room, your rhythm.</span>
          <h2>Let's plan a<br /><i>lovely little stay.</i></h2>
          <p>
            Share your dates and what you need. This concept
            demonstrates the enquiry flow a real B&B could use.
          </p>
          <div className="hb-booking-note">
            <Coffee size={22} />
            <span><strong>Good mornings start here.</strong><small>Ask about breakfast, room options and special requests.</small></span>
          </div>
        </div>
        <BookingForm business="bnb" variant="bnb-form" />
      </section>

      <footer className="hb-footer">
        <Link className="hb-brand" to="/hospitality">
          <span className="hb-brand-icon">w.</span>
          <span>willow & hearth<small>A BED & BREAKFAST</small></span>
        </Link>
        <p>A welcoming website concept by NEXORA.</p>
        <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>BACK TO THE TOP ↑</a>
      </footer>
    </main>
  );
}

/* -------------------------------------------------------
   3. LODGE — IMMERSIVE AFRICAN SAFARI DESIGN
------------------------------------------------------- */

function LodgeSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePackage, setActivePackage] = useState("escape");

  const packages = {
    escape: {
      title: "The Wilderness Escape",
      price: "KSh 24,000",
      description: "A peaceful lodge stay with time to explore the landscape.",
      includes: ["Lodge accommodation", "Daily breakfast", "Guided nature walk"],
    },
    safari: {
      title: "Safari & Stay",
      price: "KSh 39,000",
      description: "A stay concept paired with a guided wildlife experience.",
      includes: ["Lodge accommodation", "Selected meals", "Guided safari activity"],
    },
    family: {
      title: "The Family Adventure",
      price: "KSh 55,000",
      description: "A sample shared getaway designed for a family or small group.",
      includes: ["Family accommodation", "Breakfast", "Group nature activity"],
    },
  };

  const currentPackage = packages[activePackage];

  return (
    <main className="hs-site hs-lodge">
      <DemoNotice />

      <header className="hl-header">
        <Link className="hl-brand" to="/hospitality">
          <span className="hl-brand-symbol">✳</span>
          <span>
            ACACIA RIDGE
            <small>WILDERNESS LODGE · KENYA</small>
          </span>
        </Link>

        <button
          className="hl-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "hl-nav hl-nav-open" : "hl-nav"}>
          <a href="#hl-experience" onClick={() => setMenuOpen(false)}>THE EXPERIENCE</a>
          <a href="#hl-stays" onClick={() => setMenuOpen(false)}>ACCOMMODATION</a>
          <a href="#hl-activities" onClick={() => setMenuOpen(false)}>ADVENTURES</a>
          <a href="#hl-packages" onClick={() => setMenuOpen(false)}>PACKAGES</a>
          <a className="hl-nav-cta" href="#hl-book">PLAN YOUR STAY <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <section className="hl-hero">
        <img src={photos.lodge} alt="African wilderness at golden hour" />
        <div className="hl-hero-shade" />
        <div className="hl-hero-copy">
          <span className="hl-kicker"><span /> OUT HERE, TIME MOVES DIFFERENTLY</span>
          <h1>Find your<br /><i>wild.</i></h1>
          <p>
            Wide-open landscapes. Quiet luxury. Meaningful adventures.
            Discover a different kind of escape.
          </p>
          <div className="hl-hero-actions">
            <a className="hl-button" href="#hl-packages">EXPLORE STAY PACKAGES <ArrowRight size={17} /></a>
            <a className="hl-play-link" href="#hl-experience"><span>↓</span> DISCOVER THE LODGE</a>
          </div>
        </div>
        <div className="hl-hero-coordinate">
          <span>0° 01' N</span>
          <span>36° 58' E</span>
          <small>ILLUSTRATIVE LOCATION</small>
        </div>
        <div className="hl-hero-bottom">
          <span>LANDSCAPE</span><span>·</span><span>WILDLIFE</span><span>·</span><span>STILLNESS</span>
        </div>
      </section>

      <section className="hl-intro" id="hl-experience">
        <div className="hl-intro-number">01 <span>/ THE CALL OF THE WILD</span></div>
        <div className="hl-intro-content">
          <h2>Closer to nature.<br /><i>Further from ordinary.</i></h2>
          <div>
            <p>
              Acacia Ridge is a safari-lodge concept inspired by the
              beauty of Kenya's open landscapes. It pairs an immersive
              sense of place with comfortable accommodation, guided
              experiences and thoughtful hospitality.
            </p>
            <a className="hl-outline-link" href="#hl-stays">EXPLORE THE LODGE <ArrowUpRight size={16} /></a>
          </div>
        </div>

        <div className="hl-experience-stats">
          <div><Compass size={23} /><strong>WILD</strong><span>GUIDED EXPERIENCES</span></div>
          <div><Waves size={23} /><strong>SLOW</strong><span>UNRUSHED MOMENTS</span></div>
          <div><Star size={23} /><strong>LOCAL</strong><span>PLACE-LED HOSPITALITY</span></div>
          <div><Heart size={23} /><strong>MEANINGFUL</strong><span>MEMORIES TO TAKE HOME</span></div>
        </div>
      </section>

      <section className="hl-stays" id="hl-stays">
        <div className="hl-section-heading">
          <div>
            <span className="hl-kicker">SLEEP UNDER OPEN SKIES</span>
            <h2>Your base in <i>the wild.</i></h2>
          </div>
          <p>
            Sample accommodation styles designed to showcase how a
            lodge can present its rooms, inclusions and rates.
          </p>
        </div>

        <div className="hl-stay-grid">
          <article className="hl-stay-card hl-stay-large">
            <div className="hl-stay-image">
              <img src={photos.tent} alt="Private lodge-style accommodation" />
              <span>01 / THE PRIVATE RETREAT</span>
            </div>
            <div className="hl-stay-copy">
              <h3>Acacia Tented Suite</h3>
              <p>A private-feeling escape with a comfortable bed, ensuite and views of the natural surroundings.</p>
              <div className="hl-stay-meta"><span><BedDouble size={15} /> KING BED</span><span><Coffee size={15} /> BREAKFAST</span><span><Waves size={15} /> PRIVATE DECK</span></div>
              <div className="hl-stay-bottom"><strong>KSh 18,500 <small>/ NIGHT · SAMPLE</small></strong><a href="#hl-book">DISCOVER <ArrowUpRight size={16} /></a></div>
            </div>
          </article>

          <article className="hl-stay-card">
            <div className="hl-stay-image">
              <img src={photos.nature} alt="Wildlife in a natural landscape" />
              <span>02 / THE VIEW</span>
            </div>
            <div className="hl-stay-copy">
              <h3>Panorama Cottage</h3>
              <p>A relaxed hideaway for guests who want extra space and a view.</p>
              <div className="hl-stay-meta"><span><BedDouble size={15} /> KING BED</span><span><Wifi size={15} /> WI-FI</span></div>
              <div className="hl-stay-bottom"><strong>KSh 23,000 <small>/ NIGHT · SAMPLE</small></strong><a href="#hl-book">DISCOVER <ArrowUpRight size={16} /></a></div>
            </div>
          </article>
        </div>
      </section>

      <section className="hl-adventures" id="hl-activities">
        <div className="hl-adventures-image">
          <img src={photos.safari} alt="African wildlife and wilderness" />
          <div className="hl-image-label">THE LAND IS THE EXPERIENCE</div>
        </div>
        <div className="hl-adventures-copy">
          <span className="hl-kicker">GO BEYOND THE ROOM</span>
          <h2>Stories worth<br /><i>the journey.</i></h2>
          <p>
            Show guests what makes the destination special with
            bookable activities, clear inclusions and useful details.
          </p>
          <div className="hl-activity-list">
            <a href="#hl-book"><span>01</span><div><strong>Guided wildlife experience</strong><small>Explore the landscape with a local guide</small></div><ArrowUpRight size={17} /></a>
            <a href="#hl-book"><span>02</span><div><strong>Nature and bird walks</strong><small>Take the quieter route through the wild</small></div><ArrowUpRight size={17} /></a>
            <a href="#hl-book"><span>03</span><div><strong>Sunset sundowners</strong><small>Slow down and enjoy the changing sky</small></div><ArrowUpRight size={17} /></a>
            <a href="#hl-book"><span>04</span><div><strong>Private group experiences</strong><small>Plan a special trip with your people</small></div><ArrowUpRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="hl-packages" id="hl-packages">
        <div className="hl-packages-heading">
          <span className="hl-kicker">MAKE IT YOUR OWN</span>
          <h2>Choose your <i>adventure.</i></h2>
          <p>Explore example packages and see what's included before enquiring.</p>
        </div>

        <div className="hl-package-layout">
          <div className="hl-package-tabs">
            <button className={activePackage === "escape" ? "hl-package-tab active" : "hl-package-tab"} onClick={() => setActivePackage("escape")}>
              <span>01</span><span><strong>The Wilderness Escape</strong><small>For a reset</small></span><ArrowRight size={17} />
            </button>
            <button className={activePackage === "safari" ? "hl-package-tab active" : "hl-package-tab"} onClick={() => setActivePackage("safari")}>
              <span>02</span><span><strong>Safari & Stay</strong><small>For explorers</small></span><ArrowRight size={17} />
            </button>
            <button className={activePackage === "family" ? "hl-package-tab active" : "hl-package-tab"} onClick={() => setActivePackage("family")}>
              <span>03</span><span><strong>The Family Adventure</strong><small>For your crew</small></span><ArrowRight size={17} />
            </button>
          </div>

          <article className="hl-package-detail">
            <div className="hl-package-detail-top">
              <span>SELECTED EXPERIENCE</span>
              <span>0{activePackage === "escape" ? "1" : activePackage === "safari" ? "2" : "3"} / 03</span>
            </div>
            <h3>{currentPackage.title}</h3>
            <p>{currentPackage.description}</p>
            <strong className="hl-package-price">{currentPackage.price}<small> / PACKAGE · SAMPLE</small></strong>
            <div className="hl-includes">
              <span>PACKAGE INCLUDES</span>
              {currentPackage.includes.map((item) => (
                <div key={item}><Check size={16} /> {item}</div>
              ))}
            </div>
            <a className="hl-button" href="#hl-book">ENQUIRE ABOUT THIS PACKAGE <ArrowRight size={16} /></a>
            <small className="hl-package-disclaimer">Rates and inclusions are illustrative and not a live offer.</small>
          </article>
        </div>
      </section>

      <section className="hl-booking" id="hl-book">
        <div className="hl-booking-copy">
          <span className="hl-kicker">THE WILD IS CALLING</span>
          <h2>Your next story<br />starts <i>out here.</i></h2>
          <p>
            Tell us your dates, group size and the kind of experience
            you have in mind. A real version could connect this enquiry
            to the lodge's email, WhatsApp or booking system.
          </p>
          <div className="hl-booking-assurances">
            <span><Check size={16} /> Personalised enquiry</span>
            <span><Check size={16} /> Stay and activity options</span>
            <span><Check size={16} /> Group and family requests</span>
          </div>
        </div>
        <BookingForm business="lodge" variant="lodge-form" />
      </section>

      <footer className="hl-footer">
        <Link className="hl-brand" to="/hospitality">
          <span className="hl-brand-symbol">✳</span>
          <span>ACACIA RIDGE<small>WILDERNESS LODGE · KENYA</small></span>
        </Link>
        <p>An immersive lodge website concept by NEXORA.</p>
        <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>BACK TO THE TOP ↑</a>
      </footer>
    </main>
  );
}

export default function HospitalitySiteDemo() {
  const { type } = useParams();

  if (type === "hotel") return <HotelSite />;
  if (type === "bnb") return <BnBSite />;
  if (type === "lodge") return <LodgeSite />;

  return (
    <main className="hs-not-found">
      <h1>Demo not found</h1>
      <p>Choose one of our hospitality website concepts.</p>
      <Link to="/hospitality">Back to hospitality demos</Link>
    </main>
  );
}