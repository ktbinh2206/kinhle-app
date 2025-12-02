"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageLoaderProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  sizes?: string
  className?: string
  priority?: boolean
  loading?: "lazy" | "eager"
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
}

export function ImageLoader({
  src,
  alt,
  fill,
  width,
  height,
  sizes,
  className,
  priority,
  loading,
  objectFit = "cover",
}: ImageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#E5D0AC]/20 to-[#FEF9E1]/20 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-[#A31D1D] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        sizes={sizes}
        className={cn(
          "transition-opacity duration-500",
          isLoading ? "opacity-0" : "opacity-100",
          objectFit === "cover" && "object-cover",
          objectFit === "contain" && "object-contain",
          className
        )}
        priority={priority}
        loading={loading}
        onLoadingComplete={() => setIsLoading(false)}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
    </div>
  )
}
