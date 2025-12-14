// Data cho các ngày lễ và lễ hội

export interface Festival {
  id: string;
  title: string;
  date: string; // Ngày âm lịch
  category: "tet" | "le-phat" | "le-truyen-thong" | "le-khac";
  image: string;
  meaning: string;
  offerings: string;
  notes?: string[];
  relatedPrayers?: string[]; // IDs của các bài khấn liên quan
  relatedPosts?: string[]; // IDs của các bài viết liên quan
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
      "Thích hợp để cầu may mắn cho cả năm",
    ],
    relatedPrayers: ["mong-mot-ram", "ram-thang-gieng-nguyen-tieu"],
    relatedPosts: ["1", "2"],
  },
  {
    id: "tet-doan-ngo",
    title: "Tết Đoan Ngọ (Mùng 5 tháng 5 Âm Lịch)",
    date: "Mùng 5 tháng 5 Âm Lịch",
    category: "tet",
    image: "/festivals/tet-doan-ngo.jpg",
    meaning: `Tết Đoan Ngọ, còn gọi là Tết diệt sâu bọ, diễn ra vào mùng 5 tháng 5 âm lịch, thời điểm thời tiết nóng ẩm, sâu bệnh dễ phát sinh, ảnh hưởng đến mùa màng và sức khỏe con người. Theo quan niệm dân gian, việc ăn cơm rượu nếp và các loại trái cây chua vào sáng sớm ngày này giúp thanh lọc cơ thể và phòng bệnh.

Đồng thời, đây cũng là dịp người Việt dâng lễ cúng tổ tiên, cầu mưa thuận gió hòa, mùa màng bội thu và thể hiện lòng hiếu kính, gìn giữ truyền thống tâm linh gia đình.`,
    offerings: `Mâm lễ Tết Đoan Ngọ không cầu kỳ nhưng mang tính biểu trưng cao, thường gồm:
• Cơm rượu nếp cái
• Hoa quả theo mùa như mận, đào, vải
• Bánh ú tro (bánh tro)
• Hương, hoa, trà, rượu, nước sạch

Đặc trưng mâm cúng theo vùng:
• Nam Bộ: Ngoài mâm ngũ quả và bánh trái, nhiều gia đình còn cúng vịt luộc nguyên con, thể hiện tính mộc mạc và no đủ.
• Huế: Mâm cúng thường có thịt vịt, chè kê, bánh tráng nướng (bánh đa), các món có tính mát để cân bằng khí hậu nóng bức.
• Miền Bắc: Đơn giản với cơm rượu nếp, bánh tro, hoa quả chua ngọt theo mùa.`,
    notes: [
      "Khi thực hiện nghi lễ, gia đình nên chuẩn bị lễ vật vừa phải, giữ sự thành tâm",
      "Tránh mê tín hay phô trương hình thức",
      "Lựa chọn thực phẩm phù hợp để đảm bảo sức khỏe, đặc biệt với trẻ nhỏ và người cao tuổi",
      "Khấn với tâm thành kính, trang nghiêm, không cần đọc quá to",
      "Nên khấn vào buổi sáng mùng 5/5 âm lịch",
      "Sau khi khấn xong, vái hoặc lạy 3–5 lạy rồi chờ hương tàn, hạ lễ",
    ],
    relatedPrayers: [""],
    relatedPosts: [],
  },
  {
    id: "that-tich",
    title: "Tết Thất Tịch (Ngưu Lang – Chức Nữ)",
    date: "Mùng 7 tháng Bảy Âm lịch",
    category: "le-truyen-thong",
    image: "/festivals/that-tich.jpg",
    meaning: `Tết Thất Tịch có nguồn gốc từ truyền thuyết Ngưu Lang – Chức Nữ trong văn hóa phương Đông. Câu chuyện kể về đôi vợ chồng vì phạm luật trời nên bị chia cắt, mỗi năm chỉ được gặp nhau một lần vào ngày mùng 7 tháng Bảy âm lịch.

Trong văn hóa Việt Nam, ngày này còn được dân gian gọi là ngày “ông Ngâu – bà Ngâu”, gắn với hiện tượng mưa ngâu, được ví như nước mắt đoàn tụ của đôi lứa. Theo quan niệm dân gian, những cơn mưa tháng Bảy là dấu hiệu cho cuộc gặp gỡ hiếm hoi nhưng đầy xúc động của Ngưu Lang và Chức Nữ.

Theo thời gian, Tết Thất Tịch dần mang ý nghĩa nhân văn sâu sắc hơn, trở thành dịp để con người cầu mong nhân duyên tốt lành, tình cảm vợ chồng, đôi lứa bền chặt, hòa thuận, thủy chung lâu dài, đồng thời nhắc nhở mỗi người biết trân trọng và gìn giữ hạnh phúc gia đình.`,
    offerings: `🌸 Lễ vật Tết Thất Tịch có thể thay đổi tùy theo vùng miền và điều kiện từng gia đình, thường ưu tiên lễ chay, gọn gàng, thanh tịnh.

**Miền Bắc**
- Hương, đèn hoặc nến
- Hoa tươi (hoa cúc, hoa huệ)
- Trầu cau
- Nước sạch hoặc trà
- Mâm ngũ quả theo mùa (chuối, bưởi, na, táo, hồng…)
- Bánh chay, bánh đậu xanh
- Chè đậu đỏ nấu nhạt (tùy gia đình)

**Miền Trung**
- Hương, đèn, hoa tươi
- Trà hoặc nước sạch
- Trái cây theo mùa (chuối, cam, thanh long, dưa hấu…)
- Bánh ít, bánh in, bánh đậu xanh
- Một số loại bánh truyền thống địa phương

**Miền Nam**
- Hương, đèn hoặc nến
- Hoa tươi
- Trà hoặc nước sạch
- Trái cây tươi
- Chè đậu đỏ, chè trôi nước hoặc các món ngọt
- Bánh ngọt, bánh truyền thống miền Nam

**Lưu ý chung**
- Lễ vật có thể gia giảm theo điều kiện gia đình
- Ưu tiên lễ chay, sạch sẽ, không phô trương
- Quan trọng nhất là lòng thành kính`,
    notes: [
      "Nguồn gốc từ truyền thuyết Ngưu Lang – Chức Nữ",
      "Dân gian còn gọi là ngày ông Ngâu – bà Ngâu",
      "Mang ý nghĩa cầu duyên, cầu hạnh phúc gia đình",
      "Nên cúng lễ đơn giản, chú trọng tâm thành",
      "Có thể cúng vào chiều hoặc tối ngày 7/7 Âm lịch",
    ],
    relatedPrayers: ["van-khan-tet-that-tich"],
    relatedPosts: ["that-tich-y-nghia", "that-tich-cach-cung"],
  },
  {
    id: "trung-nguyen",
    title: "Tết Trung Nguyên (Rằm tháng Bảy – Vu Lan báo hiếu)",
    date: "Rằm tháng Bảy Âm lịch",
    category: "tet",
    image: "/festivals/trung-nguyen.jpg",
    meaning: `Tết Trung Nguyên (Rằm tháng Bảy) có nguồn gốc từ sự giao thoa giữa Đạo giáo và Phật giáo. Theo Đạo giáo, đây là ngày Địa Quan xá tội, mở cửa âm giới để xét và tha tội cho các vong linh, từ đó hình thành tục cúng vong nhân, cúng cô hồn.

Trong Phật giáo, Rằm tháng Bảy là lễ Vu Lan, xuất phát từ tích Mục Kiền Liên cứu mẹ, đề cao tinh thần báo hiếu và cầu siêu cho cha mẹ nhiều đời nhiều kiếp. Khi du nhập vào Việt Nam – nơi đạo hiếu và thờ cúng tổ tiên giữ vai trò trung tâm – hai nguồn gốc này hòa quyện, tạo nên một ngày lễ mang ý nghĩa nhân văn sâu sắc.

Tết Trung Nguyên vì thế vừa là dịp tưởng nhớ, báo hiếu cha mẹ, tổ tiên, vừa thể hiện lòng từ bi, sẻ chia với các vong linh, chúng sinh không nơi nương tựa, nhắc nhở con người sống thiện lành và biết trân trọng phúc đức.`,
    offerings: `Trong dân gian Việt Nam, Rằm tháng Bảy thường có ba lễ cúng chính, được thực hiện tách biệt:

**Cúng Phật**
- Hoa tươi, quả chín
- Xôi, chè, cơm chay
- Nước sạch hoặc trà

**Cúng Gia tiên**
- Mâm cơm mặn hoặc chay tùy gia đình
- Hương hoa, trà rượu
- Vàng mã gia tiên (vừa phải)

**Cúng Cô hồn (Chúng sinh)**
- Cháo loãng
- Bỏng ngô, bánh kẹo
- Gạo, muối
- Tiền vàng, quần áo chúng sinh
- Không cúng đồ mặn

Các lễ thường được tiến hành riêng biệt; lễ cúng cô hồn đặt ngoài sân hoặc trước cửa nhà, không cúng chung với gia tiên.`,
    notes: [
      "Là sự kết hợp giữa Tết Trung Nguyên (Đạo giáo) và lễ Vu Lan (Phật giáo)",
      "Có ba lễ cúng chính: Phật – Gia tiên – Cô hồn",
      "Nên ưu tiên lễ chay, hạn chế sát sinh",
      "Cúng cô hồn ngoài trời, không mang lễ vào nhà",
      "Quan trọng nhất là lòng thành và ý nghĩa hướng thiện",
    ],
    relatedPrayers: [
      "van-khan-phat-vu-lan",
      "van-khan-gia-tien-trung-nguyen",
      "van-khan-co-hon-trung-nguyen",
    ],
    relatedPosts: ["tet-trung-nguyen-y-nghia", "ram-thang-bay-cach-cung"],
  },
  {
    id: "trung-thu",
    title: "Tết Trung Thu (Rằm tháng Tám – Tết Đoàn Viên)",
    date: "Rằm tháng Tám Âm lịch",
    category: "tet",
    image: "/festivals/trung-thu.jpg",
    meaning: `Tết Trung Thu, diễn ra vào ngày Rằm tháng Tám âm lịch, còn được gọi là Tết Trông Trăng, Tết Đoàn Viên. Đây là dịp lễ mang đậm ý nghĩa sum họp gia đình, gắn với hình ảnh trăng tròn – biểu tượng của sự viên mãn, đủ đầy và hạnh phúc.

Trong văn hóa Việt Nam, Trung Thu không chỉ là ngày vui của thiếu nhi mà còn là dịp để các gia đình quây quần bên nhau, cùng dâng lễ cúng tổ tiên, tạ ơn trời đất đã ban cho mùa màng bội thu. Trăng rằm tháng Tám được xem là sáng và tròn nhất trong năm, tượng trưng cho sự hòa hợp âm dương, gia đạo êm ấm, con cháu đủ đầy.`,
    offerings: `Vào tối Rằm tháng Tám, nhiều gia đình chuẩn bị mâm cỗ Trung Thu để:
- **Cúng gia tiên:** tỏ lòng hiếu kính, cầu mong gia đạo bình an
- **Cúng trăng (cúng trời đất):** cảm tạ thiên nhiên, cầu cho mưa thuận gió hòa

Sau khi cúng, cả gia đình cùng phá cỗ, ngắm trăng; trẻ em rước đèn, múa lân tạo nên không khí ấm áp và vui tươi.

**Mâm cỗ Trung Thu truyền thống**
- Bánh Trung Thu (bánh nướng, bánh dẻo)
- Hoa quả theo mùa (bưởi, hồng, na, chuối…)
- Trà, hương, đèn nến
- Đèn lồng, đồ chơi Trung Thu cho trẻ nhỏ

🧺 **Miền Bắc**
- Bánh Trung Thu: bánh nướng, bánh dẻo
- Trái cây: bưởi (tạo hình chó bưởi), hồng đỏ, na, chuối
- Trà sen hoặc trà mạn
- Hoa tươi (hoa cúc, hoa huệ)
- Hương, nến, đèn dầu
- Đèn ông sao, đèn kéo quân (trang trí)

🧺 **Miền Trung**
- Bánh Trung Thu truyền thống
- Trái cây theo mùa: chuối, mãng cầu, cam, dứa
- Trà nóng hoặc nước sạch
- Hoa tươi giản dị (hoa cúc, hoa vạn thọ)
- Hương, nến
- Có thể thêm bánh trái quê (bánh in, bánh thuẫn, bánh nổ)

🧺 **Miền Nam**
- Bánh Trung Thu (đa dạng vị)
- Trái cây: mãng cầu, dừa, đu đủ, xoài (ngũ quả “cầu – vừa – đủ – xài”)
- Trà hoặc nước ngọt
- Hoa tươi (hoa cúc, hoa đồng tiền)
- Hương, nến
- Đèn lồng giấy, đèn cá chép, lồng đèn cho trẻ em`,
    notes: [
      "Cúng vào buổi tối Rằm, khi trăng lên cao là đẹp nhất",
      "Giữ không khí đoàn viên, vui vẻ; tránh cãi vã, buồn phiền",
      "Mâm cỗ không cần cầu kỳ, quan trọng là sự sum vầy và lòng thành",
      "Sau lễ cúng, cả nhà phá cỗ, ngắm trăng, trẻ em rước đèn/múa lân",
      "Nên chia sẻ ý nghĩa Trung Thu cho con trẻ để gìn giữ truyền thống",
    ],
    relatedPrayers: [
      "van-khan-gia-tien-trung-thu",
      "van-khan-cung-trang-trung-thu",
    ],
    relatedPosts: ["tet-trung-thu-y-nghia", "mam-co-trung-thu-3-mien"],
  },
  {
    id: "com-moi",
    title: "Tết Cơm Mới (Mồng 10 tháng Mười Âm lịch)",
    date: "Mồng 10 tháng Mười Âm lịch",
    category: "le-truyen-thong",
    image: "/festivals/com-moi.jpg",
    meaning: `Tết Cơm Mới là nghi lễ truyền thống sau vụ thu hoạch, mang ý nghĩa tạ ơn Trời Đất – Thần Nông – Tổ tiên, đồng thời cầu mong mùa màng năm tới thuận lợi, gia đạo đủ đầy.

Đây cũng là dịp con cháu dâng bát cơm gạo mới đầu mùa lên ông bà, thể hiện đạo hiếu và sự tri ân nguồn cội, nhắc nhở mọi người trân trọng thành quả lao động và phúc đức tổ tiên để lại.`,
    offerings: `🧺 Tết Cơm Mới theo từng vùng miền

🔹 **Miền Bắc**
Miền Bắc coi trọng lễ nghi và tính truyền thống, lễ vật gắn với nông nghiệp lúa nước:
- Cơm gạo mới (**bắt buộc**)
- Xôi gạo mới hoặc cốm
- Gà luộc hoặc mâm cơm mặn truyền thống
- Hoa tươi (hoa cúc, hoa huệ)
- Trầu cau
- Trà, rượu
- Hương, đèn
Gia đình thường cúng trong nhà, vào buổi sáng hoặc trưa.

🔹 **Miền Trung**
Miền Trung đề cao sự giản dị, thành kính, lễ vật không cầu kỳ:
- Cơm gạo mới
- Canh rau, cá khô hoặc thịt luộc
- Xôi hoặc bánh quê (bánh in, bánh nếp)
- Hoa tươi đơn giản
- Nước sạch hoặc trà
- Hương, đèn
Một số nơi gọi là lễ mừng lúa mới, cúng sớm để “kính trước – ăn sau”.

🔹 **Miền Nam**
Miền Nam mang nét phóng khoáng, ấm cúng, chú trọng không khí gia đình:
- Cơm gạo mới
- Canh, món kho (thịt kho, cá kho)
- Trái cây theo mùa
- Trà hoặc rượu
- Hoa tươi
- Hương, đèn
Lễ có thể kết hợp thành bữa cơm sum họp; sau khi cúng, cả nhà cùng dùng cơm mới.`,
    notes: [
      "Nhất định phải có cơm gạo mới, dù mâm lễ đơn giản",
      "Cúng với tinh thần tạ ơn, không cầu xin nặng vật chất",
      "Có thể cúng buổi sáng hoặc trưa, tránh cúng quá muộn",
      "Sau lễ nên cùng dùng cơm mới để tạo không khí gắn kết",
      "Thích hợp để tạ ơn Trời Đất – Thần Nông – Tổ tiên sau vụ mùa",
    ],
    relatedPrayers: ["van-khan-tet-com-moi"],
    relatedPosts: ["tet-com-moi-y-nghia", "le-vat-tet-com-moi-3-mien"],
  },
  {
    id: "nguyen-dan",
    title: "Tết Nguyên Đán (Tết Âm lịch – Tết Cổ Truyền)",
    date: "Từ Giao thừa đến mùng 3–4 tháng Giêng Âm lịch",
    category: "tet",
    image: "/festivals/nguyen-dan.jpg",
    meaning: `Tết Nguyên Đán là lễ Tết lớn nhất và quan trọng nhất trong năm của người Việt, đánh dấu thời khắc chuyển giao giữa năm cũ và năm mới âm lịch. Đây không chỉ là khởi đầu của một chu kỳ thời gian mới mà còn là dịp thiêng liêng để đoàn tụ gia đình, tưởng nhớ tổ tiên, tạ ơn trời đất và cầu mong phúc lộc, bình an.

“Nguyên” mang nghĩa là sự khởi đầu, “Đán” là buổi sớm mai. Tết Nguyên Đán vì thế tượng trưng cho sự mở đầu mới, khơi dậy hy vọng về một năm an lành – sung túc – thuận hòa. Đây cũng là thời điểm con người gác lại lo toan, hướng về cội nguồn, giữ gìn đạo hiếu và gắn kết tình thân.`,
    offerings: `🕯️ **Các nghi lễ chính trong Tết Nguyên Đán**
- Cúng Ông Công – Ông Táo (23 tháng Chạp)
- Cúng Tất niên (tiễn năm cũ)
- Cúng Giao thừa (ngoài trời & trong nhà)
- Cúng mùng 1 – mùng 2 – mùng 3 Tết
- Hóa vàng – tiễn tổ tiên (thường mùng 3 hoặc mùng 4)

🧺 **Mâm cỗ Tết truyền thống**
- Bánh chưng / bánh tét
- Các món mặn truyền thống (gà luộc, thịt kho, giò chả…)
- Dưa hành, củ kiệu
- Mâm ngũ quả
- Trà, rượu, hương hoa

🧺 **Theo vùng miền**

🔹 **Miền Bắc**
- Bánh chưng (bắt buộc)
- Gà trống luộc (gà cánh tiên)
- Giò lụa, giò xào
- Canh măng hoặc canh bóng
- Nem rán, dưa hành
- Ngũ quả: chuối xanh – bưởi – cam/quýt – hồng – lê
- Hoa đào, hoa cúc
- Trà, rượu, hương, nến

🔹 **Miền Trung**
- Bánh chưng hoặc bánh tét
- Thịt luộc, cá kho, nem chua (tùy vùng)
- Dưa món
- Canh khổ qua hoặc canh rau
- Ngũ quả theo mùa
- Hoa cúc, hoa vạn thọ

🔹 **Miền Nam**
- Bánh tét
- Thịt kho tàu, canh khổ qua nhồi thịt
- Dưa giá, củ kiệu
- Ngũ quả: mãng cầu – dừa – đu đủ – xoài
- Hoa mai vàng
- Trà hoặc nước ngọt`,
    notes: [
      "Là Tết lớn và quan trọng nhất trong năm của người Việt",
      "Giữ lời nói hòa nhã, tránh cãi vã đầu năm",
      "Hạn chế làm đổ vỡ, quét nhà trong ngày mùng 1 (theo quan niệm dân gian)",
      "Cúng lễ không cần cầu kỳ, quan trọng là lòng thành và sự đoàn viên",
      "Ưu tiên chúc Tết, thăm hỏi với tâm hoan hỷ",
    ],
    relatedPrayers: [
      "van-khan-giao-thua-ngoai-troi",
      "van-khan-giao-thua-trong-nha",
      "van-khan-mung-1-tet",
      "van-khan-hoa-vang-tet",
    ],
    relatedPosts: [
      "tet-nguyen-dan-y-nghia",
      "mam-co-tet-3-mien",
      "nghi-le-tet-co-truyen",
    ],
  },
];

export const festivalCategories = {
  tet: {
    title: "Tết và Lễ Hội",
    description: "Các ngày Tết truyền thống của người Việt",
    color: "from-rose-100 to-red-100",
  },
  "le-phat": {
    title: "Lễ Phật",
    description: "Các ngày lễ Phật giáo quan trọng",
    color: "from-amber-100 to-yellow-100",
  },
  "le-truyen-thong": {
    title: "Lễ Truyền Thống",
    description: "Các ngày lễ dân gian truyền thống",
    color: "from-purple-100 to-pink-100",
  },
  "le-khac": {
    title: "Lễ Khác",
    description: "Các ngày lễ đặc biệt khác",
    color: "from-blue-100 to-cyan-100",
  },
};

export function getFestivalById(id: string): Festival | undefined {
  return festivalsData.find((f) => f.id === id);
}

export function getFestivalsByCategory(category: string): Festival[] {
  return festivalsData.filter((f) => f.category === category);
}
