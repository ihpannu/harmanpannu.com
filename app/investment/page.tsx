import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import {
  ArrowRight,
  Award,
  Building,
  Calculator,
  CheckCircle,
  Clock,
  Home,
  Mail,
  PieChart,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Real Estate Investment Guidance in Washington State | Harman Pannu",
  description:
    "Expert real estate investment guidance in Washington State. Build wealth through strategic property investments, portfolio analysis, and market insights. MLS #132987.",
  keywords:
    "real estate investment Washington, property investment Seattle, real estate portfolio, investment properties, cash flow analysis, Washington State ROI, commercial investment",
  openGraph: {
    title: "Real Estate Investment Expert - Washington State",
    description:
      "Build wealth through strategic real estate investments with expert guidance and proven market insights.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: `${siteConfig.url}/investment`,
  },
}

const investmentStrategies = [
  {
    title: "Buy & Hold Rental Properties",
    description:
      "Generate steady cash flow with long-term appreciation potential in growing Washington markets.",
    icon: Home,
    returns: "8-12% Annual ROI",
    riskLevel: "Low-Medium",
    features: ["Steady Cash Flow", "Tax Benefits", "Long-term Appreciation"],
  },
  {
    title: "Commercial Real Estate",
    description:
      "Diversify with office buildings, retail spaces, and industrial properties for higher yields.",
    icon: Building,
    returns: "10-15% Annual ROI",
    riskLevel: "Medium",
    features: ["Higher Returns", "Professional Tenants", "Triple Net Leases"],
  },
  {
    title: "Value-Add Opportunities",
    description:
      "Identify underperforming properties with improvement potential for maximum returns.",
    icon: TrendingUp,
    returns: "15-25% IRR",
    riskLevel: "Medium-High",
    features: ["Forced Appreciation", "Market Repositioning", "Value Creation"],
  },
]

const portfolioTypes = [
  {
    level: "Beginner Investor",
    investment: "$100K - $500K",
    strategy: "Single-family rental or small commercial property",
    expectedReturn: "8-10%",
    timeHorizon: "5-10 years",
  },
  {
    level: "Experienced Investor",
    investment: "$500K - $2M",
    strategy: "Multi-unit residential or commercial portfolio",
    expectedReturn: "10-15%",
    timeHorizon: "3-7 years",
  },
  {
    level: "Sophisticated Investor",
    investment: "$2M+",
    strategy: "Mixed-use developments or commercial syndications",
    expectedReturn: "15-20%",
    timeHorizon: "2-5 years",
  },
]

const marketOpportunities = [
  {
    area: "Seattle Metro",
    opportunity: "Tech Growth Driving Demand",
    properties: "Condos, Townhomes, Small Commercial",
    outlook: "Strong appreciation potential",
  },
  {
    area: "Tacoma/Pierce County",
    opportunity: "Emerging Market with Value",
    properties: "Single-family, Duplexes, Retail",
    outlook: "High cash flow yields",
  },
  {
    area: "Spokane Region",
    opportunity: "Affordable Entry Point",
    properties: "Multi-family, Commercial, Land",
    outlook: "Steady growth trajectory",
  },
]

const investmentBenefits = [
  {
    title: "Wealth Building",
    description: "Build long-term wealth through appreciation and cash flow",
    icon: TrendingUp,
  },
  {
    title: "Tax Advantages",
    description: "Depreciation, 1031 exchanges, and other tax benefits",
    icon: Calculator,
  },
  {
    title: "Inflation Hedge",
    description: "Real estate historically outpaces inflation",
    icon: Shield,
  },
  {
    title: "Portfolio Diversification",
    description: "Reduce risk through real estate asset allocation",
    icon: PieChart,
  },
]

const clientResults = [
  {
    client: "First-Time Investor",
    investment: "$250K Duplex",
    result: "18% cash-on-cash return, $450/month cash flow",
    timeline: "12 months",
  },
  {
    client: "Portfolio Expansion",
    investment: "$1.2M Commercial Building",
    result: "12.5% cap rate, 10-year triple net lease",
    timeline: "6 months",
  },
  {
    client: "1031 Exchange",
    investment: "$3.5M Industrial Portfolio",
    result: "Deferred $800K in capital gains taxes",
    timeline: "90 days",
  },
]

