"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "/hero/ganesa.webp",
    title: "Authentic",
    highlight: "Puja Samagri",
    desc:
      "Pure, temple-grade puja items delivered to your doorstep with devotion and trust.",
    bg: "from-[#3a1c0f] to-[#140a05]",
  },
  {
    image:
      "/hero/kanha.webp",
    title: "Sacred Items for",
    highlight: "Every Ritual",
    desc:
      "Everything you need for daily puja and special occasions, all in one place.",
    bg: "from-[#1f3a3a] to-[#0f1f1f]",
  },
  {
    image:
      "/hero/samagri.webp",
    title: "Temple Grade",
    highlight: "Puja Essentials",
    desc:
      "Carefully sourced samagri used in temples across India.",
    bg: "from-[#3a2f1f] to-[#1f140a]",
  },
  {
    image:
      "/hero/mandir.webp",
    title: "Pure & Traditional",
    highlight: "Samagri",
    desc:
      "Maintain purity and devotion in every ritual with trusted products.",
    bg: "from-[#3b1f2f] to-[#1f0f17]",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* BACKGROUND GRADIENT */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${slide.bg}`}
      />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 grid md:grid-cols-[40%_60%] items-center gap-10">

        {/* LEFT CONTENT */}
        <div className="text-white">
          <p className="tracking-widest text-sm mb-3 opacity-80">
            SRI MANDIR SHOP
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {slide.title}
            <br />
            <span className="text-orange-400">
              {slide.highlight}
            </span>
          </h1>

          <p className="mt-5 text-lg opacity-90 max-w-md">
            {slide.desc}
          </p>

          <button className="mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-xl font-semibold transition">
            Shop Now
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src={slide.image}
            alt="Puja Samagri"
            loading="eager"
            referrerPolicy="no-referrer"
            className="w-full max-w-xl h-[420px] object-contain rounded-2xl shadow-2xl transition-all duration-700"
          />
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full cursor-pointer transition ${
              i === index
                ? "bg-orange-400 scale-110"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
