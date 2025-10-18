import { Card, CardContent } from "@/components/ui/card"
import { Code, Rocket, Users, Zap } from "lucide-react"
import perfil_img from "@/public/img/imagem-perfil.jpg"

export function About() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Código Limpo",
      description: "Escrevo código limpo, bem documentado e fácil de manter",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Performance",
      description: "Foco em aplicações rápidas e otimizadas para melhor experiência",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Colaboração",
      description: "Trabalho bem em equipe e comunico ideias de forma clara",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Inovação",
      description: "Sempre buscando novas tecnologias e melhores práticas",
    },
  ]

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-blue-400">Sobre Mim</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Desenvolvedor Web</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Sou estudante de Engenharia de Software e desenvolvedor front-end com 6 anos de experiência na criação de sites.
                Desde criança, a tecnologia sempre me surpreendeu e acabou se tornando uma verdadeira paixão. Ao longo da minha trajetória,
                aprimorei minhas habilidades para transformar ideias em projetos reais, aplicando boas práticas de desenvolvimento e soluções criativas
                que otimizam websites e proporcionam experiências digitais intuitivas e de qualidade.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Especializo-me em tecnologias modernas como React, Next.js, Node.js e TypeScript. Tenho experiência
                no frontend, sempre focando em entregar produtos de alta qualidade.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Quando não estou codando, gosto de estudar novas tecnologias, contribuir para projetos open source e
                compartilhar conhecimento com a comunidade de desenvolvedores.
              </p>
            </div>

            <div className="relative">
              <div className="w-50 h-50 overflow-hidden rounded-xl shadow-lg border-4 ">
                <img
                  src="/img/imagem-perfil.jpg"
                  alt="Foto de perfil"
                  className="w-full h-full object-cover "
                />
              </div>
            </div>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    {highlight.icon}
                  </div>
                  <h4 className="font-bold mb-2 text-white">{highlight.title}</h4>
                  <p className="text-sm text-gray-300">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
