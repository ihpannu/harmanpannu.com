import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import {
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  DollarSign,
  Fuel,
  Hotel,
  Mail,
  MapPin,
  Phone,
  Target,
  TrendingUp,
  Truck,
  Users,
} from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title:
    "Specialty Commercial Properties - Gas Stations, Hotels, Truck Stops | Harman Pannu",
  description:
    "Expert in specialty commercial properties: gas stations, hotels/motels, truck stops, and unique investment opportunities in Washington State. MLS #132987.",
  keywords:
    "gas stations for sale Washington, hotel motel properties, truck stop real estate, specialty commercial properties, Washington State convenience stores, travel center investments",
  openGraph: {
    title: "Specialty Commercial Properties Expert - Washington State",
    description:
      "Your specialist for gas stations, hotels, truck stops, and unique commercial properties in Washington State.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: `${siteConfig.url}/specialty`,
  },
}

const specialtyTypes = [
  {
    title: "Gas Stations & Convenience Stores",
    description:
      "High-traffic fuel and retail locations with proven cash flow and growth potential.",
    icon: Fuel,
    features: [
      "Multi-Pump Operations",
      "C-Store Revenue",
      "Prime Highway Locations",
    ],
    avgRevenue: "$2-8M annually",
    image: "/gas-station.jpg",
  },
  {
    title: "Hotels & Motels",
    description:
      "Hospitality properties from boutique inns to interstate travel centers.",
    icon: Hotel,
    features: ["Tourism Markets", "Corporate Travel", "Event Venues"],
    avgRevenue: "$1-5M annually",
    image: "/mobile.jpg",
  },
  {
    title: "Truck Stops & Travel Centers",
    description:
      "Strategic highway locations serving commercial transportation needs.",
    icon: Truck,
    features: ["Fleet Services", "Driver Amenities", "Fuel Distribution"],
    avgRevenue: "$5-15M annually",
    image: "/truck-stop.png",
  },
]

const investmentAdvantages = [
  {
    title: "Recession Resistant",
    description: "Essential services maintain demand during economic downturns",
    icon: Target,
  },
  {
    title: "Multiple Revenue Streams",
    description: "Fuel, retail, food service, and additional income sources",
    icon: DollarSign,
  },
  {
    title: "Strategic Locations",
    description: "Prime highway and transportation corridor positioning",
    icon: MapPin,
  },
  {
    title: "Growth Potential",
    description: "Expansion opportunities and value-add improvements",
    icon: TrendingUp,
  },
]

const marketInsights = [
  {
    property: "I-5 Corridor Gas Station",
    location: "Federal Way, WA",
    details: "24-hour operation, 12 pumps, 2,400 sq ft store",
    revenue: "$3.2M annual",
    roi: "8.5% Cap Rate",
  },
  {
    property: "Highway Hotel",
    location: "Olympia, WA",
    details: "65 rooms, restaurant, meeting facilities",
    revenue: "$2.8M annual",
    roi: "9.2% Cap Rate",
  },
  {
    property: "Truck Stop Complex",
    location: "Spokane, WA",
    details: "20 truck parking spaces, fuel, restaurant, shop",
    revenue: "$8.5M annual",
    roi: "7.8% Cap Rate",
  },
]

const successStories = [
  {
    client: "Investment Group",
    transaction: "Gas Station Portfolio",
    result: "Acquired 4 locations generating $12M combined revenue",
    benefit: "Diversified cash flow",
  },
  {
    client: "Family Business",
    transaction: "Truck Stop Expansion",
    result: "Added restaurant and expanded parking capacity",
    benefit: "40% revenue increase",
  },
]

