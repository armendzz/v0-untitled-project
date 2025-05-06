import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedImage } from "@/components/ui/animated-image"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedText } from "@/components/ui/animated-text"

export default function Dienstleistungen() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header Section */}
      <section className="relative h-[300px] w-full">
        <div className="absolute inset-0">
          <AnimatedImage
            src="/placeholder.svg?height=300&width=1200"
            alt="Dienstleistungen Header"
            fill
            className="object-cover"
            priority
            effect="zoom"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <AnimatedText
            text="Unsere Dienstleistungen"
            className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl"
            delay={0.3}
          />
          <AnimatedSection delay={0.5} direction="up">
            <p className="text-xl">Qualität und Zuverlässigkeit bei jedem Projekt</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container">
          <AnimatedSection direction="up" delay={0.2}>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-12 text-lg text-gray-600">
                Die FSG Bau AG bietet Ihnen ein umfassendes Leistungsspektrum im Baugewerbe. Mit unserer langjährigen
                Erfahrung und unserem qualifizierten Team garantieren wir Ihnen höchste Qualität und termingerechte
                Ausführung.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-16">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                direction={index % 2 === 0 ? "right" : "left"}
                delay={0.2 * (index + 1)}
                className={`grid gap-8 ${
                  index % 2 === 0 ? "md:grid-cols-[3fr_2fr]" : "md:grid-cols-[2fr_3fr] md:[&>div:first-child]:order-2"
                }`}
              >
                <div className="flex flex-col justify-center">
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">{service.title}</h2>
                  <p className="mb-6 text-gray-600">{service.description}</p>
                  <ul className="mb-8 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-orange-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <AnimatedButton className="bg-orange-600 hover:bg-orange-700" whileHover="scale">
                      <Link href="/kontakt" className="flex items-center">
                        Anfrage stellen
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </AnimatedButton>
                  </div>
                </div>
                <div className="relative h-[300px] overflow-hidden rounded-lg sm:h-[400px]">
                  <AnimatedImage
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                    effect={index % 2 === 0 ? "slide" : "reveal"}
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Haben Sie Fragen zu unseren Dienstleistungen?
              </h2>
              <p className="mb-8 text-lg">
                Unser Team steht Ihnen gerne zur Verfügung, um Ihre Fragen zu beantworten und Ihnen bei Ihrem Projekt zu
                helfen.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <AnimatedButton size="lg" variant="default" whileHover="glow">
                  <Link href="/kontakt">Kontaktieren Sie uns</Link>
                </AnimatedButton>
          
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}

const services = [
  {
    title: "Umbau & Renovationen",
    description:
      "Wir bieten umfassende Umbau- und Renovationsarbeiten für Wohn- und Geschäftsgebäude an. Unser erfahrenes Team sorgt für eine fachgerechte und termingerechte Ausführung aller Arbeiten.",
    features: [
      "Komplette Wohnungsrenovierungen",
      "Badezimmer- und Küchensanierungen",
      "Fassadenrenovierungen",
      "Energetische Sanierungen",
      "Dachsanierungen",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Abbrucharbeiten",
    description:
      "Unsere Abbrucharbeiten werden mit höchster Präzision und unter Einhaltung aller Sicherheitsvorschriften durchgeführt. Wir sorgen für eine fachgerechte Entsorgung aller Materialien.",
    features: [
      "Teil- und Totalabbrüche",
      "Entkernung von Gebäuden",
      "Rückbau von Innenräumen",
      "Fachgerechte Entsorgung",
      "Schadstoffsanierung",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Betonbohrungen & -schnitte",
    description:
      "Mit modernster Technik führen wir präzise Betonbohrungen und -schnitte durch. Unsere Spezialisten arbeiten sauber, schnell und mit minimaler Lärmbelästigung.",
    features: [
      "Kernbohrungen in allen Dimensionen",
      "Wanddurchbrüche",
      "Präzisionsschnitte mit Diamantsägen",
      "Bodenschlitze für Installationen",
      "Staubfreies Arbeiten möglich",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Maler- & Gipserarbeiten",
    description:
      "Unsere Maler- und Gipserarbeiten verleihen Ihren Räumen ein neues Gesicht. Wir verwenden ausschließlich hochwertige Materialien für ein perfektes Ergebnis.",
    features: [
      "Innen- und Außenanstriche",
      "Dekorative Wandgestaltungen",
      "Tapezierarbeiten",
      "Gipskartonwände und -decken",
      "Spachtelarbeiten und Stuckarbeiten",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Plattenarbeiten",
    description:
      "Wir bieten professionelle Plattenarbeiten für Bäder, Küchen und andere Bereiche an. Unser Team berät Sie gerne bei der Auswahl der passenden Materialien und Designs.",
    features: [
      "Verlegung von Wand- und Bodenfliesen",
      "Naturstein- und Feinsteinzeugarbeiten",
      "Mosaik- und Designverlegung",
      "Balkone und Terrassen",
      "Reparatur und Austausch beschädigter Fliesen",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
]
