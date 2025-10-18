"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 bg-black relative overflow-hidden"
    >
      {/* Background Code Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/code-background.png')`,
          }}
        />
        {/* Linear Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-6">
            <p className="text-xl md:text-2xl text-blue-400 font-medium mb-2">Olá, sou</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Gabriel Nascimento</h1>
          </div>

          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white text-4xl font-bold shadow-2xl shadow-blue-500/50 border-4 border-blue-400/30">
              {"</>"}
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-blue-400">Desenvolvedor</span>
            <br />
            <span className="text-white">Full Stack</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transformo ideias em soluções digitais inovadoras. Especializado em criar experiências web modernas e
            funcionais com tecnologias de ponta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-500/25 border border-blue-500/30"
              onClick={() => scrollToSection("projects")}
            >
              Ver Projetos
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black bg-black/50 backdrop-blur-sm"
            >
              Entre em Contato
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Biel-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 p-3 rounded-full bg-black/30 backdrop-blur-sm border border-gray-700 hover:border-blue-500"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/gabriel-nascimento-a5946722a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 p-3 rounded-full bg-black/30 backdrop-blur-sm border border-gray-700 hover:border-blue-500"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:gabriel.naascimento18@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 p-3 rounded-full bg-black/30 backdrop-blur-sm border border-gray-700 hover:border-blue-500"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-blue-400 hover:text-blue-300 transition-colors p-2 rounded-full bg-black/30 backdrop-blur-sm border border-gray-700 hover:border-blue-500"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute top-20 left-10 text-blue-400/20 text-6xl font-mono rotate-12 select-none">{"{ }"}</div>
      <div className="absolute bottom-32 right-16 text-blue-400/20 text-4xl font-mono -rotate-12 select-none">
        {"</>"}
      </div>
      <div className="absolute top-1/3 right-8 text-blue-400/20 text-5xl font-mono rotate-45 select-none">{"()"}</div>
    </section>
  )
}
