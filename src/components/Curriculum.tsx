"use client";

import { motion } from "framer-motion";

const treeNodes = [
  {
    stage: "שלב א׳",
    title: "יסודות — שורשים",
    icon: "🌱",
    color: "bg-green-500",
    items: [
      "קווים, צורות ומרחב",
      "יחסי פרופורציה",
      "ציור מהדמיון מול ציור מהמציאות",
      "הכרת כלי העבודה",
    ],
  },
  {
    stage: "שלב ב׳",
    title: "דמויות — גזע",
    icon: "🦸",
    color: "bg-blue-500",
    items: [
      "בניית דמות — ראש, גוף, ידיים",
      "הבעות פנים ורגשות",
      "תנועה ואקשן",
      "לבוש ואביזרים",
    ],
  },
  {
    stage: "שלב ג׳",
    title: "עולם ורקע — ענפים",
    icon: "🏙️",
    color: "bg-yellow-500",
    items: [
      "פרספקטיבה ועומק",
      "בניית רקע ועולם",
      "מזג אוויר ואווירה",
      "הגדרת הסגנון האישי",
    ],
  },
  {
    stage: "שלב ד׳",
    title: "סיפור — פירות",
    icon: "📖",
    color: "bg-pink-500",
    items: [
      "פאנלים ורצף סיפורי",
      "כתיבת דיאלוגים ובועות",
      "קצב ועריכה",
      "הפקת יצירה מלאה",
    ],
  },
];

const achievements = [
  { icon: "📺", text: "סדנת ציור בערוץ מאיר" },
  { icon: "📚", text: "42 פרקים ב׳מקור לילדים׳" },
  { icon: "🏫", text: "סדנאות בבתי ספר רבים" },
  { icon: "🎨", text: "85+ עבודות מקוריות" },
  { icon: "🎭", text: "5 תפאורות לתיאטרון" },
  { icon: "🤖", text: "8 פרויקטי קומיקס" },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-50 rounded-full translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Curriculum tree */}
          <div>
            <motion.div
              initial={{ opacity: 1, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-sm mb-4">
                🌳 תכנית לימודים — עץ השדה
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                מהשורשים{" "}
                <span className="text-green-600">עד הפירות</span>
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                תכנית לימודים מובנית שמתחילה ביסודות ומסתיימת בהפקת
                יצירה מלאה ומקורית — בכל שלב הילד גדל ומשתפר
              </p>
            </motion.div>

            {/* Tree nodes */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-green-200" />

              <div className="space-y-6">
                {treeNodes.map((node, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 1, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.15, duration: 0.4 }}
                    className="relative flex gap-4 items-start"
                  >
                    {/* Icon bubble */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className={`w-12 h-12 ${node.color} rounded-full comic-border-sm flex items-center justify-center text-xl text-white`}
                      >
                        {node.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-gray-50 rounded-xl comic-border-sm p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-gray-400 uppercase">
                          {node.stage}
                        </span>
                      </div>
                      <h3 className="font-black text-gray-900 mb-3">
                        {node.title}
                      </h3>
                      <ul className="space-y-1">
                        {node.items.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-600 flex items-center gap-2"
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${node.color} flex-shrink-0`}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Credentials & Achievements */}
          <div>
            <motion.div
              initial={{ opacity: 1, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold text-sm mb-4">
                🏆 הניסיון של אלעד
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                ניסיון מוכח ואמיתי
              </h2>
              <p className="text-gray-600 mb-8">
                אלעד ג&apos;ינו הוא מאייר מקצועי עם שנות יצירה ופרסום מאחוריו.
                לא מורה שלמד — אלא אמן שמלמד.
              </p>
            </motion.div>

            {/* Achievement cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((ach, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 1, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  className="bg-white rounded-xl comic-border p-4 text-center"
                >
                  <div className="text-3xl mb-2">{ach.icon}</div>
                  <div className="text-sm font-bold text-gray-800">
                    {ach.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Highlight: Sipur Shel Avir */}
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl comic-border text-white p-6"
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl">📖</div>
                <div>
                  <h3 className="text-xl font-black mb-2">
                    ״סיפורו של אביר״
                  </h3>
                  <p className="text-blue-100 text-sm leading-relaxed mb-3">
                    סדרת קומיקס מקורית שאייר אלעד — 42 פרקים שהתפרסמו
                    בכתב העת הידוע ״מקור לילדים״. סדרה שלמות של קהל ילדים
                    רחב בכל הארץ.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold">
                      42 פרקים
                    </span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold">
                      מקור לילדים
                    </span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold">
                      פרסום ארצי
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Meir Channel */}
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 bg-yellow-50 rounded-2xl comic-border-sm border-2 border-yellow-400 p-5 flex items-center gap-4"
            >
              <span className="text-4xl">📺</span>
              <div>
                <h4 className="font-black text-gray-900">
                  סדנת ציור בערוץ מאיר
                </h4>
                <p className="text-sm text-gray-600">
                  הסדנה שצולמה בטלוויזיה — ילדים עדיין זוכרים אותה עד היום!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
