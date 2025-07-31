"use client"

import { motion } from "framer-motion"
import {
  BarChart3,
  FileCheck,
  HeadphonesIcon,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Trusted Expertise",
    description:
      "Dedicated real estate professional in Washington State with a proven track record since 2022",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Market Analysis",
    description:
      "In-depth market research and data-driven insights for smart investment decisions",
    gradient: "from-purple to-blue",
  },
  {
    icon: Users,
    title: "Network Access",
    description:
      "Exclusive access to off-market properties and industry connections",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: FileCheck,
    title: "Due Diligence",
    description:
      "Comprehensive property evaluation and risk assessment services",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: BarChart3,
    title: "Portfolio Growth",
    description:
      "Strategic guidance to maximize your real estate investment returns",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Dedicated support throughout your entire investment journey",
    gradient: "from-pink-500 to-rose-500",
  },
]

export default function FeaturesSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-mesh opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 mb-4">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-600">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-display-md md:text-display-lg font-bold mb-4">
            Your Success is Our{" "}
            <span className="gradient-text-primary">Priority</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine local expertise with cutting-edge technology to deliver
            exceptional results
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl bg-card border border-border card-hover overflow-hidden">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-xl bg-linear-to-br ${feature.gradient} mb-6`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-800">
            <Target className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-medium">
              Ready to start your real estate journey?{" "}
              <a href="/contact" className="text-emerald-600 hover:underline">
                Get in touch today
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
