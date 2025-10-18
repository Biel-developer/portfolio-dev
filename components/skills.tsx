"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function Skills() {
  const skills = [
    {
      name: "TypeScript",
      icon: "TS",
      iconBg: "#3178C6",
      borderColor: "border-blue-500",
      docUrl: "https://www.typescriptlang.org/docs/",
    },
    {
      name: "React",
      icon: "⚛️",
      iconBg: "#61DAFB",
      borderColor: "border-cyan-400",
      docUrl: "https://react.dev/",
    },
    {
      name: "Next.js",
      icon: "▲",
      iconBg: "#000000",
      borderColor: "border-gray-400",
      docUrl: "https://nextjs.org/docs",
    },
    {
      name: "JavaScript",
      icon: "JS",
      iconBg: "#F7DF1E",
      borderColor: "border-yellow-400",
      docUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "Node.js",
      icon: "🟢",
      iconBg: "#339933",
      borderColor: "border-green-500",
      docUrl: "https://nodejs.org/en/docs/",
    },
    {
      name: "Python",
      icon: "🐍",
      iconBg: "#3776AB",
      borderColor: "border-blue-600",
      docUrl: "https://docs.python.org/3/",
    },
    {
      name: "PostgreSQL",
      icon: "🐘",
      iconBg: "#336791",
      borderColor: "border-blue-700",
      docUrl: "https://www.postgresql.org/docs/",
    },
    {
      name: "MongoDB",
      icon: "🍃",
      iconBg: "#47A248",
      borderColor: "border-green-600",
      docUrl: "https://docs.mongodb.com/",
    },
    {
      name: "Git",
      icon: "📝",
      iconBg: "#F05032",
      borderColor: "border-red-500",
      docUrl: "https://git-scm.com/doc",
    },
    {
      name: "Figma",
      icon: "🎯",
      iconBg: "#F24E1E",
      borderColor: "border-purple-500",
      docUrl: "https://help.figma.com/",
    },
    {
      name: "Tailwind CSS",
      icon: "🎨",
      iconBg: "#06B6D4",
      borderColor: "border-cyan-500",
      docUrl: "https://tailwindcss.com/docs",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-blue-400">Minhas Skills</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className={`bg-black/80 ${skill.borderColor} border-2 hover:border-opacity-100 border-opacity-50 transition-all duration-300 group cursor-pointer relative overflow-hidden backdrop-blur-sm`}
              >
                <CardContent className="p-6 flex flex-col items-center justify-center h-32">
                  <div className="flex flex-col items-center space-y-3">
                    {/* Icon */}
                    <div className="text-3xl mb-2">
                      {skill.icon.length <= 2 ? (
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                          style={{ backgroundColor: skill.iconBg }}
                        >
                          {skill.icon}
                        </div>
                      ) : (
                        <span>{skill.icon}</span>
                      )}
                    </div>

                    {/* Name */}
                    <span className="text-white font-medium text-sm text-center leading-tight">{skill.name}</span>
                  </div>

                  {/* Hover overlay with documentation button */}
                  <div className="absolute inset-0 bg-black/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-2">
                      <a
                        href={skill.docUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Docs</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 text-lg">Sempre aprendendo e explorando novas tecnologias</p>
          </div>
        </div>
      </div>
    </section>
  )
}
