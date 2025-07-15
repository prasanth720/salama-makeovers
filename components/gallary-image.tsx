"use client"

import Image from "next/image"
import { useState } from "react"

interface GalleryImageProps {
  src: string
  alt: string
  title: string
  category: string
  className?: string
}

export function GalleryImage({ src, alt, title, category, className = "" }: GalleryImageProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className={`relative group overflow-hidden ${className}`}>
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400">Loading...</div>
        </div>
      )}

      <Image
        src={imageError ? "/placeholder.svg?height=400&width=600" : src}
        alt={alt}
        width={600}
        height={400}
        className={`w-full h-64 transition-all duration-300 group-hover:scale-105 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          objectFit: "cover",
          objectPosition: "center 20%", // Focus on upper center where faces usually are
        }}
        onLoad={() => setImageLoaded(true)}
        onError={() => {
          setImageError(true)
          setImageLoaded(true)
        }}
        priority={false}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 text-white">
          <h4 className="font-semibold text-lg">{title}</h4>
          <p className="text-sm opacity-90">{category}</p>
        </div>
      </div>
    </div>
  )
}
