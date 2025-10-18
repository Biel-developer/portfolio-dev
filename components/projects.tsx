"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar } from "lucide-react"
import satelite_image from "@/public/img/imagem-satelite.png"
import ecorota from "@/public/img/ecorota.png"
import { createGunzip } from "zlib"

export function Projects() {
  const projects = [
    {
      title: "EcoRota",
      description:
       "Este sistema tem como objetivo otimizar as rotas de coleta de lixo, tornando o processo mais eficiente, econômico e sustentável.",
      image: "/img/ecorota.png",
      technologies: ["Nextjs","TypeScript","Java","PostgreeSql"],
      category: "Full Stack",
      date: "2025",
      liveUrl: "https://ecorota.vercel.app",
      githubUrl: "https://github.com/Biel-developer/EcoRota",
    },
     {
      title: "Satelite App",
      description:
        "Plataforma O projeto visa lançar satélites miniaturizados para coletar dados meteorológicos e monitorar fenômenos terrestres",
      image: "/img/imagem-satelite.png",
      technologies: ["HTML", "CSS", "JSON", "Java Script"],
      category: "Front End",
      date: "2024",
      liveUrl: "https://satellite-manager.vercel.app",
      githubUrl: "https://github.com/Biel-developer/SpaceApps-SatelliteManager",
    }
    
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      "Full Stack": "from-purple-500 to-pink-500",
      "Web App": "from-blue-500 to-cyan-500",
      "AI/ML": "from-green-500 to-emerald-500",
      Analytics: "from-orange-500 to-red-500",
      Platform: "from-indigo-500 to-purple-500",
      Education: "from-teal-500 to-blue-500",
    }
    return colors[category as keyof typeof colors] || "from-gray-500 to-gray-600"
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Meus Projetos
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-20 text-lg">Uma jornada através das minhas criações digitais</p>

          {/* Timeline Container */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-blue-500/50 rounded-full hidden lg:block"></div>

            {/* Projects Timeline */}
            <div className="space-y-20">
              {projects.map((project, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-black shadow-lg z-20 hidden lg:block"></div>

                  {/* Project Content */}
                  <div
                    className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                        <div className="relative bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl overflow-hidden group-hover:border-purple-500/40 transition-all duration-300">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        </div>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 space-y-6">
                      {/* Category and Date */}
                      <div className="flex items-center justify-between">
                        <span
                          className={`inline-block px-4 py-2 bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-sm font-semibold rounded-full`}
                        >
                          {project.category}
                        </span>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>{project.date}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">{project.title}</h3>

                      {/* Description */}
                      <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-2 bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm rounded-xl backdrop-blur-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4 pt-4">
                        <Button
                          asChild
                          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-5 h-5 mr-2" />
                            Ver Projeto
                          </a>
                        </Button>

                        <Button
                          variant="outline"
                          asChild
                          className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 px-8 py-3 rounded-xl backdrop-blur-sm bg-transparent font-semibold"
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-5 h-5 mr-2" />
                            Código
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
