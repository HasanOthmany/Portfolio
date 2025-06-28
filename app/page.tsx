"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function Portfolio() {
  return (
    <div className="min-h-screen w-full overflow-x-clip">
      <div className="max-w-screen-xl mx-auto px-4">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  )
}