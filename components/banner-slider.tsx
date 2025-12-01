"use client"

import { useState, useEffect, useRef } from "react"
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
    setTimeout(() => setAutoPlay(true), 1000)
  }

  const slide = slides[currentSlide]

  return (
    <section className="relative w-full overflow-hidden mt-26">
      {/* Slides */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 absolute inset-0"
          }`}
        >
          <div className="w-full">
            <img 
              src={s.imageUrl || "/placeholder.svg"} 
              alt={s.title} 
              className="w-full h-auto object-cover" 
            />
          </div>
        </div>
      ))}

      {/* Indicator Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
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
    </section>
  )
}
