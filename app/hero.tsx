"use client"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Building2,
  MapPin,
  Phone,
  Star,
  TrendingUp,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Gradient Mesh Background */}
      <div
        className="absolute inset-0 bg-linear-to-br from-purple/5 via-transparent to-orange/5"
        aria-hidden="true"
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-sunset-glow/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple/10 rounded-full blur-3xl"
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen py-20">
          {/* Content Section */}
          <div className="max-w-2xl mx-auto lg:mx-0">
            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 mb-8"
            >
              <MapPin
                className="w-4 h-4 text-emerald-600 dark:text-emerald-400"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                Licensed in {siteConfig.professional.licenseState}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-linear-to-r from-slate-900 via-purple to-slate-800 dark:from-white dark:via-slate-100 dark:to-slate-300 bg-clip-text text-transparent"
            >
              Premium Real Estate
              <span className="block bg-sunset-glow bg-clip-text text-transparent">
                Investment Opportunities
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed"
            >
              Specializing in{" "}
              <strong className="text-slate-800 dark:text-slate-100">
                gas stations
              </strong>
              ,
              <strong className="text-slate-800 dark:text-slate-100">
                {" "}
                hotels
              </strong>
              ,
              <strong className="text-slate-800 dark:text-slate-100">
                {" "}
                truck stops
              </strong>
              , and
              <strong className="text-slate-800 dark:text-slate-100">
                {" "}
                commercial properties
              </strong>{" "}
              across Washington State. Expert guidance for profitable real
              estate investments.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link href="/contact" className="group">
                <Button
                  size="lg"
                  className="btn-modern bg-sunset-glow text-white hover:bg-sunset-glow/90 w-full sm:w-auto group shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-describedby="view-properties-desc"
                >
                  <Building2 className="w-5 h-5 mr-2" aria-hidden="true" />
                  View Properties
                  <ArrowRight
                    className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-modern border-2 border-slate-300 text-slate-700 hover:bg-slate-700 hover:text-white w-full sm:w-auto transition-all duration-300"
                  aria-describedby="schedule-consultation-desc"
                >
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  Schedule Consultation
                </Button>
              </Link>
            </motion.div>

            {/* Hidden descriptions for accessibility */}
            <div className="sr-only">
              <p id="view-properties-desc">
                Contact us to explore premium commercial real estate investment
                opportunities
              </p>
              <p id="schedule-consultation-desc">
                Book a free consultation to discuss your real estate investment
                goals
              </p>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              role="list"
              aria-label="Professional achievements and credentials"
            >
              <div className="flex items-center gap-3" role="listitem">
                <div className="shrink-0 w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                  <TrendingUp
                    className="w-5 h-5 text-emerald-600 dark:text-emerald-400"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {siteConfig.stats.totalSalesVolume}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Sales Volume
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3" role="listitem">
                <div className="shrink-0 w-10 h-10 bg-purple/20 rounded-full flex items-center justify-center">
                  <Building2
                    className="w-5 h-5 text-purple"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {siteConfig.stats.propertiesSold}+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Properties Sold
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3" role="listitem">
                <div className="shrink-0 w-10 h-10 bg-orange/20 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-orange" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {siteConfig.stats.clientSatisfaction}%
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="relative h-[500px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/gas-station.jpg"
                alt="Modern gas station - Premium commercial real estate investment opportunity showcasing fuel pumps, convenience store, and professional landscaping"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 bg-linear-to-t from-purple/30 via-transparent to-orange/20"
                aria-hidden="true"
              />

              {/* Professional Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-sunset-glow rounded-full flex items-center justify-center shrink-0">
                      <span
                        className="text-white font-bold text-lg"
                        aria-hidden="true"
                      >
                        {siteConfig.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100">
                        {siteConfig.name}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {siteConfig.professional.title} | MLS #
                        {siteConfig.professional.mlsId}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        aria-label="Scroll down for more content"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center cursor-pointer hover:border-purple transition-colors"
          role="button"
          tabIndex={0}
          aria-label="Scroll down"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault()
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          }}
        >
          <motion.div className="w-1 h-3 bg-slate-400 dark:bg-slate-500 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  )
}
