"use client";

import { useEffect, useState } from "react";
import CrystalPlateCard from "../../components/CrystalPlate"; // ✅ clear name
import { API_BASE } from "@/lib/api"; // ✅ correct import

export default function CrystalPlatesPage() {
  const [plates, setPlates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/crystalplates`) // ✅ no extra /api
      .then((res) => res.json())
      .then((data) => {
        setPlates(Array.isArray(data) ? data : []);
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
            <CrystalPlateCard
              key={plate._id}
              product={plate}
            />
          ))}
        </div>
      )}
    </div>
  );
}