export default function SpecialtyPage() {
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
            jobTitle: "Specialty Commercial Property Expert",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kent",
              addressRegion: "WA",
              postalCode: "98030",
              streetAddress: siteConfig.contact.officeAddress,
            },
            telephone: siteConfig.contact.cellPhone,
            email: siteConfig.contact.email,
            url: `${siteConfig.url}/specialty`,
            areaServed: [
              "Washington State",
              "I-5 Corridor",
              "I-90 Corridor",
              "Highway 101",
              "US-2",
            ],
            priceRange: "$500,000 - $20,000,000",
            serviceType: [
              "Gas Station Sales",
              "Hotel/Motel Brokerage",
              "Truck Stop Transactions",
              "Specialty Property Investment",
            ],
            memberOf: {
              "@type": "Organization",
              name: "MLS",
            },
            hasCredential: siteConfig.professional.mlsId,
            specialty: [
              "Gas Stations",
              "Hotels",
              "Motels",
              "Truck Stops",
              "Travel Centers",
              "Convenience Stores",
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-slate-800 via-slate-700 to-slate-900 text-white pt-24 pb-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/gas-station.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-linear-to-br from-slate-800/90 via-slate-700/95 to-slate-900/90"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-emerald/20 border border-sunset-glow/30 text-sunset-glow mb-8">
              <Fuel className="w-5 h-5 mr-3" />
              <span className="font-medium">
                Specialty Commercial Properties Expert
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-8">
              <span className="block">Gas Stations, Hotels,</span>
              <span className="block bg-emerald-500  bg-clip-text text-transparent">
                Truck Stops & More
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Specialized expertise in unique commercial properties that
              generate strong cash flow and provide recession-resistant
              investment opportunities throughout Washington State.
            </p>

            {/* Key Statistics */}
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">75+</div>
                <div className="text-slate-400">Specialty Properties Sold</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">$25M+</div>
                <div className="text-slate-400">Transaction Volume</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">8.5%</div>
                <div className="text-slate-400">Average Cap Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-slate-400">Years Expertise</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-emerald text-white hover:bg-emerald/90 text-lg px-8 py-4"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Explore Opportunities
                </Button>
              </Link>
              <Link href="#properties">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 text-lg px-8 py-4"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  View Properties
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section id="properties" className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Specialty Property Expertise
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Deep market knowledge and proven track record in Washington&apos;s
              most profitable specialty commercial sectors.
            </p>
          </div>

          <div className="space-y-12">
            {specialtyTypes.map((type, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-emerald/10 rounded-xl flex items-center justify-center mr-4">
                      <type.icon className="w-8 h-8 text-sunset-glow" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                        {type.title}
                      </h3>
                      <div className="text-sunset-glow font-semibold">
                        {type.avgRevenue}
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                    {type.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle className="w-5 h-5 text-sunset-glow mr-3 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <Button className="bg-emerald text-white hover:bg-emerald/90">
                      Learn More About {type.title}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={type.image}
                      alt={type.title}
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Advantages */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Why Specialty Properties?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Unique advantages that make specialty commercial properties
              attractive investment opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentAdvantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8 text-sunset-glow" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Current Market Opportunities
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Sample properties and market insights from across Washington State
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {marketInsights.map((insight, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-700 rounded-xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {insight.property}
                  </h3>
                  <MapPin className="w-5 h-5 text-sunset-glow" />
                </div>

                <div className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {insight.location}
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  {insight.details}
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">
                      Annual Revenue
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">
                      {insight.revenue}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">
                      Cap Rate
                    </span>
                    <span className="font-semibold text-sunset-glow">
                      {insight.roi}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Real results from specialty property transactions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-500  rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">
                      {story.client}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {story.transaction}
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  {story.result}
                </p>

                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-sunset-glow mr-2" />
                  <span className="font-semibold text-sunset-glow">
                    {story.benefit}
                  </span>
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
            Ready to Explore Specialty Properties?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Discover high-cash-flow specialty commercial properties. Expert
            guidance for gas stations, hotels, truck stops, and unique
            opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-emerald text-white hover:bg-emerald/90 font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Discuss Your Goals
              </Button>
            </Link>
            <Link href={`mailto:${siteConfig.contact.email}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Mail className="w-5 h-5 mr-2" />
                Property Search
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm opacity-75">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Immediate Response
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
