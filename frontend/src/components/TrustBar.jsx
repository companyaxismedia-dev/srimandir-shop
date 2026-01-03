"use client";

const items = [
  "Trusted by 30 Million+ Devotees",
  "100% Secure Payments",
  "Temple Grade Quality",
  "Pan-India Delivery",
  "India’s Largest App for Hindu Devotees",
];

export default function TrustBar() {
  return (
    <div className="relative overflow-hidden bg-orange-500 text-white py-3">
      
      {/* MOVING TRACK */}
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((text, i) => (
          <span
            key={i}
            className="mx-8 flex items-center gap-2 text-sm md:text-base font-medium"
          >
            <span className="h-2 w-2 rounded-full bg-white"></span>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
