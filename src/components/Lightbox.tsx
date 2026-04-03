"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

type LightboxProps = {
  image: string;
  alt: string;
  title: string;
  onClose: () => void;
};

export default function Lightbox({ image, alt, title, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative max-w-4xl max-h-[85vh] w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={image}
            alt={alt}
            width={1200}
            height={800}
            className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
          />
          <div className="mt-3 text-center text-white font-bold text-lg">
            {title}
          </div>
          <button
            onClick={onClose}
            className="absolute -top-3 -left-3 w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center font-black text-xl shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="סגור תמונה"
          >
            X
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
