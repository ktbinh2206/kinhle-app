"use client"

import { ChevronLeft, ChevronRight, Sun, Moon } from "lucide-react"
import { getLunarInfo } from "@/lib/mockdata"

interface DailyCalendarProps {
  selectedDate: Date
  onDateChange: (date: Date) => void
}

export function DailyCalendar({ selectedDate, onDateChange }: DailyCalendarProps) {
  const lunarInfo = getLunarInfo(selectedDate)
  const solarDay = selectedDate.getDate()
  const solarMonth = selectedDate.getMonth() + 1
  const solarYear = selectedDate.getFullYear()

  const handlePrevDay = () => {
    const newDate = new Date(selectedDate)
    newDate.setDate(newDate.getDate() - 1)
    onDateChange(newDate)
  }

  const handleNextDay = () => {
    const newDate = new Date(selectedDate)
    newDate.setDate(newDate.getDate() + 1)
    onDateChange(newDate)
  }

  return (
    <div className="bg-card rounded-lg shadow-sm p-6 border border-border">
      <h3 className="text-lg font-semibold text-wine-red mb-4">Lịch ngày</h3>

      <div className="flex items-center justify-between gap-4">
        <button
          onClick={handlePrevDay}
          className="p-2 hover:bg-warm-beige rounded-lg transition-colors"
          aria-label="Previous day"
        >
          <ChevronLeft className="w-5 h-5 text-wine-red" />
        </button>

        <div className="flex-1 grid grid-cols-2 gap-4">
          {/* Solar Calendar */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sun className="w-4 h-4 text-gold" />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Dương lịch</span>
            </div>
            <div className="text-5xl font-bold text-green-600 mb-1">{solarDay}</div>
            <div className="text-sm text-foreground">
              Tháng {solarMonth} năm {solarYear}
            </div>
          </div>

          {/* Lunar Calendar */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Moon className="w-4 h-4 text-wine-red" />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Âm lịch</span>
            </div>
            <div className="text-5xl font-bold text-wine-red mb-1">{lunarInfo.lunarDay}</div>
            <div className="text-sm text-foreground">
              Tháng {lunarInfo.lunarMonth}{lunarInfo.isLeapMonth ? " nhuận" : ""} năm {lunarInfo.lunarYearCycle}
            </div>
            <div className="text-xs text-muted-foreground mt-2 space-y-1">
              <div>Ngày: {lunarInfo.dayZodiac}</div>
              <div>Tháng: {lunarInfo.monthZodiac}</div>
            </div>
          </div>
        </div>

        <button
          onClick={handleNextDay}
          className="p-2 hover:bg-warm-beige rounded-lg transition-colors"
          aria-label="Next day"
        >
          <ChevronRight className="w-5 h-5 text-wine-red" />
        </button>
      </div>
    </div>
  )
}
