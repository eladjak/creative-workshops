"use client";

import { motion, Variants } from "framer-motion";

const workshops = [
  {
    icon: "📖",
    title: "סדנת קומיקס",
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
    borderColor: "border-blue-600",
    textColor: "text-blue-600",
    badge: "הכי פופולרי!",
    badgeColor: "bg-yellow-400",
    description:
      "לומדים ליצור דמויות, פאנלים וסיפורים מקוריים. מתחילים מרעיון ומסיימים עם קומיקס מלא!",
    skills: [
      "יצירת דמויות מקוריות",
      "תכנון פאנלים ועלילה",
      "כתיבת דיאלוגים בבועות",
      "שיטות צביעה וסגנון",
      "הפקת קומיקס מלא",
    ],
    duration: "90 דקות",
    ages: "גילאי 8-16",
    highlight: "בהשראת סדרת ״סיפורו של אביר״",
  },
  {
    icon: "🖌️",
    title: "סדנת איור",
    color: "bg-pink-500",
    lightColor: "bg-pink-50",
    borderColor: "border-pink-500",
    textColor: "text-pink-500",
    badge: "מתאים לכולם!",
    badgeColor: "bg-green-400",
    description:
      "מגלים את שפת האיור — מהדמיון לנייר. כל ילד יוצא עם איור שגאה בו ביושר!",
    skills: [
      "בסיסי ציור וקומפוזיציה",
      "ציור דמויות ובעלי חיים",
      "שימוש בצבע ואור",
      "סגנונות שונים ואינדיבידואליים",
      "איור דיגיטלי בסיסי",
    ],
    duration: "60-90 דקות",
    ages: "גילאי 6-15",
    highlight: "85+ עבודות מקוריות כהשראה",
  },
  {
    icon: "🎬",
    title: "סדנת אנימציה",
    color: "bg-green-600",
    lightColor: "bg-green-50",
    borderColor: "border-green-600",
    textColor: "text-green-600",
    badge: "חדשני!",
    badgeColor: "bg-blue-400",
    description:
      "הנפשת דמויות ואפקטים — הסוד שהופך ציורים לסרטים! חוויה טכנולוגית-אמנותית ייחודית.",
    skills: [
      "עקרונות אנימציה בסיסיים",
      "Flipbook ואנימציה ידנית",
      "צילום stop-motion",
      "אנימציה דיגיטלית פשוטה",
      "הפקת סרטון קצר",
    ],
    duration: "90-120 דקות",
    ages: "גילאי 10-17",
    highlight: "טכנולוגיה פוגשת אמנות",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 1, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Workshops() {
  return (
    <section id="workshops" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-50 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold text-sm mb-4">
            🎨 הסדנאות שלנו
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            שלושה עולמות{" "}
            <span className="text-blue-600">יצירה</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            כל סדנה מתוכננת להדליק את הניצוץ היצירתי ולתת לכל ילד כלים
            אמיתיים שישמשו אותו לכל החיים
          </p>
        </motion.div>

        {/* Workshop Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {workshops.map((workshop, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl comic-border overflow-hidden bg-white`}
            >
              {/* Top colored header */}
              <div className={`${workshop.color} p-6 text-white`}>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-5xl">{workshop.icon}</span>
                  <span
                    className={`${workshop.badgeColor} text-gray-900 text-xs font-black px-3 py-1 rounded-full comic-border-sm`}
                  >
                    {workshop.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-black mb-2">{workshop.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {workshop.description}
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Skills */}
                <ul className="space-y-2 mb-6">
                  {workshop.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className={`w-5 h-5 rounded-full ${workshop.color} text-white flex items-center justify-center text-xs font-black flex-shrink-0`}>
                        ✓
                      </span>
                      {skill}
                    </li>
                  ))}
                </ul>

                {/* Meta info */}
                <div className={`${workshop.lightColor} rounded-xl p-4 border-2 ${workshop.borderColor}`}>
                  <div className="flex justify-between text-sm">
                    <div>
                      <span className="text-gray-500">משך:</span>{" "}
                      <span className={`font-bold ${workshop.textColor}`}>
                        {workshop.duration}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">גיל:</span>{" "}
                      <span className={`font-bold ${workshop.textColor}`}>
                        {workshop.ages}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-600 italic">
                    ✨ {workshop.highlight}
                  </div>
                </div>

                <a
                  href="#contact"
                  className={`mt-4 w-full block text-center py-3 ${workshop.color} text-white font-black rounded-xl hover:opacity-90 transition-opacity`}
                >
                  רוצה את הסדנה הזו! →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
