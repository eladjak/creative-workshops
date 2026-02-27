"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const floatingEmojis = ["✏️", "🎨", "📖", "🖌️", "⭐", "🎬", "💡", "🖊️"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-dvh flex items-center overflow-hidden bg-blue-600"
    >
      {/* Dotted background */}
      <div className="absolute inset-0 dots-bg opacity-30" />

      {/* Decorative comic burst shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-pink-400 rounded-full opacity-20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400 rounded-full opacity-10 blur-3xl" />

      {/* Floating emojis */}
      {floatingEmojis.map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl select-none pointer-events-none"
          style={{
            top: `${10 + ((i * 11) % 80)}%`,
            left: `${5 + ((i * 17) % 90)}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          {emoji}
        </motion.div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 1, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-white text-right"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-black text-sm mb-6 comic-border-sm"
          >
            ⭐ כפי שנראה בערוץ מאיר ⭐
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
            <span className="text-yellow-400">קומיקס</span>
            <br />
            <span className="text-pink-300">איור</span>
            {" & "}
            <span className="text-green-300">אנימציה</span>
            <br />
            <span className="text-white text-4xl lg:text-5xl">
              לילדים שאוהבים ליצור!
            </span>
          </h1>

          <p className="text-xl text-blue-100 mb-8 max-w-xl leading-relaxed">
            סדנאות יצירתיות מקצועיות לבתי ספר, חוגים ואירועים. עם אלעד ג&apos;ינו
            — מאייר &quot;סיפורו של אביר&quot; שפורסם ב&quot;מקור לילדים&quot; ובעל 85+ עבודות מקוריות.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-yellow-400 text-gray-900 font-black text-lg rounded-xl comic-border hover:bg-yellow-300 transition-colors"
            >
              קבל הצעת מחיר עכשיו! 🎨
            </motion.a>
            <motion.a
              href="#workshops"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-white font-black text-lg rounded-xl border-3 border-white hover:bg-white hover:text-blue-600 transition-colors"
              style={{ border: "3px solid white" }}
            >
              ראה את הסדנאות ↓
            </motion.a>
          </div>

          {/* Quick stats */}
          <div className="mt-10 flex flex-wrap gap-6">
            {[
              { num: "85+", label: "עבודות מקוריות" },
              { num: "42", label: "פרקי קומיקס" },
              { num: "100+", label: "ילדים שחוו" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-black text-yellow-400">
                  {stat.num}
                </div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 1, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-2xl overflow-hidden comic-border bg-white">
            <Image
              src="/images/hero.jpg"
              alt="סדנת ציור לילדים - קומיקס, איור ואנימציה"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          {/* Decorative sticker */}
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 -right-6 bg-pink-400 text-white font-black text-sm px-4 py-2 rounded-full comic-border-sm rotate-12"
          >
            🌟 מדהים!
          </motion.div>
          <motion.div
            animate={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute -top-6 -left-6 bg-green-400 text-white font-black text-sm px-4 py-2 rounded-full comic-border-sm -rotate-12"
          >
            🎨 יצירתי!
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-sm font-semibold opacity-75">גלול למטה</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
