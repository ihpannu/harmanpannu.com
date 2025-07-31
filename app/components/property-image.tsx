"use client"

import { cn } from "@/lib/utils"
import { Building2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface PropertyImageProps {
  src: string
  alt: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
  priority?: boolean
}

export default function PropertyImage({
  src,
  alt,
  className,
  fill = false,
  width,
  height,
  priority = false,
}: PropertyImageProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  if (hasError) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-linear-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900",
          className
        )}
      >
        <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-600">
          <Building2 className="w-12 h-12 mb-2" />
          <span className="text-sm font-medium">Property Image</span>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 animate-pulse">
          <Building2 className="w-8 h-8 text-slate-300 dark:text-slate-700" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        priority={priority}
        className={cn(
          "object-cover transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true)
          setIsLoading(false)
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}
