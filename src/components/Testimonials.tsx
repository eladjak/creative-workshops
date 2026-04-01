"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    text: "הסדנה של אלעד היתה חוויה מדהימה! הילדים לא רצו לסיים. כל אחד יצא עם קומיקס משלו ופנים זורחות.",
    name: "מירה כהן",
    role: "מחנכת כיתה ה׳, בית ספר רמת השרון",
    emoji: "👩‍🏫",
    color: "bg-blue-50 border-blue-200",
  },
  {
    text: "ארגנו סדנה כפעילות לסוף שנה — הצלחה עצומה! הילדים דיברו על זה שבועות אחר כך. ממליצה בחום!",
    name: "דנה לוי",
    role: "רכזת פעילויות, עמותת קשת",
    emoji: "🌟",
    color: "bg-pink-50 border-pink-200",
  },
  {
    text: "הזמנתי לימי הולדת של הבן שלי — לא ידעתי שיצירת קומיקס יכולה להיות כל כך כיף! גם הילדים הביישנים שרדו.",
    name: "רחל ברקוביץ׳",
    role: "אמא לשלושה",
    emoji: "🎂",
    color: "bg-yellow-50 border-yellow-200",
  },
  {
    text: "אלעד מגיע עם כל הציוד, סבלני להפליא, ומצליח לדלות את היצירה מכל ילד. הסדנה בכיתה שלנו שינתה את היחס לאמנות.",
    name: "יוסי שמשי",
    role: "מנהל בית ספר, חולון",
    emoji: "👨‍💼",
    color: "bg-green-50 border-green-200",
  },
  {
    text: "לא האמנתי שהבן שלי — שאמר ׳אני לא יכול לצייר׳ — יצא עם איור שהוא גאה בו. מפה לשם זה כבר חצי שנה שהוא מצייר מדי יום!",
    name: "שירה אביב",
    role: "אמא לניצן, בן 11",
    emoji: "✨",
    color: "bg-purple-50 border-purple-200",
  },
  {
    text: "הסדנה כחוג שבועי שינתה את הדינמיקה של הקבוצה. ילדים שלא הכירו עד כה מצאו שפה משותפת דרך יצירה.",
    name: "אורית גל",
    role: "מנהלת מרכז קהילתי, פתח תקווה",
    emoji: "🏘️",
    color: "bg-orange-50 border-orange-200",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-50 rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-bold text-sm mb-4">
            💬 מה אומרים עלינו
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            המלצות{" "}
            <span className="text-yellow-500">אמיתיות</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            מורים, הורים ומנהלים שהתנסו בסדנאות — הנה מה שהם אומרים
          </p>

          {/* Stars */}
          <div className="flex justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-3xl text-yellow-400">
                ★
              </span>
            ))}
          </div>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.15 } }}
              className={`${testimonial.color} border-2 rounded-2xl p-6 relative`}
            >
              {/* Quote mark */}
              <div className="text-6xl text-gray-200 font-serif leading-none mb-2 select-none">
                &ldquo;
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 text-sm relative z-10">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
                <div className="w-12 h-12 bg-white rounded-full comic-border-sm flex items-center justify-center text-2xl flex-shrink-0">
                  {testimonial.emoji}
                </div>
                <div>
                  <div className="font-black text-gray-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-500">{testimonial.role}</div>
                </div>
              </div>

              {/* Stars */}
              <div className="absolute top-4 left-4 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">
                    ★
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA after testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4 text-lg">
            רוצה שגם הילדים שלך יחוו את הקסם?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-yellow-400 text-gray-900 font-black text-lg rounded-xl comic-border hover:bg-yellow-300 transition-colors"
          >
            קבע סדנה עכשיו! 🎨
          </a>
        </motion.div>
      </div>
    </section>
  );
}
