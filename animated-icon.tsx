"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedIconProps {
  icon: React.ReactNode
  className?: string
}

export function AnimatedIcon({ icon, className }: AnimatedIconProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={cn(
        "flex h-16 w-16 items-center justify-center rounded-full bg-white p-4 shadow-md transition-all duration-300",
        isHovered ? "shadow-lg" : "",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={isHovered ? { y: [0, -5, 0] } : {}}
        transition={{ repeat: isHovered ? Number.POSITIVE_INFINITY : 0, duration: 1 }}
      >
        {icon}
      </motion.div>
    </motion.div>
  )
}

