"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f060c] text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-4">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-3">
            SriMandir
          </h2>
          <p className="text-sm leading-relaxed">
            Authentic puja samagri, healing stones & spiritual products
            delivered with devotion and purity.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-orange-400">Home</Link></li>
            <li><Link href="/products" className="hover:text-orange-400">Products</Link></li>
            <li><Link href="/about" className="hover:text-orange-400">About</Link></li>
            <li><Link href="/contact" className="hover:text-orange-400">Contact</Link></li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Categories
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/category/healing-stones" className="hover:text-orange-400">
                Healing Stones
              </Link>
            </li>
            <li>
              <Link href="/category/pyrite-bracelets" className="hover:text-orange-400">
                Pyrite Bracelets
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Contact Us
          </h3>
          <p className="text-sm">📍 India</p>
          <p className="text-sm mt-1">📧 support@srimandir.com</p>
          <p className="text-sm mt-1">📞 +91 98715 84001</p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} SriMandir. All rights reserved.
      </div>
    </footer>
  );
}
