"use client"

import { stories } from "@/lib/mockdata"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function StoriesSection() {
  return (
    <section id="stories" className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-balance">Câu Chuyện & Văn Hóa</h2>
          <p className="text-lg text-foreground/70">
            Tìm hiểu sâu về những truyền thống và huyền thoại của các lễ hội Việt
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Card
              key={story.id}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative h-48 bg-muted">
                <img src={story.image || "/placeholder.svg"} alt={story.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <Badge className="bg-secondary text-secondary-foreground">{story.category}</Badge>
                </div>
                <h3 className="text-xl font-bold text-primary">{story.title}</h3>
                <p className="text-foreground/70 flex-1">{story.excerpt}</p>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-secondary">Đọc Câu Chuyện</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
