"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { bannerSlides } from "@/lib/mockdata"

export function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const autoPlayRef = useRef<number | null>(null)

  const slides = bannerSlides

  useEffect(() => {
    if (!autoPlay) return

    autoPlayRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => {
      if (autoPlayRef.current !== null) {
        window.clearInterval(autoPlayRef.current)
      }
    }
  }, [autoPlay, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 1000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 1000)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 2000)
  }

  const slide = slides[currentSlide]

  return (
    <section className="relative w-full overflow-hidden mt-26 bg-linear-to-br from-[#6D2323]/5 via-[#E5D0AC]/10 to-[#FBA51C]/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Slides */}
        {slides.map((s, index) => (
          <div
            key={s.id}
            className={` ${
              index === currentSlide ? "opacity-100 relative" : "display-none opacity-0 absolute inset-0"
            }`}
          >
            <div className="flex items-center justify-center">
              <img 
                src={s.imageUrl || "/placeholder.svg"} 
                alt={s.title} 
                className="max-w-6xl w-full h-auto object-contain rounded-lg shadow-lg" 
              />
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#6D2323] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Slide trước"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#6D2323] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Slide tiếp theo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-[#FBA51C] w-8" : "bg-white/50 w-3 hover:bg-white/70"
              }`}
              aria-label={`Đi tới slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
