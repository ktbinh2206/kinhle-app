"use client"

import { use } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getFestivalById } from "@/lib/festivals-data"
import { prayersData } from "@/lib/prayers-data"
import { blogPosts } from "@/lib/blog-data"
import { Calendar, Sparkles, ArrowLeft, Flower2, BookOpen, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

interface FestivalDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default function FestivalDetailPage({ params }: FestivalDetailPageProps) {
  const { id } = use(params)
  const festival = getFestivalById(id)

  if (!festival) {
    notFound()
  }

  // Get related prayers
  const relatedPrayers = festival.relatedPrayers
    ? Object.values(prayersData)
        .flat()
        .filter((prayer) => festival.relatedPrayers?.includes(prayer.id))
    : []

  // Get related blog posts
  const relatedBlogPosts = festival.relatedPosts
    ? blogPosts.filter((post) => festival.relatedPosts?.includes(post.id))
    : []

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Link href="/festivals">
            <Button variant="ghost" className="mb-6 text-wine-red hover:text-wine-red">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại danh sách
            </Button>
          </Link>

          {/* Festival Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-wine-red" />
              <h1 className="text-3xl md:text-4xl font-bold text-wine-red">
                {festival.title}
              </h1>
              <Sparkles className="w-8 h-8 text-wine-red" />
            </div>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Calendar className="w-5 h-5" />
              <p className="text-lg">{festival.date}</p>
            </div>
          </div>

          {/* Festival Image */}
          <div className="relative h-64 md:h-96 bg-linear-to-br from-wine-red/10 to-gold/10 rounded-lg mb-8 overflow-hidden">
            <Image
              src={festival.image}
              alt={festival.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Meaning Section */}
          <Card className="p-6 md:p-8 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-wine-red" />
              <h2 className="text-2xl font-bold text-wine-red">Ý nghĩa</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              {festival.meaning.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </Card>

          {/* Offerings Section */}
          <Card className="p-6 md:p-8 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Flower2 className="w-6 h-6 text-wine-red" />
              <h2 className="text-2xl font-bold text-wine-red">Lễ vật</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              {festival.offerings.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </Card>

          {/* Notes Section */}
          {festival.notes && festival.notes.length > 0 && (
            <Card className="p-6 md:p-8 bg-wine-red/5 mb-6">
              <h3 className="text-xl font-bold text-wine-red mb-4">
                Lưu ý
              </h3>
              <ul className="space-y-2">
                {festival.notes.map((note, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-wine-red mt-1">•</span>
                    <span className="text-muted-foreground">{note}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {/* Related Prayers Section */}
          {relatedPrayers.length > 0 && (
            <Card className="p-6 md:p-8 mb-6">
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-6 h-6 text-wine-red" />
                <h2 className="text-2xl font-bold text-wine-red">Văn khấn liên quan</h2>
              </div>
              
              <div className="grid gap-4">
                {relatedPrayers.map((prayer) => (
                  <Link 
                    key={prayer.id} 
                    href={`/prayers/${prayer.category}/${prayer.id}`}
                    className="block group"
                  >
                    <Card className="p-4 hover:shadow-lg transition-all duration-300 border-wine-red/20 hover:border-wine-red/40">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-wine-red group-hover:text-wine-red/80 mb-2">
                            {prayer.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                            {prayer.description}
                          </p>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs border-wine-red/30 text-wine-red">
                              <Calendar className="w-3 h-3 mr-1" />
                              {prayer.occasion}
                            </Badge>
                          </div>
                        </div>
                        <ArrowLeft className="w-5 h-5 text-wine-red rotate-180 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </Card>
          )}

          {/* Related Blog Posts Section */}
          {relatedBlogPosts.length > 0 && (
            <Card className="p-6 md:p-8 mb-6">
              <div className="flex items-center gap-2 mb-6">
                <FileText className="w-6 h-6 text-wine-red" />
                <h2 className="text-2xl font-bold text-wine-red">Bài viết liên quan</h2>
              </div>
              
              <div className="grid gap-4">
                {relatedBlogPosts.map((post) => (
                  <Link 
                    key={post.id} 
                    href={`/blog/${post.slug}`}
                    className="block group"
                  >
                    <Card className="p-4 hover:shadow-lg transition-all duration-300 border-wine-red/20 hover:border-wine-red/40">
                      <div className="flex items-start gap-4">
                        <div className="relative w-20 h-20 bg-wine-red/10 rounded-lg overflow-hidden shrink-0">
                          <Image
                            src={post.thumbnail}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-wine-red group-hover:text-wine-red/80 mb-2">
                            {post.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span>{post.author.name}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                            <span>•</span>
                            <span>{post.publishedAt}</span>
                          </div>
                        </div>
                        <ArrowLeft className="w-5 h-5 text-wine-red rotate-180 group-hover:translate-x-1 transition-transform shrink-0" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </Card>
          )}

          {/* Related Links */}
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/prayers">
              <Button className="bg-wine-red hover:bg-wine-red/90">
                Xem tất cả văn khấn
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline" className="border-wine-red text-wine-red hover:bg-wine-red/10">
                Xem tất cả bài viết
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
