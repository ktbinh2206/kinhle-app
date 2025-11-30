"use client"

import { use } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getFestivalById } from "@/lib/festivals-data"
import { Calendar, Sparkles, ArrowLeft, Flower2 } from "lucide-react"
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
            <Card className="p-6 md:p-8 bg-wine-red/5">
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

          {/* Related Links */}
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/prayers">
              <Button className="bg-wine-red hover:bg-wine-red/90">
                Xem văn khấn liên quan
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline" className="border-wine-red text-wine-red hover:bg-wine-red/10">
                Đọc bài viết
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
