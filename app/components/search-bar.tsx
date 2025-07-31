"use client"

import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Search } from "lucide-react"

interface SearchBarProps {
  searchQuery: string
  onSearchChange: (query: string) => void
}

export default function SearchBar({
  searchQuery,
  onSearchChange,
}: SearchBarProps) {
  return (
    <section className="relative bg-slate-900 text-white py-16 md:py-24">
      <div className="absolute inset-0 gradient-mesh opacity-20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Find Your Perfect Property
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8">
            Explore our diverse portfolio of residential and commercial real
            estate across Washington State
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Search by location, property type, or keywords..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-6 text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-slate-400 focus:bg-white/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
