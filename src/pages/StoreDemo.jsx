import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaShoppingBag,
  FaTruck,
  FaShieldAlt,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

export default function StoreDemo() {
  const products = [
    {
      name: "Nova Headphones",
      price: "$249",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Aura Smartwatch",
      price: "$189",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Luxe Workstation",
      price: "$1299",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6efe7] text-[#21180f] overflow-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#f6efe7]/80 backdrop-blur-xl border-b border-black/10">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-[5px]">
            LUXEMART
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#shop" className="hover:text-orange-700 transition">
              Shop
            </a>
            <a href="#story" className="hover:text-orange-700 transition">
              Story
            </a>
            <a href="#benefits" className="hover:text-orange-700 transition">
              Benefits
            </a>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold hover:text-orange-700 transition"
          >
            <FaArrowLeft />
            Back
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen pt-28 px-8 flex items-center">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[6px] text-orange-700 font-bold mb-5">
              Premium Storefront Prototype
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              A Clean Online Store That Makes Products Feel Expensive.
            </h1>

            <p className="mt-8 text-lg text-[#5f5144] leading-relaxed max-w-xl">
              LUXEMART is a modern e-commerce website concept for fashion,
              gadgets, accessories, beauty brands, and premium product sellers.
            </p>

            <div className="mt-10 flex gap-5 flex-wrap">
              <a
                href="#shop"
                className="px-8 py-4 bg-[#21180f] text-white rounded-full font-bold hover:scale-105 transition inline-flex items-center gap-3"
              >
                Explore Collection
                <FaArrowRight />
              </a>

              <a
                href="#story"
                className="px-8 py-4 border border-[#21180f] rounded-full font-bold hover:bg-[#21180f] hover:text-white transition"
              >
                Brand Story
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-orange-300 rounded-full blur-3xl opacity-60"></div>

            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1400&auto=format&fit=crop"
              alt="Luxury store"
              className="relative rounded-[3rem] h-[580px] w-full object-cover shadow-2xl"
            />

            <div className="absolute bottom-8 left-8 right-8 bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl">
              <p className="text-sm text-[#5f5144]">Featured Collection</p>
              <h3 className="text-2xl font-black">Modern Essentials</h3>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS STRIP */}
      <section id="benefits" className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/70 rounded-3xl p-8 shadow-sm">
            <FaTruck className="text-4xl text-orange-700 mb-4" />
            <h3 className="text-xl font-black mb-2">Fast Delivery</h3>
            <p className="text-[#5f5144]">
              Designed for stores that want customers to trust the buying process.
            </p>
          </div>

          <div className="bg-white/70 rounded-3xl p-8 shadow-sm">
            <FaShieldAlt className="text-4xl text-orange-700 mb-4" />
            <h3 className="text-xl font-black mb-2">Secure Checkout</h3>
            <p className="text-[#5f5144]">
              Clean trust sections make your business look more reliable.
            </p>
          </div>

          <div className="bg-white/70 rounded-3xl p-8 shadow-sm">
            <FaShoppingBag className="text-4xl text-orange-700 mb-4" />
            <h3 className="text-xl font-black mb-2">Premium Branding</h3>
            <p className="text-[#5f5144]">
              Strong visuals help products feel more valuable and professional.
            </p>
          </div>
        </div>
      </section>

      {/* SHOP SECTION */}
      <section id="shop" className="max-w-7xl mx-auto px-8 py-24">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-8 mb-14">
          <div>
            <p className="uppercase tracking-[5px] text-orange-700 font-bold mb-4">
              Collection
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              Featured Products
            </h2>
          </div>

          <p className="max-w-md text-[#5f5144]">
            This section shows a customer how their online shop could present
            products with a clean, premium, high-trust layout.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:-translate-y-3 transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-80 w-full object-cover"
              />

              <div className="p-7">
                <div className="flex text-orange-600 gap-1 mb-4">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <h3 className="text-2xl font-black">{product.name}</h3>

                <div className="flex justify-between items-center mt-5">
                  <p className="text-xl font-black text-orange-700">
                    {product.price}
                  </p>

                  <button className="px-5 py-3 bg-[#21180f] text-white rounded-full font-bold hover:scale-105 transition">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY SECTION */}
      <section id="story" className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center bg-[#21180f] text-white rounded-[3rem] p-10 md:p-16">
          <img
            src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1200&auto=format&fit=crop"
            alt="Shopping experience"
            className="rounded-[2rem] h-[430px] w-full object-cover"
          />

          <div>
            <p className="uppercase tracking-[5px] text-orange-300 font-bold mb-4">
              Brand Experience
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-6">
              More Than Products. A Complete Shopping Feeling.
            </h2>

            <p className="text-white/70 leading-relaxed mb-8">
              This prototype is built to show how an online store can sell a
              brand, not just items. It gives customers confidence through
              visuals, structure, trust signals, and clear calls to action.
            </p>

            <Link
              to="/"
              className="inline-block px-8 py-4 rounded-full bg-orange-300 text-black font-bold hover:scale-105 transition"
            >
              Return to NEXORA
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-[#5f5144] border-t border-black/10">
        © 2026 LUXEMART — Premium E-Commerce Website Prototype
      </footer>
    </div>
  );
}