"use client"

import { siteConfig } from "@/config/site"
import { motion } from "framer-motion"
import {
  AlertCircle,
  CheckCircle,
  FileText,
  Globe,
  Info,
  Mail,
  Scale,
  Shield,
} from "lucide-react"

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
  },
  {
    title: "2. Use License",
    content: `Permission is granted to temporarily download one copy of the materials on ${siteConfig.name} Real Estate website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:`,
    list: [
      "Modify or copy the materials",
      "Use the materials for any commercial purpose or for any public display",
      "Attempt to reverse engineer any software contained on our website",
      "Remove any copyright or other proprietary notations from the materials",
    ],
  },
  {
    title: "3. Real Estate Services",
    content: `The real estate services provided through this website are subject to applicable state and federal laws. All property information is provided for informational purposes only and does not constitute a legal agreement between ${siteConfig.name} and any person or entity unless otherwise specified.`,
    list: [
      "Property listings are subject to change without notice",
      "We do not guarantee the accuracy of MLS data or third-party information",
      "Real estate transactions require separate written agreements",
      "Commission rates and terms are negotiable and not set by law",
    ],
  },
  {
    title: "4. Privacy and Data Protection",
    content: `Your use of our website is also governed by our Privacy Policy. By using our website, you consent to our Privacy Policy and agree to its terms. We are committed to protecting your personal information and using it only for legitimate business purposes.`,
  },
  {
    title: "5. Disclaimer",
    content: `The materials on ${siteConfig.name} Real Estate website are provided on an 'as is' basis. ${siteConfig.name} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.`,
  },
  {
    title: "6. Limitations",
    content: `In no event shall ${siteConfig.name} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ${siteConfig.name} Real Estate website, even if ${siteConfig.name} or an authorized representative has been notified orally or in writing of the possibility of such damage.`,
  },
  {
    title: "7. Fair Housing",
    content: `${siteConfig.name} Real Estate is committed to fair housing laws and equal opportunity. We do not discriminate on the basis of race, color, religion, sex, handicap, familial status, national origin, sexual orientation, or gender identity.`,
  },
  {
    title: "8. Professional Advice",
    content: `The information provided on this website does not, and is not intended to, constitute legal, tax, or financial advice. All information, content, and materials are for general informational purposes only. Readers should contact their attorney, CPA, or financial advisor to obtain advice with respect to any particular matter.`,
  },
  {
    title: "9. Modifications",
    content: `${siteConfig.name} may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service. We will indicate the date of the latest revision at the top of this page.`,
  },
  {
    title: "10. Governing Law",
    content: `These terms and conditions are governed by and construed in accordance with the laws of ${siteConfig.professional.licenseState} and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.`,
  },
]

const importantNotes = [
  {
    icon: AlertCircle,
    title: "Not Legal Advice",
    description:
      "Information provided is for general purposes only and should not be considered legal advice",
  },
  {
    icon: Scale,
    title: "Licensed Professional",
    description: `${siteConfig.name} is a licensed real estate agent in ${siteConfig.professional.licenseState} - ${siteConfig.professional.license}`,
  },
  {
    icon: Shield,
    title: "Data Protection",
    description:
      "We take your privacy seriously and protect your personal information",
  },
  {
    icon: CheckCircle,
    title: "Fair Housing Commitment",
    description:
      "We are committed to equal opportunity and fair housing for all",
  },
]

export default function TermsPage() {
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
              <FileText className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">
                Legal Information
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              Please read these terms carefully before using our services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-white dark:bg-slate-800 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Info className="w-4 h-4" />
              <span>Effective Date: January 1, 2024</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="w-4 h-4" />
              <span>Jurisdiction: {siteConfig.professional.licenseState}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {importantNotes.map((note, index) => {
              const Icon = note.icon
              return (
                <motion.div
                  key={note.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg"
                >
                  <div className="w-12 h-12 rounded-lg bg-purple/10 dark:bg-purple/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-purple dark:text-purple" />
                  </div>
                  <h3 className="font-semibold mb-2">{note.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {note.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <p className="lead">
                Welcome to {siteConfig.name} Real Estate. These terms of service
                (&quot;Terms&quot;) govern your use of our website and services.
                By accessing or using our services, you agree to be bound by
                these Terms and our Privacy Policy.
              </p>
            </motion.div>

            <div className="space-y-8 mt-12">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm"
                >
                  <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p>{section.content}</p>
                    {section.list && (
                      <ul className="mt-4 space-y-2">
                        {section.list.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-linear-to-br from-emerald-500 to-emerald-600 text-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
              <p className="text-xl mb-8 text-white/90">
                If you have any questions about these Terms of Service, please
                contact us.
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
              </div>
              <p className="mt-6 text-sm text-white/80">
                {siteConfig.name} • {siteConfig.professional.license} • MLS #
                {siteConfig.professional.mlsId} •{" "}
                {siteConfig.professional.licenseState}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
