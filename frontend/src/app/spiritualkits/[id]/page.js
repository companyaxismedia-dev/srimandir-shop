"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { API_BASE } from "@/lib/api"; // ✅ correct import

export default function SpiritualKitDetailPage() {
  const { id } = useParams();

  const [kit, setKit] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`${API_BASE}/spiritualkits/${id}`) // ✅ no extra /api
      .then((res) => {
        if (!res.ok) throw new Error("Invalid spiritual kit");
        return res.json();
      })
      .then((data) => {
        setKit(data);
        setActiveImage(0);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching spiritual kit:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="p-10 bg-[#140810] text-white min-h-screen">
        Loading spiritual kit...
      </div>
    );
  }

  if (!kit || !kit.images?.length) {
    return (
      <div className="p-10 bg-[#140810] text-white min-h-screen">
        Spiritual kit not found
      </div>
    );
  }

  return (
    <div className="bg-[#140810] min-h-screen text-white px-6 md:px-10 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT IMAGE */}
        <div>
          <div className="w-full h-[420px] bg-black rounded-xl flex items-center justify-center">
            <img
              src={kit.images[activeImage]}
              alt={kit.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <div className="flex gap-3 mt-4 flex-wrap">
            {kit.images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-20 h-20 border cursor-pointer flex items-center justify-center rounded ${
                  activeImage === i
                    ? "border-orange-500"
                    : "border-gray-600"
                }`}
              >
                <img
                  src={img}
                  alt={`${kit.name}-${i}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT INFO */}
        <div>
          <h1 className="text-3xl font-bold">{kit.name}</h1>

          <p className="text-orange-500 text-2xl mt-2">
            ₹{kit.price}
            {kit.mrp > kit.price && (
              <span className="text-gray-400 line-through text-lg ml-3">
                ₹{kit.mrp}
              </span>
            )}
          </p>

          {kit.shortDescription && (
            <p className="mt-3 text-gray-300">
              {kit.shortDescription}
            </p>
          )}

          {kit.description && (
            <p className="mt-4 text-gray-300 leading-relaxed">
              {kit.description}
            </p>
          )}

          {kit.benefits?.length > 0 && (
            <ul className="mt-4 list-disc list-inside text-gray-300">
              {kit.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          )}

          {kit.itemsIncluded?.length > 0 && (
            <>
              <h3 className="mt-6 text-xl font-semibold">
                Items Included
              </h3>
              <ul className="mt-2 list-disc list-inside text-gray-300">
                {kit.itemsIncluded.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}

          <div className="flex gap-4 mt-8">
            <button className="bg-orange-500 px-6 py-3 rounded hover:bg-orange-600 transition">
              Add to Cart
            </button>
            <button className="bg-green-600 px-6 py-3 rounded hover:bg-green-700 transition">
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
