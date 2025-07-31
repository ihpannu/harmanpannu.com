"use client"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Building2,
  Calculator,
  CheckCircle,
  FileSearch,
  Fuel,
  Home,
  Hotel,
  Phone,
  Shield,
  Star,
  Target,
  Trees,
  Truck,
  Users,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Residential Real Estate",
    icon: Home,
    description:
      "Find your dream home or sell your current property with expert guidance and market insights.",
    features: [
      "Home buying consultation",
      "Property valuation and pricing",
      "Marketing and staging advice",
      "Negotiation and closing support",
    ],
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "Commercial Properties",
    icon: Building2,
    description:
      "Strategic commercial real estate solutions for investors and business owners.",
    features: [
      "Investment property analysis",
      "Lease negotiation",
      "Market research and trends",
      "Portfolio optimization",
    ],
    color: "from-purple to-blue",
  },
  {
    title: "Gas Station Investments",
    icon: Fuel,
    description:
      "Specialized expertise in gas station acquisitions and sales with industry insights.",
    features: [
      "Profitability analysis",
      "Environmental assessments",
      "Franchise opportunities",
      "Location evaluation",
    ],
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Hotel & Motel Properties",
    icon: Hotel,
    description:
      "Navigate the hospitality real estate market with confidence and expertise.",
    features: [
      "Revenue analysis",
      "Brand affiliation guidance",
      "Market positioning",
      "Renovation ROI assessment",
    ],
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Truck Stop Development",
    icon: Truck,
    description:
      "Strategic locations and development opportunities for truck stop investments.",
    features: [
      "Traffic pattern analysis",
      "Highway access evaluation",
      "Amenity planning",
      "Partnership opportunities",
    ],
    color: "from-yellow-500 to-orange-600",
  },
  {
    title: "Vacant Land Opportunities",
    icon: Trees,
    description:
      "Unlock the potential of vacant land for development or investment purposes.",
    features: [
      "Zoning and permits",
      "Development potential",
      "Utility assessments",
      "Environmental studies",
    ],
    color: "from-orange to-red",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We begin with a comprehensive discussion of your real estate goals and requirements.",
  },
  {
    step: "02",
    title: "Market Analysis",
    description:
      "Our team conducts thorough market research to identify the best opportunities.",
  },
  {
    step: "03",
    title: "Property Search/Evaluation",
    description:
      "We leverage our network and expertise to find or evaluate properties that match your criteria.",
  },
  {
    step: "04",
    title: "Negotiation & Closing",
    description:
      "Expert negotiation to secure the best terms, followed by smooth transaction management.",
  },
]

const additionalServices = [
  {
    icon: FileSearch,
    title: "Due Diligence",
    description: "Comprehensive property investigations and risk assessments",
  },
  {
    icon: Calculator,
    title: "Financial Analysis",
    description: "Detailed ROI calculations and investment projections",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Identify and mitigate potential investment risks",
  },
  {
    icon: Users,
    title: "Network Access",
    description: "Exclusive access to off-market properties and opportunities",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900/50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-purple/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">
                Full-Service Real Estate Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Expert Real Estate Services
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8">
              From residential homes to commercial investments, we provide
              comprehensive real estate services tailored to your unique needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="btn-modern bg-emerald-500 text-white hover:bg-emerald-500/90"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href={siteConfig.contact.cellPhoneLink}>
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-modern border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 bg-transparent"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  {siteConfig.contact.cellPhoneDisplay}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Specialized Property Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Since beginning my career in 2022, I bring{" "}
              {siteConfig.professional.yearsExperience} years of experience, we
              offer specialized expertise across diverse real estate sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-card rounded-2xl p-8 border border-border card-hover overflow-hidden"
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <div
                    className={`relative w-16 h-16 rounded-xl bg-linear-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-purple transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-purple mt-0.5 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Proven Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to ensure your real estate journey is
              smooth and successful
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-linear-to-r from-purple to-transparent" />
                )}

                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500  text-white text-2xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Additional Support Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond buying and selling, we provide comprehensive support
              throughout your real estate journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border text-center card-hover"
                >
                  <div className="w-12 h-12 rounded-lg bg-purple/10 dark:bg-purple/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-purple dark:text-purple" />
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-emerald-500  text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <Target className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Achieve Your Real Estate Goals?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let&apos;s discuss how our services can help you succeed in the
              real estate market
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="btn-modern bg-white text-slate-900"
                >
                  Schedule Consultation
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
        </div>
      </section>
    </div>
  )
}
