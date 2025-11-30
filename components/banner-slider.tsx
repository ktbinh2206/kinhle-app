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
    <section className="relative w-full h-[calc(100vh-120px)] overflow-hidden mt-26">
      {/* Slides */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src={s.imageUrl || "/placeholder.svg"} 
              alt={s.title} 
              className="h-full w-auto object-contain" 
            />
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex flex-col items-start justify-center px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="space-y-6 max-w-2xl">
          {slide.subtitle && (
            <p className="text-lg sm:text-xl text-gold font-semibold tracking-wider uppercase">{slide.subtitle}</p>
          )}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white text-balance">{slide.title}</h1>
          <p className="text-lg sm:text-xl text-white/90 text-balance leading-relaxed">{slide.description}</p>

          {/* CTA Buttons */}
          {/* <div className="flex gap-4 pt-4 flex-wrap">
            <a
              href={slide.ctaLink}
              className="px-8 py-3 bg-[#A31D1D] text-white font-semibold rounded-lg hover:bg-[#8B1515] transition-colors duration-300"
            >
              {slide.ctaLabel}
            </a>
            <a
              href="#"
              className="px-8 py-3 border-2 border-[#FBA51C] text-[#FBA51C] font-semibold rounded-lg hover:bg-[#FBA51C] hover:text-foreground transition-colors duration-300"
            >
              Xem chi tiết
            </a>
          </div> */}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-wine-red/80 hover:bg-wine-red hover:scale-110 active:scale-95 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:cursor-pointer"
        aria-label="Slide trước"
      >
        <ChevronLeft size={28} className="text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-wine-red/80 hover:bg-wine-red hover:scale-110 active:scale-95 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:cursor-pointer"
        aria-label="Slide tiếp theo"
      >
        <ChevronRight size={28} className="text-white" />
      </button>

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
