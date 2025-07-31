"use client"

import { siteConfig } from "@/config/site"
import Script from "next/script"

export function Analytics() {
  // Only load analytics in production
  if (process.env.NODE_ENV !== "production") {
    return null
  }

  return (
    <>
      {/* Google Analytics */}
      {process.env.NEXT_PUBLIC_GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: true
              });
            `}
          </Script>
        </>
      )}

      {/* Real Estate Specific Tracking */}
      <Script id="real-estate-tracking" strategy="afterInteractive">
        {`
          // Track real estate specific events
          function trackRealEstateEvent(action, category, label, value) {
            if (typeof gtag !== 'undefined') {
              gtag('event', action, {
                event_category: category,
                event_label: label,
                value: value,
                custom_map: {
                  'real_estate_agent': '${siteConfig.name}',
                  'mls_id': '${siteConfig.professional?.mlsId || ""}',
                  'service_area': 'Washington State'
                }
              });
            }
          }

          // Auto-track contact interactions
          document.addEventListener('click', function(e) {
            const target = e.target.closest('a, button');
            if (!target) return;

            const href = target.getAttribute('href') || '';
            const text = target.textContent.toLowerCase();

            // Track phone calls
            if (href.startsWith('tel:')) {
              trackRealEstateEvent('phone_call', 'contact', 'phone_click', 1);
            }

            // Track email clicks
            if (href.startsWith('mailto:')) {
              trackRealEstateEvent('email_click', 'contact', 'email_click', 1);
            }

            // Track consultation requests
            if (text.includes('consultation') || text.includes('schedule')) {
              trackRealEstateEvent('consultation_request', 'lead_generation', text, 1);
            }

            // Track property category views
            if (href.includes('/residential') || href.includes('/commercial') ||
                href.includes('/specialty') || href.includes('/investment')) {
              const category = href.split('/').pop();
              trackRealEstateEvent('category_view', 'property_interest', category, 1);
            }
          });

          // Track scroll depth for engagement
          let maxScroll = 0;
          window.addEventListener('scroll', function() {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
              maxScroll = scrollPercent;
              trackRealEstateEvent('scroll_depth', 'engagement', scrollPercent + '%', scrollPercent);
            }
          });
        `}
      </Script>

      {/* Local Business Schema for SEO */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: siteConfig.name,
            image: `${siteConfig.url}/harman-logo.png`,
            telephone: siteConfig.contact.cellPhone,
            email: siteConfig.contact.email,
            url: siteConfig.url,
            address: {
              "@type": "PostalAddress",
              streetAddress: siteConfig.contact.officeAddress,
              addressLocality: "Kent",
              addressRegion: "WA",
              postalCode: "98030",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "47.3809",
              longitude: "-122.2348",
            },
            areaServed: [
              {
                "@type": "City",
                name: "Seattle",
                sameAs: "https://en.wikipedia.org/wiki/Seattle",
              },
              {
                "@type": "City",
                name: "Bellevue",
                sameAs: "https://en.wikipedia.org/wiki/Bellevue,_Washington",
              },
              {
                "@type": "City",
                name: "Tacoma",
                sameAs: "https://en.wikipedia.org/wiki/Tacoma,_Washington",
              },
              {
                "@type": "City",
                name: "Kent",
                sameAs: "https://en.wikipedia.org/wiki/Kent,_Washington",
              },
            ],
            hasCredential: siteConfig.professional?.mlsId,
            knowsAbout: [
              "Residential Real Estate",
              "Commercial Real Estate",
              "Gas Stations",
              "Hotels and Motels",
              "Truck Stops",
              "Real Estate Investment",
              "Property Management",
            ],
            serviceType: [
              "Real Estate Sales",
              "Real Estate Investment Consulting",
              "Property Valuation",
              "Market Analysis",
            ],
            priceRange: "$100,000 - $50,000,000",
            currenciesAccepted: "USD",
            paymentAccepted: ["Cash", "Check", "Bank Transfer"],
            openingHours: "Mo-Su 08:00-20:00",
            sameAs: [
              siteConfig.social?.linkedin?.url,
              siteConfig.social?.instagram?.url,
              siteConfig.social?.yelp?.url,
            ].filter(Boolean),
          }),
        }}
      />
    </>
  )
}
