// Data cho cửa hàng và sản phẩm

export interface Store {
  id: string
  name: string
  image: string
  rating: number
  contact: string
}

export interface Product {
  id: string
  name: string
  category: string
  categorySlug: string
  price: number
  originalPrice: number
  discount: number
  image: string
  rating: number
  reviews: number
}

export const storesData: Store[] = [
  {
    id: "1",
    name: "Cửa Hàng Đồ Thờ Tâm Linh",
    image: "/stores/store-1.jpg",
    rating: 5,
    contact: "0903242748"
  },
  {
    id: "2",
    name: "Nhà Hàng Phong Thủy Việt",
    image: "/stores/store-2.jpg",
    rating: 5,
    contact: "0903242749"
  },
  {
    id: "3",
    name: "Cửa Hàng Lễ Phẩm An Lạc",
    image: "/stores/store-3.jpg",
    rating: 5,
    contact: "0903242750"
  },
  {
    id: "4",
    name: "Đồ Thờ Cúng Phong Thủy",
    image: "/stores/store-4.jpg",
    rating: 5,
    contact: "0903242751"
  }
]

export const productsData: Product[] = [
  {
    id: "1",
    name: "Bàn Thờ Gỗ Gụ Cao Cấp",
    category: "Đồ Thờ",
    categorySlug: "do-tho",
    price: 5000000,
    originalPrice: 10000000,
    discount: 50,
    image: "/products/product-1.jpg",
    rating: 5,
    reviews: 128
  },
  {
    id: "2",
    name: "Bộ Đèn Thờ LED Sang Trọng",
    category: "Đèn Thờ",
    categorySlug: "den-tho",
    price: 800000,
    originalPrice: 1200000,
    discount: 33,
    image: "/products/product-2.jpg",
    rating: 4.5,
    reviews: 86
  },
  {
    id: "3",
    name: "Tượng Phật Bà Quan Âm",
    category: "Tượng Thờ",
    categorySlug: "tuong-tho",
    price: 3500000,
    originalPrice: 5000000,
    discount: 30,
    image: "/products/product-3.jpg",
    rating: 5,
    reviews: 95
  },
  {
    id: "4",
    name: "Bộ Lễ Phẩm Cúng Tết",
    category: "Lễ Phẩm",
    categorySlug: "le-pham",
    price: 500000,
    originalPrice: 700000,
    discount: 29,
    image: "/products/product-4.jpg",
    rating: 4,
    reviews: 62
  },
  {
    id: "5",
    name: "Cây Kim Tiền Phong Thủy",
    category: "Phong Thủy",
    categorySlug: "phong-thuy",
    price: 1200000,
    originalPrice: 1800000,
    discount: 33,
    image: "/products/product-5.jpg",
    rating: 4.5,
    reviews: 73
  },
  {
    id: "6",
    name: "Bình Hoa Sen Đá Tự Nhiên",
    category: "Đồ Thờ",
    categorySlug: "do-tho",
    price: 2000000,
    originalPrice: 3000000,
    discount: 33,
    image: "/products/product-6.jpg",
    rating: 5,
    reviews: 54
  },
  {
    id: "7",
    name: "Bộ Chén Dĩa Thờ Cúng Gốm Sứ",
    category: "Đồ Thờ",
    categorySlug: "do-tho",
    price: 450000,
    originalPrice: 650000,
    discount: 31,
    image: "/products/product-7.jpg",
    rating: 4.5,
    reviews: 89
  },
  {
    id: "8",
    name: "Lư Hương Đồng Đỏ Khảm Tam Khí",
    category: "Đồ Thờ",
    categorySlug: "do-tho",
    price: 2500000,
    originalPrice: 3500000,
    discount: 29,
    image: "/products/product-8.jpg",
    rating: 5,
    reviews: 67
  },
  {
    id: "9",
    name: "Bộ Đồ Cúng Mâm Ngũ Quả",
    category: "Lễ Phẩm",
    categorySlug: "le-pham",
    price: 350000,
    originalPrice: 500000,
    discount: 30,
    image: "/products/product-9.jpg",
    rating: 4,
    reviews: 124
  },
  {
    id: "10",
    name: "Đèn Thờ Đôi Thủy Tinh Cao Cấp",
    category: "Đèn Thờ",
    categorySlug: "den-tho",
    price: 1500000,
    originalPrice: 2200000,
    discount: 32,
    image: "/products/product-10.jpg",
    rating: 4.5,
    reviews: 45
  },
  {
    id: "11",
    name: "Tượng Phật Di Lặc Gỗ Hương",
    category: "Tượng Thờ",
    categorySlug: "tuong-tho",
    price: 4200000,
    originalPrice: 6000000,
    discount: 30,
    image: "/products/product-11.jpg",
    rating: 5,
    reviews: 78
  },
  {
    id: "12",
    name: "Bình Hoa Lục Bình Gốm Bát Tràng",
    category: "Đồ Thờ",
    categorySlug: "do-tho",
    price: 850000,
    originalPrice: 1200000,
    discount: 29,
    image: "/products/product-12.jpg",
    rating: 4.5,
    reviews: 56
  },
  {
    id: "13",
    name: "Nến Thờ Cao Cấp - Hộp 50 Cây",
    category: "Lễ Phẩm",
    categorySlug: "le-pham",
    price: 120000,
    originalPrice: 180000,
    discount: 33,
    image: "/products/product-13.jpg",
    rating: 4,
    reviews: 198
  },
  {
    id: "14",
    name: "Hương Trầm Nụ Tự Nhiên 500g",
    category: "Lễ Phẩm",
    categorySlug: "le-pham",
    price: 280000,
    originalPrice: 400000,
    discount: 30,
    image: "/products/product-14.jpg",
    rating: 5,
    reviews: 142
  },
  {
    id: "15",
    name: "Tượng Tam Đa Phúc Lộc Thọ",
    category: "Tượng Thờ",
    categorySlug: "tuong-tho",
    price: 5500000,
    originalPrice: 8000000,
    discount: 31,
    image: "/products/product-15.jpg",
    rating: 5,
    reviews: 34
  },
  {
    id: "16",
    name: "Đèn Dầu Thờ Đồng Vàng",
    category: "Đèn Thờ",
    categorySlug: "den-tho",
    price: 650000,
    originalPrice: 950000,
    discount: 32,
    image: "/products/product-16.jpg",
    rating: 4.5,
    reviews: 71
  },
  {
    id: "17",
    name: "Lọ Hoa Mai Gốm Sứ Việt",
    category: "Đồ Thờ",
    categorySlug: "do-tho",
    price: 380000,
    originalPrice: 550000,
    discount: 31,
    image: "/products/product-17.jpg",
    rating: 4,
    reviews: 63
  },
  {
    id: "18",
    name: "Tượng Phật Thích Ca Mâu Ni",
    category: "Tượng Thờ",
    categorySlug: "tuong-tho",
    price: 6800000,
    originalPrice: 9500000,
    discount: 28,
    image: "/products/product-18.jpg",
    rating: 5,
    reviews: 42
  },
  {
    id: "19",
    name: "Bộ Chén Tách Trà Cúng Tổ Tiên",
    category: "Đồ Thờ",
    categorySlug: "do-tho",
    price: 320000,
    originalPrice: 480000,
    discount: 33,
    image: "/products/product-19.jpg",
    rating: 4.5,
    reviews: 95
  },
  {
    id: "20",
    name: "Tranh Đồng Mã Đáo Thành Công",
    category: "Phong Thủy",
    categorySlug: "phong-thuy",
    price: 2800000,
    originalPrice: 4000000,
    discount: 30,
    image: "/products/product-20.jpg",
    rating: 4.5,
    reviews: 58
  },
  {
    id: "21",
    name: "Bát Hương Đồng Vàng Chạm Rồng",
    category: "Đồ Thờ",
    categorySlug: "do-tho",
    price: 1800000,
    originalPrice: 2600000,
    discount: 31,
    image: "/products/product-21.jpg",
    rating: 5,
    reviews: 48
  },
  {
    id: "22",
    name: "Giấy Vàng Mã Cao Cấp - 100 Tờ",
    category: "Lễ Phẩm",
    categorySlug: "le-pham",
    price: 150000,
    originalPrice: 220000,
    discount: 32,
    image: "/products/product-22.jpg",
    rating: 4,
    reviews: 167
  },
  {
    id: "23",
    name: "Chuông Gió Phong Thủy 5 Ống",
    category: "Phong Thủy",
    categorySlug: "phong-thuy",
    price: 480000,
    originalPrice: 700000,
    discount: 31,
    image: "/products/product-23.jpg",
    rating: 4.5,
    reviews: 82
  },
  {
    id: "24",
    name: "Tượng Quan Công Đọc Sách",
    category: "Tượng Thờ",
    categorySlug: "tuong-tho",
    price: 4500000,
    originalPrice: 6500000,
    discount: 31,
    image: "/products/product-24.jpg",
    rating: 5,
    reviews: 39
  }
]

export const categories = [
  { id: "do-tho", name: "Đồ Thờ" },
  { id: "le-pham", name: "Lễ Phẩm" },
  { id: "tuong-tho", name: "Tượng Thờ" },
  { id: "den-tho", name: "Đèn Thờ" },
  { id: "phong-thuy", name: "Phong Thủy" }
]

export function getProductsByCategory(categorySlug: string): Product[] {
  if (!categorySlug || categorySlug === "all") {
    return productsData
  }
  return productsData.filter(p => p.categorySlug === categorySlug)
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price)
}
