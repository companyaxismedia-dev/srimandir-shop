"use client";

import { useEffect, useState } from "react";
import ProductCard from "./CrystalPlate";

export default function HomeCrystalPlates() {
  const [plates, setPlates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/crystalplates")
      .then((res) => res.json())
      .then((data) => {
        // ✅ Safety check + show only 4 items
        setPlates(Array.isArray(data) ? data.slice(0, 4) : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching crystal plates:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return null;
  if (plates.length === 0) return null;

  return (
    <section className="px-6 md:px-10 py-16 bg-[#0f060b]">
      <h2 className="text-3xl font-bold text-white mb-8">
        Crystal Plates
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {plates.map((plate) => (
          <ProductCard
            key={plate._id}
            product={plate}
          />
        ))}
      </div>
    </section>
  );
}
