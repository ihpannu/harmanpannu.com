"use client"

import { siteConfig } from "@/config/site"
import { motion } from "framer-motion"
import {
  Eye,
  FileText,
  Globe,
  Lock,
  Mail,
  Phone,
  Shield,
  Users,
} from "lucide-react"

const sections = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: [
      "Contact information (name, email, phone number) when you submit forms or contact us",
      "Property preferences and requirements you share with us",
      "Usage data such as pages visited and time spent on our website",
      "Device and browser information for website optimization",
    ],
  },
  {
    icon: Shield,
    title: "How We Use Your Information",
    content: [
      "To respond to your inquiries and provide real estate services",
      "To send property listings and market updates (with your consent)",
      "To improve our website and services based on user feedback",
      "To comply with legal obligations and protect our rights",
    ],
  },
  {
    icon: Users,
    title: "Information Sharing",
    content: [
      "We do not sell, trade, or rent your personal information to third parties",
      "We may share information with trusted service providers who assist in our operations",
      "We may disclose information when required by law or to protect rights and safety",
      "Property inquiries may be shared with relevant listing agents or sellers",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    content: [
      "We implement industry-standard security measures to protect your data",
      "SSL encryption is used for all data transmissions",
      "Access to personal information is restricted to authorized personnel only",
      "Regular security audits are conducted to ensure data protection",
    ],
  },
]

export default function PrivacyPage() {
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
              <Shield className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">
                Your Privacy Matters
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              Understanding how we collect, use, and protect your information
            </p>
          </motion.div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-white dark:bg-slate-800 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileText className="w-4 h-4" />
              <span>Last Updated: January 1, 2024</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="w-4 h-4" />
              <span>Applies to: {siteConfig.url}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg dark:prose-invert"
            >
              <p>
                At {siteConfig.name} Real Estate, we take your privacy
                seriously. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website or use our real estate services. Please read this
                privacy policy carefully. If you do not agree with the terms of
                this privacy policy, please do not access the site.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-emerald-500  flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                  </div>
                  <ul className="space-y-3 ml-16">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple mt-2 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4">
                Cookies and Tracking Technologies
              </h2>
              <div className="prose prose-lg dark:prose-invert">
                <p>
                  We use cookies and similar tracking technologies to track
                  activity on our website and hold certain information. Cookies
                  are files with small amount of data which may include an
                  anonymous unique identifier. You can instruct your browser to
                  refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </div>
            </motion.div>

            {/* Your Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <div className="prose prose-lg dark:prose-invert">
                <p>You have the right to:</p>
                <ul>
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of any inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
              </div>
            </motion.div>

            {/* Children's Privacy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
              <div className="prose prose-lg dark:prose-invert">
                <p>
                  Our services are not intended for children under 18 years of
                  age. We do not knowingly collect personal information from
                  children under 18. If you are a parent or guardian and believe
                  your child has provided us with personal information, please
                  contact us.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-emerald text-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Questions About Privacy?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                If you have any questions about this Privacy Policy or our data
                practices, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">
                    {siteConfig.contact.email}
                  </span>
                </a>
                <a
                  href={siteConfig.contact.cellPhoneLink}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">
                    {siteConfig.contact.cellPhoneDisplay}
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
