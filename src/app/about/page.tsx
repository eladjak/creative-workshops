import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE = "https://creative-workshops.vercel.app";

export const metadata: Metadata = {
  title: "אודות — אלעד יעקובוביץ' | מהראש אל הדף",
  description:
    "אלעד יעקובוביץ', מאייר ויוצר קומיקס ומנחה סדנאות: סיפורו של אביר ב'מקור לילדים', סדנת ציור בערוץ מאיר, 120+ עבודות מקוריות. סדנאות קומיקס, איור ואנימציה.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "אודות — אלעד יעקובוביץ' | מהראש אל הדף",
    description:
      "מאייר ויוצר קומיקס ומנחה סדנאות יצירה לילדים ובני נוער. ניסיון מוכח, 120+ עבודות מקוריות.",
    locale: "he_IL",
    type: "profile",
    url: `${SITE}/about`,
    images: [
      {
        url: "/images/elad-real-profile.jpg",
        width: 1200,
        height: 630,
        alt: "אלעד יעקובוביץ' — מאייר ומנחה סדנאות יצירה",
      },
    ],
  },
};

const externalLinks = [
  {
    href: "https://meharoshelhadaf.blogspot.com",
    emoji: "🖼️",
    label: "מהראש אל הדף — הבלוג",
    note: "הארכיון: 120+ עבודות איור מקוריות",
  },
  {
    href: "https://www.youtube.com/@MeirTV",
    emoji: "📺",
    label: "ערוץ מאיר",
    note: "סדנת הציור המצולמת",
  },
  {
    href: "https://teatron.eladjak.com",
    emoji: "🎭",
    label: "תיאטרון סצנה",
    note: "עיצובי תפאורה להפקות",
  },
  {
    href: "https://www.eladjak.com",
    emoji: "🌐",
    label: "האתר האישי",
    note: "אלעד יעקובוביץ'",
  },
  {
    href: "https://fullstack-eladjak.co.il",
    emoji: "💻",
    label: "פורטפוליו מקצועי",
    note: "עבודות נוספות",
  },
  {
    href: "https://www.facebook.com/eladjak",
    emoji: "📘",
    label: "פייסבוק",
    note: "עדכונים ועבודות",
  },
];

const milestones = [
  {
    emoji: "📚",
    title: "סיפורו של אביר",
    text: "סדרת איור בשני חלקים שפורסמה במגזין הילדים \"מקור לילדים\" — 42 פרקים מאוירים לכל הסדרה.",
  },
  {
    emoji: "📺",
    title: "סדנת ציור בערוץ מאיר",
    text: "סדנת ציור מצולמת ששודרה בערוץ מאיר — ילדים זוכרים אותה עד היום.",
  },
  {
    emoji: "🎨",
    title: "120+ עבודות מקוריות",
    text: "ארכיון איור עשיר מבלוג \"מהראש אל הדף\": קומיקס, קריקטורה, עיצוב דמויות ואיור דיגיטלי.",
  },
  {
    emoji: "🎭",
    title: "תפאורה לתיאטרון סצנה",
    text: "עיצובי תפאורה ודמויות להפקות תיאטרון — מהרעיון ועד לבמה.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section className="relative pt-28 pb-16 bg-blue-600 overflow-hidden">
        <div className="absolute inset-0 dots-bg opacity-30" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-400 rounded-full opacity-20 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 grid md:grid-cols-[auto_1fr] gap-8 items-center text-white">
          <div className="relative rounded-2xl overflow-hidden comic-border bg-white w-44 h-44 mx-auto">
            <Image
              src="/images/elad-real-profile.jpg"
              alt="אלעד יעקובוביץ' — מאייר ויוצר קומיקס ומנחה סדנאות"
              width={176}
              height={176}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="text-center md:text-right">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-black text-sm mb-4 comic-border-sm">
              👋 נעים להכיר
            </div>
            <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-4 text-balance">
              <span className="text-yellow-400">אלעד</span> יעקובוביץ&apos;
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-xl">
              מאייר, יוצר קומיקס ומנחה סדנאות יצירה לילדים ובני נוער — מהרעיון
              ועד לתוצר מוגמר.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-gray-700 leading-relaxed text-lg space-y-5 text-pretty">
          <h2 className="text-3xl font-black text-gray-900 mb-2">הסיפור שלי</h2>
          <p>
            כבר שנים שאני מלווה ילדים ובני נוער בדרך מהדמיון אל הדף. למדתי
            שכל ילד נושא בתוכו דמות, עולם וסיפור — והתפקיד שלי הוא לתת לו את
            הכלים להוציא אותם החוצה. בכל סדנה אנחנו עוברים יחד את כל שלבי
            היצירה: מרעיון ראשוני, דרך סקיצה, ועד קומיקס, איור או אנימציה
            מוגמרים שכל משתתף לוקח הביתה.
          </p>
          <p>
            אני עובד באיור דיגיטלי ישירות על המחשב, ומביא לסדנאות את הניסיון
            שצברתי בפרסום סדרות קומיקס, בעיצוב דמויות להפקות, ובהנחיה מול
            מצלמה ומול כיתות. המטרה תמיד אחת: שהיצירה תהיה כיף, נגישה,
            ומקצועית.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
            ניסיון ופרסומים
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {milestones.map((m) => (
              <div
                key={m.title}
                className="bg-white rounded-2xl comic-border p-6"
              >
                <div className="text-4xl mb-3">{m.emoji}</div>
                <h3 className="font-black text-xl text-gray-900 mb-2">
                  {m.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-black text-gray-900 mb-2 text-center">
            עוד עליי ברשת
          </h2>
          <h4 className="text-sm font-bold text-gray-400 mb-8 text-center">
            בלוג, ערוצים ופורטפוליו
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {externalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl comic-border-sm hover:bg-blue-50 transition-colors"
              >
                <span className="text-3xl">{link.emoji}</span>
                <div>
                  <div className="font-black text-gray-900">{link.label}</div>
                  <div className="text-xs text-gray-500">{link.note}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-yellow-400 text-gray-900 font-black text-lg rounded-xl comic-border hover:bg-yellow-300 transition-colors"
            >
              קבלו הצעת מחיר לסדנה 🎨
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
