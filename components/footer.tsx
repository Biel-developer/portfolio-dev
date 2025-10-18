import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">{"<Biel Developer/>"}</div>
              <p className="text-gray-400 leading-relaxed">
                Desenvolvedor Full Stack apaixonado por criar soluções digitais inovadoras e experiências web
                excepcionais.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#home" className="hover:text-blue-400 transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-blue-400 transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-blue-400 transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-blue-400 transition-colors">
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-400 transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Biel-developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/gabriel-nascimento-a5946722a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:gabriel.naascimento18@gmail.com"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center">
              Feito por Gabriel do Nascimento
            </p>
            <p className="text-gray-500 text-sm mt-2">© 2024 Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
