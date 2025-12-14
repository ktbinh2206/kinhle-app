import type React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Về Kính Lễ - Kính Lễ",
  description: "Tìm hiểu về Kính Lễ - nền tảng văn hóa tâm linh hàng đầu dành cho người Việt, bảo tồn và kết nối các giá trị truyền thống.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-wine-red/90 via-wine-red/70 to-golden/30"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
                Về Kính Lễ
              </h1>
              <p className="text-2xl md:text-3xl text-white leading-relaxed font-medium drop-shadow-xl mb-8">
                Ứng dụng công nghệ để kiến tạo những giải pháp số mang tính nhân văn, lấy con người làm trung tâm
              </p>
              <div className="flex gap-6 justify-center items-center">
                <Image 
                  src="/about/login-page.png" 
                  alt="Kính Lễ Login" 
                  width={350} 
                  height={700}
                  className="rounded-xl shadow-2xl"
                />
                <Image 
                  src="/about/homepage.png" 
                  alt="Kính Lễ Homepage" 
                  width={350} 
                  height={700}
                  className="rounded-xl shadow-2xl"
                />
                <Image 
                  src="/about/prayers.png" 
                  alt="Kính Lễ Prayers" 
                  width={350} 
                  height={700}
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-warm-beige/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-wine-red mb-4">Sứ mệnh</h2>
                <div className="w-24 h-1 bg-golden mx-auto mb-8"></div>
              </div>
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-wine-red/10">
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed text-center">
                  Kính Lễ ứng dụng công nghệ để kiến tạo những giải pháp số mang tính nhân văn, lấy con người làm trung tâm, 
                  nhằm giúp người Việt hiểu, trân trọng và gìn giữ cội nguồn tổ tiên; củng cố sự gắn kết giữa các thế hệ; 
                  đồng thời bảo tồn những giá trị truyền thống trong một cộng đồng ấm áp, sẻ chia và đầy yêu thương.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-wine-red mb-4">Tầm nhìn</h2>
                <div className="w-24 h-1 bg-golden mx-auto mb-8"></div>
              </div>
              <div className="bg-gradient-to-br from-wine-red/5 to-golden/5 rounded-2xl p-8 md:p-12 shadow-lg border border-wine-red/10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <Image 
                      src="/about/tet-holiday.jpg" 
                      alt="Tết Holiday" 
                      width={550} 
                      height={367}
                      className="rounded-xl shadow-md"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                      Đến năm 2030, Kính Lễ hướng tới trở thành nền tảng văn hoá – tâm linh hàng đầu dành cho người Việt, 
                      một ứng dụng tiêu biểu trong việc bảo tồn, kết nối và truyền thừa bền vững các giá trị truyền thống 
                      qua nhiều thế hệ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 bg-warm-beige/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-wine-red mb-4">Giá trị cốt lõi</h2>
              <div className="w-24 h-1 bg-golden mx-auto mb-4"></div>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Năm giá trị nền tảng định hình sứ mệnh của Kính Lễ trong việc bảo tồn và phát triển văn hóa tâm linh Việt Nam
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Value 1: Tiện lợi */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-wine-red/10 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-wine-red to-wine-red/80 text-white rounded-xl flex items-center justify-center text-2xl font-bold shrink-0 shadow-md">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-wine-red mb-2">Tiện lợi</h3>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Kính Lễ mang đến trải nghiệm tâm linh linh hoạt, trực quan, phù hợp với nhịp sống bận rộn của thế hệ hiện đại, 
                  giúp người dùng thực hành nghi lễ một cách dễ dàng mà không đòi hỏi nhiều thời gian hay kiến thức truyền thống. 
                  Sự tiện lợi không chỉ nằm ở việc đơn giản hóa thao tác, mà còn giúp mỗi người duy trì sự kết nối với cội nguồn 
                  một cách tự nhiên và đầy ý nghĩa.
                </p>
              </div>

              {/* Value 2: Gắn kết gia đình */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-wine-red/10 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-wine-red to-wine-red/80 text-white rounded-xl flex items-center justify-center text-2xl font-bold shrink-0 shadow-md">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-wine-red mb-2">Gắn kết gia đình và các thế hệ</h3>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Kính Lễ nuôi dưỡng tình cảm gia đình thông qua việc nhắc nhở ngày giỗ, gợi ý lễ vật theo vùng miền, 
                  cũng như lưu giữ ký ức bằng hình ảnh và video. Mỗi tương tác đều góp phần kết nối các thế hệ, 
                  bởi việc tưởng nhớ tổ tiên không chỉ là nghi lễ mà còn là cách vun đắp yêu thương, lòng kính trọng và sự gắn bó gia đình. 
                  Kính Lễ trở thành chiếc cầu nối giúp truyền thống được lưu giữ một cách ấm áp và gần gũi.
                </p>
              </div>

              {/* Value 3: Bảo tồn văn hoá */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-wine-red/10 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-wine-red to-wine-red/80 text-white rounded-xl flex items-center justify-center text-2xl font-bold shrink-0 shadow-md">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-wine-red mb-2">Bảo tồn giá trị văn hoá truyền thống</h3>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Kính Lễ gìn giữ và lan tỏa các giá trị văn hoá – tâm linh của người Việt thông qua những giải pháp công nghệ hiện đại. 
                  Ứng dụng kiến tạo một không gian số lành mạnh để thực hành nghi lễ và thấu hiểu truyền thống, 
                  góp phần nuôi dưỡng tinh thần "Uống nước nhớ nguồn" và lòng tự hào dân tộc trong thời đại số.
                </p>
              </div>

              {/* Value 4: Lưu giữ ký ức */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-wine-red/10 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-wine-red to-wine-red/80 text-white rounded-xl flex items-center justify-center text-2xl font-bold shrink-0 shadow-md">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-wine-red mb-2">Lưu giữ ký ức</h3>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Kính Lễ trân trọng từng bức ảnh, thước phim và câu chuyện như những di sản gia đình vô giá. 
                  Ứng dụng giúp người dùng xây dựng một kho ký ức sống, kết nối quá khứ – hiện tại – tương lai. 
                  Việc lưu giữ này không chỉ duy trì truyền thống và tưởng nhớ người thân đã khuất, 
                  mà còn nuôi dưỡng đời sống tinh thần cho các thế hệ mai sau – một hành động của yêu thương, tri ân và gìn giữ văn hoá.
                </p>
              </div>

              {/* Value 5: An tâm */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-wine-red/10 hover:shadow-xl transition-all duration-300 md:col-span-2">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-wine-red to-wine-red/80 text-white rounded-xl flex items-center justify-center text-2xl font-bold shrink-0 shadow-md">
                    5
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-wine-red mb-2">An tâm</h3>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Kính Lễ mang lại sự an tâm thông qua nội dung chính xác, phù hợp với văn hoá và đặc trưng vùng miền. 
                  Mọi hướng dẫn và nhắc nhở đều được kiểm chứng cẩn trọng, giúp người dùng thực hành nghi lễ đúng đắn và tự tin kết nối với cội nguồn. 
                  Sự an tâm đến từ việc mỗi hành động đều được dẫn dắt bằng sự chuẩn mực và lòng tôn kính đối với các giá trị truyền thống.
                </p>
              </div>
            </div>

            {/* App Screenshot */}
            <div className="mt-16 flex justify-center">
              <div className="text-center">
                <Image 
                  src="/about/offline-communication.JPG" 
                  alt="Kính Lễ Offline" 
                  width={600} 
                  height={800}
                  className="rounded-2xl shadow-2xl border-4 border-white"
                />
                <p className="mt-4 text-base text-foreground/60 font-medium">Kết nối mọi lúc mọi nơi</p>
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
