"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-blue-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-400">{"<Biel Developer/>"}</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-blue-400 transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-blue-400 transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-white hover:text-blue-400 transition-colors font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white hover:text-blue-400 transition-colors font-medium"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-blue-400 transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-white hover:text-blue-400"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:text-blue-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 border-t border-blue-500/20 pt-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block text-white hover:text-blue-400 transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block text-white hover:text-blue-400 transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block text-white hover:text-blue-400 transition-colors font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block text-white hover:text-blue-400 transition-colors font-medium"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block text-white hover:text-blue-400 transition-colors font-medium"
            >
              Contato
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
