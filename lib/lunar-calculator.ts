/**
 * Lunar Calendar Calculator for Vietnamese Calendar
 * Based on the Vietnamese lunar calendar system
 */

const CAN = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"]
const CHI = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"]

const PI = Math.PI

/**
 * Tính Julian day number từ ngày dương lịch dd/mm/yyyy
 */
function jdFromDate(dd: number, mm: number, yy: number): number {
  const a = Math.floor((14 - mm) / 12)
  const y = yy + 4800 - a
  const m = mm + 12 * a - 3
  let jd = dd + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045
  if (jd < 2299161) {
    jd = dd + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - 32083
  }
  return jd
}

/**
 * Tính góc mặt trời tại thời điểm jd
 */
function SunLongitude(jdn: number): number {
  const T = (jdn - 2451545.0) / 36525 // Time in Julian centuries from 2000-01-01 12:00:00 GMT
  const T2 = T * T
  const dr = PI / 180 // degree to radian
  const M = 357.5291 + 35999.0503 * T - 0.0001559 * T2 - 0.00000048 * T * T2 // mean anomaly, degree
  const L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2 // mean longitude, degree
  let DL = (1.9146 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M)
  DL = DL + (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) + 0.00029 * Math.sin(dr * 3 * M)
  let L = L0 + DL // true longitude, degree
  L = L * dr
  L = L - PI * 2 * Math.floor(L / (PI * 2)) // Normalize to (0, 2*PI)
  return Math.floor((L / PI) * 6)
}

/**
 * Tính thời điểm mặt trời vào vị trí k*30 độ
 */
function getSunLongitude(dayNumber: number, timeZone: number): number {
  return Math.floor(SunLongitude(dayNumber - 0.5 - timeZone / 24))
}

/**
 * Tìm ngày bắt đầu tháng âm lịch chứa ngày newMoon và trước ngày dayNumber
 */
function getNewMoonDay(k: number, timeZone: number): number {
  const T = k / 1236.85 // Time in Julian centuries from 1900 January 0.5
  const T2 = T * T
  const T3 = T2 * T
  const dr = PI / 180
  let Jd1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * T2 - 0.000000155 * T3
  Jd1 = Jd1 + 0.00033 * Math.sin((166.56 + 132.87 * T - 0.009173 * T2) * dr) // Mean new moon
  const M = 359.2242 + 29.10535608 * k - 0.0000333 * T2 - 0.00000347 * T3 // Sun's mean anomaly
  const Mpr = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 0.00001236 * T3 // Moon's mean anomaly
  const F = 21.2964 + 390.67050646 * k - 0.0016528 * T2 - 0.00000239 * T3 // Moon's argument of latitude
  let C1 = (0.1734 - 0.000393 * T) * Math.sin(M * dr) + 0.0021 * Math.sin(2 * dr * M)
  C1 = C1 - 0.4068 * Math.sin(Mpr * dr) + 0.0161 * Math.sin(dr * 2 * Mpr)
  C1 = C1 - 0.0004 * Math.sin(dr * 3 * Mpr)
  C1 = C1 + 0.0104 * Math.sin(dr * 2 * F) - 0.0051 * Math.sin(dr * (M + Mpr))
  C1 = C1 - 0.0074 * Math.sin(dr * (M - Mpr)) + 0.0004 * Math.sin(dr * (2 * F + M))
  C1 = C1 - 0.0004 * Math.sin(dr * (2 * F - M)) - 0.0006 * Math.sin(dr * (2 * F + Mpr))
  C1 = C1 + 0.001 * Math.sin(dr * (2 * F - Mpr)) + 0.0005 * Math.sin(dr * (2 * Mpr + M))
  let deltat
  if (T < -11) {
    deltat = 0.001 + 0.000839 * T + 0.0002261 * T2 - 0.00000845 * T3 - 0.000000081 * T * T3
  } else {
    deltat = -0.000278 + 0.000265 * T + 0.000262 * T2
  }
  const JdNew = Jd1 + C1 - deltat
  return Math.floor(JdNew + 0.5 + timeZone / 24)
}

/**
 * Tìm tháng 11 âm lịch (tháng chứa Đông chí)
 */
function getLunarMonth11(yy: number, timeZone: number): number {
  const off = jdFromDate(31, 12, yy) - 2415021
  const k = Math.floor(off / 29.530588853)
  let nm = getNewMoonDay(k, timeZone)
  const sunLong = getSunLongitude(nm, timeZone) // sun longitude at local midnight
  if (sunLong >= 9) {
    nm = getNewMoonDay(k - 1, timeZone)
  }
  return nm
}

