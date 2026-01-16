"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

// UI Components
import HeroSlider from "../components/HeroSlider";
import TrustBar from "../components/TrustBar";
import ProductCategories from "../components/ProductCategories";

// Cards
import ProductCard from "../components/ProductCard";
import StoneCard from "../components/StoneCard";
import CrystalPlate from "../components/CrystalPlate";
import SpiritualKitCard from "../components/SpiritualKitCard";

// API Base (single source of truth)
import { API_BASE } from "../lib/api";

// Axios instance (safe for Render free tier)
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
    const loadHomeData = async () => {
      try {
        const [featuredRes, stonesRes, platesRes, kitsRes] =
          await Promise.allSettled([
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
        console.error("Home page API error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadHomeData();
  }, []);

  return (
    <>
      {/* TOP SECTIONS */}
      <HeroSlider />
      <TrustBar />
      <ProductCategories />

      {/* ⭐ FEATURED PRODUCTS */}
      <Section
        title="Featured Products"
        link="/products"
        loading={loading}
        emptyText="No products available"
      >
        {featured.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Section>

      {/* 🪨 HEALING STONES */}
      <Section
        title="Healing Stones"
        link="/stones"
        dark
        emptyText="No stones available"
      >
        {stones.map((stone) => (
          <StoneCard key={stone._id} stone={stone} />
        ))}
      </Section>

      {/* 💠 CRYSTAL PLATES */}
      <Section
        title="Crystal Plates"
        link="/crystalPlates"
        emptyText="No crystal plates available"
      >
        {crystalPlates.map((plate) => (
          <CrystalPlate key={plate._id} product={plate} />
        ))}
      </Section>

      {/* 🧿 SPIRITUAL KITS */}
      <Section
        title="Spiritual Kits"
        link="/spiritualkits"
        dark
        emptyText="No kits available"
      >
        {spiritualKits.map((kit) => (
          <SpiritualKitCard key={kit._id} kit={kit} />
        ))}
      </Section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Reusable Section Component (Home Page Only)                         */
/* ------------------------------------------------------------------ */

function Section({
  title,
  link,
  children,
  loading = false,
  emptyText = "No data found",
  dark = false,
}) {
  return (
    <section
      className={`px-6 md:px-10 py-16 text-white ${
        dark ? "bg-[#0f060b]" : "bg-[#140810]"
      }`}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">{title}</h2>
        <Link href={link} className="text-orange-400 hover:underline">
          View All →
        </Link>
      </div>

      {loading ? (
        <p className="text-gray-400">
          Loading… (Render free tier may take ~30s on first load)
        </p>
      ) : children && children.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {children}
        </div>
      ) : (
        <p className="text-gray-400">{emptyText}</p>
      )}
    </section>
  );
}
