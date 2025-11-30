import { Header } from "@/components/header"
import { BannerSlider } from "@/components/banner-slider"
import { CalendarBlogSection } from "@/components/calendar-blog-section"
import { ServicesSection } from "@/components/services-section"
import { PrayersSection } from "@/components/prayers-section"
import { FestivalsSection } from "@/components/festivals-section"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <BannerSlider />
      <CalendarBlogSection />
      <PrayersSection />
      <FestivalsSection />
      <ServicesSection />
      {/* <NewsletterSignup /> */}
      <Footer />
    </main>
  )
}
