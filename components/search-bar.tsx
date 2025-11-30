"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X, FileText, BookOpen } from "lucide-react"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog-data"
import { prayersData, categoryInfo } from "@/lib/prayers-data"

interface SearchBarProps {
  onOpenChange?: (isOpen: boolean) => void
}

export function SearchBar({ onOpenChange }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState<{
    posts: Array<{ id: string; slug: string; title: string; excerpt: string }>
    prayers: Array<{ id: string; categoryId: string; title: string; description: string; occasion: string }>
  }>({ posts: [], prayers: [] })
  const searchRef = useRef<HTMLDivElement>(null)

  // Notify parent of open state changes - Không cần nữa vì không ẩn navigation
  // useEffect(() => {
  //   onOpenChange?.(isOpen)
  // }, [isOpen, onOpenChange])

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Search logic
  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setResults({ posts: [], prayers: [] })
      return
    }

    const query = searchQuery.toLowerCase()

    // Search blog posts
    const allPosts = getAllPosts()
    const matchingPosts = allPosts
      .filter((post) => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query)
      )
      .slice(0, 5)
      .map((post) => ({
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
      }))

    // Search prayers
    const matchingPrayers: Array<{ id: string; categoryId: string; title: string; description: string; occasion: string }> = []
    
    Object.entries(prayersData).forEach(([categoryId, prayers]) => {
      prayers.forEach((prayer) => {
        if (
          prayer.title.toLowerCase().includes(query) ||
          prayer.description.toLowerCase().includes(query) ||
          prayer.occasion.toLowerCase().includes(query) ||
          categoryInfo[categoryId]?.title.toLowerCase().includes(query)
        ) {
          matchingPrayers.push({
            id: prayer.id,
            categoryId,
            title: prayer.title,
            description: prayer.description,
            occasion: prayer.occasion,
          })
        }
      })
    })

    setResults({
      posts: matchingPosts,
      prayers: matchingPrayers.slice(0, 5),
    })
  }, [searchQuery])

  const handleClear = () => {
    setSearchQuery("")
    setResults({ posts: [], prayers: [] })
  }

  const handleResultClick = () => {
    setIsOpen(false)
    setSearchQuery("")
    setResults({ posts: [], prayers: [] })
  }

  const totalResults = results.posts.length + results.prayers.length

  return (
    <div ref={searchRef} className="relative">
      {/* Search Icon Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`flex items-center justify-center w-10 h-10 border rounded-lg transition-all duration-300 cursor-pointer active:scale-95 ${
          isOpen 
            ? 'bg-wine-red border-wine-red text-white shadow-lg' 
            : 'bg-background border-border text-foreground/60 hover:border-wine-red hover:text-wine-red'
        }`}
        aria-label="Tìm kiếm"
      >
        <Search className="w-5 h-5" />
      </button>

      {/* Expanded Search - Fixed Position */}
      {isOpen && (
        <div className="fixed top-20 right-4 w-96 z-50 bg-background border border-wine-red rounded-lg shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-center gap-2 px-4 py-3">
            <Search className="w-5 h-5 text-wine-red flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm bài viết, văn khấn..."
              className="flex-1 bg-transparent outline-none text-foreground placeholder:text-foreground/40"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={handleClear}
                className="p-1 hover:bg-foreground/5 rounded transition-colors"
              >
                <X className="w-4 h-4 text-foreground/60" />
              </button>
            )}
          </div>

          {/* Results Dropdown */}
          {searchQuery.trim().length >= 2 && (
            <div className="max-h-96 overflow-y-auto border-t border-border">
                {totalResults === 0 ? (
                  <div className="px-4 py-8 text-center text-foreground/60">
                    Không tìm thấy kết quả cho "{searchQuery}"
                  </div>
                ) : (
                  <div className="py-2">
                    {/* Blog Posts Results */}
                    {results.posts.length > 0 && (
                      <div className="mb-2">
                        <div className="px-4 py-2 text-xs font-semibold text-foreground/60 uppercase">
                          Bài viết ({results.posts.length})
                        </div>
                        {results.posts.map((post) => (
                          <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            onClick={handleResultClick}
                            className="block px-4 py-3 hover:bg-wine-red/5 transition-colors"
                          >
                            <div className="flex items-start gap-3">
                              <FileText className="w-4 h-4 text-wine-red flex-shrink-0 mt-1" />
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground line-clamp-1">{post.title}</h4>
                                <p className="text-sm text-foreground/60 line-clamp-1">{post.excerpt}</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Prayers Results */}
                    {results.prayers.length > 0 && (
                      <div>
                        <div className="px-4 py-2 text-xs font-semibold text-foreground/60 uppercase">
                          Văn khấn ({results.prayers.length})
                        </div>
                        {results.prayers.map((prayer) => (
                          <Link
                            key={`${prayer.categoryId}-${prayer.id}`}
                            href={`/prayers/${prayer.categoryId}/${prayer.id}`}
                            onClick={handleResultClick}
                            className="block px-4 py-3 hover:bg-wine-red/5 transition-colors"
                          >
                            <div className="flex items-start gap-3">
                              <BookOpen className="w-4 h-4 text-wine-red flex-shrink-0 mt-1" />
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground line-clamp-1">{prayer.title}</h4>
                                <p className="text-sm text-foreground/60 line-clamp-1">
                                  {prayer.occasion} • {categoryInfo[prayer.categoryId]?.title}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
        </div>
      )}
    </div>
  )
}
