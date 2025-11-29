import type React from "react"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Văn Khấn - Kinh Lễ",
  description:
    "Bộ sưu tập văn khấn đầy đủ cho mọi dịp lễ, nghi thức cúng bái - từ cúng rằm, tết đến lễ gia tiên, thổ địa.",
}

// Danh sách các loại văn khấn
const prayerCategories = [
  {
    id: "featured",
    title: "Văn khấn được ghim",
    description: "Những bài văn khấn phổ biến và hay được sử dụng nhất",
    icon: "📌",
    color: "from-wine-red/20 to-gold/20",
    featured: true,
  },
  {
    id: "tet",
    title: "Văn khấn Tết",
    description: "Văn khấn cho dịp Tết Nguyên Đán",
    icon: "🎊",
    color: "from-rose-100 to-red-100",
  },
  {
    id: "ram",
    title: "Văn khấn Rằm",
    description: "Văn khấn mồng 1, rằm hàng tháng",
    icon: "🌕",
    color: "from-amber-100 to-yellow-100",
  },
  {
    id: "gia-tien",
    title: "Cúng gia tiên",
    description: "Văn khấn cúng tổ tiên, cúng giỗ",
    icon: "🙏",
    color: "from-purple-100 to-pink-100",
  },
  {
    id: "khai-truong",
    title: "Khai trương",
    description: "Văn khấn khai trương, khởi công",
    icon: "🏪",
    color: "from-green-100 to-emerald-100",
  },
  {
    id: "tho-dia",
    title: "Thổ địa - Thần tài",
    description: "Văn khấn cúng thổ địa, thần tài",
    icon: "🏠",
    color: "from-blue-100 to-cyan-100",
  },
  {
    id: "nam-moi",
    title: "Cúng đầu năm",
    description: "Văn khấn đầu năm, cúng giao thừa",
    icon: "🎆",
    color: "from-orange-100 to-amber-100",
  },
]

export default function PrayersPage() {
  const featuredCategory = prayerCategories.find((cat) => cat.featured)
  const regularCategories = prayerCategories.filter((cat) => !cat.featured)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-wine-red/5 via-warm-beige/10 to-gold/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-wine-red mb-4">Văn Khấn</h1>
              <p className="text-lg text-foreground/80">
                Bộ sưu tập văn khấn đầy đủ cho mọi dịp lễ, nghi thức cúng bái
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured Category - Large Card */}
            {featuredCategory && (
              <Link
                href={`/prayers/${featuredCategory.id}`}
                className="block mb-8 group transition-transform hover:scale-[1.02]"
              >
                <div
                  className={`bg-gradient-to-br ${featuredCategory.color} rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all border border-wine-red/10`}
                >
                  <div className="flex items-start gap-6">
                    <div className="text-6xl">{featuredCategory.icon}</div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold text-wine-red mb-3 group-hover:text-wine-red/80 transition-colors">
                        {featuredCategory.title}
                      </h2>
                      <p className="text-lg text-foreground/70 mb-4">{featuredCategory.description}</p>
                      <div className="inline-flex items-center gap-2 text-wine-red font-medium">
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
                </div>
              </Link>
            )}

            {/* Regular Categories - 6 Smaller Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/prayers/${category.id}`}
                  className="group block transition-transform hover:scale-[1.03]"
                >
                  <div
                    className={`bg-gradient-to-br ${category.color} rounded-xl p-6 shadow-md hover:shadow-lg transition-all h-full border border-border/50`}
                  >
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-bold text-wine-red mb-2 group-hover:text-wine-red/80 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-4">{category.description}</p>
                    <div className="inline-flex items-center gap-1 text-wine-red text-sm font-medium">
                      Xem thêm
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 bg-warm-beige/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
              <h2 className="text-2xl font-bold text-wine-red mb-4">Hướng dẫn sử dụng văn khấn</h2>
              <div className="space-y-4 text-foreground/80">
                <div className="flex gap-3">
                  <span className="text-wine-red font-bold">1.</span>
                  <p>
                    <strong>Chọn loại văn khấn phù hợp:</strong> Mỗi dịp lễ, nghi thức có văn khấn riêng. Hãy chọn
                    đúng loại để thể hiện sự tôn kính.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-wine-red font-bold">2.</span>
                  <p>
                    <strong>Chuẩn bị trước:</strong> Nên đọc và nắm rõ nội dung văn khấn trước khi thực hiện nghi lễ.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-wine-red font-bold">3.</span>
                  <p>
                    <strong>Thái độ chân thành:</strong> Quan trọng nhất là lòng thành kính và sự tập trung khi đọc văn
                    khấn.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-wine-red font-bold">4.</span>
                  <p>
                    <strong>Tùy chỉnh thông tin:</strong> Các văn khấn có thể điều chỉnh tên, tuổi, địa chỉ cho phù
                    hợp với gia đình bạn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
