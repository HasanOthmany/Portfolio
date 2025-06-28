"use client"

import { Button } from "@/components/ui/button"
import { Mail, Facebook, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Ready to bring your ideas to life? Let's connect and discuss your next project!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white text-center">Get in Touch</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-center">
              I'm always excited to discuss new opportunities and interesting projects. Whether you need a web
              application, mobile app, or game development, I'm here to help bring your vision to life.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="https://www.facebook.com/HasanOthmany963"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                variant="outline"
                className="w-full justify-start p-6 h-auto hover:bg-blue-50 dark:hover:bg-blue-900/20 border-2 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-4">
                    <Facebook className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-slate-900 dark:text-white">Facebook</h4>
                    <p className="text-slate-600 dark:text-slate-400">Connect on Facebook</p>
                  </div>
                </div>
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/hasan-othmany-b0b914210/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                variant="outline"
                className="w-full justify-start p-6 h-auto hover:bg-blue-50 dark:hover:bg-blue-900/20 border-2 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mr-4">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-slate-900 dark:text-white">LinkedIn</h4>
                    <p className="text-slate-600 dark:text-slate-400">Connect on LinkedIn</p>
                  </div>
                </div>
              </Button>
            </a>

            <a href="mailto:hasanothmany@zohomail.eu" className="block">
              <Button
                variant="outline"
                className="w-full justify-start p-6 h-auto hover:bg-green-50 dark:hover:bg-green-900/20 border-2 hover:border-green-300 dark:hover:border-green-700 transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-slate-900 dark:text-white">Email</h4>
                    <p className="text-slate-600 dark:text-slate-400">hasanothmany@zohomail.eu</p>
                  </div>
                </div>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}