import type React from "react"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Về Kinh Lễ - Kinh Lễ",
  description: "Tìm hiểu về Kinh Lễ - nền tảng cung cấp thông tin về lịch Việt, ngày lễ, văn khấn và các dịch vụ tâm linh.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-wine-red/5 via-warm-beige/10 to-gold/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-wine-red mb-6">Về Kinh Lễ</h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Nền tảng số hóa văn hóa tâm linh Việt Nam, kết nối truyền thống với hiện đại
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-wine-red mb-6">Sứ mệnh của chúng tôi</h2>
                <p className="text-lg text-foreground/80 mb-4">
                  Kinh Lễ ra đời với mục tiêu bảo tồn và phát huy giá trị văn hóa tâm linh truyền thống của người Việt
                  Nam trong thời đại số.
                </p>
                <p className="text-lg text-foreground/80 mb-4">
                  Chúng tôi tin rằng công nghệ có thể giúp kết nối mọi người với nguồn cội văn hóa, giúp thế hệ trẻ dễ
                  dàng tiếp cận và thực hành các nghi lễ truyền thống một cách chính xác và ý nghĩa.
                </p>
              </div>
              <div className="bg-gradient-to-br from-wine-red/10 to-gold/10 rounded-2xl p-8">
                <img src="/logo.png" alt="Kinh Lễ" className="w-full max-w-sm mx-auto rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-warm-beige/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-wine-red text-center mb-12">
              Những gì chúng tôi cung cấp
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-wine-red/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📅</span>
                </div>
                <h3 className="text-xl font-semibold text-wine-red mb-3">Lịch Âm Chính Xác</h3>
                <p className="text-foreground/70">
                  Hệ thống lịch âm Việt Nam được tính toán dựa trên thuật toán thiên văn chính xác, cập nhật ngày giờ
                  tốt xấu.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-wine-red/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📿</span>
                </div>
                <h3 className="text-xl font-semibold text-wine-red mb-3">Văn Khấn Đầy Đủ</h3>
                <p className="text-foreground/70">
                  Bộ sưu tập văn khấn phong phú cho mọi dịp lễ, nghi thức - từ cúng rằm, tết đến các lễ gia tiên, thổ
                  địa.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-wine-red/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎊</span>
                </div>
                <h3 className="text-xl font-semibold text-wine-red mb-3">Ngày Lễ & Tết</h3>
                <p className="text-foreground/70">
                  Thông tin chi tiết về các ngày lễ, tết truyền thống, phong tục tập quán và cách chuẩn bị đúng chuẩn.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-wine-red/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🛍️</span>
                </div>
                <h3 className="text-xl font-semibold text-wine-red mb-3">Cửa Hàng</h3>
                <p className="text-foreground/70">
                  Cung cấp vật phẩm cúng lễ chất lượng, hương trầm, đèn thờ và các sản phẩm tâm linh uy tín.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-wine-red/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">✍️</span>
                </div>
                <h3 className="text-xl font-semibold text-wine-red mb-3">Blog & Kiến Thức</h3>
                <p className="text-foreground/70">
                  Chia sẻ kiến thức sâu về văn hóa tâm linh, phong thủy, tử vi và các bài viết hướng dẫn chi tiết.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-wine-red/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🙏</span>
                </div>
                <h3 className="text-xl font-semibold text-wine-red mb-3">Dịch Vụ Tư Vấn</h3>
                <p className="text-foreground/70">
                  Kết nối với chuyên gia phong thủy, thầy cúng uy tín để được tư vấn và hỗ trợ trong các nghi lễ quan
                  trọng.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-wine-red text-center mb-12">Giá trị cốt lõi</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-wine-red text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-wine-red mb-2">Chính Xác</h3>
                <p className="text-foreground/70 text-sm">
                  Thông tin được kiểm chứng kỹ lưỡng, đảm bảo tính chính xác cao nhất
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-wine-red text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-wine-red mb-2">Dễ Tiếp Cận</h3>
                <p className="text-foreground/70 text-sm">Giao diện thân thiện, dễ sử dụng cho mọi lứa tuổi</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-wine-red text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-wine-red mb-2">Tôn Trọng</h3>
                <p className="text-foreground/70 text-sm">
                  Giữ gìn và tôn vinh giá trị văn hóa truyền thống Việt Nam
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-wine-red text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold text-wine-red mb-2">Cộng Đồng</h3>
                <p className="text-foreground/70 text-sm">Xây dựng cộng đồng gắn kết, chia sẻ giá trị văn hóa</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team/Contact Section */}
        <section className="py-16 bg-gradient-to-br from-wine-red/5 via-warm-beige/10 to-gold/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-wine-red mb-6">Cùng nhau xây dựng</h2>
            <p className="text-lg text-foreground/80 mb-8">
              Kinh Lễ là dự án cộng đồng. Chúng tôi luôn hoan nghênh sự đóng góp, phản hồi và hợp tác từ mọi người để
              ngày càng hoàn thiện hơn.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-3 bg-wine-red text-white rounded-lg hover:bg-wine-red/90 transition-colors font-medium"
              >
                Liên hệ với chúng tôi
              </a>
              <a
                href="#blog"
                className="px-6 py-3 border-2 border-wine-red text-wine-red rounded-lg hover:bg-wine-red/5 transition-colors font-medium"
              >
                Đọc Blog
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
