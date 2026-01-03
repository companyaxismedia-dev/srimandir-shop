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

const API_BASE = "http://localhost:5000/api";

export default function HomePage() {
  const [featured, setFeatured] = useState([]);
  const [stones, setStones] = useState([]);
  const [crystalPlates, setCrystalPlates] = useState([]);
  const [spiritualKits, setSpiritualKits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ⭐ FEATURED PRODUCTS
        const featuredRes = await axios.get(
          `${API_BASE}/products/featured`
        );

        setFeatured(
          Array.isArray(featuredRes.data)
            ? featuredRes.data.slice(0, 4)
            : []
        );

        // 🪨 HEALING STONES
        const stonesRes = await axios.get(
          `${API_BASE}/stones`
        );

        setStones(
          Array.isArray(stonesRes.data)
            ? stonesRes.data.slice(0, 4)
            : []
        );

        // 💠 CRYSTAL PLATES
        const platesRes = await axios.get(
          `${API_BASE}/crystalplates`
        );

        setCrystalPlates(
          Array.isArray(platesRes.data)
            ? platesRes.data.slice(0, 4)
            : []
        );

        // 🧿 SPIRITUAL KITS
        const kitsRes = await axios.get(
          `${API_BASE}/spiritualkits`
        );

        setSpiritualKits(
          Array.isArray(kitsRes.data)
            ? kitsRes.data.slice(0, 4)
            : []
        );
      } catch (error) {
        console.error("Home page data error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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

          <Link
            href="/products"
            className="text-orange-400 font-semibold hover:underline"
          >
            View All →
          </Link>
        </div>

        {loading && <p>Loading...</p>}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>
      </section>

      {/* 🪨 HEALING STONES */}
      {!loading && stones.length > 0 && (
        <section className="px-6 md:px-10 py-16 bg-[#0f060b] text-white">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Healing Stones</h2>

            <Link
              href="/stones"
              className="text-orange-400 font-semibold hover:underline"
            >
              View All →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {stones.map((stone) => (
              <StoneCard
                key={stone._id}
                stone={stone}
              />
            ))}
          </div>
        </section>
      )}

      {/* 💠 CRYSTAL PLATES */}
      {!loading && crystalPlates.length > 0 && (
        <section className="px-6 md:px-10 py-16 bg-[#140810] text-white">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Crystal Plates</h2>

            <Link
              href="/crystalPlates"
              className="text-orange-400 font-semibold hover:underline"
            >
              View All →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {crystalPlates.map((plate) => (
              <CrystalPlate
                key={plate._id}
                plate={plate}
              />
            ))}
          </div>
        </section>
      )}

      {/* 🧿 SPIRITUAL KITS */}
      {!loading && spiritualKits.length > 0 && (
        <section className="px-6 md:px-10 py-16 bg-[#0f060b] text-white">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Spiritual Kits</h2>

            <Link
              href="/spiritualkits"
              className="text-orange-400 font-semibold hover:underline"
            >
              View All →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {spiritualKits.map((kit) => (
              <SpiritualKitCard
                key={kit._id}
                kit={kit}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
