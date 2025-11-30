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
    title: "",
    subtitle: "",
    description: "",
    imageUrl: "/banner/do-tho-yen-lang.png",
    ctaLabel: "",
    ctaLink: "#",
  },
  {
    id: "2",
    title: "",
    subtitle: "",
    description: "",
    imageUrl: "/banner/do-tho-khoa-nhan.png",
    ctaLabel: "",
    ctaLink: "#",
  },
]
