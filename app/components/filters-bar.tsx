"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import {
  Building2,
  Fuel,
  Home,
  Hotel,
  SlidersHorizontal,
  Trees,
  Truck,
  X,
} from "lucide-react"
import { useState } from "react"

const propertyTypes = [
  { value: "all", label: "All Properties", icon: Building2 },
  { value: "residential", label: "Residential", icon: Home },
  { value: "commercial", label: "Commercial", icon: Building2 },
  { value: "gas-station", label: "Gas Stations", icon: Fuel },
  { value: "hotel-motel", label: "Hotels/Motels", icon: Hotel },
  { value: "truck-stop", label: "Truck Stops", icon: Truck },
  { value: "vacant-land", label: "Vacant Land", icon: Trees },
]

const priceRanges = [
  { value: "all", label: "Any Price" },
  { value: "0-500000", label: "Under $500K" },
  { value: "500000-1000000", label: "$500K - $1M" },
  { value: "1000000-3000000", label: "$1M - $3M" },
  { value: "3000000-5000000", label: "$3M - $5M" },
  { value: "5000000+", label: "$5M+" },
]

const statusOptions = [
  { value: "all", label: "All Status" },
  { value: "available", label: "Available" },
  { value: "pending", label: "Pending" },
  { value: "sold", label: "Sold" },
]

interface FiltersBarProps {
  selectedType: string
  selectedPrice: string
  selectedStatus: string
  onTypeChange: (type: string) => void
  onPriceChange: (price: string) => void
  onStatusChange: (status: string) => void
  resultsCount: number
}

