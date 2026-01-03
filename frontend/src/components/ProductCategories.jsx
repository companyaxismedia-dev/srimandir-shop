"use client";

import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    title: "Healing Stones",
    image: "/stones/pyrite/White-Raw-Stones-1.webp",
    href: "/stones", // ✅ STONES PAGE
  },
  {
    title: "Pyrite Bracelets",
    image: "/products/pyrite/pyritebracelets-1.webp",
    href: "/products", // ✅ PRODUCTS PAGE
  },
  {
    title: "Crystal Plates",
    image: "/crystals/plate/Selenite-Plate-to-Charge-Reiki-Crystal-1.webp",
    href: "/crystalPlates", // ✅ STONES PAGE
  },
  {
    title: "Spiritual Kits Plates",
    image: "/spiritualkits/poojakits/Sheesham-Wood-Pooja-Organizer-Box-4.webp",
    href: "/spiritualkits", // ✅ STONES PAGE
  },
];

export default function ProductCategories() {
  return (
    <section className="py-14 px-6 md:px-10 bg-[#140810] text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Explore Categories
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((cat) => (
          <Link
            key={cat.title}
            href={cat.href}
            className="group relative h-60 rounded-2xl overflow-hidden bg-black"
          >
            {/* IMAGE */}
            <Image
              src={cat.image}
              alt={`${cat.title} | Sri Mandir Shop`}
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/45 flex flex-col justify-end p-6">
              <h3 className="text-2xl font-semibold mb-2">
                {cat.title}
              </h3>

              <span className="inline-block w-fit bg-orange-500 hover:bg-orange-600 transition px-4 py-2 rounded-lg text-sm font-medium">
                Explore →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
