"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SpiritualKitCard from "./SpiritualKitCard";
import { API_BASE } from "../lib/api";

export default function HomeSpiritualKits() {
  const [kits, setKits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/spiritualkits`)
      .then((res) => res.json())
      .then((data) => {
        // Sirf first 4 kits home page ke liye
        setKits(Array.isArray(data) ? data.slice(0, 4) : []);
      })
      .catch((err) => {
        console.error("Home spiritual kits error:", err);
        setKits([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="px-6 md:px-10 py-12 bg-[#0f060b]">
        <p className="text-gray-400">Loading spiritual kits…</p>
      </section>
    );
  }

  return (
    <section className="px-6 md:px-10 py-12 bg-[#0f060b] text-white">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">
          Spiritual Kits
        </h2>

        <Link
          href="/spiritualkits"
          className="text-orange-400 hover:underline"
        >
          View All →
        </Link>
      </div>

      {/* CONTENT */}
      {kits.length === 0 ? (
        <p className="text-gray-400">
          No spiritual kits available
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {kits.map((kit) => (
            <SpiritualKitCard
              key={kit._id}
              kit={kit}
            />
          ))}
        </div>
      )}
    </section>
  );
}
