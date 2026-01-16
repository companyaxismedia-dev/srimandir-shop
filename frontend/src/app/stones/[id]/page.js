"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { API_BASE } from "@/lib/api"; // ✅ named import

export default function StoneDetailPage() {
  const { id } = useParams();

  const [stone, setStone] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`${API_BASE}/stones/${id}`) // ✅ no extra /api
      .then((res) => {
        if (!res.ok) throw new Error("Invalid stone");
        return res.json();
      })
      .then((data) => {
        setStone(data);
        setActiveImage(0);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="p-10 text-white">Loading...</div>;
  }

  if (!stone || !stone.images?.length) {
    return <div className="p-10 text-white">Stone not found</div>;
  }

  return (
    <div className="bg-[#140810] min-h-screen text-white p-10">
      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT IMAGE */}
        <div>
          <div className="w-full h-[420px] bg-black rounded-lg flex items-center justify-center">
            <img
              src={stone.images[activeImage]}
              alt={stone.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <div className="flex gap-3 mt-4 flex-wrap">
            {stone.images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-20 h-20 border cursor-pointer flex items-center justify-center ${
                  activeImage === i
                    ? "border-orange-500"
                    : "border-gray-600"
                }`}
              >
                <img
                  src={img}
                  alt=""
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT INFO */}
        <div>
          <h1 className="text-3xl font-bold">{stone.name}</h1>

          <p className="text-orange-500 text-2xl mt-2">
            ₹{stone.price}
          </p>

          <p className="mt-4 text-gray-300">
            {stone.description}
          </p>

          <div className="flex gap-4 mt-6">
            <button className="bg-orange-500 px-6 py-3 rounded">
              Add to Cart
            </button>
            <button className="bg-green-600 px-6 py-3 rounded">
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
