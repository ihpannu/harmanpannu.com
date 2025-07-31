"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Commercial Property Investor",
    rating: 5,
    text: "Harman's expertise in commercial real estate is unmatched. He helped me identify and acquire a gas station that has exceeded all ROI projections. His market knowledge and negotiation skills are exceptional.",
    featured: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Hotel Owner",
    rating: 5,
    text: "Working with Harman was a game-changer for our hospitality business. He found us the perfect motel property and guided us through every step of the acquisition process.",
  },
  {
    id: 3,
    name: "Jennifer Davis",
    role: "First-time Homebuyer",
    rating: 5,
    text: "As a first-time buyer, I was overwhelmed by the process. Harman made everything simple and stress-free. He truly cares about his clients and goes above and beyond.",
  },
  {
    id: 4,
    name: "Robert Thompson",
    role: "Land Developer",
    rating: 5,
    text: "Harman's knowledge of vacant land opportunities in Washington is incredible. He helped us secure prime development parcels that perfectly aligned with our growth strategy.",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Truck Stop Operator",
    rating: 5,
    text: "The truck stop property Harman found for us has been a fantastic investment. His understanding of commercial transportation real estate is truly impressive.",
  },
  {
    id: 6,
    name: "David Park",
    role: "Real Estate Portfolio Manager",
    rating: 5,
    text: "I've worked with many agents, but Harman stands out. His professionalism, market insights, and dedication to client success make him my go-to for all commercial deals.",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-linear-to-br from-transparent via-slate-200/5 to-transparent bg-size-[70px_70px] bg-repeat transform rotate-45"></div>
        </div>
      </div>

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
            <Quote className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-600">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-display-md md:text-display-lg font-bold mb-4">
            What Our Clients <span className="gradient-text-primary">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied
            clients
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative p-8 md:p-12 rounded-3xl bg-linear-to-br from-emerald-500 to-emerald-600 text-white overflow-hidden">
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl" />

              {/* Quote Icon */}
              <Quote className="w-12 h-12 mb-6 opacity-50" />

              {/* Testimonial Text */}
              <p className="text-xl md:text-2xl font-medium mb-8 relative z-10">
                {testimonials[0].text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {testimonials[0].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-lg">
                    {testimonials[0].name}
                  </div>
                  <div className="text-emerald-100">{testimonials[0].role}</div>
                </div>
                <div className="ml-auto flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(1).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border card-hover">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground mb-6 line-clamp-4">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center">
                    <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
