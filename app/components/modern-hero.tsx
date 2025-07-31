"use client"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { motion } from "framer-motion"
import { ArrowRight, Building2, Home, MapPin } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const propertyTypes = siteConfig.professional.specialties

export default function ModernHero() {
  const [currentType, setCurrentType] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentType((prev) => (prev + 1) % propertyTypes.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-slate-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass dark:glass-dark mb-8 text-sm font-medium"
          >
            <MapPin className="w-4 h-4 text-emerald-600" />
            <span>Serving Washington State</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-display-lg md:text-display-xl lg:text-display-2xl font-bold leading-tight mb-6"
          >
            Your Trusted Partner in{" "}
            <span className="gradient-text-primary">Real Estate</span>
          </motion.h1>

          {/* Animated Property Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-16 mb-8 flex items-center justify-center"
          >
            <span className="text-xl md:text-2xl text-muted-foreground">
              Specializing in{" "}
              <span className="font-semibold text-foreground">
                {propertyTypes[currentType]}
              </span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"
          >
            Since starting my real estate career in 2022, I help clients
            navigate the complexities of real estate investment, from
            residential homes to commercial properties across{" "}
            {siteConfig.professional.licenseState}.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="btn-modern bg-emerald-500 text-white hover:bg-emerald-500/90 group"
              >
                Browse Properties
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="btn-modern border-2 border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white"
              >
                Schedule Consultation
              </Button>
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Home,
                label: "Properties Sold",
                value: siteConfig.stats.propertiesSold,
              },
              {
                icon: Building2,
                label: "Commercial Deals",
                value: siteConfig.stats.commercialDeals,
              },
              {
                icon: MapPin,
                label: "Cities Covered",
                value: siteConfig.stats.citiesCovered,
              },
              {
                icon: ArrowRight,
                label: "Sales Volume",
                value: siteConfig.stats.totalSalesVolume,
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-purple" />
                <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
        >
          <motion.div className="w-1 h-3 bg-muted-foreground rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  )
}
