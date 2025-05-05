import Link from "next/link"
import { ChevronRight, Mail, Phone } from "lucide-react"

import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedImage } from "@/components/ui/animated-image"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedText } from "@/components/ui/animated-text"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <AnimatedImage
            src="/hero.jpeg"
            alt="Zürich Stadtansicht"
            fill
            className="object-cover"
            priority
            effect="zoom"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <AnimatedText
            text="Zuhause im Herzen von Zürich"
            className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            delay={0.3}
          />
          <AnimatedSection delay={0.5} direction="up">
            <p className="mb-8 text-xl font-medium">Seit 1985 Ihr Baupartner in Zürich</p>
          </AnimatedSection>
          <AnimatedSection delay={0.7} direction="up">
            <AnimatedButton size="lg" className="bg-orange-600 hover:bg-orange-700" whileHover="scale">
              <Link href="/kontakt" className="flex items-center">
                Kontaktieren Sie uns
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </AnimatedButton>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <AnimatedSection direction="up">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Unsere Dienstleistungen
            </h2>
          </AnimatedSection>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <AnimatedCard
                key={index}
                className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
                delay={0.1 * index}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <AnimatedImage
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    effect="reveal"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="mb-4 text-gray-600">{service.description}</p>
                  <Link
                    href="/dienstleistungen"
                    className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-800"
                  >
                    Mehr erfahren
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <AnimatedSection direction="right" delay={0.2}>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">40 Jahre Erfahrung</h2>
              <p className="mb-6 text-lg text-gray-600">
                Seit 1985 steht die FSG Bau AG für Qualität und Zuverlässigkeit im Baugewerbe. Unsere langjährige
                Erfahrung und unser Fachwissen machen uns zu einem vertrauenswürdigen Partner für Ihr nächstes
                Bauprojekt.
              </p>
              <p className="mb-8 text-lg text-gray-600">
                Wir legen großen Wert auf präzise Arbeit, termingerechte Ausführung und transparente Kommunikation mit
                unseren Kunden.
              </p>
              <AnimatedButton
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50"
                whileHover="scale"
              >
                <Link href="/ueber-uns" className="flex items-center">
                  Über uns
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </AnimatedButton>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.4}>
              <div className="relative h-[400px] overflow-hidden rounded-lg">
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
      <section className="bg-orange-600 py-16 text-white">
        <div className="container text-center">
          <AnimatedSection direction="up">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Bereit für Ihr nächstes Projekt?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Kontaktieren Sie uns noch heute für eine unverbindliche Beratung. Wir freuen uns darauf, Ihre Vision
              Wirklichkeit werden zu lassen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedButton size="lg" className="bg-white text-orange-600 hover:bg-gray-100" whileHover="glow">
                <Link href="tel:+41443616161" className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  +41 44 361 61 61
                </Link>
              </AnimatedButton>
              <AnimatedButton
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-orange-700"
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
      <section className="bg-gray-50 py-16">
        <div className="container">
          <AnimatedSection direction="up">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Was unsere Kunden sagen
            </h2>
          </AnimatedSection>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <AnimatedCard
                key={index}
                className="rounded-lg bg-white p-6 shadow-sm"
                delay={0.2 * index}
                hoverEffect={true}
              >
                <div className="mb-4 flex">
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
                <p className="mb-4 text-gray-600">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="mr-4 h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                    <AnimatedImage
                      src="/placeholder.svg?height=40&width=40"
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
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
    title: "Abbrucharbeiten",
    description: "Professionelle und sichere Durchführung von Abbrucharbeiten mit fachgerechter Entsorgung.",
    image: "/IMG_0716.png",
  },
  {
    title: "Betonbohrungen",
    description: "Präzise Betonbohrungen und -schnitte mit modernster Technik für jede Anforderung.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Malerarbeiten",
    description: "Hochwertige Malerarbeiten für Innen- und Außenbereiche mit erstklassigen Materialien.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Gipserarbeiten",
    description: "Fachgerechte Gipserarbeiten für Neubauten, Renovierungen und Reparaturen.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Plattenarbeiten",
    description: "Kreative und präzise Verlegung von Fliesen und Platten für Bäder, Küchen und mehr.",
    image: "/placeholder.svg?height=400&width=600",
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
