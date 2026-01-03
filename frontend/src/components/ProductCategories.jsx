"use client";

import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    title: "Healing Stones",
    image: "/stones/pyrite/White-Raw-Stones-1.webp",
    href: "/stones",
  },
  {
    title: "Pyrite Bracelets",
    image: "/products/pyrite/pyritebracelets-1.webp",
    href: "/products",
  },
  {
    title: "Crystal Plates",
    image: "/crystals/plate/Selenite-Plate-to-Charge-Reiki-Crystal-1.webp",
    href: "/crystalPlates", // ✅ FIXED
  },
  {
    title: "Spiritual Kits",
    image: "/spiritualkits/poojakits/Sheesham-Wood-Pooja-Organizer-Box-4.webp",
    href: "/spiritualkits",
  },
];

export default function ProductCategories() {
  return (
    <section className="py-16 px-6 md:px-10 bg-gradient-to-b from-[#140810] to-[#0c0508] text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Explore Categories
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((cat) => (
          <Link
            key={cat.title}
            href={cat.href}
            className="group relative h-64 rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-semibold mb-3">
                {cat.title}
              </h3>

              <span className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition px-5 py-2 rounded-lg text-sm font-semibold w-fit">
                Explore →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
