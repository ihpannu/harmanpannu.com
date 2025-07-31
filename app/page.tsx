import CTASection from "./components/cta-section"
import FeaturesSection from "./components/features-section"
import ModernHero from "./components/modern-hero"
import PropertyShowcase from "./components/property-showcase"
import StatsSection from "./components/stats-section"
import TestimonialsSection from "./components/testimonials-section"

export default async function Home() {
  return (
    <main className="min-h-screen">
      <ModernHero />
      <PropertyShowcase />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
