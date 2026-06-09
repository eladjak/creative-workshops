"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  organization: string;
  type: string;
  message: string;
};

const workshopTypes = [
  "סדנת קומיקס",
  "סדנת איור",
  "סדנת אנימציה",
  "תכנית שנתית לחוג",
  "אירוע מיוחד / יום הולדת",
  "לא החלטתי עדיין",
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    organization: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Send the lead by email via Resend (server route). Non-blocking — we still
    // open WhatsApp so the user always has an instant channel.
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).catch(() => {
      /* email is best-effort; WhatsApp below is the guaranteed channel */
    });

    const message = [
      `שם: ${formData.name}`,
      `טלפון: ${formData.phone}`,
      formData.email ? `אימייל: ${formData.email}` : "",
      formData.organization ? `ארגון: ${formData.organization}` : "",
      formData.type ? `סוג סדנה: ${formData.type}` : "",
      formData.message ? `פרטים: ${formData.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/972544943606?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 dots-bg opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold text-sm mb-4">
            📬 צור קשר
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            בוא{" "}
            <span className="text-blue-600">נדבר!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            ממלאים את הטופס ואלעד יחזור אליכם תוך 24 שעות עם הצעת מחיר
            ופרטים נוספים
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              {/* Quick contact */}
              <div className="bg-white rounded-2xl comic-border p-6">
                <h3 className="font-black text-xl text-gray-900 mb-4">
                  יצירת קשר מהירה
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/972544943606?text=שלום%2C%20פניתי%20דרך%20אתר%20סדנאות%20היצירה%20%28קומיקס%2Fאיור%2Fאנימציה%29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border-2 border-green-200 hover:border-green-400 transition-colors"
                  >
                    <span className="text-3xl">📱</span>
                    <div>
                      <div className="font-black text-gray-900">WhatsApp</div>
                      <div className="text-sm text-gray-500">
                        זמין ראשון-חמישי, 09:00-18:00
                      </div>
                    </div>
                  </a>
                  <a
                    href="mailto:eladjak@gmail.com"
                    className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-colors"
                  >
                    <span className="text-3xl">📧</span>
                    <div>
                      <div className="font-black text-gray-900">אימייל</div>
                      <div className="text-sm text-gray-500">
                        מענה תוך 24 שעות
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://meharoshelhadaf.blogspot.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-pink-50 rounded-xl border-2 border-pink-200 hover:border-pink-400 transition-colors"
                  >
                    <span className="text-3xl">🎨</span>
                    <div>
                      <div className="font-black text-gray-900">
                        הבלוג המקורי
                      </div>
                      <div className="text-sm text-gray-500">
                        meharoshelhadaf.blogspot.com
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Pricing teaser */}
              <div className="bg-blue-600 rounded-2xl comic-border text-white p-6">
                <h3 className="font-black text-xl mb-4">💰 מחירים</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { label: "סדנה בודדת (90 דקות)", price: "החל מ-₪1,000" },
                    { label: "תכנית לחוג (8 מפגשים)", price: "החל מ-₪4,500" },
                    { label: "אירוע / יום הולדת", price: "החל מ-₪900" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border-b border-white/20 pb-2"
                    >
                      <span className="text-blue-100">{item.label}</span>
                      <span className="font-black text-yellow-300">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-blue-200 text-xs mt-4">
                  * המחירים משתנים לפי מספר משתתפים, משך וסוג הסדנה.
                  ממלאים טופס ומקבלים הצעה מותאמת!
                </p>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3">
                {[
                  "✅ ניסיון מוכח",
                  "📺 ערוץ מאיר",
                  "📚 מקור לילדים",
                  "🎨 85+ עבודות",
                ].map((badge, i) => (
                  <span
                    key={i}
                    className="bg-white px-3 py-2 rounded-full text-sm font-bold text-gray-700 comic-border-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-2xl comic-border p-12 text-center"
              >
                <div className="text-7xl mb-4">🎉</div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  תודה! קיבלנו את הפניה
                </h3>
                <p className="text-gray-600">
                  אלעד יחזור אליכם תוך 24 שעות עם כל הפרטים
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl comic-border p-8"
              >
                <h3 className="font-black text-2xl text-gray-900 mb-6">
                  שלחו לנו הצעה 🎨
                </h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">
                        שם מלא *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="ישראל ישראלי"
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">
                        טלפון *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="050-0000000"
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">
                      אימייל
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@school.edu"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">
                      שם הארגון / מוסד
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="בית ספר / חוג / שם פרטי"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">
                      סוג הסדנה המבוקשת
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors bg-white"
                    >
                      <option value="">בחרו סוג סדנה...</option>
                      {workshopTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">
                      פרטים נוספים
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="גיל הילדים, מספר משתתפים, תאריך מבוקש..."
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-blue-600 text-white font-black text-lg rounded-xl comic-border hover:bg-blue-700 transition-colors"
                  >
                    שלח ✨ (מקבלים תגובה תוך 24 שעות)
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
