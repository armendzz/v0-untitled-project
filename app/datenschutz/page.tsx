import Link from "next/link"
import { ChevronRight, Shield } from "lucide-react"

import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedImage } from "@/components/ui/animated-image"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedText } from "@/components/ui/animated-text"

export default function Datenschutz() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header Section */}
      <section className="relative h-[200px] w-full">
        <div className="absolute inset-0">
          <AnimatedImage
            src="/placeholder.svg?height=200&width=1200"
            alt="Datenschutz Header"
            fill
            className="object-cover"
            priority
            effect="zoom"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <AnimatedText
            text="Datenschutzerklärung"
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
            delay={0.3}
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection direction="up" delay={0.2}>
              <div className="mb-10 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <Shield className="h-8 w-8" />
                </div>
              </div>

              <p className="mb-8 text-center text-lg text-gray-600">
                Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten Ihre Daten daher
                ausschließlich auf Grundlage der gesetzlichen Bestimmungen.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">1. Verantwortliche Stelle</h2>
              <p className="mb-6 text-gray-600">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                <br />
                <br />
                FSG Bau AG
                <br />
                Eibenstrasse 9
                <br />
                8045 Zürich
                <br />
                Schweiz
                <br />
                <br />
                Tel: +41 44 361 61 61
                <br />
                E-Mail: info@fsgbau.ch
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                2. Erhebung und Verarbeitung personenbezogener Daten
              </h2>
              <p className="mb-6 text-gray-600">
                Wir erheben personenbezogene Daten, wenn Sie uns diese im Rahmen Ihrer Bestellung, bei einer
                Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) oder bei Eröffnung eines Kundenkontos
                freiwillig mitteilen. Welche Daten erhoben werden, ist aus den jeweiligen Eingabeformularen ersichtlich.
                Wir verwenden die von Ihnen mitgeteilten Daten zur Vertragsabwicklung und Bearbeitung Ihrer Anfragen.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.5}>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                3. Nutzung und Weitergabe personenbezogener Daten
              </h2>
              <p className="mb-6 text-gray-600">
                Wir nutzen Ihre personenbezogenen Daten nur innerhalb unseres Unternehmens und geben diese nur an Dritte
                weiter, wenn dies zum Zwecke der Vertragsabwicklung oder zu Abrechnungszwecken erforderlich ist oder Sie
                zuvor eingewilligt haben. Sie haben das Recht, eine erteilte Einwilligung mit Wirkung für die Zukunft
                jederzeit zu widerrufen.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.6}>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">4. Cookies</h2>
              <p className="mb-6 text-gray-600">
                Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des
                Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an. Wir nutzen Cookies, um unser
                Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie
                diese löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen. Wenn Sie
                dies nicht wünschen, können Sie Ihren Browser so einrichten, dass er Sie über das Setzen von Cookies
                informiert und Sie dies nur im Einzelfall erlauben.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.7}>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">5. Webanalyse</h2>
              <p className="mb-6 text-gray-600">
                Unsere Website verwendet Funktionen des Webanalysedienstes Google Analytics. Dazu werden Cookies
                verwendet, die eine Analyse der Benutzung der Website durch Ihre Benutzer ermöglicht. Die dadurch
                erzeugten Informationen werden auf den Server des Anbieters übertragen und dort gespeichert. Sie können
                dies verhindern, indem Sie Ihren Browser so einrichten, dass keine Cookies gespeichert werden.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.8}>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">6. Ihre Rechte</h2>
              <p className="mb-6 text-gray-600">
                Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung,
                Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten
                gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise
                verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.9}>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">7. Kontakt</h2>
              <p className="mb-6 text-gray-600">
                Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt
                an die für den Datenschutz verantwortliche Person in unserer Organisation:
                <br />
                <br />
                E-Mail: datenschutz@fsgbau.ch
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={1.0}>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">8. Änderungen dieser Datenschutzerklärung</h2>
              <p className="mb-6 text-gray-600">
                Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den aktuellen
                rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung
                umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue
                Datenschutzerklärung.
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
