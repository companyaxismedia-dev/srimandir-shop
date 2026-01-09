"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

import HeroSlider from "../components/HeroSlider";
import TrustBar from "../components/TrustBar";
import ProductCategories from "../components/ProductCategories";
import ProductCard from "../components/ProductCard";
import StoneCard from "../components/StoneCard";
import CrystalPlate from "../components/CrystalPlate";
import SpiritualKitCard from "../components/SpiritualKitCard";

// ✅ API BASE (PRODUCTION SAFE)
const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE ||
  "https://srimandir-backend.onrender.com/api";

// ✅ Axios instance with timeout (IMPORTANT)
const api = axios.create({
  baseURL: API_BASE,
  timeout: 15000,
});

export default function HomePage() {
  const [featured, setFeatured] = useState([]);
  const [stones, setStones] = useState([]);
  const [crystalPlates, setCrystalPlates] = useState([]);
  const [spiritualKits, setSpiritualKits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const [
          featuredRes,
          stonesRes,
          platesRes,
          kitsRes,
        ] = await Promise.allSettled([
          api.get("/products/featured"),
          api.get("/stones"),
          api.get("/crystalplates"),
          api.get("/spiritualkits"),
        ]);

        if (featuredRes.status === "fulfilled") {
          setFeatured(
            Array.isArray(featuredRes.value.data)
              ? featuredRes.value.data.slice(0, 4)
              : []
          );
        }

        if (stonesRes.status === "fulfilled") {
          setStones(
            Array.isArray(stonesRes.value.data)
              ? stonesRes.value.data.slice(0, 4)
              : []
          );
        }

        if (platesRes.status === "fulfilled") {
          setCrystalPlates(
            Array.isArray(platesRes.value.data)
              ? platesRes.value.data.slice(0, 4)
              : []
          );
        }

        if (kitsRes.status === "fulfilled") {
          setSpiritualKits(
            Array.isArray(kitsRes.value.data)
              ? kitsRes.value.data.slice(0, 4)
              : []
          );
        }
      } catch (err) {
        console.error("Homepage API error:", err);
        alert(
          err?.response?.data?.message ||
            err.message ||
            "Backend not responding"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  return (
    <>
      <HeroSlider />
      <TrustBar />
      <ProductCategories />

      {/* ⭐ FEATURED PRODUCTS */}
      <section className="px-6 md:px-10 py-16 bg-[#140810] text-white">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Link href="/products" className="text-orange-400 hover:underline">
            View All →
          </Link>
        </div>

        {loading ? (
          <p className="text-gray-400">Loading products...</p>
        ) : featured.length === 0 ? (
          <p className="text-gray-400">No products available</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featured.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* 🪨 HEALING STONES */}
      <section className="px-6 md:px-10 py-16 bg-[#0f060b] text-white">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Healing Stones</h2>
          <Link href="/stones" className="text-orange-400 hover:underline">
            View All →
          </Link>
        </div>

        {stones.length === 0 ? (
          <p className="text-gray-400">No stones available</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stones.map((stone) => (
              <StoneCard key={stone._id} stone={stone} />
            ))}
          </div>
        )}
      </section>

      {/* 💠 CRYSTAL PLATES */}
      <section className="px-6 md:px-10 py-16 bg-[#140810] text-white">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Crystal Plates</h2>
          <Link
            href="/crystalPlates"
            className="text-orange-400 hover:underline"
          >
            View All →
          </Link>
        </div>

        {crystalPlates.length === 0 ? (
          <p className="text-gray-400">No crystal plates available</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {crystalPlates.map((plate) => (
              <CrystalPlate key={plate._id} product={plate} />
            ))}
          </div>
        )}
      </section>

      {/* 🧿 SPIRITUAL KITS */}
      <section className="px-6 md:px-10 py-16 bg-[#0f060b] text-white">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Spiritual Kits</h2>
          <Link
            href="/spiritualkits"
            className="text-orange-400 hover:underline"
          >
            View All →
          </Link>
        </div>

        {spiritualKits.length === 0 ? (
          <p className="text-gray-400">No kits available</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {spiritualKits.map((kit) => (
              <SpiritualKitCard key={kit._id} kit={kit} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
