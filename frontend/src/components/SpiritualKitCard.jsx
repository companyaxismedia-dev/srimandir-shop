"use client";

import Link from "next/link";

export default function SpiritualKitCard({ kit }) {
  if (!kit?._id) return null;

  const image =
    Array.isArray(kit.images) && kit.images.length > 0
      ? kit.images[0]
      : "/products/placeholder.webp";

  return (
    <Link href={`/spiritualkits/${kit._id}`}>
      <div className="bg-[#140810] rounded-xl shadow hover:scale-[1.02] transition cursor-pointer">
        <div className="h-56 w-full bg-black flex items-center justify-center">
          <img
            src={image}
            alt={kit.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <div className="p-4 text-white">
          <h3 className="font-semibold line-clamp-2">{kit.name}</h3>

          <p className="text-orange-400 font-bold mt-1">
            ₹{kit.price}
          </p>

          {kit.mrp > kit.price && (
            <p className="text-gray-400 text-xs line-through">
              ₹{kit.mrp}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
