"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { toast } from "sonner"

import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedImage } from "@/components/ui/animated-image"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedText } from "@/components/ui/animated-text"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefon: "",
    nachricht: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.telefon,
          message: formData.nachricht,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Etwas ist schiefgelaufen")
      }

      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        telefon: "",
        nachricht: "",
      })
      toast.success("Ihre Nachricht wurde erfolgreich gesendet")
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Etwas ist schiefgelaufen")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Header Section */}
      <section className="relative h-[300px] w-full">
        <div className="absolute inset-0">
          <AnimatedImage
            src="/placeholder.svg?height=300&width=1200"
            alt="Kontakt Header"
            fill
            className="object-cover"
            priority
            effect="zoom"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <AnimatedText text="Kontakt" className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl" delay={0.3} />
          <AnimatedSection delay={0.5} direction="up">
            <p className="text-xl">Wir freuen uns auf Ihre Nachricht</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16">
        <div className="container">
          <AnimatedSection direction="up" delay={0.2}>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-12 text-lg text-gray-600">
                Wir sind für Sie da – ob per Telefon, E-Mail oder Kontaktformular. Zögern Sie nicht, uns bei Fragen oder
                für ein unverbindliches Angebot zu kontaktieren.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-3">
            {contactInfo.map((item, index) => (
              <AnimatedCard
                key={index}
                className="flex flex-col items-center rounded-lg border bg-white p-6 text-center shadow-sm"
                delay={0.1 * (index + 1)}
                hoverEffect={true}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="mb-2 text-gray-600">{item.subtitle}</p>
                <a href={item.link} className="font-medium text-orange-600 hover:underline">
                  {item.linkText}
                </a>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimatedSection direction="right" delay={0.2}>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">Kontaktformular</h2>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-lg border border-green-200 bg-green-50 p-6 text-green-800"
                >
                  <h3 className="mb-2 text-lg font-bold">Vielen Dank für Ihre Nachricht!</h3>
                  <p>Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ihr Name"
                      required
                      className="transition-all focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ihre E-Mail-Adresse"
                      required
                      className="transition-all focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefon">Telefon</Label>
                    <Input
                      id="telefon"
                      name="telefon"
                      type="tel"
                      value={formData.telefon}
                      onChange={handleChange}
                      placeholder="Ihre Telefonnummer"
                      className="transition-all focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nachricht">Nachricht *</Label>
                    <Textarea
                      id="nachricht"
                      name="nachricht"
                      value={formData.nachricht}
                      onChange={handleChange}
                      placeholder="Ihre Nachricht an uns"
                      rows={5}
                      required
                      className="transition-all focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <AnimatedButton
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    disabled={isSubmitting}
                    whileHover="scale"
                  >
                    {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                  </AnimatedButton>
                </motion.form>
              )}
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.4}>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">Unsere Lage</h2>
              <div className="h-[400px] overflow-hidden rounded-lg border shadow-sm">
                {/* This would be replaced with an actual Google Maps embed */}
                <div className="relative h-full w-full">
                  <AnimatedImage
                    src="/placeholder.svg?height=400&width=600"
                    alt="Karte mit Standort der FSG Bau AG"
                    fill
                    className="object-cover"
                    effect="fade"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200/50">
                    <p className="rounded bg-white p-4 text-center font-medium">
                      Hier würde eine Google Maps Karte eingebettet werden, <br />
                      die den Standort der FSG Bau AG zeigt: <br />
                      Eibenstrasse 9, 8045 Zürich
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="mb-2 text-lg font-bold">Öffnungszeiten</h3>
                <ul className="space-y-2">
                  <motion.li
                    className="flex justify-between"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <span>Montag - Freitag:</span>
                    <span>08:00 - 12:00, 13:00 - 17:00</span>
                  </motion.li>
                  <motion.li
                    className="flex justify-between"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <span>Samstag & Sonntag:</span>
                    <span>Geschlossen</span>
                  </motion.li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  )
}

const contactInfo = [
  {
    title: "Telefon",
    subtitle: "Rufen Sie uns an",
    linkText: "+41 44 361 61 61",
    link: "tel:+41443616161",
    icon: <Phone className="h-6 w-6" />,
  },
  {
    title: "E-Mail",
    subtitle: "Schreiben Sie uns",
    linkText: "info@fsgbau.ch",
    link: "mailto:info@fsgbau.ch",
    icon: <Mail className="h-6 w-6" />,
  },
  {
    title: "Adresse",
    subtitle: "Besuchen Sie uns",
    linkText: "Eibenstrasse 9, 8045 Zürich",
    link: "https://maps.google.com/?q=Eibenstrasse+9,+8045+Zürich",
    icon: <MapPin className="h-6 w-6" />,
  },
]
