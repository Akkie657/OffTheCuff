"use client"
import { QuoteIcon } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  avatarSrc: string
  reactions?: string[]
  bgColor?: string
}

export function TestimonialCard({
  quote,
  name,
  title,
  avatarSrc,
  reactions = [],
  bgColor = "bg-card",
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card
        className={`group overflow-hidden border-0 ${bgColor} shadow-md transition-all duration-300 hover:shadow-xl`}
      >
        <CardContent className="p-6">
          <div className="mb-4 flex justify-between">
            <QuoteIcon className="h-8 w-8 text-primary/40" />
            <motion.div
              className="rotate-[-5deg] rounded-lg bg-white px-3 py-1 text-sm font-bold shadow-md"
              whileHover={{ rotate: 5 }}
            >
              #OffTheCuff
            </motion.div>
          </div>
          <p className="mb-6 text-lg font-medium">{quote}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-md">
                <img src={avatarSrc || "/placeholder.svg"} alt={name} className="h-full w-full object-cover" />
              </div>
              <div className="ml-3">
                <p className="font-bold">{name}</p>
                <p className="text-sm text-muted-foreground">{title}</p>
              </div>
            </div>

            {reactions.length > 0 && (
              <div className="flex space-x-1">
                {reactions.map((emoji, index) => (
                  <motion.div
                    key={index}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg shadow-md"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {emoji}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

