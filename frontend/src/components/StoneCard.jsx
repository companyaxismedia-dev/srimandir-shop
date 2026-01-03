"use client";

import Link from "next/link";

export default function StoneCard({ stone }) {
  // ✅ image safety
  const image =
    Array.isArray(stone?.images) && stone.images.length > 0
      ? stone.images[0]
      : "/products/placeholder.webp";

  return (
    <div className="bg-[#140810] rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition">
      
      {/* IMAGE */}
      <Link href={`/stones/${stone._id}`}>
        <div className="h-56 w-full bg-black flex items-center justify-center cursor-pointer">
          <img
            src={image}
            alt={`${stone.name} | Sri Mandir Shop`}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/products/placeholder.webp";
            }}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </Link>

      {/* CONTENT */}
      <div className="p-4 text-white">
        <h3 className="font-semibold text-sm md:text-base line-clamp-2">
          {stone.name}
        </h3>

        <p className="text-orange-400 font-bold mt-1">
          ₹{stone.price}
        </p>
      </div>
    </div>
  );
}
