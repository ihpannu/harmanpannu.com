export const siteConfig = {
  name: "Harman Pannu",
  title:
    "Harman Pannu - Washington State Real Estate Expert | Residential & Commercial",
  description:
    "Expert real estate services in Washington State. Residential homes, commercial properties, specialty investments (gas stations, hotels), and investment guidance. Licensed realtor MLS #132987.",
  url: "https://harmanpannu.com",
  ogImage: "https://harmanpannu.com/og.jpg",

  // Contact Information
  contact: {
    email: "info@harmanpannu.com",
    officePhone: "253-900-0666",
    cellPhone: "253-385-3535",
    officePhoneDisplay: "(253) 900-0666",
    cellPhoneDisplay: "(253) 385-3535",
    officePhoneLink: "tel:+12539000666",
    cellPhoneLink: "tel:+12533853535",
    officeAddress: "10725 SE 256th St # 5, Kent, WA 98030",
  },

  // Social Media Links
  social: {
    instagram: {
      handle: "@harmanpannu.realtor",
      url: "https://instagram.com/harmanpannu.realtor",
    },
    linkedin: {
      name: "Harman Pannu",
      url: "https://linkedin.com/in/harmanpannu",
    },
    yelp: {
      name: "Team Harman Pannu - Real Estate",
      url: "https://yelp.com/biz/team-harman-pannu-real-estate",
    },
  },

  // Professional Information
  professional: {
    title: "Real Estate Agent",
    company: "Harman Pannu Real Estate",
    license: "Licensed Real Estate Professional",
    mlsId: "132987",
    licenseState: "Washington State",
    yearsExperience: 2,
    areasServed: [
      "Washington State",
      "Seattle",
      "Tacoma",
      "Bellevue",
      "Everett",
    ],
    specialties: [
      "Residential Properties",
      "Commercial Real Estate",
      "Gas Stations",
      "Hotels & Motels",
      "Truck Stops",
      "Vacant Lands",
    ],
  },

  // Business Stats
  stats: {
    totalSalesVolume: "$15M+",
    propertiesSold: "50+",
    commercialDeals: "15+",
    citiesCovered: "25+",
    clientSatisfaction: "98%",
    activeListings: 12,
  },

  // Navigation Links
  nav: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],

  // Footer Links
  footer: {
    sections: [
      {
        title: "Services",
        links: [
          { name: "Residential Sales", href: "/services#residential" },
          { name: "Commercial Properties", href: "/services#commercial" },
          { name: "Investment Consulting", href: "/services#consulting" },
          { name: "Property Management", href: "/services#management" },
        ],
      },
      {
        title: "Property Types",
        links: [
          { name: "Residential", href: "/residential" },
          { name: "Commercial", href: "/commercial" },
          { name: "Specialty Properties", href: "/specialty" },
          { name: "Investment", href: "/investment" },
        ],
      },
      {
        title: "Resources",
        links: [
          { name: "Market Reports", href: "/resources/reports" },
          { name: "Investment Guide", href: "/resources/guide" },
          { name: "FAQ", href: "/faq" },
          { name: "Blog", href: "/blog" },
        ],
      },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  },

  // SEO Keywords
  keywords: [
    "real estate agent washington",
    "commercial real estate wa",
    "gas station for sale",
    "hotel investment opportunities",
    "truck stop properties",
    "vacant land washington",
    "harman pannu realtor",
    "seattle real estate",
    "tacoma properties",
    "investment properties wa",
  ],
}

export type SiteConfig = typeof siteConfig
