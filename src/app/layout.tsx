import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "סדנאות קומיקס, איור ואנימציה | אלעד ג'ינו",
  description:
    "סדנאות יצירתיות לילדים ובני נוער: קומיקס, איור ואנימציה. מתאים לבתי ספר, חוגים ואירועים. 85+ עבודות מקוריות, ניסיון מוכח, סדנת ציור בערוץ מאיר.",
  keywords: "סדנאות קומיקס, איור, אנימציה, ילדים, בתי ספר, חוגים, ציור, יצירה",
  metadataBase: new URL("https://workshops.eladjak.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "סדנאות קומיקס, איור ואנימציה | אלעד ג'ינו",
    description:
      "סדנאות יצירתיות לילדים ובני נוער - קומיקס, איור ואנימציה. 85+ עבודות מקוריות.",
    locale: "he_IL",
    type: "website",
    siteName: "סדנאות יצירה - אלעד ג'ינו",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "סדנאות קומיקס, איור ואנימציה לילדים",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "סדנאות קומיקס, איור ואנימציה | אלעד ג'ינו",
    description:
      "סדנאות יצירתיות לילדים ובני נוער - קומיקס, איור ואנימציה",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "סדנאות יצירה - אלעד ג'ינו",
  description:
    "סדנאות קומיקס, איור ואנימציה לילדים ובני נוער. מתאים לבתי ספר, חוגים ואירועים.",
  url: "https://workshops.eladjak.com",
  image: "https://workshops.eladjak.com/images/hero.jpg",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IL",
  },
  areaServed: {
    "@type": "Country",
    name: "Israel",
  },
  serviceType: ["סדנאות קומיקס", "סדנאות איור", "סדנאות אנימציה"],
  audience: {
    "@type": "PeopleAudience",
    suggestedMinAge: 6,
    suggestedMaxAge: 17,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${heebo.variable} font-heebo antialiased bg-white`}>
        <a
          href="#workshops"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[100] focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
        >
          דלג לתוכן הראשי
        </a>
        {children}
      </body>
    </html>
  );
}
