import Link from "next/link"
import { BookOpen, ChevronRight } from "lucide-react"

import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedImage } from "@/components/ui/animated-image"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedText } from "@/components/ui/animated-text"

export default function Impressum() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header Section */}
      <section className="relative h-[200px] w-full">
        <div className="absolute inset-0">
          <AnimatedImage
            src="/placeholder.svg?height=200&width=1200"
            alt="Impressum Header"
            fill
            className="object-cover"
            priority
            effect="zoom"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <AnimatedText text="Impressum" className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl" delay={0.3} />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection direction="up" delay={0.2}>
              <div className="mb-10 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <BookOpen className="h-8 w-8" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Angaben gemäß § 5 TMG</h2>
              <p className="mb-6 text-gray-600">
                FSG Bau AG
                <br />
                Eibenstrasse 9
                <br />
                8045 Zürich
                <br />
                Schweiz
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Handelsregistereintrag</h2>
              <p className="mb-6 text-gray-600">
                Eingetragen im Handelsregister des Kantons Zürich
                <br />
                Handelsregisternummer: CH-123.456.789
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.5}>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Umsatzsteuer-Identifikationsnummer</h2>
              <p className="mb-6 text-gray-600">
                Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
                <br />
                CHE-123.456.789 MWST
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.6}>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Vertretungsberechtigte Person</h2>
              <p className="mb-6 text-gray-600">Besnik Bilali, Geschäftsführer</p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.7}>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Kontakt</h2>
              <p className="mb-6 text-gray-600">
                Telefon: +41 44 361 61 61
                <br />
                E-Mail: info@fsgbau.ch
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.8}>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Haftung für Inhalte</h2>
              <p className="mb-6 text-gray-600">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                <br />
                <br />
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
                bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
                einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.9}>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Haftung für Links</h2>
              <p className="mb-6 text-gray-600">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
                verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                <br />
                <br />
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                umgehend entfernen.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={1.0}>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Urheberrecht</h2>
              <p className="mb-6 text-gray-600">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
                Gebrauch gestattet.
                <br />
                <br />
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
                auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={1.1}>
              <p className="mb-8 text-gray-600">Stand: Mai 2025</p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={1.2} className="text-center">
              <AnimatedButton className="bg-orange-600 hover:bg-orange-700" whileHover="scale">
                <Link href="/kontakt" className="flex items-center">
                  Kontaktieren Sie uns bei Fragen
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </AnimatedButton>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  )
}
