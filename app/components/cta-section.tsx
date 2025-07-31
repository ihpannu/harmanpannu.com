"use client"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { motion } from "framer-motion"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Animated Mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-purple/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 mb-8">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-emerald-300">
              Available for New Clients
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-display-md md:text-display-lg lg:text-display-xl font-bold mb-6">
            Ready to Make Your Next
            <span className="block text-emerald-400">Real Estate Move?</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Whether you&apos;re buying your first home or expanding your
            commercial portfolio, I&apos;m here to guide you every step of the
            way.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact">
              <Button
                size="lg"
                className="btn-modern bg-sunset-glow text-white hover:bg-sunset-glow/90 group"
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
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <motion.a
              href={siteConfig.contact.cellPhoneLink}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <Phone className="w-5 h-5 text-emerald-400" />
              <div className="text-left">
                <div className="text-sm text-slate-400">Call Now</div>
                <div className="font-medium text-sm">
                  {siteConfig.contact.cellPhoneDisplay}
                </div>
              </div>
            </motion.a>

            <motion.a
              href={`mailto:${siteConfig.contact.email}`}
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <Mail className="w-5 h-5 text-emerald-400" />
              <div className="text-left">
                <div className="text-sm text-slate-400">Email Me</div>
                <div className="font-medium text-sm">
                  {siteConfig.contact.email}
                </div>
              </div>
            </motion.a>

            <motion.a
              href={`https://maps.google.com/?q=${encodeURIComponent(
                siteConfig.contact.officeAddress
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <MapPin className="w-5 h-5 text-emerald-400" />
              <div className="text-left">
                <div className="text-sm text-slate-400">Visit Office</div>
                <div className="font-medium text-sm">Kent, WA</div>
              </div>
            </motion.a>
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-sm text-slate-400"
          >
            <p>
              Licensed Real Estate Agent in{" "}
              {siteConfig.professional.licenseState} |
              <span className="text-gold">
                {" "}
                {siteConfig.professional.license} | MLS #
                {siteConfig.professional.mlsId}
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
