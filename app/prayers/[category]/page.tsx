import type React from "react"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { getPrayersByCategory, categoryInfo } from "@/lib/prayers-data"
import { notFound } from "next/navigation"

interface PrayerCategoryPageProps {
  params: Promise<{
    category: string
  }>
}

export async function generateMetadata({ params }: PrayerCategoryPageProps): Promise<Metadata> {
  const { category } = await params
  const categoryData = categoryInfo[category]
  if (!categoryData) {
    return {
      title: "Không tìm thấy - Kinh Lễ",
    }
  }

  return {
    title: `${categoryData.title} - Kính Lễ`,
    description: categoryData.description,
  }
}

export default async function PrayerCategoryPage({ params }: PrayerCategoryPageProps) {
  const { category } = await params
  const categoryData = categoryInfo[category]
  const prayers = getPrayersByCategory(category)

  if (!categoryData) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        {/* Breadcrumb */}
        <section className="py-4 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <Link href="/" className="hover:text-wine-red transition-colors">
                Trang chủ
              </Link>
              <span>/</span>
              <Link href="/prayers" className="hover:text-wine-red transition-colors">
                Văn khấn
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">{categoryData.title}</span>
            </div>
          </div>
        </section>

        {/* Category Header */}
        <section className={`py-12 bg-gradient-to-br ${categoryData.color}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{categoryData.icon}</span>
              <div>
                <h1 className="text-4xl font-bold text-wine-red mb-2">{categoryData.title}</h1>
                <p className="text-lg text-foreground/70">{categoryData.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Prayers List */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {prayers.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-foreground/60 mb-4">Chưa có văn khấn nào trong danh mục này</p>
                <Link
                  href="/prayers"
                  className="inline-block px-6 py-3 bg-wine-red text-white rounded-lg hover:bg-wine-red/90 transition-colors"
                >
                  Quay lại danh sách
                </Link>
              </div>
            ) : (
              <div className="grid gap-6">
                {prayers.map((prayer) => (
                  <Link
                    key={prayer.id}
                    href={`/prayers/${category}/${prayer.id}`}
                    className="block group"
                  >
                    <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-wine-red mb-2 group-hover:text-wine-red/80 transition-colors">
                            {prayer.title}
                          </h2>
                          <p className="text-foreground/70 mb-4">{prayer.description}</p>

                          <div className="flex flex-wrap gap-3">
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-wine-red/10 text-wine-red text-sm rounded-full">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              {prayer.occasion}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-wine-red font-medium">
                          Xem chi tiết
                          <svg
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
