"use client";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ category, title, excerpt, image, link }) {
  return (
    <div className="bg-white rounded-xl mb-4 shadow-md overflow-hidden min-w-[280px] max-w-xs flex-shrink-0 flex flex-col">
      {/* Image */}
      <div className="relative w-full h-40">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Category Badge */}
        <div className="w-fit">
  <span className="text-xs font-medium bg-gray-200 px-2 py-1 mb-2  rounded-md">
    {category}
  </span>
</div>

        <h3 className="font-bold text-base text-gray-800 mb-2 mt-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{excerpt}</p>

        {/* Read More Button */}
        <div className="mt-auto text-right">
          <Link
            href={link || "#"}
            className="text-xs font-medium bg-gray-200 px-2 py-2 rounded-md hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
