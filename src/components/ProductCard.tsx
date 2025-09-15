"use client"

import Image from "next/image"
//import { Heart } from "lucide-react"

interface ProductCardProps {
  title: string
  description: string
  price: string
  imageUrl: string
  size?: string
  color?: string
}

export default function ProductCard({
  title,
  description,
  price,
  imageUrl,
  size,
  color,
}: ProductCardProps) {
  return (
    <div className="w-full max-w-sm rounded-2xl shadow-lg overflow-hidden bg-white transition hover:scale-105 hover:shadow-xl">
      {/* Top image section with background */}
      <div className="relative bg-gradient-to-r from-[#F4F9FF] to-[#184A99]
 h-48 flex items-center justify-center">
        <Image
          src={imageUrl}
          alt={title}
          width={220}
          height={220}
          className="object-contain drop-shadow-xl"
        />
        {/* Heart icon */}
        {/* <button className="absolute top-3 right-3 p-2 bg-white/70 rounded-full shadow hover:bg-white transition">
          <Heart size={18} className="text-purple-600" />
        </button> */}
      </div>

      {/* Content section */}
      <div className="p-5">
        {/* Title + tags */}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="flex gap-2 mt-2">
          {size && (
            <span className="text-xs font-medium bg-gray-200 px-2 py-1 rounded-md">
              {size}
            </span>
          )}
          {color && (
            <span className="text-xs font-medium bg-gray-200 px-2 py-1 rounded-md">
              {color}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-3">{description}</p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-5">
          <span className="text-lg font-bold text-gray-900">{price}</span>
          <button className="bg-[#f59e0b] text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-[#d97706] transition">
  Check Price
</button>
        </div>
      </div>
    </div>
  )
}
