// Mock data cho các loại văn khấn
export interface Prayer {
  id: string
  title: string
  category: string
  description: string
  occasion: string
  difficulty: "Dễ" | "Trung bình" | "Khó"
  duration: string
  content: string[]
  preparation: string[]
  notes: string[]
}

export const prayersData: Record<string, Prayer[]> = {
  featured: [
    
  ],
  tet: [
    {
      id: "tat-nien-30-tet",
      title: "Bài khấn 30 Tết tại gia - Lễ Tất Niên",
      category: "tet",
      description: "Văn khấn cúng tất niên chiều 30 Tết, truy niệm tổ tiên và cáo tuế",
      occasion: "Chiều 30 Tết",
      difficulty: "Dễ",
      duration: "10-15 phút",
      content: [
        "Cẩn cáo gia tiên ngày Tết.",
        "Con nam mô a di đà phật (3 lần).",
        "Con lạy 9 phương trời 10 phương phật chư phật 10 phương.",
        "Con lạy gia tiên nội ngoại bà cô ông mãnh họ ( Xưng họ gia đình)",
        "",
        "Việt Nam Quốc",
        "Thành phố… / Tỉnh...",
        "Quận... / Huyện...",
        "Phường… / Xã...",
        "Đường… / Thôn xóm...",
        "Nhà số...",
        "",
        "Con xin kính cẩn thưa rằng:",
        "Vật đời xa vời",
        "Năm cùng tháng kiệt",
        "Xuân tiết gần sang",
        "Đông tàn sắp hết",
        "Chiều 30 Tết sửa lễ tất niên",
        "Truy niệm tổ tiên",
        "Theo như thường lệ",
        "Tửu trà cáo tuế",
        "Lễ bạc kính dâng",
        "Phủ tiếu hương đăng",
        "Lễ nghi thịnh soạn",
        "",
        "Lạy xin tổ tiên chứng giám lòng thành, lai lâm hiến hưởng 3 ngày tết",
        "Phù hộ độ trì toàn gia quyến già trẻ gái trai họ...",
        "Bình yên khang khái muôn phần tốt tươi",
        "",
        "Đọc bài khấn từ đầu đến cuối 3 lần",
        "Rồi a di đà phật. (1 lần)",
        "Sau đó vái 3 vái"
      ],
      preparation: [
        "Hoa, quả (lễ mặn tùy tâm)",
        "Thắp hương các bát 3 nén",
        "Một ngọn nến hoặc thắp đèn dầu"
      ],
      notes: [
        "Gần hết hương thì lên hương vòng",
        "Đến giao thừa, lễ ngoài trời xong, thắp mỗi bát trong nhà 5 nén để đón cung sinh vào nhà",
        "Cần xưng họ gia đình và địa chỉ cụ thể",
        "Đọc bài khấn 3 lần từ đầu đến cuối"
      ]
    }
  ],
  ram: [
    
  ],
  "gia-tien": [
    
  ],
  "khai-truong": [
    
  ],
  "tho-dia": [
    
  ],
  "nam-moi": [
   
  ],
}

export function getPrayersByCategory(categoryId: string): Prayer[] {
  return prayersData[categoryId] || []
}

export function getPrayerById(categoryId: string, prayerId: string): Prayer | undefined {
  const prayers = prayersData[categoryId] || []
  return prayers.find((p) => p.id === prayerId)
}

export const categoryInfo: Record<
  string,
  { title: string; description: string; image: string; color: string }
> = {
  featured: {
    title: "Văn khấn nổi bật",
    description: "Những bài văn khấn phổ biến và hay được sử dụng nhất",
    image: "/prayers/featured.jpg",
    color: "from-wine-red/20 to-gold/20",
  },
  tet: {
    title: "Văn khấn Tết",
    description: "Văn khấn cho dịp Tết Nguyên Đán",
    image: "/prayers/tet.jpg",
    color: "from-rose-100 to-red-100",
  },
  ram: {
    title: "Văn khấn Rằm",
    description: "Văn khấn mồng 1, rằm hàng tháng",
    image: "/prayers/ram.jpg",
    color: "from-amber-100 to-yellow-100",
  },
  "gia-tien": {
    title: "Cúng gia tiên",
    description: "Văn khấn cúng tổ tiên, cúng giỗ",
    image: "/prayers/gia-tien.jpg",
    color: "from-purple-100 to-pink-100",
  },
  "khai-truong": {
    title: "Khai trương",
    description: "Văn khấn khai trương, khởi công",
    image: "/prayers/khai-truong.jpg",
    color: "from-green-100 to-emerald-100",
  },
  "tho-dia": {
    title: "Thổ địa - Thần tài",
    description: "Văn khấn cúng thổ địa, thần tài",
    image: "/prayers/tho-dia.jpg",
    color: "from-blue-100 to-cyan-100",
  },
  "nam-moi": {
    title: "Cúng đầu năm",
    description: "Văn khấn đầu năm, cúng giao thừa",
    image: "/prayers/nam-moi.jpg",
    color: "from-orange-100 to-amber-100",
  },
}
