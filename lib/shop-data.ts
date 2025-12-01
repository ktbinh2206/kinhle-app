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
    name: "Đồ Thờ Cúng Minh Đức",
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
