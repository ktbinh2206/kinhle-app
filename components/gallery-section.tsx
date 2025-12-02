"use client"

import Image from "next/image"
import { galleryImages } from "@/lib/mockdata"
import { useState } from "react"
import { X } from "lucide-react"

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-balance">Gallery</h2>
          <p className="text-lg text-foreground/70">Beautiful moments from Vietnamese festivals</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative h-64 bg-muted rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                  {image.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full h-[80vh]" onClick={(e) => e.stopPropagation()}>
              <Image
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain rounded-lg"
                priority
              />
              <button
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} className="text-black" />
              </button>
              <p className="text-center mt-4 text-white text-lg font-semibold">{galleryImages[selectedImage].title}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
