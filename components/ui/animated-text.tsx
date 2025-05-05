"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  once?: boolean
  threshold?: number
  type?: "heading" | "paragraph"
  staggerChildren?: number
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  once = true,
  threshold = 0.2,
  type = "heading",
  staggerChildren = 0.02,
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, threshold })

  const words = text.split(" ")

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: staggerChildren, delayChildren: delay, ease: "easeOut" },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {type === "heading" ? (
        <span className="sr-only">{text}</span>
      ) : (
        <p className="sr-only" aria-live="polite">
          {text}
        </p>
      )}
      <span className="inline" aria-hidden="true">
        {words.map((word, index) => (
          <span key={index} className="inline-block">
            {word.split("").map((char, charIndex) => (
              <motion.span key={charIndex} className="inline-block" variants={child}>
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </span>
    </motion.div>
  )
}
