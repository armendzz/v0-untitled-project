"use client"

import type React from "react"

import { forwardRef } from "react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

interface AnimatedButtonProps extends React.ComponentPropsWithoutRef<typeof Button> {
  children: React.ReactNode
  whileHover?: "scale" | "pulse" | "glow" | "none"
  whileTap?: "scale" | "none"
}

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, whileHover = "scale", whileTap = "scale", ...props }, ref) => {
    const getHoverAnimation = () => {
      switch (whileHover) {
        case "scale":
          return { scale: 1.05 }
        case "pulse":
          return { scale: [1, 1.05, 1] }
        case "glow":
          return { boxShadow: "0 0 8px rgba(255, 255, 255, 0.5)" }
        case "none":
          return {}
      }
    }

    const getTapAnimation = () => {
      switch (whileTap) {
        case "scale":
          return { scale: 0.95 }
        case "none":
          return {}
      }
    }

    return (
      <motion.div
        whileHover={getHoverAnimation()}
        whileTap={getTapAnimation()}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Button ref={ref} {...props}>
          {children}
        </Button>
      </motion.div>
    )
  },
)

AnimatedButton.displayName = "AnimatedButton"
