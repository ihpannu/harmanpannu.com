import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import {
  ArrowRight,
  Award,
  Calculator,
  CheckCircle,
  Clock,
  Home,
  Mail,
  MapPin,
  Phone,
  Star,
  TrendingUp,
  Users,
} from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Residential Real Estate Services in Washington State | Harman Pannu",
  description:
    "Expert residential real estate services in Seattle, Tacoma, Bellevue & Washington State. Buy, sell, or invest in homes with trusted realtor Harman Pannu. MLS #132987.",
  keywords:
    "residential real estate Washington, Seattle homes for sale, Tacoma real estate agent, Bellevue realtor, Washington State housing market, home buying services, property investment",
  openGraph: {
    title: "Residential Real Estate Expert - Washington State",
    description:
      "Your trusted partner for residential real estate in Washington State. Expert guidance for buying, selling, and investing in homes.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: `${siteConfig.url}/residential`,
  },
}

const residentialServices = [
  {
    title: "Home Buying",
    description:
      "First-time buyer or upgrading? Navigate Washington's competitive market with expert guidance.",
    icon: Home,
    features: ["Market Analysis", "Negotiation Strategy", "Closing Support"],
  },
  {
    title: "Home Selling",
    description:
      "Maximize your home's value with strategic marketing and pricing expertise.",
    icon: TrendingUp,
    features: [
      "Property Valuation",
      "Marketing Strategy",
      "Fast Sales Process",
    ],
  },
  {
    title: "Investment Properties",
    description:
      "Build wealth through strategic residential real estate investments.",
    icon: Calculator,
    features: ["ROI Analysis", "Market Insights", "Portfolio Growth"],
  },
]

const marketAreas = [
  {
    name: "Seattle",
    description: "Urban living and tech corridor properties",
    avgPrice: "$850K",
  },
  {
    name: "Bellevue",
    description: "Premium eastside communities",
    avgPrice: "$1.2M",
  },
  {
    name: "Tacoma",
    description: "Emerging market with strong growth",
    avgPrice: "$575K",
  },
  {
    name: "Everett",
    description: "Affordable family neighborhoods",
    avgPrice: "$650K",
  },
  {
    name: "Renton",
    description: "Strategic location and value",
    avgPrice: "$725K",
  },
  {
    name: "Kent",
    description: "Diverse communities and opportunities",
    avgPrice: "$625K",
  },
]

const testimonials = [
  {
    name: "Sarah Chen",
    location: "Seattle, WA",
    text: "Harman helped us navigate Seattle&apos;s competitive market and find our dream home. His expertise made all the difference.",
    rating: 5,
  },
  {
    name: "Mike Rodriguez",
    location: "Bellevue, WA",
    text: "Professional, knowledgeable, and always available. Sold our home 15% above asking price!",
    rating: 5,
  },
]

export default function ResidentialPage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: siteConfig.name,
            jobTitle: "Residential Real Estate Specialist",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kent",
              addressRegion: "WA",
              postalCode: "98030",
              streetAddress: siteConfig.contact.officeAddress,
            },
            telephone: siteConfig.contact.cellPhone,
            email: siteConfig.contact.email,
            url: `${siteConfig.url}/residential`,
            areaServed: [
              "Seattle",
              "Bellevue",
              "Tacoma",
              "Kent",
              "Renton",
              "Everett",
              "Washington State",
            ],
            priceRange: "$300,000 - $3,000,000",
            serviceType: [
              "Home Buying",
              "Home Selling",
              "Real Estate Investment",
              "Market Analysis",
            ],
            memberOf: {
              "@type": "Organization",
              name: "MLS",
            },
            hasCredential: siteConfig.professional.mlsId,
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-24 pb-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-linear-to-br from-transparent via-slate-200/5 to-transparent bg-size-[70px_70px] bg-repeat transform rotate-45"></div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald/10 border border-sunset-glow/20 text-sunset-glow mb-6">
                <Home className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">
                  Residential Real Estate Expert
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Your Trusted
                <span className="block bg-emerald-500  bg-clip-text text-transparent">
                  Washington State
                </span>
                <span className="block">Residential Realtor</span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Navigate Washington&apos;s dynamic residential market with
                confidence. From first-time buyers to luxury estates, I provide
                expert guidance for your real estate journey.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    250+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Homes Sold
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    98%
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Client Satisfaction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    15+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Years Experience
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-emerald text-white hover:bg-emerald/90 w-full sm:w-auto"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Get Free Consultation
                  </Button>
                </Link>
                <Link href="#services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-slate-300 text-slate-700 hover:bg-slate-700 hover:text-white w-full sm:w-auto"
                  >
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/mobile.jpg"
                  alt="Beautiful residential home in Washington State"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 to-transparent"></div>
              </div>

              {/* Professional Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-500  rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">
                      Licensed Realtor
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      MLS #{siteConfig.professional.mlsId}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Comprehensive Residential Services
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Whether you're buying your first home, selling for maximum value,
              or building an investment portfolio, I provide expert guidance at
              every step.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {residentialServices.map((service, index) => (
              <div
                key={index}
                className="group bg-slate-50 dark:bg-slate-700 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-emerald/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald/20 transition-colors">
                  <service.icon className="w-8 h-8 text-sunset-glow" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle className="w-5 h-5 text-sunset-glow mr-3 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Areas Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Washington State Market Expertise
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Deep local knowledge across Washington&apos;s most sought-after
              residential markets. I know the neighborhoods, schools, and
              investment opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                      {area.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {area.description}
                    </p>
                  </div>
                  <MapPin className="w-5 h-5 text-sunset-glow shrink-0" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-500">
                      Avg. Home Price
                    </div>
                    <div className="text-lg font-bold text-sunset-glow">
                      {area.avgPrice}
                    </div>
                  </div>
                  <Link href="/contact">
                    <Button size="sm" variant="outline" className="text-xs">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              What Clients Say
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Real experiences from satisfied homeowners across Washington State
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-700 rounded-xl p-8"
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-slate-700 dark:text-slate-300 mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-500  rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-sunset-glow via-purple to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Make Your Move?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let&apos;s discuss your residential real estate goals. Free
            consultation, expert guidance, proven results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {siteConfig.contact.cellPhoneDisplay}
              </Button>
            </Link>
            <Link href={`mailto:${siteConfig.contact.email}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm opacity-75">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Available 7 Days a Week
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2" />
              MLS #{siteConfig.professional.mlsId}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
