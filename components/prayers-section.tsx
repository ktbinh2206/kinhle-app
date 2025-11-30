"use client"

import Link from "next/link"
import Image from "next/image"
import { BookOpen } from "lucide-react"
import { prayersData, categoryInfo } from "@/lib/prayers-data"

export function PrayersSection() {
  // Lấy 3 category có bài viết nhiều nhất
  const topCategories = Object.keys(categoryInfo)
    .map((key) => ({
      id: key,
      ...categoryInfo[key],
      count: prayersData[key]?.length || 0,
    }))
    .filter((cat) => cat.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 3)

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-wine-red/10 mb-4">
            <BookOpen className="w-8 h-8 text-wine-red" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-wine-red mb-4">Văn Khấn</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Bộ sưu tập văn khấn đầy đủ cho mọi dịp lễ, nghi thức cúng bái
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {topCategories.map((category) => (
            <Link
              key={category.id}
              href={`/prayers/${category.id}`}
              className="group block transition-transform hover:scale-[1.02]"
            >
              <div className={`bg-gradient-to-br ${category.color} rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-border/50 h-full`}>
                {/* Image */}
                <div className="relative w-full h-48">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-wine-red group-hover:text-wine-red/80 transition-colors">
                      {category.title}
                    </h3>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-wine-red text-white text-xs font-semibold">
                      {category.count}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/70">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/prayers"
            className="inline-flex items-center gap-2 px-6 py-3 bg-wine-red text-white rounded-lg hover:bg-wine-red/90 transition-colors font-medium"
          >
            Xem Tất Cả Văn Khấn
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
