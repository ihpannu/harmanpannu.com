"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { siteConfig } from "@/config/site"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Building,
  CheckCircle,
  Clock,
  Home,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Star,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    details: [
      {
        label: "Office",
        value: siteConfig.contact.officePhoneDisplay,
        link: siteConfig.contact.officePhoneLink,
      },
      {
        label: "Cell",
        value: siteConfig.contact.cellPhoneDisplay,
        link: siteConfig.contact.cellPhoneLink,
      },
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      {
        label: "General Inquiries",
        value: siteConfig.contact.email,
        link: `mailto:${siteConfig.contact.email}`,
      },
    ],
    color: "from-purple to-blue",
  },
  {
    icon: MapPin,
    title: "Office Location",
    details: [
      {
        label: "Address",
        value: siteConfig.contact.officeAddress,
        link: `https://maps.google.com/?q=${encodeURIComponent(
          siteConfig.contact.officeAddress
        )}`,
      },
    ],
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: MapPin,
    title: "Service Areas",
    details: siteConfig.professional.areasServed.map((area) => ({
      label: area,
      value: "",
    })),
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Clock,
    title: "Availability",
    details: [
      { label: "Mon-Fri", value: "9:00 AM - 7:00 PM" },
      { label: "Weekends", value: "By Appointment" },
    ],
    color: "from-orange-500 to-orange-600",
  },
]

const propertyTypes = [
  "Residential",
  "Commercial",
  "Gas Station",
  "Hotel/Motel",
  "Truck Stop",
  "Vacant Land",
  "Other",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        propertyType: "",
        message: "",
      })
      setIsSubmitted(false)
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

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
              <MessageSquare className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">
                Let's Connect
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              Ready to start your real estate journey? I'm here to help with all
              your property needs across {siteConfig.professional.licenseState}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 -mt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-linear-to-br ${method.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-3">{method.title}</h3>
                  <div className="space-y-1">
                    {method.details.map((detail, i) => (
                      <div key={i} className="text-sm">
                        {detail.label && (
                          <span className="text-muted-foreground">
                            {detail.label}:{" "}
                          </span>
                        )}
                        {"link" in detail ? (
                          <a
                            href={detail.link}
                            className="text-purple hover:text-blue font-medium"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <span className={detail.value ? "font-medium" : ""}>
                            {detail.value || detail.label}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-2">Send a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and I'll get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="propertyType"
                      className="block text-sm font-medium mb-2"
                    >
                      Property Interest
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-md border border-input bg-background"
                    >
                      <option value="">Select a type</option>
                      {propertyTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background resize-none"
                    placeholder="Tell me about your real estate needs..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full btn-modern bg-emerald-500  text-white hover:bg-emerald/90"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 w-5 h-5" />
                      Message Sent!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <Send className="mr-2 w-5 h-5 animate-pulse" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Quick Contact Card */}
              <div className="bg-emerald text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Prefer to Talk?</h3>
                <p className="mb-6 text-white/90">
                  I'm just a phone call away. Reach out anytime to discuss your
                  real estate needs.
                </p>
                <a href={siteConfig.contact.cellPhoneLink}>
                  <Button size="lg" variant="secondary" className="w-full mb-4">
                    <Phone className="mr-2 w-5 h-5" />
                    {siteConfig.contact.cellPhoneDisplay}
                  </Button>
                </a>
                <div className="flex items-center justify-center gap-4 pt-4 border-t border-white/20">
                  <a
                    href={siteConfig.social.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={siteConfig.social.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={siteConfig.social.yelp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    <Star className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Property Types */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold mb-4">I Specialize In:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {siteConfig.professional.specialties.map(
                    (specialty, index) => {
                      const Icon = specialty.includes("Residential")
                        ? Home
                        : Building
                      return (
                        <div key={index} className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-purple" />
                          <span className="text-sm">{specialty}</span>
                        </div>
                      )
                    }
                  )}
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Quick Response Time</h3>
                    <p className="text-sm text-muted-foreground">
                      I typically respond to inquiries within 2-4 hours during
                      business hours. For urgent matters, please call directly.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 lg:py-24 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">
                Serving All of {siteConfig.professional.licenseState}
              </h2>
              <p className="text-lg text-muted-foreground">
                From urban centers to rural communities, I'm here to help with
                your real estate needs
              </p>
            </motion.div>

            {/* Map Placeholder */}
            <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl h-[400px] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600 dark:text-slate-400">
                  Serving {siteConfig.professional.areasServed.join(", ")}
                </p>
              </div>
            </div>
          </div>
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
              Ready to Make Your Move?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether buying, selling, or investing, I'm here to guide you every
              step of the way
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button
                  size="lg"
                  className="btn-modern bg-emerald-500  text-white hover:bg-emerald/90"
                >
                  Browse Properties
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline">
                  View Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
