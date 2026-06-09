"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

// Real photos from comics workshops with children (October 2024)
const photos = Array.from({ length: 15 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    image: `/images/workshop-photos/workshop-${n}.jpg`,
    alt: `ילדים יוצרים קומיקס בסדנת איור עם אלעד יעקובוביץ' — תמונה ${i + 1}`,
    title: "סדנת קומיקס לילדים",
  };
});

export default function WorkshopPhotos() {
  const [lightbox, setLightbox] = useState<(typeof photos)[number] | null>(null);

  return (
    <section
      id="workshop-photos"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 dots-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-sm mb-4">
            📸 מהשטח
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 text-balance">
            סדנאות אמיתיות,{" "}
            <span className="text-green-600">ילדים אמיתיים</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            תמונות מתוך סדנאות הקומיקס בכיתות — ילדים מציירים, יוצרים דמויות
            ובונים סיפורים משלהם. אווירה חמה, יצירתית ומלאת השראה.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {photos.map((photo, index) => (
            <motion.button
              type="button"
              key={photo.image}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 10) * 0.04, duration: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.15 } }}
              onClick={() => setLightbox(photo)}
              className="group relative aspect-[4/3] rounded-xl comic-border-sm overflow-hidden bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              aria-label={`הגדל תמונה: ${photo.alt}`}
            >
              <Image
                src={photo.image}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-200" />
            </motion.button>
          ))}
        </div>
      </div>

      {lightbox && (
        <Lightbox
          image={lightbox.image}
          alt={lightbox.alt}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
