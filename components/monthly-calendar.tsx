"use client"

import type React from "react"

import { useState } from "react"

interface MonthlyCalendarProps {
  selectedDate: Date
  onDateChange: (date: Date) => void
}

const months = [
  "Tháng 1",
  "Tháng 2",
  "Tháng 3",
  "Tháng 4",
  "Tháng 5",
  "Tháng 6",
  "Tháng 7",
  "Tháng 8",
  "Tháng 9",
  "Tháng 10",
  "Tháng 11",
  "Tháng 12",
]

const weekdays = ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy", "Chủ Nhật"]

const currentYear = new Date().getFullYear()
const years = Array.from({ length: 5 }, (_, i) => currentYear - 2 + i)

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

export function MonthlyCalendar({ selectedDate, onDateChange }: MonthlyCalendarProps) {
  const [displayMonth, setDisplayMonth] = useState(new Date(selectedDate))

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const month = Number.parseInt(e.target.value)
    const newDate = new Date(displayMonth)
    newDate.setMonth(month)
    setDisplayMonth(newDate)
  }

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const year = Number.parseInt(e.target.value)
    const newDate = new Date(displayMonth)
    newDate.setFullYear(year)
    setDisplayMonth(newDate)
  }

  const handleToday = () => {
    const today = new Date()
    setDisplayMonth(today)
    onDateChange(today)
  }

  const handleDateClick = (day: number) => {
    const newDate = new Date(displayMonth.getFullYear(), displayMonth.getMonth(), day)
    onDateChange(newDate)
  }

  const daysInMonth = getDaysInMonth(displayMonth.getFullYear(), displayMonth.getMonth())
  const firstDay = getFirstDayOfMonth(displayMonth.getFullYear(), displayMonth.getMonth())

  const days = []
  // Add empty cells for days before the month starts
  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }
  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  const isToday = (day: number) => {
    const today = new Date()
    return (
      day === today.getDate() &&
      displayMonth.getMonth() === today.getMonth() &&
      displayMonth.getFullYear() === today.getFullYear()
    )
  }

  const isSelected = (day: number) => {
    return (
      day === selectedDate.getDate() &&
      displayMonth.getMonth() === selectedDate.getMonth() &&
      displayMonth.getFullYear() === selectedDate.getFullYear()
    )
  }

  return (
    <div className="bg-card rounded-lg shadow-sm p-6 border border-border">
      <h3 className="text-lg font-semibold text-wine-red mb-4">Lịch tháng</h3>

      <div className="flex gap-2 mb-6 items-center justify-between">
        <div className="flex gap-2">
          <select
            value={displayMonth.getMonth()}
            onChange={handleMonthChange}
            className="px-3 py-2 border border-border rounded-lg text-sm font-medium hover:border-wine-red transition-colors"
          >
            {months.map((month, idx) => (
              <option key={idx} value={idx}>
                {month}
              </option>
            ))}
          </select>

          <select
            value={displayMonth.getFullYear()}
            onChange={handleYearChange}
            className="px-3 py-2 border border-border rounded-lg text-sm font-medium hover:border-wine-red transition-colors"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleToday}
          className="px-4 py-2 bg-wine-red text-primary-foreground text-sm font-semibold rounded-lg hover:bg-accent-red transition-colors"
        >
          HÔM NAY
        </button>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {weekdays.map((day) => (
          <div key={day} className="text-center text-xs font-semibold text-wine-red uppercase tracking-wide py-2">
            {day.substring(0, 3)}
          </div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, idx) => (
          <button
            key={idx}
            onClick={() => day !== null && handleDateClick(day)}
            disabled={day === null}
            className={`
              aspect-square rounded-lg font-medium text-sm transition-colors
              ${day === null ? "cursor-default" : "cursor-pointer hover:bg-warm-beige"}
              ${isSelected(day!) ? "bg-wine-red text-primary-foreground font-bold" : ""}
              ${isToday(day!) && !isSelected(day!) ? "border-2 border-wine-red text-wine-red" : ""}
              ${day === null ? "text-transparent" : "text-foreground"}
            `}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  )
}