export default function FiltersBar({
  selectedType,
  selectedPrice,
  selectedStatus,
  onTypeChange,
  onPriceChange,
  onStatusChange,
  resultsCount,
}: FiltersBarProps) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
  const [desktopDialogOpen, setDesktopDialogOpen] = useState(false)

  const clearAllFilters = () => {
    onTypeChange("all")
    onPriceChange("all")
    onStatusChange("all")
  }

  const hasActiveFilters =
    selectedType !== "all" ||
    selectedPrice !== "all" ||
    selectedStatus !== "all"

  const applyFiltersAndClose = () => {
    setMobileDrawerOpen(false)
    setDesktopDialogOpen(false)
  }

  return (
    <section className="sticky top-[73px] z-40 bg-white dark:bg-slate-800 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Property Type Tabs */}
          <ScrollArea className="hidden lg:block w-full max-w-4xl">
            <div className="flex items-center gap-2 pb-2">
              {propertyTypes.map((type) => {
                const Icon = type.icon
                return (
                  <button
                    key={type.value}
                    onClick={() => onTypeChange(type.value)}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap",
                      selectedType === type.value
                        ? "bg-emerald text-white shadow-md"
                        : "hover:bg-slate-100 dark:hover:bg-slate-700 border border-border"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {type.label}
                  </button>
                )
              })}
            </div>
          </ScrollArea>

          {/* Mobile Filter Drawer */}
          <Drawer open={mobileDrawerOpen} onOpenChange={setMobileDrawerOpen}>
            <DrawerTrigger asChild>
              <Button variant="outline" className="md:hidden">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
                {hasActiveFilters && (
                  <span className="ml-2 px-2 py-0.5 bg-emerald-500  text-white dark:bg-emerald dark:text-white rounded-full text-xs">
                    Active
                  </span>
                )}
              </Button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[85vh]">
              <DrawerHeader>
                <DrawerTitle>Filter Properties</DrawerTitle>
                <DrawerDescription>
                  Refine your search to find the perfect property
                </DrawerDescription>
              </DrawerHeader>
              <ScrollArea className="flex-1 px-4">
                <div className="space-y-6 pb-6">
                  {/* Property Type */}
                  <div>
                    <label className="text-sm font-semibold mb-3 block">
                      Property Type
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {propertyTypes.map((type) => {
                        const Icon = type.icon
                        return (
                          <button
                            key={type.value}
                            onClick={() => onTypeChange(type.value)}
                            className={cn(
                              "flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all border",
                              selectedType === type.value
                                ? "bg-emerald text-white border-transparent shadow-md"
                                : "border-border hover:bg-slate-50 dark:hover:bg-slate-700"
                            )}
                          >
                            <Icon className="w-5 h-5" />
                            <span className="text-xs">{type.label}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <label className="text-sm font-semibold mb-3 block">
                      Price Range
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {priceRanges.map((range) => (
                        <button
                          key={range.value}
                          onClick={() => onPriceChange(range.value)}
                          className={cn(
                            "text-left px-4 py-3 rounded-xl text-sm font-medium transition-all border",
                            selectedPrice === range.value
                              ? "bg-emerald text-white border-transparent"
                              : "border-border hover:bg-slate-50 dark:hover:bg-slate-700"
                          )}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Status */}
                  <div>
                    <label className="text-sm font-semibold mb-3 block">
                      Status
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {statusOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => onStatusChange(option.value)}
                          className={cn(
                            "text-left px-4 py-3 rounded-xl text-sm font-medium transition-all border",
                            selectedStatus === option.value
                              ? "bg-emerald text-white border-transparent"
                              : "border-border hover:bg-slate-50 dark:hover:bg-slate-700"
                          )}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollArea>
              <DrawerFooter>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={clearAllFilters}
                    className="flex-1"
                  >
                    Clear All
                  </Button>
                  <Button
                    onClick={applyFiltersAndClose}
                    className="flex-1 bg-emerald-500  hover:bg-emerald/90"
                  >
                    Apply Filters
                  </Button>
                </div>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          {/* Desktop Filter Dialog */}
          <Dialog open={desktopDialogOpen} onOpenChange={setDesktopDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="hidden md:flex lg:hidden">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
                {hasActiveFilters && (
                  <span className="ml-2 px-2 py-0.5 bg-emerald-500  text-white rounded-full text-xs">
                    Active
                  </span>
                )}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh]">
              <DialogHeader>
                <DialogTitle>Filter Properties</DialogTitle>
                <DialogDescription>
                  Refine your search to find the perfect property
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="max-h-[60vh] pr-4">
                <div className="space-y-6">
                  {/* Property Type */}
                  <div>
                    <label className="text-sm font-semibold mb-3 block">
                      Property Type
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {propertyTypes.map((type) => {
                        const Icon = type.icon
                        return (
                          <button
                            key={type.value}
                            onClick={() => onTypeChange(type.value)}
                            className={cn(
                              "flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all border",
                              selectedType === type.value
                                ? "bg-emerald text-white border-transparent shadow-md"
                                : "border-border hover:bg-slate-50 dark:hover:bg-slate-700"
                            )}
                          >
                            <Icon className="w-5 h-5" />
                            <span className="text-sm">{type.label}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Price Range & Status */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-semibold mb-3 block">
                        Price Range
                      </label>
                      <div className="space-y-2">
                        {priceRanges.map((range) => (
                          <button
                            key={range.value}
                            onClick={() => onPriceChange(range.value)}
                            className={cn(
                              "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all border",
                              selectedPrice === range.value
                                ? "bg-emerald text-white border-transparent"
                                : "border-border hover:bg-slate-50 dark:hover:bg-slate-700"
                            )}
                          >
                            {range.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-semibold mb-3 block">
                        Status
                      </label>
                      <div className="space-y-2">
                        {statusOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => onStatusChange(option.value)}
                            className={cn(
                              "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all border",
                              selectedStatus === option.value
                                ? "bg-emerald text-white border-transparent"
                                : "border-border hover:bg-slate-50 dark:hover:bg-slate-700"
                            )}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>
              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  onClick={clearAllFilters}
                  className="flex-1"
                >
                  Clear All
                </Button>
                <Button
                  onClick={applyFiltersAndClose}
                  className="flex-1 bg-emerald-500  hover:bg-emerald/90"
                >
                  Apply Filters
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Desktop Results & Quick Filters */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-3">
              <select
                value={selectedPrice}
                onChange={(e) => onPriceChange(e.target.value)}
                className="px-4 py-2 rounded-lg border border-border bg-background hover:bg-accent transition-colors"
              >
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
              <select
                value={selectedStatus}
                onChange={(e) => onStatusChange(e.target.value)}
                className="px-4 py-2 rounded-lg border border-border bg-background hover:bg-accent transition-colors"
              >
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearAllFilters}
                  className="text-slate-500 hover:text-slate-700"
                >
                  <X className="w-4 h-4 mr-1" />
                  Clear
                </Button>
              )}
            </div>
            <div className="text-sm text-muted-foreground border-l border-border pl-4">
              <span className="font-medium">{resultsCount}</span> properties
              found
            </div>
          </div>
        </div>

        {/* Mobile Results Counter */}
        <div className="md:hidden px-4 pb-3">
          <div className="text-sm text-muted-foreground text-center">
            <span className="font-medium">{resultsCount}</span> properties found
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="ml-2 text-slate-500 hover:text-slate-700 h-6 px-2"
              >
                <X className="w-3 h-3 mr-1" />
                Clear filters
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
