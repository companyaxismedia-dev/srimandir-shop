"use client";

import { useEffect, useState } from "react";
import ProductCard from "../../components/CrystalPlate";

export default function CrystalPlatesPage() {
  const [plates, setPlates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/crystalplates")
      .then((res) => res.json())
      .then((data) => {
        // ✅ Safety check
        if (Array.isArray(data)) {
          setPlates(data);
        } else {
          setPlates([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching crystal plates:", err);
        setPlates([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="p-10 bg-[#140810] text-white min-h-screen">
        Loading crystal plates...
      </div>
    );
  }

  return (
    <div className="p-10 bg-[#140810] text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        Crystal Plates
      </h1>

      {plates.length === 0 ? (
        <p>No crystal plates found</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {plates.map((plate) => (
            <ProductCard
              key={plate._id}
              product={plate}
            />
          ))}
        </div>
      )}
    </div>
  );
}
