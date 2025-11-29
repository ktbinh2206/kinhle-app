"use client"

import { Sparkles, Star, Map, Info, X } from "lucide-react"
import { useState } from "react"

const services = [
  {
    id: "numerology",
    title: "Thần số học",
    icon: Sparkles,
    description: "Khám phá con số vận mệnh, giải mã bản thân qua thần số học",
    color: "from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
    hoverColor: "hover:shadow-purple-200",
  },
  {
    id: "astrology",
    title: "Tử vi",
    icon: Star,
    description: "Xem tử vi, lá số tử vi, dự đoán vận mệnh và tương lai",
    color: "from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
    hoverColor: "hover:shadow-blue-200",
  },
  {
    id: "star-map",
    title: "Bản đồ sao",
    icon: Map,
    description: "Khám phá bản đồ sao của bạn, hiểu về các vì sao định mệnh",
    color: "from-amber-50 to-amber-100",
    iconColor: "text-amber-600",
    hoverColor: "hover:shadow-amber-200",
  },
]

export function ServicesSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service)
    setIsDialogOpen(true)
  }

  return (
    <section className="py-16 bg-warm-beige/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-wine-red mb-4">
            Dịch vụ của chúng tôi
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Khám phá những dịch vụ tâm linh chuyên sâu, giúp bạn hiểu rõ hơn về bản thân và vận mệnh
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className="group cursor-pointer"
              >
                <div
                  className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl ${service.hoverColor} transition-all duration-300 h-full flex flex-col`}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-wine-red mb-3 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-6 flex items-center text-wine-red font-medium group-hover:text-secondary transition-colors">
                    <span>Tìm hiểu thêm</span>
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Under Construction Dialog */}
      {isDialogOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsDialogOpen(false)}
          />
          
          {/* Dialog */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={() => setIsDialogOpen(false)}
              className="absolute top-4 right-4 text-foreground/50 hover:text-foreground transition-colors"
              aria-label="Đóng"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${selectedService.color} flex items-center justify-center`}>
                <Info className="w-10 h-10 text-wine-red" />
              </div>
            </div>

            {/* Content */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-wine-red mb-4">
                {selectedService.title}
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Dịch vụ hiện đang được cập nhật và sẽ hoàn thiện trong thời gian sớm nhất. 
                Vui lòng liên hệ với chúng tôi để được tư vấn chi tiết.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a
                  href="tel:0903242748"
                  className="flex items-center justify-center gap-2 text-wine-red hover:text-wine-red/80 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-medium">090 324 27 48</span>
                </a>
                <a
                  href="mailto:kinhleapp2025@gmail.com"
                  className="flex items-center justify-center gap-2 text-wine-red hover:text-wine-red/80 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">kinhleapp2025@gmail.com</span>
                </a>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsDialogOpen(false)}
                className="w-full px-6 py-3 bg-wine-red text-white rounded-lg hover:bg-wine-red/90 transition-colors font-medium"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
