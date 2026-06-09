"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

// Gallery items — REAL original works scraped from the "מהראש אל הדף" blog
// (meharoshelhadaf.blogspot.com). 121 works archived; this is the curated selection.
const galleryItems = [
  // ---- קומיקס ----
  {
    title: "סיפורו של אביר — קומיקס",
    category: "קומיקס",
    image: "/images/archive/comic-page-color-1.jpg",
    alt: "עמוד קומיקס צבעוני מסדרת 'סיפורו של אביר' מאת אלעד יעקובוביץ'",
    tag: "מקור לילדים",
    description: "עמוד מתוך הסדרה שהתפרסמה בעיתון 'מקור לילדים'",
  },
  {
    title: "סיפורו של אביר — עמוד עלילה",
    category: "קומיקס",
    image: "/images/archive/comic-page-color-2.jpg",
    alt: "עמוד עלילה צבעוני מסדרת 'סיפורו של אביר'",
    tag: "מקור לילדים",
    description: "עמוד עלילה מלא — מתוך סדרת הקומיקס המתמשכת",
  },
  {
    title: "ארמדיל — קומיקס בריאות",
    category: "קומיקס",
    image: "/images/archive/comic-armadillo.jpg",
    alt: "קטע קומיקס בנושא בריאות שאוייר לקבוצת 'ארמדיל'",
    tag: "פרסומי ישראל",
    description: "קומיקס לילדים בנושא בריאות — בהזמנת 'פרסומי ישראל'",
  },
  {
    title: "רובו סמיילי — קומיקס מד״ב",
    category: "קומיקס",
    image: "/images/archive/comic-robo-smiley.jpg",
    alt: "קטע מקומיקס מדע בדיוני-קומדיה בשם 'רובו סמיילי'",
    tag: "מקורי",
    description: "מתוך 'רובו סמיילי' — קומיקס מדע בדיוני וקומדיה",
  },
  {
    title: "רדיקס — הרפתקה בין-מימדית",
    category: "קומיקס",
    image: "/images/archive/comic-redix-1.jpg",
    alt: "קטע מקומיקס הרפתקאות בין-מימדיות בשם 'רדיקס'",
    tag: "מקורי",
    description: "מתוך 'רדיקס' — הרפתקה בדיונית בין-מימדית",
  },
  {
    title: "קומיקס לבני עקיבא",
    category: "קומיקס",
    image: "/images/archive/comic-bnei-akiva.jpg",
    alt: "עמוד קומיקס שפורסם בעלון תנועת נוער",
    tag: "תנועות נוער",
    description: "עמוד קומיקס שפורסם בעלון תנועת נוער",
  },
  // ---- איור ----
  {
    title: "סיפורו של אביר — שער",
    category: "איור",
    image: "/images/archive/book-knight-cover.jpg",
    alt: "איור שער מסדרת 'סיפורו של אביר' מאת אלעד יעקובוביץ'",
    tag: "מקור לילדים",
    description: "איור שער — מתוך 42 איורי הסדרה לכל הפרקים",
  },
  {
    title: "איור לספר — פרק",
    category: "איור",
    image: "/images/archive/book-knight-1.jpg",
    alt: "איור פרק מתוך סדרת 'סיפורו של אביר'",
    tag: "איור ספר",
    description: "איור מלא לפרק מתוך הסדרה",
  },
  {
    title: "איור לסיפור ילדים",
    category: "איור",
    image: "/images/archive/book-knight-2.jpg",
    alt: "איור צבעוני לסיפור ילדים מאת אלעד",
    tag: "איור ספר",
    description: "איור לסיפור ילדים — צבע ודמיון",
  },
  {
    title: "איור עלילה",
    category: "איור",
    image: "/images/archive/book-knight-3.jpg",
    alt: "איור עלילה מתוך סדרת איורים לספר",
    tag: "איור ספר",
    description: "איור עלילה מתוך הסדרה",
  },
  {
    title: "איור פרק — סצנה",
    category: "איור",
    image: "/images/archive/book-knight-4.jpg",
    alt: "איור סצנה מתוך פרק בספר ילדים",
    tag: "איור ספר",
    description: "סצנה מאוירת מתוך פרק",
  },
  {
    title: "איור רחב — נוף",
    category: "איור",
    image: "/images/archive/book-knight-wide.jpg",
    alt: "איור נוף רחב מתוך סדרת הספר",
    tag: "איור ספר",
    description: "איור נוף בפורמט רחב",
  },
  // ---- קריקטורות ----
  {
    title: "קריקטורה אישית",
    category: "קריקטורות",
    image: "/images/archive/caricature-person-1.jpg",
    alt: "קריקטורה דיגיטלית אישית שאוירה באירוע",
    tag: "אירוע",
    description: "קריקטורה דיגיטלית של אדם — אוירה ישירות באירוע",
  },
  {
    title: "קריקטורה באירוע",
    category: "קריקטורות",
    image: "/images/archive/caricature-person-2.jpg",
    alt: "קריקטורה דיגיטלית חיה שאוירה במהלך אירוע",
    tag: "אירוע",
    description: "איור חי על מסך — מול האורחים בזמן אמת",
  },
  {
    title: "קריקטורה — דיוקן",
    category: "קריקטורות",
    image: "/images/archive/caricature-person-3.jpg",
    alt: "דיוקן קריקטורה דיגיטלי אישי",
    tag: "אירוע",
    description: "דיוקן קריקטורה אישי — בסגנון חם והומוריסטי",
  },
  {
    title: "קריקטורה תקשורתית — קמפיין",
    category: "קריקטורות",
    image: "/images/archive/caricature-media-1.jpg",
    alt: "קריקטורה תקשורתית בעלת אופי בוגר שזכתה לפרסום",
    tag: "תקשורת",
    description: "קריקטורה תקשורתית — מתוך עבודות שזכו לפרסום",
  },
  {
    title: "איור למאמר עיתונאי",
    category: "קריקטורות",
    image: "/images/archive/caricature-media-2.jpg",
    alt: "איור למאמר במוסף יומן של מקור ראשון",
    tag: "מקור ראשון",
    description: "איור למאמר במוסף 'יומן' של מקור ראשון",
  },
  {
    title: "קריקטורה פוליטית",
    category: "קריקטורות",
    image: "/images/archive/caricature-media-3.jpg",
    alt: "קריקטורה תקשורתית בעלת מסר חברתי",
    tag: "תקשורת",
    description: "קריקטורה בעלת אופי בוגר ומסר חברתי",
  },
  // ---- עיצוב דמויות / בובות ----
  {
    title: "עיצוב בובה — קונספט",
    category: "עיצוב",
    image: "/images/archive/puppet-concept-1.jpg",
    alt: "איור קונספט מקורי לעיצוב בובת הפעלה",
    tag: "עיצוב דמות",
    description: "איור קונספט לבובת הפעלה — עיצוב דמות מקורי",
  },
  {
    title: "עיצוב בובה — דמות",
    category: "עיצוב",
    image: "/images/archive/puppet-concept-2.jpg",
    alt: "עיצוב דמות בובה צבעוני ומקורי",
    tag: "עיצוב דמות",
    description: "עיצוב דמות בובה — צבעוני ומלא חיים",
  },
  {
    title: "עיצוב בובה — סדרה",
    category: "עיצוב",
    image: "/images/archive/puppet-concept-3.jpg",
    alt: "עיצוב דמות מתוך סדרת בובות לטלוויזיה",
    tag: "עיצוב דמות",
    description: "דמות מתוך סדרת עיצובים להפקה טלוויזיונית",
  },
  {
    title: "הרשל׳ה — דמות",
    category: "עיצוב",
    image: "/images/archive/puppet-herschel.jpg",
    alt: "עיצוב דמות 'הרשל'ה' לאתר ילדים",
    tag: "עיצוב דמות",
    description: "'הרשל'ה' — דמות שעוצבה לאתר ילדים",
  },
  // ---- תפאורה לתיאטרון ----
  {
    title: "תפאורה — בית המקדש",
    category: "תפאורה",
    image: "/images/archive/scenery-temple.jpg",
    alt: "איור תפאורה של בית המקדש להצגת תיאטרון",
    tag: "תיאטרון סצנה",
    description: "איור תפאורה 'בית המקדש' — עבור תיאטרון 'סצנה'",
  },
  {
    title: "תפאורה — מעבדה",
    category: "תפאורה",
    image: "/images/archive/scenery-lab.jpg",
    alt: "איור תפאורה של מעבדה מתוך 'צוות תעלומה'",
    tag: "תיאטרון סצנה",
    description: "מעבדת פרופ' נורמן — מתוך 'צוות תעלומה'",
  },
  {
    title: "תפאורה — רחוב ירושלמי",
    category: "תפאורה",
    image: "/images/archive/scenery-street.jpg",
    alt: "איור תפאורה של רחוב ירושלמי טיפוסי",
    tag: "תיאטרון סצנה",
    description: "רחוב ירושלמי טיפוסי — איור תפאורה להצגה",
  },
];

