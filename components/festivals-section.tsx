"use client"

import { Calendar, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { festivalsData, festivalCategories } from "@/lib/festivals-data"

export function FestivalsSection() {
  // Get first 3 festivals to display
  const displayFestivals = festivalsData.slice(0, 3)

  return (
    <section className="py-16 bg-gradient-to-b from-background to-warm-beige/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-wine-red" />
            <h2 className="text-3xl md:text-4xl font-bold text-wine-red">
              Ngày Lễ & Lễ Hội
            </h2>
            <Sparkles className="w-8 h-8 text-wine-red" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Khám phá các ngày lễ truyền thống và ý nghĩa văn hóa đặc sắc
          </p>
        </div>

        {/* Festivals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayFestivals.map((festival) => {
            const category = festivalCategories[festival.category]
            
            return (
              <Link key={festival.id} href={`/festivals/${festival.id}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                  {/* Image */}
                  <div className="relative h-48 bg-linear-to-br from-wine-red/10 to-gold/10">
                    <Image
                      src={festival.image}
                      alt={festival.title}
                      fill
                      className="object-cover"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-wine-red text-white">
                        {category.title}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start gap-2 mb-3">
                      <Calendar className="w-5 h-5 text-wine-red flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-wine-red mb-1">
                          {festival.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {festival.date}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground line-clamp-3 text-sm">
                      {festival.meaning.substring(0, 150)}...
                    </p>

                    <div className="mt-4 pt-4 border-t">
                      <span className="text-wine-red font-semibold text-sm hover:underline">
                        Xem chi tiết →
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/festivals">
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-wine-red text-white font-semibold rounded-lg hover:bg-wine-red/90 transition-all duration-300 hover:shadow-lg">
              Xem Tất Cả Ngày Lễ
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
