"use client"

import type React from "react"
import { motion } from "framer-motion"
import { cn } from "../utils/cn"

interface FunkyHeadingProps {
  children: React.ReactNode
  className?: string
}

export function FunkyHeading({ children, className }: FunkyHeadingProps) {
  return (
    <motion.h2 className={cn("relative inline-block", className)} whileHover={{ scale: 1.02 }}>
      {children}
      <motion.span
        className="absolute bottom-0 left-0 h-3 w-full bg-funky-yellow opacity-30"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5 }}
      ></motion.span>
    </motion.h2>
  )
}

