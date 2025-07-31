"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Building2,
  DollarSign,
  Fuel,
  Home,
  Hotel,
  MapPin,
  Trees,
  Truck,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const propertyCategories = [
  {
    id: 1,
    title: "Residential",
    description: "Premium homes and investment properties",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    stats: { available: 45, avgPrice: "$850K" },
    gradient: "from-blue-500/20 to-purple-500/20",
    featured: false,
  },
  {
    id: 2,
    title: "Commercial",
    description: "Office buildings and retail spaces",
    icon: Building2,
    image: "/commercial-business.jpg",
    stats: { available: 28, avgPrice: "$2.5M" },
    gradient: "from-purple/20 to-blue/20",
    featured: true,
  },
  {
    id: 3,
    title: "Gas Stations",
    description: "High-traffic fuel retail locations",
    icon: Fuel,
    image: "/gas-station.jpg",
    stats: { available: 12, avgPrice: "$3.2M" },
    gradient: "from-orange-500/20 to-red-500/20",
    featured: true,
  },
  {
    id: 4,
    title: "Hotels & Motels",
    description: "Hospitality investment opportunities",
    icon: Hotel,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
    stats: { available: 8, avgPrice: "$5.8M" },
    gradient: "from-purple-500/20 to-pink-500/20",
    featured: false,
  },
  {
    id: 5,
    title: "Truck Stops",
    description: "Strategic highway service centers",
    icon: Truck,
    image: "/truck-stop.png",
    stats: { available: 6, avgPrice: "$4.1M" },
    gradient: "from-slate-500/20 to-gray-500/20",
    featured: true,
  },
  {
    id: 6,
    title: "Vacant Land",
    description: "Development-ready parcels",
    icon: Trees,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
    stats: { available: 34, avgPrice: "$450K" },
    gradient: "from-green-500/20 to-emerald-500/20",
    featured: false,
  },
]

export default function PropertyShowcase() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-md md:text-display-lg font-bold mb-4">
            Property <span className="gradient-text-primary">Categories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse portfolio of real estate opportunities across
            Washington State
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[280px]">
          {propertyCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                relative group cursor-pointer
                ${category.featured ? "md:col-span-2 md:row-span-2" : ""}
                ${index === 0 ? "xl:col-span-2" : ""}
                ${index === 5 ? "md:col-span-2 xl:col-span-2" : ""}
              `}
            >
              <Link href="/contact">
                <div className="relative h-full rounded-2xl overflow-hidden card-hover">
                  {/* Background Image */}
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${category.gradient} mix-blend-multiply`}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                    {/* Top Section */}
                    <div className="flex items-start justify-between">
                      <div
                        className={`p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20`}
                      >
                        <category.icon className="w-6 h-6" />
                      </div>
                      {category.featured && (
                        <span className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Bottom Section */}
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-200 mb-4">
                        {category.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{category.stats.available} Available</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          <span>Avg {category.stats.avgPrice}</span>
                        </div>
                      </div>

                      {/* Hover Arrow */}
                      <div className="mt-4 flex items-center gap-2 text-sm font-medium opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        <span>View Properties</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="btn-modern border-2 border-slate-300 text-slate-700 hover:bg-slate-700 hover:text-white group"
            >
              View All Properties
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
