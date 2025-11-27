"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Heart } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setEmail("")
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="newsletter" className="w-full py-20 bg-primary text-primary-foreground">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Heart className="w-12 h-12 mx-auto mb-4 text-accent" />
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Stay Connected</h2>
        <p className="text-lg text-primary-foreground/90 mb-8 text-balance">
          Get updates on upcoming festivals and cultural events delivered to your inbox
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <div className="flex-1 relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-foreground/60" size={20} />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:border-accent focus:bg-primary-foreground/20 transition-all"
            />
          </div>
          <Button type="submit" className="bg-accent text-accent-foreground hover:bg-muted font-semibold">
            Subscribe
          </Button>
        </form>

        {isSubmitted && <p className="mt-4 text-accent font-semibold animate-pulse">Thank you for subscribing!</p>}

        <p className="text-sm text-primary-foreground/70 mt-6">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </section>
  )
}
