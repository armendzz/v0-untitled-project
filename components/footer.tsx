"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex items-center gap-2">
              <Image src="/logo.png" alt="FSG Bau AG Logo" width={200} height={100} />
             
            </div>
            <p className="mb-4 text-gray-400">
              Ihr zuverlässiger Partner für Bau- und Renovationsarbeiten in Zürich seit 1985.
            </p>
            <div className="flex space-x-4">
              <motion.div whileHover={{ scale: 1.2, color: "#ffffff" }} transition={{ type: "spring", stiffness: 400 }}>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, color: "#ffffff" }} transition={{ type: "spring", stiffness: 400 }}>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, color: "#ffffff" }} transition={{ type: "spring", stiffness: 400 }}>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-lg font-bold">Schnelllinks</h3>
            <ul className="space-y-2">
              {["Home", "Dienstleistungen", "Über Uns", "Kontakt"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-").replace("ü", "ue")}`}
                    className="text-gray-400 hover:text-white"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-lg font-bold">Dienstleistungen</h3>
            <ul className="space-y-2">
              {["Umbau & Renovationen", "Abbrucharbeiten", "Betonbohrungen", "Malerarbeiten", "Gipserarbeiten"].map(
                (service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                    viewport={{ once: true }}
                  >
                    <Link href="/dienstleistungen" className="text-gray-400 hover:text-white">
                      {service}
                    </Link>
                  </motion.li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-lg font-bold">Kontakt</h3>
            <ul className="space-y-4">
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <MapPin className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-orange-500" />
                <span>
                  FSG Bau AG
                  <br />
                  Eibenstrasse 9
                  <br />
                  8045 Zürich
                </span>
              </motion.li>
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-orange-500" />
                <a href="tel:+41443616161" className="hover:text-orange-500">
                  +41 44 361 61 61
                </a>
              </motion.li>
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-orange-500" />
                <a href="mailto:info@fsgbau.ch" className="hover:text-orange-500">
                  info@fsgbau.ch
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} FSG Bau AG. Alle Rechte vorbehalten. Powered by <Link href="https://www.ndize.al" className="hover:text-white">Ndize.Al</Link></p>
            <div className="flex gap-4 text-sm text-gray-400">
              <Link href="/datenschutz" className="hover:text-white">
                Datenschutz
              </Link>
              <Link href="/impressum" className="hover:text-white">
                Impressum
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
