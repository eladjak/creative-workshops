"use client";

import { motion } from "framer-motion";

const audiences = [
  {
    icon: "🏫",
    title: "בתי ספר",
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
    description:
      "שיעורי העשרה, פעילויות חגים, שבועות מיוחדים — סדנה שהתלמידים יזכרו לכל החיים",
    features: [
      "מתאים לכל רמות הגיל",
      "מותאם לתכנית הלימודים",
      "ניתן לפצל לכיתות",
      "חומרי עבודה כלולים",
      "אפשרות לחוברת מחלקתית",
    ],
    cta: "קבע סדנה לבית הספר",
  },
  {
    icon: "🎯",
    title: "חוגים",
    color: "bg-pink-500",
    lightColor: "bg-pink-50",
    textColor: "text-pink-600",
    description:
      "תכנית שבועית או רצף סדנאות — לחוג שמבין שאמנות היא הרבה יותר מציור",
    features: [
      "תכנית רצופה של 8-12 מפגשים",
      "קבוצות קטנות (8-15 ילדים)",
      "מעקב אחר התקדמות",
      "תיק עבודות אישי",
      "הדגשת הסגנון האישי",
    ],
    cta: "הקם חוג יצירה",
  },
  {
    icon: "🎉",
    title: "אירועים",
    color: "bg-green-600",
    lightColor: "bg-green-50",
    textColor: "text-green-600",
    description:
      "יום הולדת, בר/בת מצווה, מסיבת סיום — פעילות שכל ילד יצא ממנה עם יצירה בידיים",
    features: [
      "סדנת ציור מהנה ומשפחתית",
      "הפתעה לכל המוזמנים",
      "יצירה אישית לכל ילד",
      "גמישות בגילאים ומספרים",
      "מגיעים עם כל הציוד",
    ],
    cta: "הזמן לאירוע שלך",
  },
];

export default function ForWho() {
  return (
    <section
      id="for-who"
      className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 dots-bg opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full font-bold text-sm mb-4">
            👥 למי מתאים
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            לכל מי שאוהב{" "}
            <span className="text-yellow-400">ליצור!</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            הסדנאות מותאמות לקהלים שונים — כל מסגרת מקבלת חוויה
            מותאמת ומקצועית
          </p>
        </motion.div>

        {/* Audience cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl comic-border overflow-hidden"
            >
              {/* Header */}
              <div className={`${audience.color} p-6 text-center`}>
                <div className="text-6xl mb-3">{audience.icon}</div>
                <h3 className="text-2xl font-black text-white">
                  {audience.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {audience.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {audience.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${audience.color} flex-shrink-0`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block w-full text-center py-3 ${audience.color} text-white font-black rounded-xl hover:opacity-90 transition-opacity text-sm`}
                >
                  {audience.cta} →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl comic-border border-white/20 p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "🏫", number: "20+", label: "בתי ספר שהתנסו" },
              { icon: "👦", number: "500+", label: "ילדים שיצרו" },
              { icon: "⭐", number: "100%", label: "שביעות רצון" },
              { icon: "🎨", number: "85+", label: "עבודות מקוריות" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-black text-yellow-400">
                  {stat.number}
                </div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
