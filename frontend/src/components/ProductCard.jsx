"use client";

import Link from "next/link";

export default function ProductCard({ product }) {
  // ✅ image safety (same as StoneCard)
  const image =
    Array.isArray(product?.images) && product.images.length > 0
      ? product.images[0]
      : "/products/placeholder.webp";

  return (
    <div className="bg-[#140810] rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition">
      
      {/* IMAGE */}
      <Link href={`/products/${product._id}`}>
        <div className="h-56 w-full bg-black flex items-center justify-center cursor-pointer">
          <img
            src={image}
            alt={`${product.name} | Sri Mandir Shop`}
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
          {product.name}
        </h3>

        <p className="text-orange-400 font-bold mt-1">
          ₹{product.price}
        </p>
      </div>
    </div>
  );
}