/**
 * Tìm tháng nhuận
 */
function getLeapMonthOffset(a11: number, timeZone: number): number {
  const k = Math.floor((a11 - 2415021.076998695) / 29.530588853 + 0.5)
  let last = 0
  let i = 1 // We start with month following lunar month 11
  let arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone)
  do {
    last = arc
    i++
    arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone)
  } while (arc !== last && i < 14)
  return i - 1
}

/**
 * Chuyển đổi từ dương lịch sang âm lịch
 */
export function convertSolar2Lunar(
  dd: number,
  mm: number,
  yy: number,
  timeZone: number = 7
): { lunarDay: number; lunarMonth: number; lunarYear: number; isLeapMonth: boolean } {
  const dayNumber = jdFromDate(dd, mm, yy)
  const k = Math.floor((dayNumber - 2415021.076998695) / 29.530588853)
  let monthStart = getNewMoonDay(k + 1, timeZone)
  if (monthStart > dayNumber) {
    monthStart = getNewMoonDay(k, timeZone)
  }
  let a11 = getLunarMonth11(yy, timeZone)
  let b11 = a11
  let lunarYear: number
  if (a11 >= monthStart) {
    lunarYear = yy
    a11 = getLunarMonth11(yy - 1, timeZone)
  } else {
    lunarYear = yy + 1
    b11 = getLunarMonth11(yy + 1, timeZone)
  }
  const lunarDay = dayNumber - monthStart + 1
  const diff = Math.floor((monthStart - a11) / 29)
  let lunarLeap = 0
  let lunarMonth = diff + 11
  if (b11 - a11 > 365) {
    const leapMonthDiff = getLeapMonthOffset(a11, timeZone)
    if (diff >= leapMonthDiff) {
      lunarMonth = diff + 10
      if (diff === leapMonthDiff) {
        lunarLeap = 1
      }
    }
  }
  if (lunarMonth > 12) {
    lunarMonth = lunarMonth - 12
  }
  if (lunarMonth >= 11 && diff < 4) {
    lunarYear -= 1
  }
  return {
    lunarDay,
    lunarMonth,
    lunarYear,
    isLeapMonth: lunarLeap === 1,
  }
}

/**
 * Lấy Can Chi của năm
 */
export function getYearCanChi(year: number): string {
  const can = CAN[(year + 6) % 10]
  const chi = CHI[(year + 8) % 12]
  return `${can} ${chi}`
}

/**
 * Lấy Can Chi của tháng
 */
export function getMonthCanChi(month: number, year: number): string {
  const yearCan = (year + 6) % 10
  const monthCanIndex = (yearCan * 2 + month) % 10
  const can = CAN[monthCanIndex]
  const chi = CHI[(month + 1) % 12]
  return `${can} ${chi}`
}

/**
 * Lấy Can Chi của ngày
 */
export function getDayCanChi(dd: number, mm: number, yy: number): string {
  const jd = jdFromDate(dd, mm, yy)
  const canIndex = (jd + 9) % 10
  const chiIndex = (jd + 1) % 12
  return `${CAN[canIndex]} ${CHI[chiIndex]}`
}

/**
 * Lấy thông tin lịch âm đầy đủ
 */
export interface LunarInfo {
  solarDate: string
  lunarDay: number
  lunarMonth: number
  lunarYear: number
  lunarYearCycle: string
  dayZodiac: string
  monthZodiac: string
  isLeapMonth: boolean
}

export function getLunarInfo(date: Date): LunarInfo {
  const dd = date.getDate()
  const mm = date.getMonth() + 1
  const yy = date.getFullYear()

  const lunar = convertSolar2Lunar(dd, mm, yy)
  const yearCanChi = getYearCanChi(lunar.lunarYear)
  const dayCanChi = getDayCanChi(dd, mm, yy)
  const monthCanChi = getMonthCanChi(lunar.lunarMonth, lunar.lunarYear)

  return {
    solarDate: date.toISOString().split("T")[0],
    lunarDay: lunar.lunarDay,
    lunarMonth: lunar.lunarMonth,
    lunarYear: lunar.lunarYear,
    lunarYearCycle: yearCanChi,
    dayZodiac: dayCanChi,
    monthZodiac: monthCanChi,
    isLeapMonth: lunar.isLeapMonth,
  }
}
