export { getLunarInfo } from "./lunar-calculator"
export type { LunarInfo } from "./lunar-calculator"

export type BannerSlide = {
  id: string
  title: string
  subtitle?: string
  description: string
  imageUrl: string
  ctaLabel: string
  ctaLink: string
}

export const bannerSlides: BannerSlide[] = [
  {
    id: "1",
    title: "Tết Nguyên Đán",
    subtitle: "Lễ hội lớn nhất",
    description: "Đón chào năm mới theo lịch âm lịch - niên đại của âm phủ, phục hưng và thịnh vượng",
    imageUrl: "/banner/do-tho-yen-lang.jpg",
    ctaLabel: "Khám phá lễ hội",
    ctaLink: "#festivals",
  },
  {
    id: "2",
    title: "Tết Nguyên Đán",
    subtitle: "Lễ hội lớn nhất",
    description: "Đón chào năm mới theo lịch âm lịch - niên đại của âm phủ, phục hưng và thịnh vượng",
    imageUrl: "/banner/do-tho-yen-lang.jpg",
    ctaLabel: "Khám phá lễ hội",
    ctaLink: "#festivals",
  },
]
