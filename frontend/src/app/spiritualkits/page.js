"use client";

import { useEffect, useState } from "react";
import SpiritualKitCard from "../../components/SpiritualKitCard";

const API = "http://localhost:5000/api/spiritualkits";

export default function SpiritualKitsPage() {
  const [kits, setKits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setKits(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="px-6 md:px-10 py-16 bg-[#140810] min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-8">
        Spiritual Kits
      </h1>

      {loading && <p>Loading...</p>}

      {!loading && kits.length === 0 && (
        <p className="text-gray-400">No spiritual kits available.</p>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {kits.map((kit) => (
          <SpiritualKitCard key={kit._id} kit={kit} />
        ))}
      </div>
    </div>
  );
}
