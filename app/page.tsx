"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronDown,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Wifi,
  Users,
  Leaf,
  Coffee,
  Mountain,
  Music,
  Tent,
  Sparkles,
} from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DatePickerWithRange } from "../date-picker"
import { TestimonialCard } from "../testimonial-card"
import { StayCard } from "../stay-card"
import { FunkyHeading } from "../funky-heading"
import { AnimatedIcon } from "../animated-icon"

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-background font-funky">
      {/* Hero Section */}
      <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Himalayan mountains with people working outdoors"
            fill
            className="object-cover brightness-90"
            priority
          />
          {/* Animated doodles overlay */}
          <div className="absolute inset-0 bg-doodle-pattern opacity-20"></div>
        </div>
        <motion.div
          className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-6 rotate-[-2deg] rounded-lg bg-primary px-6 py-3 shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <span className="text-xl font-bold text-primary-foreground">WORK REMOTELY, LIVE WILDLY</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <FunkyHeading className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Ditch the Cubicle, <br />
              Work from the Himalayas!
            </FunkyHeading>
          </motion.div>
          <motion.p
            className="mx-auto max-w-2xl text-xl text-muted-foreground text-center pb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Because your best work happens when you're inspired by the view ✨
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden rounded-full bg-funky-yellow px-8 text-lg font-bold text-black transition-all hover:scale-105 hover:shadow-xl"
            >
              <span className="relative z-10">Find Your Funky Escape</span>
              <span className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-r from-funky-yellow via-funky-orange to-funky-yellow bg-[length:200%] transition-all duration-500 group-hover:bg-position-100"></span>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ChevronDown className="h-10 w-10 text-white drop-shadow-lg" />
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute left-10 top-1/4 z-10 rotate-[-15deg] text-4xl text-white opacity-70"
          animate={{ rotate: [-15, 5, -15] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute right-10 top-1/3 z-10 rotate-[15deg] text-4xl text-white opacity-70"
          animate={{ rotate: [15, -5, 15] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut" }}
        >
          🏔️
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/5 z-10 rotate-[5deg] text-4xl text-white opacity-70"
          animate={{ rotate: [5, -10, 5] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 7, ease: "easeInOut" }}
        >
          💻
        </motion.div>
      </section>

      {/* The Story - Comic Strip Style */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FunkyHeading className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              City Chaos vs. Himalayan Freedom
            </FunkyHeading>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Why work in a box when you can work with a view?
            </p>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto max-w-5xl overflow-visible rounded-2xl border-4 border-dashed border-funky-blue bg-white p-2 shadow-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="relative overflow-visible rounded-xl bg-gray-100 p-6">
              <div className="absolute -right-4 top-4 rotate-12 z-20 rounded-full bg-funky-red px-4 py-2 text-sm font-bold text-white shadow-md">
                CITY LIFE
              </div>
              <div className="relative h-[250px] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=500&width=500&text=City+Chaos"
                  alt="Stressful city life"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="rounded-full bg-gray-200 p-2">
                    <span className="text-xl">😫</span>
                  </div>
                  <div className="rounded-lg bg-gray-200 p-3">
                    <p className="font-medium">Traffic jams every morning...</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="rounded-full bg-gray-200 p-2">
                    <span className="text-xl">🏢</span>
                  </div>
                  <div className="rounded-lg bg-gray-200 p-3">
                    <p className="font-medium">Boring cubicle views</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="rounded-full bg-gray-200 p-2">
                    <span className="text-xl">💸</span>
                  </div>
                  <div className="rounded-lg bg-gray-200 p-3">
                    <p className="font-medium">Expensive rent, tiny apartment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-visible rounded-xl bg-funky-blue/10 p-6">
              <div className="absolute -right-4 top-4 rotate-12 z-20 rounded-full bg-funky-green px-4 py-2 text-sm font-bold text-white shadow-md">
                MOUNTAIN LIFE
              </div>
              <div className="relative h-[250px] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=500&width=500&text=Himalayan+Freedom"
                  alt="Working from mountains"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="rounded-full bg-funky-green/20 p-2">
                    <span className="text-xl">🏔️</span>
                  </div>
                  <div className="rounded-lg bg-funky-green/20 p-3">
                    <p className="font-medium">Morning walks in the mountains</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="rounded-full bg-funky-green/20 p-2">
                    <span className="text-xl">💻</span>
                  </div>
                  <div className="rounded-lg bg-funky-green/20 p-3">
                    <p className="font-medium">Work with breathtaking views</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="rounded-full bg-funky-green/20 p-2">
                    <span className="text-xl">🔥</span>
                  </div>
                  <div className="rounded-lg bg-funky-green/20 p-3">
                    <p className="font-medium">Evening bonfires with new friends</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Off The Cuff - Funky Grid */}
      <section className="relative overflow-hidden bg-funky-pattern py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FunkyHeading className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Why Off The Cuff?
            </FunkyHeading>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              We've reimagined remote work to be wild, fun, and productive!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card className="group overflow-hidden border-2 border-funky-yellow bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full">
                <CardContent className="flex flex-col flex-grow items-center p-6 text-center">
                  <AnimatedIcon icon={<Mountain className="h-8 w-8 text-funky-blue" />} />
                  <h3 className="mb-2 mt-4 text-xl font-bold">Workspaces with a View</h3>
                  <p className="text-muted-foreground">
                    Not boring offices, but cafés, balconies, and tents with breathtaking mountain views.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card className="group overflow-hidden border-2 border-funky-green bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full">
                <CardContent className="flex flex-col flex-grow items-center p-6 text-center">
                  <AnimatedIcon icon={<Music className="h-8 w-8 text-funky-green" />} />
                  <h3 className="mb-2 mt-4 text-xl font-bold">Community of Explorers</h3>
                  <p className="text-muted-foreground">
                    Work, chill, jam sessions & bonfires with like-minded digital nomads.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card className="group overflow-hidden border-2 border-funky-orange bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full">
                <CardContent className="flex flex-col flex-grow items-center p-6 text-center">
                  <AnimatedIcon icon={<Tent className="h-8 w-8 text-funky-orange" />} />
                  <h3 className="mb-2 mt-4 text-xl font-bold">Adventure on Demand</h3>
                  <p className="text-muted-foreground">
                    Work all morning, hike all evening. Trek, explore, and unwind between tasks.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card className="group overflow-hidden border-2 border-funky-red bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full">
                <CardContent className="flex flex-col flex-grow items-center p-6 text-center">
                  <AnimatedIcon icon={<Leaf className="h-8 w-8 text-funky-red" />} />
                  <h3 className="mb-2 mt-4 text-xl font-bold">Eco-Friendly & Local</h3>
                  <p className="text-muted-foreground">
                    Stay sustainably, support local communities, and leave only footprints.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Quirky speech bubbles */}
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            <motion.div
              className="relative rounded-2xl bg-funky-yellow/20 p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-5 left-10 h-10 w-10 rotate-45 bg-funky-yellow/20"></div>
              <p className="text-lg font-medium italic">
                "I've never been more productive than when working with a view of the snow-capped Himalayas!"
              </p>
              <p className="mt-4 font-bold">— Priya, UX Designer</p>
            </motion.div>

            <motion.div
              className="relative rounded-2xl bg-funky-blue/20 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-5 left-10 h-10 w-10 rotate-45 bg-funky-blue/20"></div>
              <p className="text-lg font-medium italic">
                "The WiFi is faster than in my office back home, and the coffee is WAY better!"
              </p>
              <p className="mt-4 font-bold">— Alex, Software Developer</p>
            </motion.div>

            <motion.div
              className="relative rounded-2xl bg-funky-green/20 p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-5 left-10 h-10 w-10 rotate-45 bg-funky-green/20"></div>
              <p className="text-lg font-medium italic">
                "I came for a week, stayed for a month. Best decision of my career!"
              </p>
              <p className="mt-4 font-bold">— Sarah, Content Creator</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Stays - Polaroid Style */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <FunkyHeading className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Funky Featured Stays
            </FunkyHeading>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Discover our handpicked selection of workation-friendly hideaways!
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8 grid w-full max-w-md mx-auto grid-cols-4 items-center rounded-full border-2 border-funky-blue bg-gray-50 p-0.5">
              <TabsTrigger
                value="all"
                className="rounded-full data-[state=active]:bg-funky-blue data-[state=active]:text-white"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="manali"
                className="rounded-full data-[state=active]:bg-funky-blue data-[state=active]:text-white"
              >
                Manali
              </TabsTrigger>
              <TabsTrigger
                value="dharamshala"
                className="rounded-full data-[state=active]:bg-funky-blue data-[state=active]:text-white"
              >
                Dharamshala
              </TabsTrigger>
              <TabsTrigger
                value="kasol"
                className="rounded-full data-[state=active]:bg-funky-blue data-[state=active]:text-white"
              >
                Kasol
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <StayCard
                  title="Mountain View Cottage"
                  location="Manali, Himachal Pradesh"
                  price={2500}
                  rating={4.9}
                  reviews={28}
                  imageSrc="/placeholder.svg?height=400&width=600"
                  trending={true}
                  wifiSpeed="50 Mbps"
                />
                <StayCard
                  title="Riverside Retreat"
                  location="Kasol, Himachal Pradesh"
                  price={1800}
                  rating={4.7}
                  reviews={42}
                  imageSrc="/placeholder.svg?height=400&width=600"
                  wifiSpeed="35 Mbps"
                />
                <StayCard
                  title="Forest Hideaway"
                  location="Dharamshala, Himachal Pradesh"
                  price={2200}
                  rating={4.8}
                  reviews={35}
                  imageSrc="/placeholder.svg?height=400&width=600"
                  trending={true}
                  wifiSpeed="45 Mbps"
                />
              </div>
            </TabsContent>

            <TabsContent value="manali" className="mt-0">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <StayCard
                  title="Mountain View Cottage"
                  location="Manali, Himachal Pradesh"
                  price={2500}
                  rating={4.9}
                  reviews={28}
                  imageSrc="/placeholder.svg?height=400&width=600"
                  trending={true}
                  wifiSpeed="50 Mbps"
                />
                <StayCard
                  title="Alpine Lodge"
                  location="Old Manali, Himachal Pradesh"
                  price={3200}
                  rating={4.8}
                  reviews={19}
                  imageSrc="/placeholder.svg?height=400&width=600"
                  wifiSpeed="40 Mbps"
                />
              </div>
            </TabsContent>

            <TabsContent value="dharamshala" className="mt-0">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <StayCard
                  title="Forest Hideaway"
                  location="Dharamshala, Himachal Pradesh"
                  price={2200}
                  rating={4.8}
                  reviews={35}
                  imageSrc="/placeholder.svg?height=400&width=600"
                  trending={true}
                  wifiSpeed="45 Mbps"
                />
              </div>
            </TabsContent>

            <TabsContent value="kasol" className="mt-0">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <StayCard
                  title="Riverside Retreat"
                  location="Kasol, Himachal Pradesh"
                  price={1800}
                  rating={4.7}
                  reviews={42}
                  imageSrc="/placeholder.svg?height=400&width=600"
                  wifiSpeed="35 Mbps"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-funky-blue px-8 font-bold hover:bg-funky-blue hover:text-white"
            >
              View All Funky Stays
            </Button>
          </div>
        </div>
      </section>

      {/* Community Stories - Instagram Vibes */}
      <section className="bg-funky-pattern py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <FunkyHeading className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Community Stories
            </FunkyHeading>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Real people, real adventures, real work getting done! ✨
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="I built my startup from a cottage in Manali. The community of fellow remote workers provided invaluable connections and feedback."
              name="Rahul Mehta"
              title="Tech Entrepreneur"
              avatarSrc="/placeholder.svg?height=100&width=100"
              reactions={["🔥", "💯", "👏"]}
              bgColor="bg-funky-yellow/10"
            />
            <TestimonialCard
              quote="The perfect balance of work and adventure. I extended my 2-week stay to 3 months because I couldn't bear to leave."
              name="Sarah Johnson"
              title="Content Creator"
              avatarSrc="/placeholder.svg?height=100&width=100"
              reactions={["❤️", "😍", "🙌"]}
              bgColor="bg-funky-green/10"
            />
            <TestimonialCard
              quote="Working with a view of the snow-capped mountains completely transformed my productivity. Best decision I've made this year!"
              name="Priya Sharma"
              title="UX Designer"
              avatarSrc="/placeholder.svg?height=100&width=100"
              reactions={["🚀", "✨", "🏔️"]}
              bgColor="bg-funky-blue/10"
            />
          </div>

          <div className="mt-16">
            <h3 className="mb-8 text-center text-2xl font-bold">
              <span className="inline-block rotate-[-2deg] rounded-lg bg-funky-red px-4 py-2 text-white">
                #OffTheCuffLife
              </span>
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="group relative aspect-square overflow-hidden rounded-lg border-4 border-white bg-white p-1 shadow-lg transition-all duration-300 hover:rotate-3 hover:scale-105 hover:shadow-xl"
                >
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Instagram+${item}`}
                    alt={`Instagram post ${item}`}
                    width={300}
                    height={300}
                    className="h-full w-full rounded-sm object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-2 right-2 rounded-full bg-white p-1 shadow-md">
                    <Instagram className="h-4 w-4 text-funky-red" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking & Availability - Playful */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <FunkyHeading className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Find Your Perfect Workation
            </FunkyHeading>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">Where do you wanna escape to? 🏔️</p>
          </div>

          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border-4 border-dashed border-funky-blue bg-white p-8 shadow-2xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-lg font-medium">Location</label>
                <select className="w-full rounded-full border-2 border-funky-yellow bg-background px-4 py-3 text-lg">
                  <option value="">Where to?</option>
                  <option value="manali">Manali</option>
                  <option value="dharamshala">Dharamshala</option>
                  <option value="kasol">Kasol</option>
                  <option value="mcleodganj">McLeodganj</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-lg font-medium">Dates</label>
                <DatePickerWithRange className="rounded-full" />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center rounded-full bg-funky-yellow/10 px-4 py-2">
                <Wifi className="mr-2 h-5 w-5 text-funky-yellow" />
                <span>High-Speed WiFi</span>
              </div>
              <div className="flex items-center rounded-full bg-funky-green/10 px-4 py-2">
                <Coffee className="mr-2 h-5 w-5 text-funky-green" />
                <span>Café Access</span>
              </div>
              <div className="flex items-center rounded-full bg-funky-blue/10 px-4 py-2">
                <Mountain className="mr-2 h-5 w-5 text-funky-blue" />
                <span>Nature View</span>
              </div>
              <div className="flex items-center rounded-full bg-funky-red/10 px-4 py-2">
                <Users className="mr-2 h-5 w-5 text-funky-red" />
                <span>Community Space</span>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-funky-blue to-funky-green px-8 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-xl"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Find Your Workation Spot
              </Button>
            </div>

            <div className="mt-8 rounded-xl bg-funky-yellow/10 p-4">
              <p className="flex items-center text-center font-medium">
                <Sparkles className="mr-2 h-5 w-5 text-funky-yellow" />
                We found the perfect spot for you! Check out "Mountain View Cottage" in Manali
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-funky-pattern py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-xl">
            <div className="text-center">
              <FunkyHeading className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                Get the Coolest Workation Spots
              </FunkyHeading>
              <p className="mb-6 text-muted-foreground">
                Subscribe to our newsletter for exclusive offers, workation tips, and new destination alerts.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full border-2 border-funky-blue px-4 py-6 text-lg"
                />
                <Button className="rounded-full bg-funky-blue px-8 text-lg font-bold text-white hover:bg-funky-blue/90">
                  Subscribe
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Join 5,000+ remote workers who've found their perfect workation spot!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Funky but Functional */}
      <footer className="border-t bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <div className="inline-block rotate-[-2deg] rounded-lg bg-funky-yellow px-6 py-3 text-xl font-bold text-black">
              Work hard, travel harder!
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold">Off The Cuff</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Redefining remote work in the heart of the Himalayas.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="rounded-full bg-funky-blue p-2 text-white hover:bg-funky-blue/80">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="rounded-full bg-funky-green p-2 text-white hover:bg-funky-green/80">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="rounded-full bg-funky-yellow p-2 text-black hover:bg-funky-yellow/80">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="rounded-full bg-funky-red p-2 text-white hover:bg-funky-red/80">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="flex items-center text-muted-foreground hover:text-funky-blue">
                    <span className="mr-2 text-lg">✨</span> About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center text-muted-foreground hover:text-funky-green">
                    <span className="mr-2 text-lg">🏔️</span> Destinations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center text-muted-foreground hover:text-funky-yellow">
                    <span className="mr-2 text-lg">📝</span> Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center text-muted-foreground hover:text-funky-red">
                    <span className="mr-2 text-lg">❓</span> FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Support</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="flex items-center text-muted-foreground hover:text-funky-blue">
                    <span className="mr-2 text-lg">📞</span> Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center text-muted-foreground hover:text-funky-green">
                    <span className="mr-2 text-lg">🔒</span> Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center text-muted-foreground hover:text-funky-yellow">
                    <span className="mr-2 text-lg">📜</span> Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center text-muted-foreground hover:text-funky-red">
                    <span className="mr-2 text-lg">↩️</span> Cancellation Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Contact</h3>
              <address className="not-italic">
                <p className="mb-2 flex items-center text-sm text-muted-foreground">
                  <Mail className="mr-2 inline-block h-4 w-4 text-funky-blue" />
                  hello@offthecuff.com
                </p>
                <p className="mb-2 flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-2 inline-block h-4 w-4 text-funky-red" />
                  Manali, Himachal Pradesh, India
                </p>
              </address>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Off The Cuff. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

