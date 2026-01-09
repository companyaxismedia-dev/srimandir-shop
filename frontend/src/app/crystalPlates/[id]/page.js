"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import API_BASE_URL from "@/lib/api";

export default function CrystalPlateDetailPage() {
  const { id } = useParams();

  const [plate, setPlate] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`${API_BASE_URL}/api/crystalplates/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Invalid crystal plate");
        return res.json();
      })
      .then((data) => {
        setPlate(data);
        setActiveImage(0);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching crystal plate:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="p-10 bg-[#140810] text-white min-h-screen">
        Loading crystal plate...
      </div>
    );
  }

  if (!plate || !plate.images?.length) {
    return (
      <div className="p-10 bg-[#140810] text-white min-h-screen">
        Crystal plate not found
      </div>
    );
  }

  return (
    <div className="bg-[#140810] min-h-screen text-white p-10">
      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT IMAGE */}
        <div>
          <div className="w-full h-[420px] bg-black rounded-lg flex items-center justify-center">
            <img
              src={plate.images[activeImage]}
              alt={plate.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <div className="flex gap-3 mt-4 flex-wrap">
            {plate.images.map((img, i) => (
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
                  alt={`${plate.name}-${i}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT INFO */}
        <div>
          <h1 className="text-3xl font-bold">{plate.name}</h1>

          <p className="text-orange-500 text-2xl mt-2">
            ₹{plate.price}
            {plate.mrp > plate.price && (
              <span className="text-gray-400 line-through text-lg ml-3">
                ₹{plate.mrp}
              </span>
            )}
          </p>

          {plate.shortDescription && (
            <p className="mt-3 text-gray-300">
              {plate.shortDescription}
            </p>
          )}

          <p className="mt-4 text-gray-300">
            {plate.description}
          </p>

          {plate.benefits?.length > 0 && (
            <ul className="mt-4 list-disc list-inside text-gray-300">
              {plate.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
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
