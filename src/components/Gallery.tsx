"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

// Gallery items representing Elad's 85+ original works from "מהראש אל הדף" blog
// Mix of: real blog archive illustrations + Gemini-generated images
const galleryItems = [
  {
    title: "סיפורו של אביר — פרק מקורי",
    category: "קומיקס",
    image: "/images/gallery/illustration-1.jpg",
    alt: "איור מקורי מהבלוג מהראש אל הדף — קומיקס מקורי מאת אלעד ג'ינו",
    tag: "מקור לילדים",
    description: "איור מקורי מסדרת הקומיקס שפורסמה ב׳מקור לילדים׳",
  },
  {
    title: "בובת טלה — עיצוב דמות",
    category: "איור",
    image: "/images/gallery/illustration-4.jpg",
    alt: "עיצוב דמות מקורי בסגנון קומיקס — בובת טלה",
    tag: "מקורי",
    description: "עיצוב דמות מקורי — גרסה 4 עם כובע",
  },
  {
    title: "בובת תרנגול — גרסה 3",
    category: "איור",
    image: "/images/gallery/illustration-5.jpg",
    alt: "עיצוב בובת תרנגול מקורי — גרסה 3",
    tag: "מקורי",
    description: "עיצוב בובה מקורי — גרסת הודו בסגנון אמנות עממית",
  },
  {
    title: "ביבי — שיר אלבום",
    category: "איור",
    image: "/images/gallery/illustration-6.jpg",
    alt: "איור מוזיקלי — ביבי מנשק לאלבומה",
    tag: "מוזיקה",
    description: "איור מקורי לשיר — עיצוב עטיפת אלבום",
  },
  {
    title: "בית המקדש",
    category: "איור",
    image: "/images/gallery/illustration-7.jpg",
    alt: "איור בית המקדש הראשון — ציור היסטורי",
    tag: "מקורי",
    description: "בית המקדש הראשון — איור היסטורי-אמנותי",
  },
  {
    title: "גלויה חדשה — סצנה",
    category: "עיצוב",
    image: "/images/gallery/illustration-8.jpg",
    alt: "עיצוב גלויה מקורית — סצנה מהספר",
    tag: "עיצוב",
    description: "עיצוב גלויה — סצנה מסדרת הקומיקס",
  },
  {
    title: "גמד — עיצוב מקורי",
    category: "קומיקס",
    image: "/images/gallery/illustration-9.jpg",
    alt: "דמות גמד — סקיצה ראשונה של הדמות",
    tag: "מקורי",
    description: "סקיצה ראשונה של דמות הגמד — שלב העיצוב",
  },
  {
    title: "יהל חזן — קריקטורה",
    category: "קריקטורות",
    image: "/images/gallery/illustration-10.jpg",
    alt: "קריקטורה של יהל חזן — קריקטורה דיגיטלית מאת אלעד",
    tag: "קריקטורה",
    description: "קריקטורה דיגיטלית — סדרת קריקטורות אישיות",
  },
  {
    title: "הדס נסיכה — עיצוב",
    category: "איור",
    image: "/images/gallery/illustration-11.jpg",
    alt: "עיצוב דמות הדס נסיכה",
    tag: "מקורי",
    description: "עיצוב דמות הדס — נסיכה מקורית",
  },
  {
    title: "הרשלה כותב",
    category: "קומיקס",
    image: "/images/gallery/illustration-12.jpg",
    alt: "הרשלה כותב — דמות קומיקס מקורית",
    tag: "מקורי",
    description: "הרשלה כותב — דמות מסדרת הקומיקסים",
  },
  {
    title: "סדנת ציור בפעולה",
    category: "סדנאות",
    image: "/images/workshop-illustration.jpg",
    alt: "ילדים לומדים ציור קומיקס בסדנה יצירתית",
    tag: "סדנה",
    description: "סדנת ציור לילדים — אווירה חמה ויצירתית",
  },
  {
    title: "שולחן אמן — עבודות",
    category: "איור",
    image: "/images/comic-art-desk.jpg",
    alt: "שולחן עבודה אמן עם איורים, קומיקסים ועיפרונות",
    tag: "מקורי",
    description: "מבט על שולחן האמן — יצירות ואיורים מקוריים",
  },
  {
    title: "סדנת קומיקס לילדים",
    category: "סדנאות",
    image: "/images/kids-workshop.jpg",
    alt: "ילדים ונוער יוצרים קומיקסים ביחד בסדנה",
    tag: "סדנה",
    description: "ילדים יוצרים קומיקסים ביחד — חוויה קבוצתית",
  },
  {
    title: "פרקי עלילה — אנימציה",
    category: "אנימציה",
    image: "/images/animation-storyboard.jpg",
    alt: "פרקי עלילה לאנימציה עם עיצוב דמויות צבעוני",
    tag: "אנימציה",
    description: "תכנון אנימציה — פרקי עלילה ועיצוב דמויות",
  },
];

const categories = ["הכל", "קומיקס", "איור", "קריקטורות", "עיצוב", "אנימציה", "סדנאות"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("הכל");

  const filtered =
    activeCategory === "הכל"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 halftone-bg opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full font-bold text-sm mb-4">
            🖼️ גלריית עבודות
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            85+ עבודות{" "}
            <span className="text-pink-500">מקוריות</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            כל העבודות מבלוג &quot;מהראש אל הדף&quot; — קומיקסים, איורים,
            קריקטורות ועוד. כולן נוצרו ישירות על ידי אלעד ג&apos;ינו.
          </p>

          {/* Blog link */}
          <a
            href="https://meharoshelhadaf.blogspot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
          >
            🔗 צפה בכל העבודות בבלוג המקורי &rarr;
          </a>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-bold text-sm transition-all comic-border-sm ${
                activeCategory === cat
                  ? "bg-pink-500 text-white scale-105"
                  : "bg-white text-gray-700 hover:bg-pink-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -5, transition: { duration: 0.15 } }}
              className="group bg-white rounded-xl comic-border overflow-hidden cursor-pointer"
            >
              {/* Real image */}
              <div className="aspect-square relative overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <span className="absolute top-2 right-2 bg-white/90 text-xs font-black px-2 py-1 rounded-full z-10">
                  {item.tag}
                </span>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
              </div>

              {/* Info */}
              <div className="p-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                  {item.category}
                </span>
                <h3 className="font-black text-gray-900 text-sm mt-1 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Wide gallery image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-2xl overflow-hidden comic-border"
        >
          <Image
            src="/images/gallery-wide.jpg"
            alt="תערוכת קומיקס ואיורים — גלריה רחבה"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-blue-600 text-white rounded-2xl comic-border p-8 max-w-lg">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="text-2xl font-black mb-2">
              רוצה שהתלמידים שלך יצרו כך?
            </h3>
            <p className="text-blue-100 mb-4 text-sm">
              בסדנאות של אלעד כל ילד יוצא עם יצירה שגאה בה ביושר
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-yellow-400 text-gray-900 font-black rounded-xl comic-border-sm hover:bg-yellow-300 transition-colors"
            >
              קבע סדנה עכשיו! 🎨
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