const categories = [
  "הכל",
  "קומיקס",
  "איור",
  "קריקטורות",
  "עיצוב",
  "תפאורה",
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("הכל");
  const [lightboxItem, setLightboxItem] = useState<
    (typeof galleryItems)[number] | null
  >(null);

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
            🖼️ מהבלוג — גלריית עבודות
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 text-balance">
            יותר מ-120 עבודות{" "}
            <span className="text-pink-500">מקוריות</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 text-pretty">
            מבחר מתוך הארכיון של בלוג האיור{" "}
            <span className="font-bold">&quot;מהראש אל הדף&quot;</span> — קומיקסים,
            איורים, קריקטורות, עיצוב דמויות ותפאורות תיאטרון. כל העבודות נוצרו
            ישירות בידי אלעד יעקובוביץ&apos;.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
          role="group"
          aria-label="סינון לפי קטגוריה"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`px-4 py-2 rounded-full font-bold text-sm transition-all comic-border-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
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
              transition={{ delay: (index % 8) * 0.05, duration: 0.4 }}
              whileHover={{ y: -5, transition: { duration: 0.15 } }}
              className="group bg-white rounded-xl comic-border overflow-hidden cursor-pointer"
              onClick={() => setLightboxItem(item)}
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

        {/* Link to original blog */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href="https://meharoshelhadaf.blogspot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
          >
            🔗 הבלוג המקורי — מהראש אל הדף &rarr;
          </a>
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

      {lightboxItem && (
        <Lightbox
          image={lightboxItem.image}
          alt={lightboxItem.alt}
          title={lightboxItem.title}
          onClose={() => setLightboxItem(null)}
        />
      )}
    </section>
  );
}
