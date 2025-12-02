"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  storesData,
  productsData,
  categories,
  formatPrice,
} from "@/lib/shop-data";
import { Star, Phone, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<number[]>([10000, 10000000]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<string>("default");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Filter products
  let filteredProducts = productsData.filter((product) => {
    const categoryMatch =
      selectedCategory === "all" || product.categorySlug === selectedCategory;
    const priceMatch =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const ratingMatch = !selectedRating || product.rating >= selectedRating;
    return categoryMatch && priceMatch && ratingMatch;
  });

  // Sort products
  if (sortBy === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleFilterChange = (callback: () => void) => {
    callback();
    setCurrentPage(1);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? "fill-[#FBA51C] text-[#FBA51C]" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="pt-16">
        {/* Header Section */}
        <section className="py-12 bg-linear-to-br from-[#6D2323]/5 via-[#E5D0AC]/10 to-[#FBA51C]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-[#6D2323] mb-4">
                Cửa Hàng
              </h1>
              <p className="text-lg text-foreground/80">
                Khám phá các sản phẩm đồ thờ, lễ phẩm và phong thủy chất lượng
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content - Right */}
            <div className="flex-1">
              {/* Recommended Stores */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#6D2323] mb-6">
                  Đề xuất cửa hàng
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {storesData.map((store) => (
                    <Card
                      key={store.id}
                      className="overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="aspect-square overflow-hidden bg-gray-100">
                        <img 
                          src={store.image} 
                          alt={store.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-[#6D2323] mb-2">
                          {store.name}
                        </h3>
                        <div className="mb-3">{renderStars(store.rating)}</div>
                        <Button className="w-full bg-[#A31D1D] hover:bg-[#6D2323]">
                          <Phone className="w-4 h-4 mr-2" />
                          Liên hệ
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Products and Filters */}
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar - Left */}
                <aside className="lg:w-64 shrink-0">
                  {/* Categories */}
                  <div className="bg-[#FEF9E1] rounded-lg p-6 mb-6 border border-[#E5D0AC]">
                    <h2 className="text-xl font-bold text-[#6D2323] mb-4">
                      Danh Mục Sản Phẩm
                    </h2>
                    <div className="space-y-2">
                      <button
                        onClick={() => handleFilterChange(() => setSelectedCategory("all"))}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          selectedCategory === "all"
                            ? "bg-[#A31D1D] text-white"
                            : "bg-[#E5D0AC] text-[#6D2323] hover:bg-[#E5D0AC]/70"
                        }`}
                      >
                        Tất cả
                      </button>
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => handleFilterChange(() => setSelectedCategory(category.id))}
                          className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                            selectedCategory === category.id
                              ? "bg-[#A31D1D] text-white"
                              : "bg-[#E5D0AC] text-[#6D2323] hover:bg-[#E5D0AC]/70"
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Filter */}
                  <div className="bg-[#FEF9E1] rounded-lg p-6 mb-6 border border-[#E5D0AC]">
                    <h3 className="text-lg font-bold text-[#6D2323] mb-4">
                      Price
                    </h3>
                    <div className="space-y-4">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        min={10000}
                        max={10000000}
                        step={100000}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{formatPrice(priceRange[0])}</span>
                        <span>{formatPrice(priceRange[1])}</span>
                      </div>
                    </div>
                  </div>

                  {/* Review Filter */}
                  <div className="bg-[#FEF9E1] rounded-lg p-6 border border-[#E5D0AC]">
                    <h3 className="text-lg font-bold text-[#6D2323] mb-4">
                      Review
                    </h3>
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <button
                          key={rating}
                          onClick={() =>
                            setSelectedRating(
                              selectedRating === rating ? null : rating
                            )
                          }
                          className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                            selectedRating === rating
                              ? "bg-[#A31D1D]/10 border border-[#A31D1D]"
                              : "hover:bg-[#E5D0AC]/50"
                          }`}
                        >
                          <div className="flex items-center gap-1">
                            {[...Array(rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-[#FBA51C] text-[#FBA51C]"
                              />
                            ))}
                            {[...Array(5 - rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-gray-300" />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            & Up
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </aside>

                {/* Products Section */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[#6D2323]">
                      Danh sách Sản phẩm
                    </h2>
                    <div className="flex items-center gap-2">
                      <label className="text-sm text-muted-foreground">
                        Sort by:
                      </label>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A31D1D]"
                      >
                        <option value="default">Default Sorting</option>
                        <option value="price-asc">Giá: Thấp đến Cao</option>
                        <option value="price-desc">Giá: Cao đến Thấp</option>
                        <option value="rating">Đánh giá cao nhất</option>
                      </select>
                    </div>
                  </div>

                  {/* Products Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentProducts.map((product) => (
                      <Card
                        key={product.id}
                        className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                      >
                        <div className="relative aspect-square overflow-hidden bg-gray-100">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                          {product.discount > 0 && (
                            <Badge className="absolute top-4 right-4 bg-[#A31D1D] text-white">
                              {product.discount}% off
                            </Badge>
                          )}
                        </div>
                        <div className="p-4">
                          <div className="text-sm text-muted-foreground mb-1">
                            {product.category}
                          </div>
                          <h3 className="font-semibold text-[#6D2323] mb-2 line-clamp-2">
                            {product.name}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl font-bold text-[#A31D1D]">
                              {formatPrice(product.price)}
                            </span>
                            <span className="text-sm text-muted-foreground line-through">
                              {formatPrice(product.originalPrice)}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            {renderStars(product.rating)}
                            <span className="text-sm text-muted-foreground">
                              ({product.reviews})
                            </span>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>

                  {/* Empty State */}
                  {filteredProducts.length === 0 && (
                    <div className="text-center py-16">
                      <p className="text-muted-foreground text-lg">
                        Không tìm thấy sản phẩm phù hợp
                      </p>
                    </div>
                  )}

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-8">
                      <Button
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                        variant="outline"
                        className="border-[#E5D0AC] hover:bg-[#E5D0AC]/20 disabled:opacity-50"
                      >
                        Trang trước
                      </Button>
                      
                      <div className="flex items-center gap-2">
                        {[...Array(totalPages)].map((_, index) => {
                          const page = index + 1;
                          // Show first page, last page, current page, and pages around current
                          if (
                            page === 1 ||
                            page === totalPages ||
                            (page >= currentPage - 1 && page <= currentPage + 1)
                          ) {
                            return (
                              <Button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-10 h-10 ${
                                  currentPage === page
                                    ? "bg-[#A31D1D] text-white hover:bg-[#6D2323]"
                                    : "bg-[#E5D0AC] text-[#6D2323] hover:bg-[#E5D0AC]/70"
                                }`}
                              >
                                {page}
                              </Button>
                            );
                          } else if (
                            page === currentPage - 2 ||
                            page === currentPage + 2
                          ) {
                            return <span key={page} className="text-muted-foreground">...</span>;
                          }
                          return null;
                        })}
                      </div>

                      <Button
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                        variant="outline"
                        className="border-[#E5D0AC] hover:bg-[#E5D0AC]/20 disabled:opacity-50"
                      >
                        Trang sau
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
