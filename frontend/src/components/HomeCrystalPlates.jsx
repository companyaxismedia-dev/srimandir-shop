"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CrystalPlateCard from "./CrystalPlate";
import { API_BASE } from "../lib/api";

export default function HomeCrystalPlates() {
  const [plates, setPlates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/crystalplates`)
      .then((res) => res.json())
      .then((data) => {
        // Home page par sirf 4 crystal plates
        setPlates(Array.isArray(data) ? data.slice(0, 4) : []);
      })
      .catch((err) => {
        console.error("HomeCrystalPlates error:", err);
        setPlates([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="px-6 md:px-10 py-12 bg-[#0f060b]">
        <p className="text-gray-400">Loading crystal plates…</p>
      </section>
    );
  }

  return (
    <section className="px-6 md:px-10 py-12 bg-[#0f060b] text-white">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">
          Crystal Plates
        </h2>

        {/* ✅ Next.js Link for fast navigation */}
        <Link
          href="/crystalPlates"
          className="text-orange-400 hover:underline"
        >
          View All →
        </Link>
      </div>

      {/* CONTENT */}
      {plates.length === 0 ? (
        <p className="text-gray-400">
          No crystal plates available
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {plates.map((plate) => (
            <CrystalPlateCard
              key={plate._id}
              product={plate}
            />
          ))}
        </div>
      )}
    </section>
  );
}
