import { Header } from "@/components/header"
import { BannerSlider } from "@/components/banner-slider"
import { FestivalsGrid } from "@/components/festivals-grid"
import { CalendarBlogSection } from "@/components/calendar-blog-section"
import { ServicesSection } from "@/components/services-section"
import { StoriesSection } from "@/components/stories-section"
import { GallerySection } from "@/components/gallery-section"
import { PlanningGuide } from "@/components/planning-guide"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <BannerSlider />
      <CalendarBlogSection />
      <ServicesSection />
      <FestivalsGrid />
      <StoriesSection />
      <GallerySection />
      <PlanningGuide />
      <NewsletterSignup />
      <Footer />
    </main>
  )
}
