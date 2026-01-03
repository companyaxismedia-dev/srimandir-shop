"use client";

import { useEffect, useState } from "react";
import StoneCard from "./StoneCard";
import { API_BASE } from "../lib/api";

export default function HomeStones() {
  const [stones, setStones] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/stones`)
      .then((res) => res.json())
      .then((data) => {
        setStones(Array.isArray(data) ? data.slice(0, 4) : []);
      })
      .catch(console.error);
  }, []);

  if (!stones.length) return null;

  return (
    <section className="px-6 md:px-10 py-12 bg-[#140810]">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">
          Healing Stones
        </h2>

        <a
          href="/stones"
          className="text-orange-400 hover:underline"
        >
          View All →
        </a>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stones.map((stone) => (
          <StoneCard
            key={stone._id}
            stone={stone}
          />
        ))}
      </div>
    </section>
  );
}
