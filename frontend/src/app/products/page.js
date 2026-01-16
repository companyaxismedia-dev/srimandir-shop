"use client";

import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { API_BASE } from "@/lib/api"; // ✅ single source of truth

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/products`) // ✅ clean & consistent
      .then((res) => res.json())
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setProducts([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="p-10 bg-[#140810] text-white min-h-screen">
        Loading products...
      </div>
    );
  }

  return (
    <div className="p-10 bg-[#140810] text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
