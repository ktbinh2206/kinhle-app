import type React from "react"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Về Kính Lễ - Kính Lễ",
  description: "Tìm hiểu về Kính Lễ - nền tảng cung cấp thông tin về lịch Việt, ngày lễ, văn khấn và các dịch vụ tâm linh.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/kinh-le-background.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-wine-red/40 backdrop-blur-xs"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto p-12">
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl [text-shadow:2px_2px_8px_rgb(0_0_0/80%)]">
                Về Kính Lễ
              </h1>
              <p className="text-3xl text-white leading-relaxed font-semibold drop-shadow-xl [text-shadow:1px_1px_6px_rgb(0_0_0/70%)]">
                Nền tảng số hóa văn hóa tâm linh Việt Nam, kết nối truyền thống với hiện đại
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-wine-red mb-6">Vision - Tầm nhìn</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Trở thành ứng dụng dẫn đầu trong việc hỗ trợ và cung cấp thông tin cúng bái chính xác, hiện đại và dễ tiếp cận – không chỉ tại Việt Nam mà còn cho cộng đồng người Việt ở xa xứ.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-warm-beige/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-wine-red text-center mb-12">Mission - Sứ mệnh</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                <div className="w-12 h-12 bg-wine-red/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Phát triển giải pháp di động sáng tạo, giúp truyền thống trở thành một phần của cuộc sống hiện đại.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                <div className="w-12 h-12 bg-wine-red/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Tăng cường trải nghiệm tâm linh qua công cụ số hóa tiện lợi, tôn vinh cội nguồn.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                <div className="w-12 h-12 bg-wine-red/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏮</span>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Bảo vệ phong tục thờ cúng tổ tiên như nguồn sức mạnh kết nối và gìn giữ cộng đồng.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-wine-red text-center mb-12">Core Value - Giá trị cốt lõi</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-wine-red text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-wine-red">Thuận tiện</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Dễ dàng tiếp cận nghi lễ tâm linh mà không cần nhiều thời gian hay kiến thức chuyên sâu. Linh hoạt, phù hợp mọi lối sống.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-wine-red text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-wine-red">Gắn kết gia đình</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Nhắc lịch giỗ, chia sẻ ảnh kỷ niệm, gợi ý mâm cúng theo vùng miền. Tăng cường kết nối giữa các thế hệ.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-wine-red text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-wine-red">Gìn giữ truyền thống</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Bảo tồn văn hóa tâm linh qua công nghệ hiện đại. Xây dựng không gian số lành mạnh, truyền cảm hứng về cội nguồn.
                </p>
              </div>

              {/* Value 4 */}
              <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-wine-red text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    4
                  </div>
                  <h3 className="text-xl font-semibold text-wine-red">Lưu trữ kỷ niệm</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Tạo kho lưu trữ di sản gia đình qua ảnh, video, câu chuyện. Nối tiếp truyền thống cho tương lai.
                </p>
              </div>

              {/* Value 5 */}
              <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-wine-red text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    5
                  </div>
                  <h3 className="text-xl font-semibold text-wine-red">Sự an tâm</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Thông tin cúng bái chính xác, được kiểm chứng. Tuân thủ chuẩn mực văn hóa, phù hợp từng vùng miền.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team/Contact Section */}
        <section className="py-16 bg-linear-to-br from-[#6D2323]/5 via-[#E5D0AC]/10 to-[#FBA51C]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#6D2323] text-center mb-12">Thông tin liên hệ</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                {/* Brand Info */}
                <div className="bg-white rounded-xl p-8 border border-[#E5D0AC] shadow-sm">
                  <h3 className="text-2xl font-bold text-[#6D2323] mb-3">Kính Lễ</h3>
                  <p className="text-lg text-foreground/80 mb-6">
                    Nền tảng số hóa lịch truyền thống Việt Nam
                  </p>
                  <p className="text-muted-foreground">
                    Sứ mệnh bảo tồn và hiện đại hóa lịch Việt trên nền tảng công nghệ
                  </p>
                </div>

                {/* Location */}
                <div className="bg-white rounded-xl p-8 border border-[#E5D0AC] shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#A31D1D]/10 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#6D2323] mb-2">Địa điểm</h4>
                      <p className="text-foreground/80">Khu công nghệ cao Hòa Lạc</p>
                      <p className="text-foreground/80">Hà Nội, Việt Nam</p>
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="bg-white rounded-xl p-8 border border-[#E5D0AC] shadow-sm space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#A31D1D]/10 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#6D2323] mb-2">Số điện thoại</h4>
                      <a href="tel:+84903242748" className="text-[#A31D1D] hover:text-[#6D2323] transition-colors text-lg">
                        090 324 27 48
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#A31D1D]/10 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#6D2323] mb-2">Email</h4>
                      <a href="mailto:kinhleapp2025@gmail.com" className="text-[#A31D1D] hover:text-[#6D2323] transition-colors text-lg break-all">
                        kinhleapp2025@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-xl p-4 border border-[#E5D0AC] shadow-sm">
                <div className="aspect-square md:aspect-auto md:h-full min-h-[400px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1108.5485125082737!2d105.73340696697137!3d20.95703888082116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452588c8a8bf5%3A0x5f421f15c96f37a7!2zNjUgUC4gWcOqbiBM4buZLCBOZ2jEqWEgTOG7mSwgSMOgIMSQw7RuZywgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1764948366926!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mt-12">
              <a
                href="/contact"
                className="px-6 py-3 bg-[#A31D1D] text-white rounded-lg hover:bg-[#6D2323] transition-colors font-medium"
              >
                Gửi tin nhắn
              </a>
              <a
                href="/blog"
                className="px-6 py-3 border-2 border-[#A31D1D] text-[#A31D1D] rounded-lg hover:bg-[#A31D1D]/5 transition-colors font-medium"
              >
                Đọc Bài viết
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
