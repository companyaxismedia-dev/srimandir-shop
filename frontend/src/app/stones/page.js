"use client";

import { useEffect, useState } from "react";
import StoneCard from "../../components/StoneCard";
import { API_BASE } from "@/lib/api"; // ✅ correct import

export default function StonesPage() {
  const [stones, setStones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/stones`) // ✅ no extra /api
      .then((res) => res.json())
      .then((data) => {
        setStones(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="pt-24 px-6 bg-[#140810] min-h-screen text-white">
        Loading stones...
      </div>
    );
  }

  return (
    <main className="pt-24 px-6 bg-[#140810] min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-8">
        Healing Stones
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stones.map((stone) => (
          <StoneCard key={stone._id} stone={stone} />
        ))}
      </div>
    </main>
  );
}
