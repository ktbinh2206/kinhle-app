"use client"

import { MapPin, Phone, Mail, Facebook, Music2 } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-cream border-t border-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Three Column Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Kính Lễ</h3>
              <p className="text-foreground/70 text-sm">Nền tảng số hóa lịch truyền thống Việt Nam</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-foreground/80">
                  <p>Khu công nghệ cao Hòa Lạc</p>
                  <p>Hà Nội, Việt Nam</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} className="text-primary" />
                <a href="tel:+84903242748" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  090 324 27 48
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} className="text-primary" />
                <a
                  href="mailto:kinhleapp2025@gmail.com"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  kinhleapp2025@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Categories */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-6">Danh Mục</h3>
            <ul className="space-y-3">
              {[
                { label: "Trang chủ", href: "/" },
                { label: "Về Kính Lễ", href: "/about" },
                { label: "Dịch vụ", href: "/services" },
                { label: "Văn khấn", href: "/prayers" },
                { label: "Ngày lễ", href: "/festivals" },
                { label: "Bài viết", href: "/blog" },
                { label: "Liên hệ", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary hover:text-secondary hover:underline transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect & Apps */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-primary mb-6">Kết Nối Với Chúng Tôi</h3>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/kinh.le.app.2025" },
                  { icon: Music2, label: "TikTok", href: "https://tiktok.com/@cungsaochodung" },
                  { icon: Mail, label: "Email", href: "mailto:kinhleapp2025@gmail.com" },
                ].map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-primary mb-6">Tải Ứng Dụng Lịch Việt</h3>
              <div className="flex gap-4">
                {[
                  { label: "iOS", emoji: "🍎" },
                  { label: "Android", emoji: "🤖" },
                ].map((app) => (
                  <a
                    key={app.label}
                    href="#"
                    className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300 font-semibold text-sm flex items-center gap-2"
                  >
                    <span>{app.emoji}</span>
                    {app.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider & Copyright */}
        <div className="border-t border-warm-beige pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground/60 text-sm">
            © {currentYear} Kính Lễ. Bảo lưu mọi quyền.
          </p>
          <div className="flex items-center gap-1 text-foreground/60 text-sm">
            <span>Được tạo với</span>
            <span className="text-secondary">❤</span>
            <span>cho nền văn hóa Việt</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
