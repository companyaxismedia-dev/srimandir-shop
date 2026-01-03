"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ✅ LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/Sri Mandir_Main Logo.svg"
            alt="Sri Mandir Logo"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* ✅ MAIN MENU */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-orange-600">
            Home
          </Link>

          <Link href="/products" className="hover:text-orange-600">
            Products
          </Link>

          <Link href="/stones" className="hover:text-orange-600">
            Stones
          </Link>

          <Link href="/crystalPlates" className="hover:text-orange-600">
            Crystal Plates
          </Link>

          {/* 🔥 NEW: SPIRITUAL KITS */}
          <Link href="/spiritualkits" className="hover:text-orange-600">
            Spiritual Kits
          </Link>

          <Link href="/about" className="hover:text-orange-600">
            About
          </Link>

          <Link href="/contact" className="hover:text-orange-600">
            Contact
          </Link>
        </nav>

        {/* ✅ RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="relative text-gray-700 hover:text-orange-600 text-xl"
          >
            🛒
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-orange-600 text-white text-xs px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-lg text-sm">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
