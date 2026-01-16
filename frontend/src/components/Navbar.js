"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-[#f8f3e9] shadow-sm border-b border-[#e7dcc8]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* ✅ LOGO (smaller & clean) */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/Srimandirlogo.webp.jpeg"
            alt="Sri Mandir Logo"
            width={80}   // 🔥 smaller logo
            height={80}
            priority
            className="object-contain"
          />
        </Link>

        {/* ✅ MAIN MENU */}
        <nav className="hidden md:flex gap-8 text-[#3b2f1e] font-medium">
          <Link href="/" className="hover:text-orange-600">Home</Link>
          <Link href="/products" className="hover:text-orange-600">Products</Link>
          <Link href="/stones" className="hover:text-orange-600">Stones</Link>
          <Link href="/crystalPlates" className="hover:text-orange-600">Crystal Plates</Link>
          <Link href="/spiritualkits" className="hover:text-orange-600">Spiritual Kits</Link>
          <Link href="/about" className="hover:text-orange-600">About</Link>
          <Link href="/contact" className="hover:text-orange-600">Contact</Link>
        </nav>

        {/* ✅ RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="relative text-[#3b2f1e] hover:text-orange-600 text-xl"
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
