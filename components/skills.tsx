"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function Skills() {
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

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Web Development",
      icon: "🌐",
      skills: ["React", "Next.js", "TypeScript", "Node.js", "Express", "Laravel", "Tailwind CSS", "AI & Machine Learning"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Mobile Development",
      icon: "📱",
      skills: ["Flutter", "Dart", "React Native", "Firebase", "SQLite", "REST APIs", "State Management"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Game Development",
      icon: "🎮",
      skills: ["GameMaker Studio", "GML", "Game Design", "Physics"],
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            A comprehensive toolkit for building exceptional digital experiences
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:grid lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`group transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                flex: "1 1 300px",
                maxWidth: "100%",
              }}
            >
              <CardContent className="p-6 h-full">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl mb-4 mx-auto`}
                >
                  {category.icon}
                </div>

                <h3 className="text-xl font-bold text-center mb-4 text-slate-900 dark:text-white">{category.title}</h3>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-sm text-slate-600 dark:text-slate-400 p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
                      style={{ transitionDelay: `${skillIndex * 50}ms` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { skill: "React/Next.js", level: 95 },
              { skill: "Flutter", level: 90 },
              { skill: "Node.js", level: 85 },
              { skill: "AI", level: 80 },
              { skill: "TypeScript", level: 90 },
              { skill: "Database Design", level: 85 },
            ].map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{item.skill}</span>
                  <span className="text-slate-600 dark:text-slate-400">{item.level}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${item.level}%` : "0%",
                      transitionDelay: `${index * 200}ms`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}