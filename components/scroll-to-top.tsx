"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-200 ease-in-out transform ${
        isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0 pointer-events-none"
      }`}
      title="Back to top"
    >
      <Button
  onClick={scrollToTop}
  size="icon"
  className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300"
  aria-label="Scroll to top"
  title="Back to top"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-9 h-9"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20V4m0 0L5 11m7-7l7 7" />
  </svg>
</Button>
    </div>
  )
}