"use client"

import { siteConfig } from "@/config/site"
import { animate, motion } from "framer-motion"
import { Award, DollarSign, TrendingUp, Users2 } from "lucide-react"
import { useEffect, useState } from "react"

const stats = [
  {
    icon: DollarSign,
    value: 15,
    suffix: "M+",
    label: "Total Sales Volume",
    description: "in successful transactions",
  },
  {
    icon: TrendingUp,
    value: parseInt(siteConfig.stats.clientSatisfaction),
    suffix: "%",
    label: "Client Satisfaction",
    description: "based on reviews",
  },
  {
    icon: Award,
    value: siteConfig.professional.yearsExperience,
    suffix: "+",
    label: "Years Experience",
    description: `in ${siteConfig.professional.licenseState} real estate`,
  },
  {
    icon: Users2,
    value: parseInt(siteConfig.stats.propertiesSold),
    suffix: "+",
    label: "Happy Clients",
    description: "and counting",
  },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest))
      },
    })

    return () => controls.stop()
  }, [value])

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const [isInView, setIsInView] = useState(false)

  return (
    <section className="section-padding bg-slate-950 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-500/10 to-slate-500/10" />
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onViewportEnter={() => setIsInView(true)}
          className="text-center mb-16"
        >
          <h2 className="text-display-md md:text-display-lg font-bold mb-4">
            Numbers That <span className="text-emerald-400">Speak</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Our track record demonstrates our commitment to excellence and
            client success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
                {/* Icon */}
                <div className="inline-flex p-3 rounded-xl bg-emerald-500/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-emerald-400" />
                </div>

                {/* Number */}
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {isInView && (
                    <Counter value={stat.value} suffix={stat.suffix} />
                  )}
                </div>

                {/* Label */}
                <div className="text-lg font-medium mb-1">{stat.label}</div>

                {/* Description */}
                <div className="text-sm text-slate-400">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
