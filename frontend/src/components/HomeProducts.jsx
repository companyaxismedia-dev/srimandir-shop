"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { API_BASE } from "../lib/api";

export default function HomeProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/products/featured`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(Array.isArray(data) ? data.slice(0, 4) : []);
      })
      .catch((err) => {
        console.error("HomeProducts error:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;

  return (
    <section className="px-6 md:px-10 py-16 bg-[#140810]">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">
          Featured Products
        </h2>
        <a href="/products" className="text-orange-400 hover:underline">
          View All →
        </a>
      </div>

      {products.length === 0 ? (
        <p className="text-gray-400">No products available</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
