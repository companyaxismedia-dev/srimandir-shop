"use client";

import { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard";

export default function CategoryClient({ slug }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    fetch(`http://localhost:5000/api/products/category/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setItems(data);
        } else {
          setItems([]);
        }
        setLoading(false);
      })
      .catch(() => {
        setItems([]);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="p-10 bg-[#140810] text-white min-h-screen">
        Loading products...
      </div>
    );
  }

  return (
    <div className="p-10 bg-[#140810] min-h-screen text-white">
      <h1 className="text-3xl mb-6 capitalize">
        {slug.replaceAll("-", " ")}
      </h1>

      {items.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}
