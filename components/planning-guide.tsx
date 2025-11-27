"use client"

import { planningTips } from "@/lib/mockdata"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function PlanningGuide() {
  return (
    <section id="planning" className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-balance">Festival Planning Guide</h2>
          <p className="text-lg text-foreground/70">Prepare and celebrate like a local</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {planningTips.map((section) => (
            <Card
              key={section.title}
              className="p-8 border-2 border-muted hover:border-primary transition-colors duration-300"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