export default function InvestmentPage() {
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
            jobTitle: "Real Estate Investment Specialist",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kent",
              addressRegion: "WA",
              postalCode: "98030",
              streetAddress: siteConfig.contact.officeAddress,
            },
            telephone: siteConfig.contact.cellPhone,
            email: siteConfig.contact.email,
            url: `${siteConfig.url}/investment`,
            areaServed: [
              "Washington State",
              "Seattle",
              "Tacoma",
              "Spokane",
              "Bellevue",
            ],
            priceRange: "$100,000 - $10,000,000",
            serviceType: [
              "Investment Analysis",
              "Portfolio Strategy",
              "1031 Exchanges",
              "Market Research",
            ],
            memberOf: {
              "@type": "Organization",
              name: "MLS",
            },
            hasCredential: siteConfig.professional.mlsId,
            specialty: [
              "Real Estate Investment",
              "Cash Flow Analysis",
              "Portfolio Development",
              "Market Analysis",
            ],
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
                <TrendingUp className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">
                  Real Estate Investment Expert
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Build Wealth Through
                <span className="block bg-emerald-500  bg-clip-text text-transparent">
                  Strategic Real Estate
                </span>
                <span className="block">Investment</span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Navigate Washington's real estate investment landscape with
                expert guidance. From first-time investors to sophisticated
                portfolios, I provide strategic insights for sustainable wealth
                building.
              </p>

              {/* Key Investment Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    12.5%
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Avg. Portfolio ROI
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    $25M+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Investments Placed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    150+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Happy Investors
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
                    <Calculator className="w-5 h-5 mr-2" />
                    Free Investment Analysis
                  </Button>
                </Link>
                <Link href="#strategies">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-slate-300 text-slate-700 hover:bg-slate-700 hover:text-white w-full sm:w-auto"
                  >
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Investment Strategies
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Chart/Visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-slate-800">
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                    Washington Real Estate Returns
                  </h3>

                  {/* Sample Chart Visual */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-400">
                        Residential Rental
                      </span>
                      <div className="flex items-center">
                        <div className="w-24 h-2 bg-slate-200 dark:bg-slate-600 rounded-full mr-3">
                          <div className="w-3/4 h-2 bg-emerald-500  rounded-full"></div>
                        </div>
                        <span className="text-slate-900 dark:text-slate-100 font-semibold">
                          8-12%
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-400">
                        Commercial Properties
                      </span>
                      <div className="flex items-center">
                        <div className="w-24 h-2 bg-slate-200 dark:bg-slate-600 rounded-full mr-3">
                          <div className="w-5/6 h-2 bg-purple rounded-full"></div>
                        </div>
                        <span className="text-slate-900 dark:text-slate-100 font-semibold">
                          10-15%
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-400">
                        Value-Add Projects
                      </span>
                      <div className="flex items-center">
                        <div className="w-24 h-2 bg-slate-200 dark:bg-slate-600 rounded-full mr-3">
                          <div className="w-full h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-slate-900 dark:text-slate-100 font-semibold">
                          15-25%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-500  rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">
                      Investment Specialist
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

      {/* Investment Strategies */}
      <section id="strategies" className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Investment Strategies for Every Goal
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Whether you're building passive income, planning for retirement,
              or expanding your portfolio, we have strategies tailored to your
              objectives.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {investmentStrategies.map((strategy, index) => (
              <div
                key={index}
                className="group bg-slate-50 dark:bg-slate-700 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-emerald/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald/20 transition-colors">
                  <strategy.icon className="w-8 h-8 text-sunset-glow" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  {strategy.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {strategy.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">
                      Expected Returns
                    </span>
                    <span className="font-semibold text-sunset-glow">
                      {strategy.returns}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">
                      Risk Level
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">
                      {strategy.riskLevel}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {strategy.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle className="w-4 h-4 text-sunset-glow mr-2 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Types */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Investment Pathways by Experience Level
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Tailored strategies based on your investment experience and
              capital
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {portfolioTypes.map((portfolio, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {portfolio.level}
                  </h3>
                  <div className="text-2xl font-bold text-sunset-glow">
                    {portfolio.investment}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-1">
                      Strategy
                    </div>
                    <div className="text-slate-900 dark:text-slate-100">
                      {portfolio.strategy}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-1">
                      Expected Return
                    </div>
                    <div className="text-sunset-glow font-bold">
                      {portfolio.expectedReturn}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-1">
                      Time Horizon
                    </div>
                    <div className="text-slate-900 dark:text-slate-100">
                      {portfolio.timeHorizon}
                    </div>
                  </div>
                </div>

                <Link href="/contact" className="block mt-6">
                  <Button className="w-full bg-emerald-500  text-white hover:bg-emerald/90">
                    Get Started
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunities */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Current Washington Market Opportunities
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Strategic markets with strong investment fundamentals
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {marketOpportunities.map((market, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-700 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                  {market.area}
                </h3>
                <div className="text-sunset-glow font-semibold mb-4">
                  {market.opportunity}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {market.properties}
                </p>
                <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {market.outlook}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Benefits */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Why Real Estate Investment?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Proven advantages that make real estate a cornerstone of wealth
              building
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-sunset-glow" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Results */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Real Client Results
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Success stories from Washington State real estate investments
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {clientResults.map((result, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-700 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-500  rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">
                      {result.client}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {result.timeline}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
                  {result.investment}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {result.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-sunset-glow via-purple to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Start Building Your Real Estate Portfolio Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a free investment consultation. Let's analyze your goals
            and create a strategy for long-term wealth building through
            Washington real estate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 font-semibold"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Free Investment Analysis
              </Button>
            </Link>
            <Link href={`mailto:${siteConfig.contact.email}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Mail className="w-5 h-5 mr-2" />
                Discuss Strategy
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm opacity-75">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Free Consultation
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
