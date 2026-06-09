import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "מהראש אל הדף — סדנאות קומיקס, איור ואנימציה | אלעד יעקובוביץ'",
  description:
    "סדנאות יצירתיות לילדים ובני נוער: קומיקס, איור ואנימציה. מתאים לבתי ספר, חוגים ואירועים. 85+ עבודות מקוריות, ניסיון מוכח, סדנת ציור בערוץ מאיר.",
  keywords: "סדנאות קומיקס, איור, אנימציה, ילדים, בתי ספר, חוגים, ציור, יצירה",
  metadataBase: new URL("https://creative-workshops.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "מהראש אל הדף — סדנאות קומיקס, איור ואנימציה | אלעד יעקובוביץ'",
    description:
      "מהראש אל הדף: 120+ עבודות מקוריות. סדנאות קומיקס, איור ואנימציה לבתי ספר ולחוגים.",
    locale: "he_IL",
    type: "website",
    siteName: "מהראש אל הדף - אלעד יעקובוביץ'",
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
    title: "מהראש אל הדף — סדנאות קומיקס, איור ואנימציה | אלעד יעקובוביץ'",
    description:
      "סדנאות יצירתיות לילדים ובני נוער - קומיקס, איור ואנימציה",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const SITE = "https://creative-workshops.vercel.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "מהראש אל הדף — סדנאות קומיקס, איור ואנימציה",
      inLanguage: "he-IL",
      publisher: { "@id": `${SITE}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#person`,
      name: "אלעד יעקובוביץ'",
      jobTitle: "מאייר, יוצר קומיקס ומנחה סדנאות",
      url: SITE,
      sameAs: ["https://meharoshelhadaf.blogspot.com"],
      knowsAbout: [
        "איור",
        "קומיקס",
        "אנימציה",
        "עיצוב דמויות",
        "קריקטורה",
        "תפאורה לתיאטרון",
      ],
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${SITE}/#business`,
      name: "מהראש אל הדף - אלעד יעקובוביץ'",
      description:
        "סדנאות קומיקס, איור ואנימציה לילדים ובני נוער. מתאים לבתי ספר, חוגים ואירועים. 120+ עבודות מקוריות וניסיון מוכח.",
      url: SITE,
      image: `${SITE}/images/hero.jpg`,
      priceRange: "₪₪",
      founder: { "@id": `${SITE}/#person` },
      address: { "@type": "PostalAddress", addressCountry: "IL" },
      areaServed: { "@type": "Country", name: "Israel" },
      serviceType: [
        "סדנאות קומיקס",
        "סדנאות איור",
        "סדנאות אנימציה",
      ],
      audience: {
        "@type": "PeopleAudience",
        suggestedMinAge: 6,
        suggestedMaxAge: 17,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "לאיזה גילאים מתאימות הסדנאות?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "הסדנאות מותאמות לגילאי 6 עד 17, ומתכווננות לרמת המשתתפים — מבתי ספר יסודיים ועד חטיבות ותיכונים.",
          },
        },
        {
          "@type": "Question",
          name: "כמה זמן נמשכת סדנה?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "סדנה בודדת נמשכת כ-90 דקות. לחוגים ולבתי ספר ניתן לבנות תכנית רצופה של 8 עד 12 מפגשים.",
          },
        },
        {
          "@type": "Question",
          name: "האם הסדנאות מתאימות לבתי ספר וחוגים?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "כן. הסדנאות מתקיימות בבתי ספר, חוגים, מתנ\"סים ואירועים, וניתן לפצל אותן לכיתות ולהתאים לתכנית הלימודים.",
          },
        },
        {
          "@type": "Question",
          name: "מי מעביר את הסדנאות?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "אלעד יעקובוביץ', מאייר ויוצר קומיקס עם ניסיון מוכח — בהם סדרת 'סיפורו של אביר' שפורסמה ב'מקור לילדים' וסדנת ציור שצולמה בערוץ מאיר.",
          },
        },
        {
          "@type": "Question",
          name: "מה התלמידים יוצרים בסדנה?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "כל ילד יוצא עם יצירה מקורית משלו — דמות, עמוד קומיקס או איור — שעבר את כל שלבי היצירה: מרעיון, דרך סקיצה ועד תוצר מוגמר.",
          },
        },
      ],
    },
  ],
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
        <script
          defer
          data-domain="workshops.eladjak.com"
          src="https://plausible.io/js/script.js"
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
