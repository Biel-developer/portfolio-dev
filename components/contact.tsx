"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode implementar o envio do formulário
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "gabriel.naascimento18@gmail.com",
      link: "mailto:gabriel@email.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      value: "+55 (44) 999620660",
      link: "tel:+5544999620660",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      value: "Maringá, PR",
      link: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-blue-400">Entre em Contato</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Vamos Conversar!</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Estou sempre aberto a discutir novos projetos, oportunidades criativas ou parcerias. Não hesite em
                entrar em contato!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center text-white">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{info.title}</h4>
                      <a href={info.link} className="text-gray-300 hover:text-blue-400 transition-colors">
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Envie uma Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Seu Nome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Seu Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Sua Mensagem"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full resize-none bg-black border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
