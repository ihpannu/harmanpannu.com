import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import {
  ArrowRight,
  Award,
  BarChart3,
  Building2,
  CheckCircle,
  Clock,
  DollarSign,
  Mail,
  MapPin,
  Phone,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Commercial Real Estate Services in Washington State | Harman Pannu",
  description:
    "Expert commercial real estate services in Seattle, Tacoma, Bellevue & Washington State. Buy, sell, lease office buildings, retail spaces, industrial properties. MLS #132987.",
  keywords:
    "commercial real estate Washington, Seattle office buildings, Tacoma commercial properties, Bellevue retail space, Washington State industrial real estate, commercial leasing, investment properties",
  openGraph: {
    title: "Commercial Real Estate Expert - Washington State",
    description:
      "Your trusted partner for commercial real estate in Washington State. Expert guidance for office, retail, industrial, and investment properties.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: `${siteConfig.url}/commercial`,
  },
}

const commercialServices = [
  {
    title: "Office Buildings",
    description:
      "Class A office spaces in Seattle's tech corridor and downtown business districts.",
    icon: Building2,
    features: [
      "Prime Locations",
      "Tech-Ready Infrastructure",
      "Flexible Lease Terms",
    ],
    priceRange: "$25-75/sq ft",
  },
  {
    title: "Retail Spaces",
    description:
      "High-traffic retail locations with excellent visibility and customer access.",
    icon: Target,
    features: [
      "High Foot Traffic",
      "Parking Availability",
      "Signage Opportunities",
    ],
    priceRange: "$18-45/sq ft",
  },
  {
    title: "Industrial Properties",
    description:
      "Warehouses, distribution centers, and manufacturing facilities throughout Washington.",
    icon: Zap,
    features: ["Loading Docks", "High Ceilings", "Transportation Access"],
    priceRange: "$8-20/sq ft",
  },
]

const investmentTypes = [
  {
    title: "Net Lease Properties",
    description: "Stable income with long-term tenants",
    roi: "6-8% Cap Rate",
    icon: DollarSign,
  },
  {
    title: "Value-Add Opportunities",
    description: "Properties with improvement potential",
    roi: "12-18% IRR",
    icon: TrendingUp,
  },
  {
    title: "Development Sites",
    description: "Land ready for commercial development",
    roi: "15-25% Returns",
    icon: BarChart3,
  },
]

const marketAreas = [
  {
    name: "Seattle CBD",
    description: "Prime downtown office and retail spaces",
    vacancy: "8.5%",
    avgPrice: "$45/sq ft",
  },
  {
    name: "Bellevue",
    description: "Tech corridor and premium office market",
    vacancy: "6.2%",
    avgPrice: "$52/sq ft",
  },
  {
    name: "Tacoma",
    description: "Emerging commercial market with growth potential",
    vacancy: "12.1%",
    avgPrice: "$28/sq ft",
  },
  {
    name: "Kent Valley",
    description: "Industrial and warehouse hub",
    vacancy: "4.8%",
    avgPrice: "$15/sq ft",
  },
]

const clientSuccessStories = [
  {
    client: "Tech Startup",
    deal: "15,000 sq ft Office Lease",
    location: "Seattle",
    result: "Secured 20% below market rate with tenant improvements",
    savings: "$450K",
  },
  {
    client: "Retail Chain",
    deal: "Flagship Store Purchase",
    location: "Bellevue",
    result: "Prime corner location with excellent visibility",
    value: "$2.8M",
  },
]

export default function CommercialPage() {
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
            jobTitle: "Commercial Real Estate Specialist",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kent",
              addressRegion: "WA",
              postalCode: "98030",
              streetAddress: siteConfig.contact.officeAddress,
            },
            telephone: siteConfig.contact.cellPhone,
            email: siteConfig.contact.email,
            url: `${siteConfig.url}/commercial`,
            areaServed: [
              "Seattle",
              "Bellevue",
              "Tacoma",
              "Kent",
              "Renton",
              "Everett",
              "Washington State",
            ],
            priceRange: "$500,000 - $50,000,000",
            serviceType: [
              "Commercial Sales",
              "Commercial Leasing",
              "Investment Analysis",
              "Property Management",
            ],
            memberOf: {
              "@type": "Organization",
              name: "MLS",
            },
            hasCredential: siteConfig.professional.mlsId,
            specialty: [
              "Office Buildings",
              "Retail Spaces",
              "Industrial Properties",
              "Investment Properties",
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-700 text-white pt-24 pb-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/commercial-business.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-linear-to-br from-slate-900/90 via-slate-800/95 to-slate-700/90"></div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald/20 border border-sunset-glow/30 text-sunset-glow mb-6">
                <Building2 className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">
                  Commercial Real Estate Expert
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Washington State
                <span className="block bg-emerald-500  bg-clip-text text-transparent">
                  Commercial Real Estate
                </span>
                <span className="block">Solutions</span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Navigate Washington&apos;s dynamic commercial market with expert
                guidance. From office buildings to industrial properties, I
                deliver strategic solutions for your business needs.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">$50M+</div>
                  <div className="text-sm text-slate-400">
                    Transactions Closed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">150+</div>
                  <div className="text-sm text-slate-400">Commercial Deals</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-sm text-slate-400">Client Retention</div>
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
                    Schedule Analysis
                  </Button>
                </Link>
                <Link href="#services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 w-full sm:w-auto"
                  >
                    <ArrowRight className="w-5 h-5 mr-2" />
                    View Services
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/commercial-business.jpg"
                  alt="Modern commercial building in Washington State"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent"></div>
              </div>

              {/* Market Stats Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-500  rounded-full flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">
                      Market Leader
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Top 1% Broker
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
              Commercial Property Solutions
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Comprehensive commercial real estate services tailored to your
              business objectives and investment goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {commercialServices.map((service, index) => (
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
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {service.description}
                </p>

                <div className="text-sm font-semibold text-sunset-glow mb-6">
                  {service.priceRange}
                </div>

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

      {/* Investment Opportunities */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Investment Opportunities
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Build wealth through strategic commercial real estate investments
              with proven returns and steady cash flow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {investmentTypes.map((investment, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center mb-6">
                  <investment.icon className="w-6 h-6 text-sunset-glow" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                  {investment.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {investment.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-sunset-glow">
                    {investment.roi}
                  </div>
                  <Link href="/contact">
                    <Button size="sm" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Areas */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Washington Commercial Markets
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Deep market knowledge across Washington&apos;s key commercial
              districts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketAreas.map((area, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {area.name}
                  </h3>
                  <MapPin className="w-5 h-5 text-sunset-glow shrink-0" />
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {area.description}
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-xs text-slate-500">Vacancy Rate</span>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {area.vacancy}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-slate-500">Avg. Price</span>
                    <span className="text-xs font-semibold text-sunset-glow">
                      {area.avgPrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Recent Success Stories
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Real results for real businesses across Washington State
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {clientSuccessStories.map((story, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-500  rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">
                      {story.client}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {story.location}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
                  {story.deal}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {story.result}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-500">Value Created</div>
                  <div className="text-lg font-bold text-sunset-glow">
                    {story.savings || story.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Expand Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let&apos;s discuss your commercial real estate needs. Expert market
            analysis, strategic negotiations, proven results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-emerald text-white hover:bg-emerald/90 font-semibold"
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
                Request Analysis
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm opacity-75">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              24/7 Market Monitoring
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
