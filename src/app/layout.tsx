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
  openGraph: {
    title: "סדנאות קומיקס, איור ואנימציה",
    description: "סדנאות יצירתיות לילדים ובני נוער - קומיקס, איור ואנימציה",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} font-heebo antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
