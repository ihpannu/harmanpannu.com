"use client"

import { useEffect } from "react"

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run performance monitoring
    if (typeof window === "undefined") {
      return
    }

    // Core Web Vitals monitoring
    function sendToAnalytics(metric: any) {
      // Send to Google Analytics if available
      if (
        typeof window !== "undefined" &&
        typeof (window as any).gtag !== "undefined"
      ) {
        ;(window as any).gtag("event", metric.name, {
          event_category: "Web Vitals",
          event_label: metric.id,
          value: Math.round(
            metric.name === "CLS" ? metric.value * 1000 : metric.value
          ),
          non_interaction: true,
        })
      }
    }

    // Performance monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Monitor navigation timing
        if (entry.entryType === "navigation") {
          const navEntry = entry as PerformanceNavigationTiming

          // Track page load time
          if (
            typeof window !== "undefined" &&
            typeof (window as any).gtag !== "undefined"
          ) {
            ;(window as any).gtag("event", "page_load_time", {
              event_category: "Performance",
              value: Math.round(
                navEntry.loadEventEnd - navEntry.loadEventStart
              ),
              custom_map: {
                domain_lookup: Math.round(
                  navEntry.domainLookupEnd - navEntry.domainLookupStart
                ),
                tcp_connect: Math.round(
                  navEntry.connectEnd - navEntry.connectStart
                ),
                server_response: Math.round(
                  navEntry.responseEnd - navEntry.requestStart
                ),
                dom_processing: Math.round(
                  navEntry.domContentLoadedEventEnd - navEntry.responseEnd
                ),
              },
            })
          }
        }

        // Monitor resource loading
        if (entry.entryType === "resource") {
          const resourceEntry = entry as PerformanceResourceTiming

          // Track slow resources (>2 seconds)
          if (resourceEntry.duration > 2000) {
            if (
              typeof window !== "undefined" &&
              typeof (window as any).gtag !== "undefined"
            ) {
              ;(window as any).gtag("event", "slow_resource", {
                event_category: "Performance",
                event_label: resourceEntry.name,
                value: Math.round(resourceEntry.duration),
              })
            }
          }
        }
      }
    })

    // Start observing
    try {
      observer.observe({ entryTypes: ["navigation", "resource"] })
    } catch (e) {
      // Fallback for older browsers
      console.warn("Performance monitoring not supported")
    }

    // Memory usage monitoring (Chrome only)
    if ("memory" in performance) {
      const checkMemory = () => {
        const memory = (performance as any).memory
        if (
          memory &&
          typeof window !== "undefined" &&
          typeof (window as any).gtag !== "undefined"
        ) {
          ;(window as any).gtag("event", "memory_usage", {
            event_category: "Performance",
            value: Math.round(memory.usedJSHeapSize / 1024 / 1024), // MB
            custom_map: {
              used_heap: Math.round(memory.usedJSHeapSize / 1024 / 1024),
              total_heap: Math.round(memory.totalJSHeapSize / 1024 / 1024),
              heap_limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024),
            },
          })
        }
      }

      // Check memory every 30 seconds
      const memoryInterval = setInterval(checkMemory, 30000)

      return () => {
        clearInterval(memoryInterval)
        observer.disconnect()
      }
    }

    return () => observer.disconnect()
  }, [])

  return null
}
