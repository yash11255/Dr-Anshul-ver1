import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Providers from "@/components/Providers";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dranshulgoel.com"),
  title: {
    default:
      "Dr. Anshul Goel | Expert Orthopedic Surgeon & Joint Replacement Specialist",
    template: "%s | Dr. Anshul Goel",
  },
  description:
    "Dr. Anshul Goel is an expert orthopedic surgeon in Delhi for joint replacement surgery, sports injury treatment, spine care, and trauma management.",
  authors: [{ name: "Dr Anshul Goel" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.dranshulgoel.com",
    siteName: "Dr. Anshul Goel",
    title:
      "Dr. Anshul Goel | Expert Orthopedic Surgeon & Joint Replacement Specialist",
    description:
      "Consult an experienced orthopedic surgeon in Delhi for knee replacement, hip replacement, sports injury treatment, spine surgery, and trauma care.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Anshul Goel - Orthopedic Surgeon",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${manrope.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8R3RNLGT65"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8R3RNLGT65', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Meta */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />

        {/* Schema - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://www.dranshulgoel.com",
              name: "Dr. Anshul Goel",
              alternateName: "Dr Anshul Goel",
            }),
          }}
        />

        {/* Schema - Medical Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Dr. Anshul Goel",
              url: "https://www.dranshulgoel.com",
              description:
                "Orthopedic specialist in Delhi providing joint replacement surgery, arthroscopy surgery, spine treatment, and trauma care.",
              medicalSpecialty: [
                "Orthopedic",
                "Joint Replacement",
                "Sports Medicine",
                "Spine",
                "Trauma",
              ],
              telephone: "+91-8527419626",
              email: "dranshulgoel@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "D 23 Flat No. 7, Block D, Rajouri Garden",
                addressLocality: "Delhi",
                postalCode: "110027",
                addressCountry: "IN",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "150",
              },
            }),
          }}
        />
      </head>

      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
