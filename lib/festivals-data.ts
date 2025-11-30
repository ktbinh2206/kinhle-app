// Data cho các ngày lễ và lễ hội

export interface Festival {
  id: string
  title: string
  date: string // Ngày âm lịch
  category: "tet" | "le-phat" | "le-truyen-thong" | "le-khac"
  image: string
  meaning: string
  offerings: string
  notes?: string[]
}

export const festivalsData: Festival[] = [
  {
    id: "nguyen-tieu",
    title: "Tết Nguyên Tiêu (Rằm tháng Giêng)",
    date: "Rằm tháng Giêng",
    category: "tet",
    image: "/festivals/nguyen-tieu.jpg",
    meaning: `Trong văn hoá dân gian Việt Nam cũng như nhiều nước phương Đông, rằm tháng Giêng – còn gọi là Tết Nguyên Tiêu hoặc Tết Thượng Nguyên – được xem là một trong những ngày lễ quan trọng nhất đầu năm. Vì đây là ngày rằm đầu tiên, người xưa tin rằng sự chu đáo trong lễ cúng sẽ mang lại một khởi đầu thuận lợi cho cả năm, thể hiện qua quan niệm: "Đầu xuôi đuôi lọt" và câu truyền tụng: "Cúng bái cả năm không bằng rằm tháng Giêng."

Tháng Giêng cũng là thời điểm mọi người đi du xuân, ngắm cảnh và đến các phủ, đền, chùa, miếu để cầu chúc cho bản thân và gia đình bình an, thuận lợi trong công việc, cuộc sống. Ở một số địa phương, các hoạt động văn hoá dân gian như hát chầu văn, các nghi lễ truyền thống được tổ chức nhằm gìn giữ nét đẹp tinh thần của cộng đồng.

Bên cạnh đó, do ảnh hưởng từ giáo lý Phật giáo, nhiều Phật tử thường lựa chọn ăn chay, dâng lễ chay, đi chùa thắp hương và thực hành các hoạt động thiện lành để nuôi dưỡng tâm an và tích lũy công đức.

Nhìn chung, các tập tục trong ngày rằm tháng Giêng đều thể hiện mong muốn một năm mới khởi đầu tốt đẹp, gia đạo an vui và cuộc sống gặp nhiều may mắn.`,
    offerings: `Lễ vật dâng trong ngày rằm tháng Giêng thay đổi tùy theo truyền thống mỗi vùng miền. Có nơi chuẩn bị hoa quả, xôi, chè; nơi khác lại chuộng các món như xôi gấc, gà luộc hoặc giò.

Đối với những gia đình có thờ Phật hoặc chịu ảnh hưởng văn hoá Phật giáo, lễ cúng thường là mâm cơm chay gồm xôi, chè, hoa sen hoặc hoa huệ, và trái cây tươi. Dù lễ vật có khác nhau, điểm chung vẫn là sự trang nghiêm, tinh khiết và xuất phát từ tấm lòng thành kính của gia chủ.`,
    notes: [
      "Đây là ngày rằm đầu tiên trong năm, rất quan trọng",
      "Nên đi chùa, thắp hương cầu bình an",
      "Nhiều người chọn ăn chay trong ngày này",
      "Thích hợp để cầu may mắn cho cả năm"
    ]
  }
]

export const festivalCategories = {
  "tet": {
    title: "Tết và Lễ Hội",
    description: "Các ngày Tết truyền thống của người Việt",
    color: "from-rose-100 to-red-100"
  },
  "le-phat": {
    title: "Lễ Phật",
    description: "Các ngày lễ Phật giáo quan trọng",
    color: "from-amber-100 to-yellow-100"
  },
  "le-truyen-thong": {
    title: "Lễ Truyền Thống",
    description: "Các ngày lễ dân gian truyền thống",
    color: "from-purple-100 to-pink-100"
  },
  "le-khac": {
    title: "Lễ Khác",
    description: "Các ngày lễ đặc biệt khác",
    color: "from-blue-100 to-cyan-100"
  }
}

export function getFestivalById(id: string): Festival | undefined {
  return festivalsData.find(f => f.id === id)
}

export function getFestivalsByCategory(category: string): Festival[] {
  return festivalsData.filter(f => f.category === category)
}
