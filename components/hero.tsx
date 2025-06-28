"use client"

import { useState, useEffect } from "react"
import { ArrowDown, User } from "lucide-react"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = ["Full-Stack Developer", "App Developer", "Game Developer", "React Specialist", "Flutter Expert"]

  useEffect(() => {
    const currentText = texts[currentIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, texts])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                <User className="w-16 h-16 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Hasan Othmany
          </h1>

          <div className="text-2xl md:text-3xl mb-8 h-12 flex items-center justify-center">
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences through innovative web development, mobile applications, and
            interactive games. Let's build something amazing together.
          </p>

          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 mx-auto text-slate-400" />
          </div>
        </div>
      </div>
    </section>
  )
}