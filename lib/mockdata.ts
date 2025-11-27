export const festivals = [
  {
    id: 1,
    name: "Tết Nguyên Đán",
    date: "Feb 10, 2025",
    description: "Lunar New Year - The most important celebration of the year",
    image: "/lunar-new-year-celebration.jpg",
    color: "wine-red",
  },
  {
    id: 2,
    name: "Lễ Hội Trung Thu",
    date: "Sep 18, 2025",
    description: "Mid-Autumn Festival - Children's celebration with lanterns",
    image: "/mid-autumn-festival-lanterns.jpg",
    color: "accent-red",
  },
  {
    id: 3,
    name: "Tết Dương Lịch",
    date: "Jan 1, 2025",
    description: "Western New Year - Modern celebration",
    image: "/new-year-celebration.jpg",
    color: "gold",
  },
  {
    id: 4,
    name: "Lễ Hội Độc Lập",
    date: "Sep 2, 2025",
    description: "National Day - Celebrating Vietnamese independence",
    image: "/vietnamese-independence.jpg",
    color: "wine-red",
  },
]

export const stories = [
  {
    id: 1,
    title: "The Legend of Tết",
    excerpt: "Discover the ancient traditions and legends behind the Lunar New Year celebration...",
    image: "/t-t-legend-tradition.jpg",
    category: "Tradition",
  },
  {
    id: 2,
    title: "Mid-Autumn Festival Through the Ages",
    excerpt: "How this beloved festival has evolved and remained central to Vietnamese culture...",
    image: "/mid-autumn-tradition.jpg",
    category: "History",
  },
  {
    id: 3,
    title: "Family Gatherings and Food",
    excerpt: "Traditional dishes and their significance in Vietnamese celebrations...",
    image: "/vietnamese-traditional-food.jpg",
    category: "Culture",
  },
]

export const galleryImages = [
  {
    id: 1,
    src: "/t-t-decoration.jpg",
    alt: "Tết decoration",
    title: "Tết Celebrations",
  },
  {
    id: 2,
    src: "/lantern-festival.png",
    alt: "Lantern festival",
    title: "Mid-Autumn Lanterns",
  },
  {
    id: 3,
    src: "/traditional-costumes.jpg",
    alt: "Traditional costumes",
    title: "Traditional Costumes",
  },
  {
    id: 4,
    src: "/family-gathering.png",
    alt: "Family gathering",
    title: "Family Gatherings",
  },
  {
    id: 5,
    src: "/temple-offerings.jpg",
    alt: "Temple offerings",
    title: "Temple Offerings",
  },
  {
    id: 6,
    src: "/street-celebration.jpg",
    alt: "Street celebration",
    title: "Street Celebrations",
  },
]

export const planningTips = [
  {
    title: "Before the Festival",
    tips: ["Clean your home", "Prepare decorations", "Plan your menu", "Buy new clothes"],
  },
  {
    title: "During the Festival",
    tips: ["Visit family", "Give red envelopes", "Enjoy traditional food", "Light incense"],
  },
  {
    title: "After the Festival",
    tips: ["Exchange greetings", "Visit friends", "Attend community events", "Reflect on the year"],
  },
]

export type BlogPost = {
  id: string
  title: string
  excerpt: string
  publishedAt: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Tết Nguyên Đán: Ý Nghĩa và Truyền Thống",
    excerpt: "Khám phá những ý nghĩa sâu xa và những truyền thống lâu đời của Tết Nguyên Đán...",
    publishedAt: "2025-11-20",
  },
  {
    id: "2",
    title: "Hướng Dẫn Chuẩn Bị Lễ Hội Trung Thu",
    excerpt: "Những bước chuẩn bị cần thiết để có một Trung Thu đáng nhớ cùng gia đình...",
    publishedAt: "2025-11-18",
  },
  {
    id: "3",
    title: "Các Món Ăn Truyền Thống Không Thể Bỏ Qua",
    excerpt: "Danh sách những món ăn đặc trưng phải có trong các dịp lễ hội của người Việt...",
    publishedAt: "2025-11-15",
  },
  {
    id: "4",
    title: "Nét Văn Hóa Độc Đáo Trong Các Lễ Hội",
    excerpt: "Tìm hiểu những đặc điểm văn hóa độc đáo trong các lễ hội truyền thống Việt Nam...",
    publishedAt: "2025-11-12",
  },
]

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
    imageUrl: "/t-t-nguy-n---n-vietnamese-lunar-new-year-lanterns-.jpg",
    ctaLabel: "Khám phá lễ hội",
    ctaLink: "#festivals",
  },
  {
    id: "2",
    title: "Rằm Tháng Giêng",
    subtitle: "Ngày kỳ linh thiêng",
    description: "Lễ hội đầu tiên trong năm, tưởng niệm những vị thần linh bảo vệ gia đình",
    imageUrl: "/r-m-th-ng-gi-ng-temple-offerings-incense-vietnames.jpg",
    ctaLabel: "Tìm hiểu ý nghĩa",
    ctaLink: "#stories",
  },
  {
    id: "3",
    title: "Lễ Hội Đền Hùng",
    subtitle: "Tôn vinh tổ tiên",
    description: "Hành hương về quê hương tâm linh để tưởng nhớ các vị vua Hùng - cha mẹ dân tộc",
    imageUrl: "/hung-kings-temple-festival-vietnam-ancestral-vener.jpg",
    ctaLabel: "Xem chi tiết",
    ctaLink: "#festivals",
  },
  {
    id: "4",
    title: "Trung Thu",
    subtitle: "Lễ hội của trẻ em",
    description: "Mặt trăng sáng, đèn lồng rực rỡ - khoảnh khắc kỳ diệu của gia đình sum họp",
    imageUrl: "/mid-autumn-festival-vietnam-lanterns-children-moon.jpg",
    ctaLabel: "Khám phá thêm",
    ctaLink: "#gallery",
  },
]
