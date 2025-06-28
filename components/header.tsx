"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    setMounted(true)

    const savedTheme = localStorage.getItem("theme")

    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark")
      setIsDark(false)
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDark(true)
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    if (html.classList.contains("dark")) {
      html.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDark(false)
    } else {
      html.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDark(true)
    }
  }

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg" : "bg-transparent"
  }`}
>
      <div className="max-w-screen-xl mx-auto px-4 py-4 w-full">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hasan Othmany
          </div>

          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="relative w-10 h-10 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-110 overflow-hidden"
              aria-label="Toggle theme"
              title={isDark ? "Switch to light theme" : "Switch to dark theme"}
            >
              <Sun
                size={32}
                className={`absolute text-yellow-500 transition-all duration-700 ease-in-out ${
                  isDark
                    ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-0 scale-100"
                    : "top-[200%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-180 scale-75"
                }`}
              />
              <Moon
                size={32}
                className={`absolute text-blue-400 transition-all duration-700 ease-in-out ${
                  !isDark
                    ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-0 scale-100"
                    : "top-[200%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-180 scale-75"
                }`}
              />
            </Button>

            <div className="md:hidden relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="relative z-20 transition-transform duration-300"
              >
                <span
                  className={`absolute transition-opacity duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <Menu className="h-5 w-5" />
                </span>
                <span
                  className={`absolute transition-opacity duration-300 ${
                    isMobileMenuOpen ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <X className="h-5 w-5" />
                </span>
              </Button>

              <div
                className={`absolute right-0 mt-2 w-40 rounded-lg bg-white dark:bg-slate-800 shadow-lg transition-all duration-300 overflow-hidden z-10 ${
                  isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <nav className="flex flex-col px-4 py-2">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-left"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}