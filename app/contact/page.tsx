"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

      // Template params for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Không cung cấp",
        subject: formData.subject || "Liên hệ từ website",
        message: formData.message,
        to_email: "kinhleapp2025@gmail.com",
      };

      //   await emailjs.send(serviceId, templateId, templateParams, publicKey)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      setSubmitStatus({
        type: "success",
        message:
          "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message: "Không thể gửi email. Vui lòng thử lại sau.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="pt-16">
        {/* Header Section */}
        <section className="py-12 bg-linear-to-br from-[#6D2323]/5 via-[#E5D0AC]/10 to-[#FBA51C]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-[#6D2323] mb-4">
                Liên Hệ
              </h1>
              <p className="text-lg text-foreground/80">
                Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Brand Info */}
              <Card className="p-8 border-[#E5D0AC]">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/logo.png"
                    alt="Kính Lễ"
                    className="w-16 h-16 object-contain rounded-lg"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-[#6D2323]">
                      Kính Lễ
                    </h2>
                    <p className="text-lg text-foreground/80">
                      Nền tảng số hóa lịch truyền thống Việt Nam
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Sứ mệnh bảo tồn và hiện đại hóa lịch Việt trên nền tảng công
                  nghệ
                </p>
              </Card>

              {/* Contact Details */}
              <Card className="p-8 border-[#E5D0AC] space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#A31D1D]/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#A31D1D]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#6D2323] mb-2">
                      Địa điểm
                    </h3>
                    <p className="text-foreground/80">
                      Khu công nghệ cao Hòa Lạc
                    </p>
                    <p className="text-foreground/80">Hà Nội, Việt Nam</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#A31D1D]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[#A31D1D]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#6D2323] mb-2">
                      Số điện thoại
                    </h3>
                    <a
                      href="tel:+84903242748"
                      className="text-[#A31D1D] hover:text-[#6D2323] transition-colors text-lg"
                    >
                      090 324 27 48
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#A31D1D]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#A31D1D]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#6D2323] mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:kinhleapp2025@gmail.com"
                      className="text-[#A31D1D] hover:text-[#6D2323] transition-colors text-lg break-all"
                    >
                      kinhleapp2025@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              {/* Map */}
              <Card className="p-4 border-[#E5D0AC]">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29799.88164721564!2d105.52439957431642!3d21.012727900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345b465a4e65fb%3A0xaae6040cfabe8fe!2zS2h1IGPDtG5nIG5naOG7hyBjYW8gSG_DoCBM4bqhYw!5e0!3m2!1svi!2s!4v1733059200000!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8 border-[#E5D0AC]">
                <h2 className="text-2xl font-bold text-[#6D2323] mb-6">
                  Gửi tin nhắn cho chúng tôi
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#6D2323] mb-2"
                    >
                      Họ và tên <span className="text-[#A31D1D]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A31D1D] focus:border-transparent"
                      placeholder="Nhập họ và tên của bạn"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#6D2323] mb-2"
                      >
                        Email <span className="text-[#A31D1D]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A31D1D] focus:border-transparent"
                        placeholder="email@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#6D2323] mb-2"
                      >
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A31D1D] focus:border-transparent"
                        placeholder="0903242748"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-[#6D2323] mb-2"
                    >
                      Tiêu đề <span className="text-[#A31D1D]">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A31D1D] focus:border-transparent"
                      placeholder="Vấn đề bạn muốn trao đổi"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#6D2323] mb-2"
                    >
                      Nội dung <span className="text-[#A31D1D]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A31D1D] focus:border-transparent resize-none"
                      placeholder="Nhập nội dung tin nhắn của bạn..."
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus.type && (
                    <div
                      className={`p-4 rounded-lg ${
                        submitStatus.type === "success"
                          ? "bg-green-50 border border-green-200 text-green-800"
                          : "bg-red-50 border border-red-200 text-red-800"
                      }`}
                    >
                      <p className="text-sm font-medium">
                        {submitStatus.message}
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#A31D1D] hover:bg-[#6D2323] text-white py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 " />
                        Gửi tin nhắn
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
