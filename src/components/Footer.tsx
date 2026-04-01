"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-lg comic-border-sm">
                א
              </div>
              <div>
                <div className="font-black text-lg">סדנאות יצירה</div>
                <div className="text-xs text-gray-400">אלעד ג&apos;ינו</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              סדנאות קומיקס, איור ואנימציה לילדים ובני נוער. מאייר מקצועי
              עם ניסיון מוכח — בתי ספר, חוגים ואירועים.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-black mb-4">ניווט מהיר</h4>
            <div className="space-y-2 text-sm text-gray-400">
              {[
                { href: "#workshops", label: "סדנאות" },
                { href: "#gallery", label: "גלריה" },
                { href: "#curriculum", label: "תכנית לימודים" },
                { href: "#for-who", label: "למי מתאים" },
                { href: "#testimonials", label: "המלצות" },
                { href: "#contact", label: "צור קשר" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Credentials */}
          <div>
            <h4 className="font-black mb-4">ניסיון ופרסומים</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span>📺</span>
                <span>ערוץ מאיר — סדנת ציור מצולמת</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📚</span>
                <span>מקור לילדים — 42 פרקים</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🎨</span>
                <span>85+ עבודות מקוריות</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🖼️</span>
                <span>
                  <a
                    href="https://meharoshelhadaf.blogspot.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors underline"
                  >
                    מהראש אל הדף — הבלוג
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-l from-blue-600 via-pink-500 to-green-500 mb-6"
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>
            © {currentYear} אלעד ג&apos;ינו — סדנאות יצירה. כל הזכויות שמורות.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-blue-500">📖 קומיקס</span>
            <span className="text-pink-500">🖌️ איור</span>
            <span className="text-green-500">🎬 אנימציה</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
