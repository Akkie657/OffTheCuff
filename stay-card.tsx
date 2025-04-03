"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Star, Wifi, Coffee, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface StayCardProps {
  title: string
  location: string
  price: number
  rating: number
  reviews: number
  imageSrc: string
  trending?: boolean
  wifiSpeed?: string
}

export function StayCard({
  title,
  location,
  price,
  rating,
  reviews,
  imageSrc,
  trending = false,
  wifiSpeed = "25 Mbps",
}: StayCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className="relative h-[400px] w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      whileHover={{ z: 20 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div
        className={`relative h-full w-full transition-all duration-500 transform-style-3d ${isFlipped ? "rotate-y-180" : ""}`}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden">
          <Card className="group h-full overflow-hidden border-4 border-white bg-white p-3 shadow-xl transition-all duration-300 hover:shadow-2xl">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {trending && (
                <motion.div
                  className="absolute right-3 top-3 rotate-12 rounded-full bg-funky-red px-3 py-1 text-sm font-bold text-white shadow-md"
                  animate={{ rotate: [12, -5, 12] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
                >
                  <div className="flex items-center">
                    <Sparkles className="mr-1 h-4 w-4" />
                    Trending!
                  </div>
                </motion.div>
              )}
            </div>

            <div className="p-4">
              <div className="mb-2 flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-1 h-4 w-4 text-funky-red" />
                {location}
              </div>
              <h3 className="mb-2 text-xl font-bold">{title}</h3>
              <div className="mb-3 flex items-center">
                <Star className="mr-1 h-4 w-4 fill-funky-yellow text-funky-yellow" />
                <span className="mr-1 font-medium">{rating}</span>
                <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold">₹{price}</span>
                  <span className="text-sm text-muted-foreground"> / night</span>
                </div>
                <div className="rounded-full bg-funky-blue/10 px-3 py-1 text-sm">
                  <div className="flex items-center">
                    <Wifi className="mr-1 h-3 w-3 text-funky-blue" />
                    {wifiSpeed}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden">
          <Card className="flex h-full flex-col border-4 border-white bg-white p-6 shadow-xl">
            <h3 className="mb-4 text-xl font-bold">{title}</h3>

            <div className="mb-4 space-y-3">
              <div className="flex items-center">
                <Wifi className="mr-2 h-5 w-5 text-funky-blue" />
                <span>WiFi: {wifiSpeed}</span>
              </div>
              <div className="flex items-center">
                <Coffee className="mr-2 h-5 w-5 text-funky-green" />
                <span>Dedicated workspace</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-funky-red" />
                <span>5 min walk to cafés</span>
              </div>
            </div>

            <div className="mb-4 rounded-lg bg-funky-yellow/10 p-3">
              <p className="text-sm">
                "Perfect for digital nomads! The view from the balcony is incredible, and the WiFi never dropped once
                during my 2-week stay."
              </p>
              <p className="mt-2 text-sm font-bold">— Recent guest</p>
            </div>

            <div className="mt-auto">
              <Button className="w-full rounded-full bg-funky-blue text-white hover:bg-funky-blue/90" asChild>
                <Link href="#">View Details</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  )
}

