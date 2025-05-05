"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

interface AnimatedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  delay?: number
  once?: boolean
  threshold?: number
  priority?: boolean
  effect?: "fade" | "zoom" | "slide" | "reveal"
}

export function AnimatedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  delay = 0,
  once = true,
  threshold = 0.2,
  priority = false,
  effect = "fade",
}: AnimatedImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, threshold })

  const getEffectVariants = () => {
    switch (effect) {
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
      case "zoom":
        return {
          hidden: { opacity: 0, scale: 1.1 },
          visible: { opacity: 1, scale: 1 },
        }
      case "slide":
        return {
          hidden: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0 },
        }
      case "reveal":
        return {
          hidden: { clipPath: "inset(0 100% 0 0)" },
          visible: { clipPath: "inset(0 0% 0 0)" },
        }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={`relative ${fill ? "h-full w-full" : ""} overflow-hidden ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getEffectVariants()}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={className}
        priority={priority}
      />
    </motion.div>
  )
}
