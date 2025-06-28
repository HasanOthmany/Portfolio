import { Facebook, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white py-12 w-full">
      <div className="px-6 md:px-12 w-full">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Hasan Othmany
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Full-stack developer passionate about creating exceptional digital experiences through innovative web
              development, mobile applications, and interactive games.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
            <div className="flex space-x-4 mb-4">
              {[
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/HasanOthmany963",
                  label: "Facebook",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/hasan-othmany-b0b914210/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:hasanothmany@zohomail.eu",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={label}
                  title={label}
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Open for freelance opportunities and exciting projects!
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 md:mb-0">
            © {currentYear} Hasan Othmany. All rights reserved.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm flex items-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  )
}