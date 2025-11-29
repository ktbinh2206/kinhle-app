import type React from "react"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PrayerActionButtons } from "@/components/prayer-action-buttons"
import Link from "next/link"
import { getPrayerById, categoryInfo } from "@/lib/prayers-data"
import { notFound } from "next/navigation"

interface PrayerDetailPageProps {
  params: Promise<{
    category: string
    id: string
  }>
}

export async function generateMetadata({ params }: PrayerDetailPageProps): Promise<Metadata> {
  const { category, id } = await params
  const prayer = getPrayerById(category, id)

  if (!prayer) {
    return {
      title: "Không tìm thấy - Kinh Lễ",
    }
  }

  return {
    title: `${prayer.title} - Kính Lễ`,
    description: prayer.description,
  }
}

export default async function PrayerDetailPage({ params }: PrayerDetailPageProps) {
  const { category, id } = await params
  const prayer = getPrayerById(category, id)
  const categoryData = categoryInfo[category]

  if (!prayer || !categoryData) {
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
              <Link href={`/prayers/${category}`} className="hover:text-wine-red transition-colors">
                {categoryData.title}
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">{prayer.title}</span>
            </div>
          </div>
        </section>

        {/* Prayer Header */}
        <section className={`py-12 bg-gradient-to-br ${categoryData.color}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-5xl">{categoryData.icon}</span>
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-wine-red mb-3">{prayer.title}</h1>
                <p className="text-lg text-foreground/70 mb-4">{prayer.description}</p>

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

                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    {prayer.difficulty}
                  </span>

                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {prayer.duration}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prayer Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {/* Main Content */}
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
              <h2 className="text-2xl font-bold text-wine-red mb-6 flex items-center gap-2">
                <span>📿</span>
                Nội dung văn khấn
              </h2>
              <div className="space-y-3">
                {prayer.content.map((line, index) => (
                  <p
                    key={index}
                    className={`text-lg leading-relaxed ${
                      index === 0 || index === prayer.content.length - 1
                        ? "text-wine-red font-semibold text-center"
                        : "text-foreground/90"
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* Preparation */}
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
              <h2 className="text-2xl font-bold text-wine-red mb-6 flex items-center gap-2">
                <span>🕯️</span>
                Chuẩn bị
              </h2>
              <ul className="space-y-3">
                {prayer.preparation.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-wine-red mt-1">✓</span>
                    <span className="text-foreground/80 flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Notes */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-8 border border-amber-200">
              <h2 className="text-2xl font-bold text-wine-red mb-6 flex items-center gap-2">
                <span>💡</span>
                Lưu ý
              </h2>
              <ul className="space-y-3">
                {prayer.notes.map((note, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-amber-600 mt-1">•</span>
                    <span className="text-foreground/80 flex-1">{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <PrayerActionButtons />

            {/* Back Button */}
            <div className="text-center pt-4">
              <Link
                href={`/prayers/${category}`}
                className="inline-flex items-center gap-2 text-wine-red hover:text-wine-red/80 font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Quay lại danh sách {categoryData.title}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
