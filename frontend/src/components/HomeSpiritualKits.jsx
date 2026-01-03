import Image from "next/image";
import Link from "next/link";

export default function SpiritualKitCard({ kit }) {
  if (!kit?.images?.[0]) return null;

  return (
    <div className="bg-[#1a0c14] rounded-xl overflow-hidden shadow hover:scale-[1.02] transition">
      <Link href={`/spiritualkits/${kit._id}`}>
        <div className="relative h-56 w-full">
          <Image
            src={kit.images[0]}
            alt={kit.name}
            fill
            className="object-cover"
          />
        </div>
      </Link>

      <div className="p-4 text-white">
        <h3 className="font-semibold text-lg line-clamp-2">
          {kit.name}
        </h3>

        <p className="text-sm text-gray-400 mt-1 line-clamp-2">
          {kit.shortDescription}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-orange-400 font-bold">
            ₹{kit.price}
          </span>
          <span className="line-through text-gray-500 text-sm">
            ₹{kit.mrp}
          </span>
        </div>
      </div>
    </div>
  );
}
