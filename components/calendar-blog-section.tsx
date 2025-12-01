"use client"

import { useState } from "react"
import { DailyCalendar } from "./daily-calendar"
import { MonthlyCalendar } from "./monthly-calendar"
import { BlogSidebar } from "./blog-sidebar"

export function CalendarBlogSection() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ background: "linear-gradient(to bottom, rgba(229, 208, 172, 0.3), #fff9e1)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-wine-red mb-2 text-balance">Lịch & Bài viết</h2>
          <p className="text-muted-foreground">Theo dõi lịch âm-dương và cập nhật tin tức lễ hội</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
          {/* Left column: Calendars */}
          <div className="lg:col-span-4 space-y-6">
            <DailyCalendar selectedDate={selectedDate} onDateChange={setSelectedDate} />
            <MonthlyCalendar selectedDate={selectedDate} onDateChange={setSelectedDate} />
          </div>

          {/* Right column: Blog */}
          <div className="lg:col-span-3">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  )
}
