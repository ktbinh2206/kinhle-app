"use client"

import { festivals } from "@/lib/mockdata"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export function FestivalsGrid() {
  return (
    <section id="festivals" className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-balance">Lễ Hội Sắp Diễn Ra</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Khám phá những lễ hội quan trọng nhất trong lịch truyền thống Việt Nam
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {festivals.map((festival, index) => (
            <Card
              key={festival.id}
              className={`overflow-hidden hover:shadow-xl transition-shadow duration-300 border-muted ${
                index % 2 === 0 ? "md:col-span-1" : "md:col-span-1"
              }`}
            >
              <div className="relative h-48 bg-muted">
                <img
                  src={festival.image || "/placeholder.svg"}
                  alt={festival.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-primary">{festival.name}</h3>
                <div className="flex items-center gap-2 text-accent font-semibold">
                  <Calendar size={20} />
                  {festival.date}
                </div>
                <p className="text-foreground/80">{festival.description}</p>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-secondary">Tìm Hiểu Thêm</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
