import Link from "next/link"
import { Calendar, ChevronRight, Mail, Phone } from "lucide-react"

import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedImage } from "@/components/ui/animated-image"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedText } from "@/components/ui/animated-text"

export default function UeberUns() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header Section */}
      <section className="relative h-[300px] w-full">
        <div className="absolute inset-0">
          <AnimatedImage
            src="/hero.jpeg"
            alt="Über Uns Header"
            fill
            className="object-cover"
            priority
            effect="zoom"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <AnimatedText text="Über Uns" className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl" delay={0.3} />
          <AnimatedSection delay={0.5} direction="up">
            <p className="text-xl">Lernen Sie die FSG Bau AG kennen</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <AnimatedSection direction="right" delay={0.2}>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">Unser Unternehmen</h2>
              <p className="mb-4 text-lg text-gray-600">
                Die FSG Bau AG wurde 1985 gegründet und hat sich seitdem zu einem führenden Bauunternehmen in Zürich
                entwickelt. Mit über 40 Jahren Erfahrung im Baugewerbe bieten wir unseren Kunden qualitativ hochwertige
                Dienstleistungen und zuverlässige Ausführung.
              </p>
              <p className="mb-4 text-lg text-gray-600">
                Unser Erfolg basiert auf unserer Philosophie, stets die höchsten Standards in Bezug auf Qualität,
                Sicherheit und Kundenzufriedenheit zu erfüllen. Wir sind stolz auf unsere langjährigen
                Kundenbeziehungen, die auf Vertrauen und Zuverlässigkeit aufgebaut sind.
              </p>
              <p className="text-lg text-gray-600">
                Als lokales Unternehmen kennen wir die Bedürfnisse und Anforderungen in der Region Zürich und können
                maßgeschneiderte Lösungen für jedes Projekt anbieten.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.4}>
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <AnimatedImage
                  src="/LOGO-mit-Kreis (1).png"
                  alt="FSG Bau AG Firmengebäude"
                  fill
                  className="object-cover"
                  effect="slide"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <AnimatedSection direction="up">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900">Unsere Geschichte</h2>
          </AnimatedSection>
          <div className="relative mx-auto max-w-4xl">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-orange-200" />

            {/* Timeline Items */}
            {timelineItems.map((item, index) => (
              <AnimatedSection
                key={index}
                direction={index % 2 === 0 ? "right" : "left"}
                delay={0.2 * (index + 1)}
                className="relative mb-16 last:mb-0"
              >
                {/* Year Circle */}
                <div className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-orange-600 text-white">
                  <Calendar className="h-8 w-8" />
                </div>

                {/* Content */}
                <div
                  className={`relative grid gap-8 rounded-lg border bg-white p-6 shadow-sm md:grid-cols-[1fr_auto_1fr] ${
                    index === 0 || index === 2
                      ? "md:[&>div:first-child]:order-3 md:[&>div:last-child]:order-1 md:[&>div:last-child]:text-right"
                      : ""
                  }`}
                >
                  <div className="md:col-span-1">
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>

                  {/* Year Display (Center) */}
                  <div className="flex items-center justify-center font-bold text-orange-600 md:hidden">
                    {item.year}
                  </div>
                  <div className="hidden items-center justify-center font-bold text-orange-600 md:flex">
                    {item.year}
                  </div>

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden rounded-lg md:col-span-1">
                    <AnimatedImage
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                      effect="fade"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container">
          <AnimatedSection direction="up">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900">Unsere Werte</h2>
          </AnimatedSection>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <AnimatedCard
                key={index}
                className="rounded-lg border bg-white p-6 shadow-sm"
                delay={0.1 * (index + 1)}
                hoverEffect={true}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  {value.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <AnimatedSection direction="up">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900">Unser Team</h2>
          </AnimatedSection>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatedCard
              className="col-span-full mx-auto max-w-md rounded-lg border bg-white p-6 shadow-sm lg:col-span-1"
              delay={0.2}
              hoverEffect={true}
            >
              <div className="mb-6 overflow-hidden rounded-lg">
                <AnimatedImage
                  src="/Besnik_Bilali_FSG_2-768x841.jpeg"
                  alt="Besnik Bilali"
                  width={300}
                  height={400}
                  className="h-auto w-full object-cover"
                  effect="reveal"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold text-gray-900">Besnik Bilali</h3>
              <p className="mb-4 text-orange-600">Geschäftsführer</p>
              <p className="mb-6 text-gray-600">
                "Unsere Mitarbeiter sind unser Kapital. Mit Erfahrung und Fachkompetenz setzen wir Ihre Projekte
                erfolgreich um."
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-orange-600" />
                  <span>+41 44 361 61 61</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4 text-orange-600" />
                  <span>info@fsgbau.ch</span>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedSection direction="left" delay={0.4} className="lg:col-span-2">
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="mb-6 text-xl font-bold text-gray-900">Unser Fachpersonal</h3>
                <p className="mb-4 text-gray-600">
                  Bei der FSG Bau AG arbeiten qualifizierte Fachkräfte mit langjähriger Erfahrung im Baugewerbe. Unser
                  Team besteht aus Bauingenieuren, Bauleitern, Maurern, Malern, Gipsern und weiteren Spezialisten, die
                  ihr Handwerk verstehen und mit Leidenschaft ausüben.
                </p>
                <p className="mb-4 text-gray-600">
                  Regelmäßige Weiterbildungen und Schulungen sorgen dafür, dass unser Team stets auf dem neuesten Stand
                  der Technik ist und die höchsten Qualitätsstandards erfüllt.
                </p>
                <p className="mb-6 text-gray-600">
                  Wir legen großen Wert auf Teamarbeit und eine offene Kommunikation, sowohl innerhalb unseres Teams als
                  auch mit unseren Kunden und Partnern.
                </p>
                <div className="relative h-[400px] overflow-hidden rounded-lg">
                  <AnimatedImage
                    src="/2025-04-08.jpg"
                    alt="FSG Bau Team"
                    fill
                    className="object-cover"
                    effect="slide"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
     
      <section className="bg-orange-600 py-16 text-white">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Möchten Sie mehr über uns erfahren?
              </h2>
              <p className="mb-8 text-lg">
              Kontaktieren Sie uns für weitere Informationen über unser Unternehmen oder vereinbaren Sie einen persönlichen Termin.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <AnimatedButton size="lg" variant="default" whileHover="glow" className="bg-white text-orange-600 hover:bg-orange-50" >
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

const timelineItems = [
  {
    year: "1985",
    title: "Gründung der FSG Bau AG",
    description: "Die Familie Fontana ruft die FSG Bau AG ins Leben und legt den Grundstein für ein etabliertes, Familiengeführtes Unternehmen, welches noch weitere Dekaden weitergeführt wird.",
    image: "/1985.jpeg",
  },
  {
    year: "1987",
    title: "Die erste Generation",
    description:
      "Im Jahr 1987 tritt der erste aus der Familie Bilali der Firma bei, gefolgt von seinen zwei Brüdern. Der Grossvater Bilali prägte das Unternehmen mit leidenschaftlicher Hingabe und blieb bis zu seiner Pensionierung ein Eckpfeiler der Firma. Über 17 Jahre hinweg stand er mit Herzblut für die FSG Bau AG ein.",
    image: "/1987.jpeg",
  },
  {
    year: "1993",
    title: "Vom Lernenden zum Geschäftsführer",
    description: "Der Sohn des Grossvaters Bilali tritt bei. Besnik Bilali folgt den Schritten seines Vaters und startet seine Karriere bei der FSG. Durch hartnäckige Arbeit avancierte Besnik Bilali vom Auszubildenden zum Vorarbeiter, dann zum Polier und schließlich zum stellvertretenden Geschäftsführer. Im Jahr 2014 übernahm er die Position des Stellvertretenden Geschäftsführers.",
    image: "/1993.jpeg",
  },
  {
    year: "2023",
    title: "Tradition in dritter Generation",
    description: "Besnik Bilali führt nun als Geschäftsführender Inhaber das Unternehmen an, unterstützt von seinem Sohn Beson Bilali. So setzen wir als Familienunternehmen erfolgreich die Tradition in bereits drei Generationen fort.",
    image: "/2023.jpeg",
  },
]

const values = [
  {
    title: "Qualität",
    description:
      "Wir setzen auf höchste Qualität bei allen unseren Projekten. Von der Planung bis zur Ausführung achten wir auf jedes Detail.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Zuverlässigkeit",
    description:
      "Termingerechte Ausführung und transparente Kommunikation sind für uns selbstverständlich. Wir halten, was wir versprechen.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Kundenzufriedenheit",
    description:
      "Die Zufriedenheit unserer Kunden steht für uns an erster Stelle. Wir gehen auf Ihre Wünsche ein und finden die beste Lösung für Ihr Projekt.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
      </svg>
    ),
  },
]
