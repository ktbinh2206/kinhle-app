"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { festivalsData, festivalCategories } from "@/lib/festivals-data"
import { Calendar, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FestivalsPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Header />
      
      <div className="pt-16">
        {/* Header Section */}
        <section className="py-12 bg-linear-to-br from-wine-red/5 via-warm-beige/10 to-gold/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-wine-red mb-4">
                Ngày Lễ & Lễ Hội
              </h1>
              <p className="text-lg text-foreground/80">
                Khám phá các ngày lễ truyền thống và ý nghĩa văn hóa đặc sắc của người Việt
              </p>
            </div>
          </div>
        </section>

        {/* Festivals Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {festivalsData.map((festival) => {
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
                        <Calendar className="w-5 h-5 text-wine-red shrink-0 mt-1" />
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

          {/* Empty State */}
          {festivalsData.length === 0 && (
            <div className="text-center py-16">
              <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">
                Nội dung đang được cập nhật
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
