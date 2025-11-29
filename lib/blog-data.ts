export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar: string
  }
  category: string
  tags: string[]
  publishedAt: string
  readTime: string
  coverImage: string
  thumbnail: string
}

export const blogCategories = [
  { id: "all", name: "Tất cả", slug: "all" },
  { id: "lich-viet", name: "Lịch Việt", slug: "lich-viet" },
  { id: "phong-thuy", name: "Phong Thủy", slug: "phong-thuy" },
  { id: "tu-vi", name: "Tử Vi", slug: "tu-vi" },
  { id: "van-khan", name: "Văn Khấn", slug: "van-khan" },
  { id: "le-hoi", name: "Lễ Hội", slug: "le-hoi" },
  { id: "tam-linh", name: "Tâm Linh", slug: "tam-linh" },
]

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "nguon-goc-y-nghia-tin-nguong-tho-cung-to-tien",
    title: "Nguồn gốc & Ý nghĩa của Tín ngưỡng Thờ cúng Tổ tiên",
    excerpt:
      "Tìm hiểu về khái niệm, sự hình thành và nền tảng của tín ngưỡng thờ cúng tổ tiên - một nét văn hóa truyền thống đặc sắc của người Việt Nam.",
    content: `# Nguồn gốc & Ý nghĩa của Tín ngưỡng Thờ cúng Tổ tiên

## 1. Khái niệm Tín ngưỡng Thờ cúng Tổ tiên và Sự Hình thành trong Văn hóa Việt

Luật Tín ngưỡng, tôn giáo năm 2016 xác định tín ngưỡng là niềm tin của con người, được biểu đạt thông qua những nghi lễ gắn với phong tục và tập quán truyền thống, nhằm mang đến sự bình an trong đời sống tinh thần cho cá nhân và cộng đồng. Hoạt động tín ngưỡng bao gồm việc tôn thờ tổ tiên; tưởng niệm những người có công với làng nước; thờ phụng các vị thần, biểu tượng mang tính truyền thống; cùng những thực hành tín ngưỡng dân gian phản ánh những giá trị văn hóa – đạo đức đặc trưng.

Trong quan niệm phổ biến của người Việt, "tổ tiên" là những người đã khuất trong cùng dòng họ. Từ điển tiếng Việt (Hoàng Phê chủ biên) định nghĩa tổ tiên là tập hợp những người thuộc các thế hệ đầu tiên của một dòng họ hoặc dân tộc, đã qua đời từ lâu và có mối liên hệ kế thừa với các thế hệ sau. Học giả Trần Đăng Sinh cũng cho rằng tổ tiên gồm những người cùng huyết thống đã mất như cụ, kỵ, ông bà, cha mẹ – những người có công sinh thành, dưỡng dục và để lại ảnh hưởng sâu sắc tới đời sống vật chất, tinh thần của con cháu.

Từ nghĩa cơ bản đó, "tổ tiên" chỉ chung những bậc sinh thành đã mất. Tục thờ cúng tổ tiên xuất phát từ lòng tưởng nhớ, tri ân và niềm tin rằng linh hồn con người tiếp tục tồn tại sau khi thể xác không còn.

Ban đầu, việc thờ cúng chỉ giới hạn trong phạm vi huyết tộc. Nhưng cùng với quá trình hình thành và phát triển của cộng đồng làng xã và quốc gia, khái niệm tổ tiên được mở rộng hơn. Người Việt dần tôn thờ cả tổ sư, tổ nghề, thành hoàng làng, tiền hiền – hậu hiền, cũng như các anh hùng – danh nhân có công với đất nước. Đến thời hiện đại, tục thờ cúng tổ tiên mang tính quốc gia được thể hiện rõ nhất qua tín ngưỡng thờ Vua Hùng, một nét văn hóa độc đáo hiếm thấy trên thế giới.

## 2. Nền tảng hình thành tín ngưỡng thờ cúng tổ tiên

### a, Quan niệm "vạn vật hữu linh" và sự tồn tại của linh hồn

Theo quan niệm cổ truyền, con người gồm hai phần: thân xác và phần tinh thần (hồn vía). Khi còn sống, phần tinh thần điều khiển hành vi và cảm xúc; khi qua đời, thân xác tan biến nhưng phần hồn được cho là vẫn tiếp tục tồn tại trong cõi vô hình. Những trăn trở về sự sống – cái chết, về nơi chốn linh hồn đi đến hay sự kết nối giữa hai thế giới đã trở thành nền tảng hình thành phong tục tưởng nhớ và thờ cúng tổ tiên.

### b, Nhu cầu tìm điểm tựa tinh thần trong cuộc sống

Bên cạnh niềm tin tâm linh, các yếu tố tâm lý cũng góp phần quan trọng. Trong những lúc khó khăn, rủi ro hay biến cố, con người thường tìm đến điểm tựa tinh thần. Với người Việt, điểm tựa ấy chính là ông bà tổ tiên – những người có mối liên hệ mật thiết với gia đình qua nhiều thế hệ. Vì vậy, việc chăm lo hương khói và tưởng niệm người đã khuất vừa thể hiện sự trân trọng, vừa giúp con cháu giữ tâm an vững, "biết điều nên làm, tránh điều nên tránh".

### c, Đạo lý "uống nước nhớ nguồn" – cốt lõi của tín ngưỡng

Nền tảng bền vững nhất của tín ngưỡng thờ cúng tổ tiên nằm ở đạo lý. Người Việt coi việc nhớ ơn và tưởng niệm người đi trước là bổn phận tự nhiên của con cháu. Sự tri ân này được thể hiện qua nhiều hình thức: gìn giữ gia phong, tiếp nối truyền thống, và thực hiện các nghi lễ như giỗ kỵ, sóc vọng, lễ Tết… cũng như trong các sự kiện quan trọng của gia đình như cưới hỏi, làm nhà, thành đạt.

### d, Lòng hiếu kính – sức sống bền bỉ của phong tục

Qua thời gian, chính lòng hiếu kính, sự biết ơn và tình cảm gắn bó giữa các thế hệ đã giúp tín ngưỡng thờ cúng tổ tiên tồn tại bền vững. Đây không chỉ là nghi lễ, mà là nét đẹp văn hóa có sức lan tỏa mạnh mẽ, được giữ gìn và truyền lại qua hàng nghìn năm trong đời sống người Việt.`,
    author: {
      name: "Kiều Thanh Bình",
      avatar: "👨‍🎓",
    },
    category: "Văn Hóa",
    tags: ["Tổ tiên", "Tín ngưỡng", "Văn hóa Việt", "Thờ cúng", "Truyền thống"],
    publishedAt: "2025-01-25",
    readTime: "8 phút",
    coverImage: "🏮",
    thumbnail: "/blog/nguon-goc-tin-nguong-to-tien.jpg",
  },
  {
    id: "2",
    slug: "nguyen-tac-tho-cung-nguoi-viet",
    title: "Nguyên tắc thờ cúng trong quan niệm người Việt",
    excerpt:
      "Tám nguyên tắc quan trọng trong thực hành thờ cúng của người Việt: từ chân tâm, tình thương đến tính thiêng, phản ánh triết lý sâu sắc về đời sống tâm linh.",
    content: `# Nguyên tắc thờ cúng trong quan niệm người Việt

Trong đời sống tinh thần của người Việt, việc thờ cúng không đặt nặng hình thức mà đề cao sự giản dị, thiết thực và chân thành. Qua hàng nghìn năm, nghi lễ thờ tự vẫn dựa trên những nguyên tắc cơ bản, tuy nhiên luôn có sự linh hoạt để thích ứng với từng hoàn cảnh và điều kiện cụ thể. Có thể khái quát tám nguyên tắc quan trọng trong thực hành thờ cúng của người Việt như sau:

## 1. Chân tâm

Khi tiến hành lễ cúng, người chủ lễ và những người tham dự phải giữ tâm thanh tịnh, hướng thiện, hòa mình với "chân lý" – Phật, Trời, Thần linh hay gia tiên. Sự thành kính và sự hiểu biết đúng đắn về mục đích của lễ cúng là yếu tố quan trọng nhất, quyết định giá trị của buổi lễ.

## 2. Tình thương và lòng vị tha

Mọi nghi lễ dù lớn hay nhỏ, ở phạm vi gia đình hay cộng đồng đều nhằm tưởng nhớ người đã khuất, đặc biệt là những người thiệt thòi, cô quạnh. Những nghi thức cộng đồng càng phải hướng đến lợi ích chung, gắn với tinh thần nhân ái và sự bảo hộ cho muôn loài.

## 3. Trang nghiêm và thanh tịnh

Sự nghiêm cẩn thể hiện qua tâm thức trong sáng của người hành lễ, sự gọn gàng sạch sẽ của không gian thờ cúng và lễ phẩm tinh khiết. Từ xưa, trước các nghi lễ quan trọng, vua chúa đều phải trai giới nhiều ngày để giữ thân tâm trang nghiêm.

## 4. Thuận theo quy luật tự nhiên và xã hội

Điều này có nghĩa là mọi nghi lễ phải hướng đến sự hài hòa giữa lợi ích của con người với tổng thể tự nhiên và cộng đồng. Những lời cầu khấn hay các nghi thức cầu đảo, dù ở quy mô gia đình hay cộng đồng, đều cần phù hợp với đạo lý, không mang tính vụ lợi cá nhân hay nội dung hoang đường.

Trong lịch sử, các triều đại phong kiến Việt Nam luôn chú trọng tổ chức những nghi lễ quan trọng mang tầm quốc gia như lễ hạ điền, lễ cầu quốc thái dân an, lễ cầu giải hạn hán, ngăn dịch bệnh… Ngày nay, kế thừa những giá trị nhân văn từ truyền thống cha ông, nhiều nghi lễ quy mô cộng đồng tiếp tục được phục dựng và duy trì như lễ hạ điền, các lễ hội tín ngưỡng dân gian, lễ cầu siêu dành cho anh hùng liệt sĩ và đồng bào tử nạn (do tai nạn giao thông, thiên tai, đại dịch Covid-19…). Những hoạt động này không chỉ giữ gìn bản sắc văn hóa mà còn nuôi dưỡng tinh thần tri ân và gắn kết cộng đồng.

## 5. Tính liên thông

Mọi nghi lễ đều hướng đến sự kết nối giữa con người với chân lý, thần linh và tổ tiên, nhằm tạo nên sự hòa hợp giữa âm và dương, giữa đời sống trần tục và cõi thiêng, giữa cái bình thường và điều cao quý. Khi đạt được sự liên thông ấy, những lời cầu xin, khẩn nguyện hay ước nguyện của chủ lễ và người tham dự mới có thể chạm tới cõi thiêng, giúp cho lời cầu trở nên linh ứng và trọn vẹn.

## 6. Ngắn gọn – đầy đủ – lắng đọng

Một buổi lễ cần được tiến hành mạch lạc, tránh rườm rà. Từ nghi thức đến lời văn tế đều phải súc tích, làm rõ được lý do và mong cầu của chủ lễ. Nghi lễ không cần phô trương hình thức, mà quan trọng là nội dung và ý nghĩa; đặc biệt phải tránh những yếu tố mang tính ma mị, gây mê tín hay khiến người tham dự hiểu sai bản chất của việc cúng lễ.

## 7. Đảm bảo tính chân mỹ

Các nghi lễ cần hướng tới vẻ đẹp tinh tế và hài hòa, phù hợp với không gian, thời điểm và địa điểm cử hành. Điều này thể hiện qua từng yếu tố như trang phục, lễ vật, cách thức hành lễ, âm nhạc, hát văn hay bài văn tế… Tất cả đều góp phần tạo nên sự trang nhã và thẩm mỹ cho buổi lễ.

## 8. Tính thiêng

Đây được xem là yếu tố quan trọng nhất của nghi thức thờ cúng, bởi nó phản ánh mức độ thành tâm và lòng kính trọng của người dâng lễ. Buổi lễ cần tạo được cảm giác thanh lọc, hướng thiện, giúp người tham dự cảm nhận sự kết nối với cõi thiêng, vượt lên khỏi những điều tầm thường của đời sống trần tục – điều mà nhiều học giả gọi là trạng thái "vượt ngưỡng".

Bởi lẽ, dù lễ vật có đầy đủ hay nghi thức được thực hiện đúng chuẩn đến đâu, nhưng nếu người cúng thiếu sự chân thành, vô cảm, không khởi lên lòng hiếu kính đối với tổ tiên và thần linh thì buổi lễ chỉ còn là hình thức, khó mang lại giá trị tinh thần đích thực.

## Kết luận

Tám nguyên tắc này không chỉ là những quy định cứng nhắc mà còn là kim chỉ nam giúp mỗi người thực hành thờ cúng một cách đúng đắn, ý nghĩa. Việc hiểu và áp dụng linh hoạt các nguyên tắc này sẽ giúp nghi lễ thờ cúng không chỉ giữ gìn được giá trị truyền thống mà còn phù hợp với đời sống hiện đại, thể hiện được bản sắc văn hóa và đạo đức của dân tộc Việt Nam.`,
    author: {
      name: "Phạm Như Quỳnh",
      avatar: "🙏",
    },
    category: "Tâm Linh",
    tags: ["Thờ cúng", "Nguyên tắc", "Văn hóa Việt", "Tổ tiên", "Tâm linh"],
    publishedAt: "2025-01-26",
    readTime: "7 phút",
    coverImage: "🙏",
    thumbnail: "/blog/nguyen-tac-tho-cung-nguoi-viet.jpg",
  },
  {
    id: "3",
    slug: "cac-cap-do-tho-cung-viet-nam",
    title: "Các cấp độ thờ cúng trong xã hội Việt Nam",
    excerpt:
      "Ba cấp độ thờ cúng trong văn hóa Việt Nam: gia đình – họ tộc, làng xã (Thành Hoàng), và quốc gia (Vua Hùng). Tìm hiểu về hệ thống tín ngưỡng đa tầng độc đáo của dân tộc.",
    content: `# Các cấp độ thờ cúng trong xã hội Việt Nam

Trong văn hóa Việt Nam, tín ngưỡng thờ cúng tổ tiên được thể hiện qua ba cấp độ: thờ cúng trong phạm vi gia đình – họ tộc; thờ cúng ở làng xã (thờ Thành Hoàng và các vị thần linh); và thờ cúng ở tầm quốc gia (tiêu biểu là thờ các Vua Hùng).

## a. Thờ cúng tại gia

Thờ cúng trong gia đình và họ tộc là hình thức gắn liền với quan hệ huyết thống. Nhiều gia đình hợp thành một ngành; nhiều ngành tạo thành một dòng họ. Mỗi họ đều có một vị thủy tổ – người được xem là ông tổ khởi lập – được thờ phụng tại nhà thờ tổ (từ đường). Khi họ tộc phát triển và chia thành nhiều chi, các chi họ lại lập thêm nhà thờ riêng.

Nhà nghiên cứu Toan Ánh cho rằng việc thờ cúng tổ tiên chủ yếu là lập bàn thờ tại nhà và cúng bái vào các ngày sóc, vọng, giỗ, tết. Đây là tinh thần cốt lõi của tục thờ cúng tại gia – nét văn hóa đã bền bỉ tồn tại qua nhiều thế hệ. Từ thế kỷ XV, cùng với sự ảnh hưởng mạnh mẽ của Nho giáo, nghi lễ thờ cúng được quy định rõ ràng dưới thời Lê và được hệ thống hóa trong Thọ Mai Gia Lễ thời Nguyễn, tạo nên sự thống nhất từ tầng lớp quan lại đến người dân.

### Nghi lễ gắn với vòng đời

Thờ cúng tại gia cũng gắn liền với toàn bộ vòng đời con người. Người Việt tổ chức nhiều nghi lễ:

- **Khi trẻ chào đời**: đầy cữ, đầy tháng, thôi nôi…
- **Khi trưởng thành**: lễ thành hôn
- **Khi qua đời**: hệ thống tang lễ phức tạp như triệu hồn, nhập quan, hạ huyệt, lễ 3 ngày, 49 ngày, 100 ngày và giỗ kỵ

Trong họ tộc, việc thờ phụng diễn ra tại từ đường, do trưởng tộc điều hành theo nguyên tắc tôn trưởng và chế độ hương hỏa rõ ràng. Nghi thức cúng tại gia diễn ra quanh năm; mọi việc lớn nhỏ trong gia đình đều được kính cáo tổ tiên để bày tỏ lòng hiếu kính và cầu mong bình an.

## b. Thờ cúng trong làng xã

Trong đời sống văn hóa truyền thống, thờ cúng ở phạm vi làng xã giữ vai trò quan trọng không kém thờ cúng tổ tiên trong gia đình. Nhà nghiên cứu Toan Ánh từng nhận định rằng các thôn làng luôn xem việc thờ phụng Thành Hoàng bản thổ như việc thờ Thổ Công trong mỗi gia đình.

### Tín ngưỡng thờ Thành Hoàng

Tín ngưỡng thờ Thành Hoàng được cho là du nhập vào Việt Nam từ thời Bắc thuộc. Tuy nhiên, khi hòa vào nền tín ngưỡng bản địa vốn đã có tục thờ các vị thần tự nhiên và nhân thần, việc thờ Thành Hoàng nhanh chóng bén rễ, phát triển mạnh mẽ và mang đặc trưng rõ rệt của từng vùng. Trải qua thời Lê – Nguyễn, hệ thống thờ Thành Hoàng được triều đình quy định chặt chẽ hơn, trở thành nét không thể thiếu của làng Việt.

Thành Hoàng được xem là vị thần che chở, quản cai và mang lại phúc lộc cho dân làng. Nhiều làng thờ một hoặc nhiều vị thần, tùy theo công lao và truyền thống của từng vùng. Nhà nước phong kiến phân loại Thành Hoàng thành hai dạng:

- **Chính thần**: Có lai lịch, có công với nước, được sắc phong
- **Tà thần**: Không có sắc phong nhưng vẫn được dân gian thờ phụng

### Thờ tổ nghề và tín ngưỡng vùng miền

Một số cộng đồng nghề nghiệp còn thờ tổ nghề (thánh sư), thường tổ chức rước bài vị và làm lễ tại đình làng hằng năm. Ở các vùng duyên hải, tín ngưỡng thờ cá Ông (cá voi) là tiêu biểu nhất, gắn liền với lễ hội Nghinh Ông và nhiều kiêng kỵ truyền thống.

Ngoài Thành Hoàng, tùy từng địa phương, làng còn thờ tổ các dòng họ khai làng, tổ giáp hoặc lập đền thờ riêng cho các vị có công với cộng đồng. Những sự thờ phụng này góp phần củng cố tinh thần cố kết, gìn giữ cội nguồn và bản sắc của mỗi làng Việt.

## c. Thờ cúng ở cấp độ quốc gia

Tín ngưỡng thờ cúng Hùng Vương được hình thành từ cộng đồng cư dân vùng đất Tổ (nay thuộc tỉnh Phú Thọ) và dần lan rộng theo bước chân khai hoang, lập làng của người Việt. Các sử liệu như Đại Việt sử ký toàn thư ghi chép khá sớm về truyền thuyết Hùng Vương và tục thờ phụng Quốc Tổ.

### Lịch sử hình thành

Qua các triều đại từ Đinh, Lê, Lý, Trần đến Nguyễn, việc tu sửa đền miếu và tổ chức lễ giỗ Quốc Tổ luôn được duy trì, thể hiện sự coi trọng cội nguồn dân tộc.

Đến thời Khải Định (1917), ngày 10/3 âm lịch chính thức được chọn làm ngày giỗ Tổ. Sau Cách mạng Tháng Tám, Chủ tịch Hồ Chí Minh tiếp tục khẳng định ý nghĩa của ngày lễ này bằng sắc lệnh cho công chức nghỉ để dự Lễ Giỗ Tổ.

### Giá trị đương đại

- **Năm 2007**: Quốc hội ban hành luật công nhận ngày 10/3 âm lịch là Quốc lễ
- **Năm 2012**: UNESCO ghi danh "Tín ngưỡng thờ cúng Hùng Vương" vào danh sách Di sản văn hóa phi vật thể đại diện của nhân loại

Hiện nay, hơn 1.400 di tích trên cả nước thờ Hùng Vương và các nhân vật thời Hùng. Việc thờ Quốc Tổ không chỉ diễn ra tại Đền Hùng mà còn lan rộng khắp ba miền và cả cộng đồng người Việt ở nước ngoài, như một biểu tượng gắn kết con cháu Lạc Hồng và khẳng định sức mạnh tinh thần dân tộc qua hàng nghìn năm lịch sử.

## Kết luận

Ba cấp độ thờ cúng trong xã hội Việt Nam – từ gia đình, làng xã đến quốc gia – tạo nên một hệ thống tín ngưỡng đa tầng, phản ánh cấu trúc xã hội và tinh thần cộng đồng sâu sắc. Việc duy trì và phát huy các giá trị này không chỉ giúp gìn giữ bản sắc văn hóa mà còn củng cố niềm tự hào dân tộc và sức mạnh đoàn kết của cộng đồng người Việt trên toàn thế giới.`,
    author: {
      name: "Thanh Tùng Thanh Tùng",
      avatar: "⛩️",
    },
    category: "Tâm Linh",
    tags: ["Thờ cúng", "Vua Hùng", "Thành Hoàng", "Họ tộc", "Văn hóa Việt"],
    publishedAt: "2025-01-27",
    readTime: "9 phút",
    coverImage: "⛩️",
    thumbnail: "/blog/cac-cap-do-tho-cung-viet-nam.jpg",
  },
  {
    id: "4",
    slug: "do-le-vat-pham-tho-cung",
    title: "Đồ lễ (lễ vật) gồm những gì?",
    excerpt:
      "Tìm hiểu về các lễ vật cơ bản trong mâm cúng truyền thống của người Việt, từ trầu cau, hương hoa đến các món ăn dâng cúng trong dịp giỗ, Tết. Khám phá ý nghĩa sâu sắc đằng sau mỗi vật phẩm.",
    content: `# Đồ lễ (lễ vật) gồm những gì?

Lễ vật dâng cúng có sự khác nhau tùy theo hoàn cảnh của mỗi gia đình, phong tục địa phương, đối tượng thờ tự, cũng như tập quán tín ngưỡng của từng vùng. Tuy nhiên, một mâm lễ cơ bản thường bao gồm những vật phẩm quen thuộc như: trầu – cau, rượu, nước (nước lọc hoặc trà), hoa tươi, hoa quả, vàng mã, hương, và đèn hoặc nến.

Đây là những lễ vật mang ý nghĩa tượng trưng, thể hiện lòng thành của con cháu đối với tổ tiên và các vị thần linh.

## Các lễ vật cơ bản

### 1. Trầu – Cau
Biểu trưng cho sự khởi đầu, mở lời trong mọi nghi lễ quan trọng. Trong văn hóa Việt, trầu cau là vật phẩm không thể thiếu, tượng trưng cho sự sum họp, gắn kết.

### 2. Rượu
Đại diện cho tinh thần vui vẻ, đầm ấm. Rượu còn được xem là phương tiện để "thông" với thần linh và tổ tiên.

### 3. Nước (nước lọc hoặc trà)
Thanh khiết, trong trắng, tượng trưng cho sự tinh tấn và tâm trong sáng của người dâng lễ.

### 4. Hoa tươi
Mang vẻ đẹp thanh cao, tươi mới, thể hiện sự kính trọng và tôn vinh các bậc tiền nhân.

### 5. Hoa quả
Tượng trưng cho sự sung túc, đầy đủ, thành quả lao động và sự phát triển của con cháu.

### 6. Vàng mã
Vật phẩm dùng để cúng dường cho tổ tiên và thần linh, thể hiện lòng hiếu thảo và sự trân trọng.

### 7. Hương
Khói hương bay lên như cầu nối giữa cõi người và cõi thiêng, giúp truyền tải lời khấn nguyện của người sống đến tổ tiên.

### 8. Đèn hoặc nến
Ánh sáng tượng trưng cho sự minh mẫn, soi đường cho linh hồn và mang đến sự ấm áp trong không gian thờ cúng.

## Thức cúng trong dịp giỗ, Tết

Trong các ngày giỗ, Tết, mâm cỗ mặn là phần lễ vật không thể thiếu. Các món ăn quen thuộc thường được dâng trong những dịp trọng lễ gồm:

- **Gà luộc**: Tượng trưng cho sự sung túc, đầy đủ
- **Giò chả**: Món ăn truyền thống, gợi nhớ hương vị quê hương
- **Nem**: Biểu trưng cho sự tinh xảo, khéo léo
- **Canh măng**: Thanh đạm, giản dị
- **Miến**: Tượng trưng cho sự trường thọ
- **Thịt kho, cá kho**: Món ăn đậm đà, thể hiện sự chu đáo

Mỗi món ăn không chỉ biểu trưng cho mong ước về sự đủ đầy, sung túc, mà còn gợi lại hương vị thân thuộc gắn với ký ức của ông bà, cha mẹ.

## Lễ vật đặc biệt theo từng vùng miền

Ở nhiều địa phương, mâm cúng còn mang ý nghĩa tưởng nhớ những gian khó của tổ tiên:

### Nam Bộ – Tục cúng "lề"

Nam Bộ có tục cúng "lề", thể hiện ký ức thời khẩn hoang. Lễ vật bắt buộc phải có:

- **Cháo ám** (gạo nấu với cá lóc): Tượng trưng cho cuộc sống mộc mạc
- **Cá lóc nướng trui nguyên con**: Gợi nhớ thời kỳ đầu khai phá đất mới

### Làng Bát Tràng – Hà Nội

Làng Bát Tràng (Gia Lâm, Hà Nội), giỗ tổ nhất định phải có:

- **Cháo hoa**: Món ăn khi thiếu gạo, gợi nhớ thời nghèo khó
- **Cơm nắm**: Mang theo mỗi chuyến buôn bán, đi làm xa
- **Thịt lợn luộc**: Biểu trưng cho cuộc sống đã khấm khá, sung túc hơn

## Ý nghĩa sâu xa

Những lễ vật ấy không chỉ là mâm cỗ dâng cúng, mà còn là cách con cháu gìn giữ ký ức, tỏ lòng biết ơn và trân trọng những giá trị mà tổ tiên để lại.

Việc chuẩn bị và dâng lễ vật không phải là hình thức mà là tấm lòng. Dù giàu hay nghèo, mâm lễ đơn giản hay đầy đủ, điều quan trọng nhất vẫn là sự chân thành, lòng hiếu kính của con cháu đối với ông bà, tổ tiên – những người đã tạo dựng nên cuộc sống hôm nay.`,
    author: {
      name: "Phạm Như Quỳnh",
      avatar: "🍚",
    },
    category: "Văn Khấn",
    tags: ["Lễ vật", "Mâm cúng", "Giỗ tổ", "Tết", "Phong tục"],
    publishedAt: "2025-01-28",
    readTime: "6 phút",
    coverImage: "🍚",
    thumbnail: "/blog/do-le-vat-pham-tho-cung.jpg",
  },
]

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === "all") {
    return getAllPosts()
  }
  return blogPosts.filter((post) => post.category === category)
}

export function getRelatedPosts(currentPostId: string, limit: number = 3): BlogPost[] {
  const currentPost = blogPosts.find((post) => post.id === currentPostId)
  if (!currentPost) return []

  return blogPosts
    .filter((post) => post.id !== currentPostId && post.category === currentPost.category)
    .slice(0, limit)
}
