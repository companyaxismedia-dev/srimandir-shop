"use client";

import Link from "next/link";

export default function SpiritualKitCard({ kit }) {
  if (!kit) return null;

  const image =
    Array.isArray(kit.images) && kit.images.length > 0
      ? kit.images[0]
      : "/products/placeholder.webp";

  return (
    <div className="bg-[#140810] rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition">
      
      {/* IMAGE */}
      <Link href={`/spiritualkits/${kit._id}`}>
        <div className="h-56 w-full bg-black flex items-center justify-center cursor-pointer">
          <img
            src={image}
            alt={`${kit.name} | Sri Mandir Shop`}
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
          {kit.name}
        </h3>

        {kit.shortDescription && (
          <p className="text-xs text-gray-400 mt-1 line-clamp-2">
            {kit.shortDescription}
          </p>
        )}

        <div className="mt-2">
          <span className="text-orange-400 font-bold">
            ₹{kit.price}
          </span>

          {kit.mrp > kit.price && (
            <span className="ml-2 text-gray-500 line-through text-xs">
              ₹{kit.mrp}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
