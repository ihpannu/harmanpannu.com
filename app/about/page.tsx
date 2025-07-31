"use client"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  Heart,
  MapPin,
  Shield,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react"
import Link from "next/link"

const milestones = [
  {
    year: "2022",
    title: "Started Real Estate Journey",
    description: "Began career in Washington State real estate market",
  },
  {
    year: "2022",
    title: "First Commercial Deal",
    description: "Successfully closed first commercial property transaction",
  },
  {
    year: "2023",
    title: "Specialized Markets",
    description:
      "Developed expertise in gas stations and unique commercial properties",
  },
  {
    year: "2023",
    title: "Rising Star Recognition",
    description:
      "Achieved rapid growth in sales volume and client satisfaction",
  },
  {
    year: "2024",
    title: "$15M+ in Sales",
    description: "Surpassed fifteen million in total transaction volume",
  },
]

const values = [
  {
    icon: Heart,
    title: "Client-First Approach",
    description:
      "Your goals and satisfaction are my top priority in every transaction",
  },
  {
    icon: Shield,
    title: "Integrity & Trust",
    description:
      "Building lasting relationships through honest and transparent dealings",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Focused on achieving the best outcomes for every client",
  },
  {
    icon: TrendingUp,
    title: "Market Expertise",
    description:
      "Deep understanding of local markets and investment opportunities",
  },
]

const achievements = [
  {
    icon: Trophy,
    value: siteConfig.stats.totalSalesVolume,
    label: "Total Sales Volume",
  },
  {
    icon: Users,
    value: siteConfig.stats.propertiesSold,
    label: "Happy Clients",
  },
  {
    icon: Star,
    value: siteConfig.stats.clientSatisfaction + "%",
    label: "Client Satisfaction",
  },
  {
    icon: Briefcase,
    value: siteConfig.professional.yearsExperience + "+",
    label: "Years Experience",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900/50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-purple/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Award className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium text-gold">
                  Rapid Growth Since 2022
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Meet {siteConfig.name}
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Your trusted {siteConfig.professional.title} specializing in
                diverse property investments across{" "}
                {siteConfig.professional.licenseState}. From residential homes
                to commercial ventures, I&apos;m here to guide your real estate
                journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="btn-modern bg-emerald-500  text-white hover:bg-emerald/90"
                  >
                    Get in Touch
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="btn-modern border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60"
                  >
                    View Properties
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-emerald-500/20 to-purple-600/20" />
                <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mx-auto mb-4">
                      <span className="text-5xl font-bold text-white">
                        {siteConfig.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {siteConfig.name}
                    </h3>
                    <p className="text-slate-300">
                      {siteConfig.professional.title}
                    </p>
                    <p className="text-sm text-slate-400 mt-2">
                      {siteConfig.professional.license} | MLS #
                      {siteConfig.professional.mlsId}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-xl border border-slate-300 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <Building2 className="w-8 h-8 text-emerald-500" />
                  <div>
                    <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      {siteConfig.stats.propertiesSold}
                    </p>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      Properties Sold
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-xl border border-slate-300 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <Star className="w-8 h-8 text-amber-500" />
                  <div>
                    <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      {siteConfig.stats.clientSatisfaction}
                    </p>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 -mt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg"
                >
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <p className="text-3xl font-bold mb-1">{achievement.value}</p>
                  <p className="text-sm text-muted-foreground">
                    {achievement.label}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">My Story</h2>
              <p className="text-lg text-muted-foreground">
                A journey of passion, dedication, and success in real estate
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-lg dark:prose-invert mx-auto"
            >
              <p>
                Since starting my real estate career in 2022, I have{" "}
                {siteConfig.professional.yearsExperience} years of experience in
                the {siteConfig.professional.licenseState} real estate market,
                I&apos;ve built my career on a foundation of trust, expertise,
                and genuine care for my clients&apos; success.
              </p>
              <p>
                My journey began in residential real estate, helping families
                find their dream homes. As I grew in the industry, I recognized
                unique opportunities in specialized markets - particularly in
                commercial properties, gas stations, hotels, and truck stops.
              </p>
              <p>
                Today, I leverage my extensive network and market knowledge to
                help investors and businesses make informed decisions. Whether
                you&apos;re a first-time homebuyer or a seasoned investor
                looking for your next commercial venture, I&apos;m here to
                provide the guidance and expertise you need.
              </p>
              <p>
                My approach is simple: I listen to your goals, provide honest
                advice, and work tirelessly to achieve the best possible
                outcomes. Your success is my success, and I&apos;m committed to
                making your real estate journey as smooth and profitable as
                possible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in my real estate career
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-bold">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-24 bg-slate-300 dark:bg-slate-600" />
                  )}
                </div>
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every interaction and transaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 lg:py-24 bg-linear-to-br from-emerald-500 to-emerald-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <MapPin className="w-16 h-16 mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Serving {siteConfig.professional.licenseState}
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Proudly serving clients across major cities and communities
              throughout the state
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {siteConfig.professional.areasServed.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full"
                >
                  <span className="font-medium">{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you&apos;re buying, selling, or investing, I&apos;m here
              to help you achieve your real estate goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="btn-modern bg-emerald-500  text-white hover:bg-emerald/90"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href={siteConfig.contact.cellPhoneLink}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60"
                >
                  Call {siteConfig.contact.cellPhoneDisplay}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
