"use client";

import { useEffect, useState } from "react";
import StoneCard from "./StoneCard";

export default function HomeStones() {
  const [stones, setStones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/stones")
      .then((res) => res.json())
      .then((data) => {
        setStones(Array.isArray(data) ? data.slice(0, 4) : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return null;

  if (stones.length === 0) return null;

  return (
    <section className="px-6 md:px-10 py-16 bg-[#140810]">
      <h2 className="text-3xl font-bold text-white mb-8">
        Healing Stones
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stones.map((stone) => (
          <StoneCard key={stone._id} stone={stone} />
        ))}
      </div>
    </section>
  );
}
