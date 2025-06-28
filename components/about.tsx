"use client"

import { useEffect, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
            Passionate Developer &amp; Creative Problem Solver
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            I'm a versatile full-stack developer with a passion for creating exceptional digital experiences. My
            journey spans across web development, mobile applications, and game development, allowing me to bring
            unique perspectives to every project.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            With expertise in React, Flutter, and GameMaker, I love tackling complex challenges and turning innovative
            ideas into reality. Whether it's a responsive web application, a cross-platform mobile app, or an engaging
            game, I'm committed to delivering high-quality solutions that exceed expectations.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
            brainstorming the next big idea. Let's collaborate and build something extraordinary!
          </p>
        </div>
      </div>
    </section>
  )
}