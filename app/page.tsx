import Link from "next/link"
import { ChevronRight, Mail, Phone } from "lucide-react"

import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedImage } from "@/components/ui/animated-image"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedText } from "@/components/ui/animated-text"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <AnimatedImage
            src="/hero.jpeg"
            alt="Zürich Stadtansicht"
            fill
            className="object-cover"
            priority
            effect="zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <AnimatedText
            text="Zuhause im Herzen von Zürich"
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            delay={0.3}
          />
          <AnimatedSection delay={0.5} direction="up">
            <p className="mb-10 text-xl font-medium text-gray-100">Seit 1985 Ihr Baupartner in Zürich</p>
          </AnimatedSection>
          <AnimatedSection delay={0.7} direction="up">
            <AnimatedButton size="lg" className="bg-orange-500 hover:bg-orange-600" whileHover="scale">
              <Link href="/kontakt" className="flex items-center">
                Kontaktieren Sie uns
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </AnimatedButton>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Unsere Dienstleistungen
              </h2>
              <p className="text-lg text-gray-600">
                Professionelle Lösungen für Ihr Bauprojekt - von der Planung bis zur Umsetzung
              </p>
            </div>
          </AnimatedSection>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <AnimatedCard
                key={index}
                className="group relative overflow-hidden rounded-xl border bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1"
                delay={0.1 * index}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <AnimatedImage
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    effect="reveal"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-8">
                  <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-orange-500">{service.title}</h3>
                  <p className="mb-6 text-gray-600 leading-relaxed">{service.description}</p>
                  <Link
                    href="/dienstleistungen"
                    className="inline-flex items-center text-sm font-medium text-orange-500 transition-colors hover:text-orange-600"
                  >
                    Mehr erfahren
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <AnimatedSection direction="right" delay={0.2}>
              <div className="max-w-xl">
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">40 Jahre Erfahrung</h2>
                <p className="mb-6 text-lg leading-relaxed text-gray-600">
                  Seit 1985 steht die FSG Bau AG für Qualität und Zuverlässigkeit im Baugewerbe. Unsere langjährige
                  Erfahrung und unser Fachwissen machen uns zu einem vertrauenswürdigen Partner für Ihr nächstes
                  Bauprojekt.
                </p>
                <p className="mb-8 text-lg leading-relaxed text-gray-600">
                  Wir legen großen Wert auf präzise Arbeit, termingerechte Ausführung und transparente Kommunikation mit
                  unseren Kunden.
                </p>
                <AnimatedButton
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50"
                  whileHover="scale"
                >
                  <Link href="/ueber-uns" className="flex items-center">
                    Über uns
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </AnimatedButton>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.4}>
              <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl">
                <AnimatedImage
                  src="/placeholder.svg?height=400&width=600"
                  alt="FSG Bau Team bei der Arbeit"
                  fill
                  className="object-cover"
                  effect="slide"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-24 text-white">
        <div className="container text-center">
          <AnimatedSection direction="up">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Bereit für Ihr nächstes Projekt?</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-orange-50">
              Kontaktieren Sie uns noch heute für eine unverbindliche Beratung. Wir freuen uns darauf, Ihre Vision
              Wirklichkeit werden zu lassen.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <AnimatedButton size="lg" variant="default" whileHover="glow">
                <Link href="tel:+41443616161" className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  +41 44 361 61 61
                </Link>
              </AnimatedButton>
              <AnimatedButton
                size="lg"
                variant="outline"
                className="border-white  hover:bg-white/10"
                whileHover="glow"
              >
                <Link href="/kontakt" className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Nachricht senden
                </Link>
              </AnimatedButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Was unsere Kunden sagen
              </h2>
              <p className="text-lg text-gray-600">
                Erfahren Sie, warum unsere Kunden uns vertrauen und empfehlen
              </p>
            </div>
          </AnimatedSection>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <AnimatedCard
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1"
                delay={0.2 * index}
                hoverEffect={true}
              >
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-orange-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative mb-6 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="relative mb-6 text-gray-600 leading-relaxed">"{testimonial.text}"</p>
                <div className="relative flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-200 ring-2 ring-orange-100 transition-all duration-300 group-hover:ring-orange-200">
                    <AnimatedImage
                      src="/placeholder.svg?height=40&width=40"
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 transition-colors group-hover:text-orange-500">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

const services = [
  {
    title: "Umbau & Renovationen",
    description: "Wir modernisieren Ihr Zuhause oder Geschäftsgebäude mit höchster Qualität und Liebe zum Detail.",
    image: "/IMG_9888.jpg",
  },
  {
    title: "Rückbau- & Abbrucharbeiten",
    description: "Professionelle und sichere Durchführung von Abbrucharbeiten mit fachgerechter Entsorgung.",
    image: "/IMG_0716.png",
  },
  {
    title: "Betonbohrungen",
    description: "Präzise Betonbohrungen und -schnitte mit modernster Technik für jede Anforderung.",
    image: "/beton.jpeg",
  },
  {
    title: "Malerarbeiten",
    description: "Hochwertige Malerarbeiten für Innen- und Außenbereiche mit erstklassigen Materialien.",
    image: "/IMG_0718-768x576.jpg",
  },
  {
    title: "Gipserarbeiten",
    description: "Fachgerechte Gipserarbeiten für Neubauten, Renovierungen und Reparaturen.",
    image: "/IMG_0718-768x576.jpg",
  },
  {
    title: "Plattenarbeiten",
    description: "Kreative und präzise Verlegung von Fliesen und Platten für Bäder, Küchen und mehr.",
    image: "/IMG_1637-768x576.jpg",
  },
]

const testimonials = [
  {
    name: "Thomas Müller",
    location: "Zürich",
    text: "Die FSG Bau AG hat unsere Wohnung komplett renoviert und wir sind begeistert vom Ergebnis. Professionelle Arbeit, termingerecht und zu einem fairen Preis.",
  },
  {
    name: "Laura Schmidt",
    location: "Winterthur",
    text: "Wir haben die FSG Bau AG für die Renovierung unseres Badezimmers beauftragt. Die Arbeit wurde schnell und sauber erledigt. Sehr empfehlenswert!",
  },
  {
    name: "Michael Weber",
    location: "Zürich",
    text: "Zuverlässig, pünktlich und qualitativ hochwertig. Die FSG Bau AG hat alle unsere Erwartungen übertroffen. Wir werden sie definitiv wieder beauftragen.",
  },
]
