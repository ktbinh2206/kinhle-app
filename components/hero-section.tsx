"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-primary to-secondary overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-muted rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 gap-8">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-7xl font-bold text-primary-foreground text-balance">Lễ Hội Việt</h1>
          <p className="text-xl sm:text-2xl text-primary-foreground/90 text-balance max-w-2xl">
            Celebrate the richness of Vietnamese traditions and festivals
          </p>
        </div>

        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-muted">
          Explore Festivals
        </Button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} className="text-primary-foreground" />
        </div>
      </div>
    </section>
  )
}
