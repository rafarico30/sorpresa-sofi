import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SwipeCards({ photos }) {
  const [index, setIndex] = useState(0);
  const [swiped, setSwiped] = useState(false);

  const nextCard = () => {
    setSwiped(true);
    setTimeout(() => {
      setSwiped(false);
      setIndex((prev) => prev + 1);
    }, 400);
  };

  const currentPhoto = photos[index];

  if (index >= photos.length) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center h-screen text-center px-6"
      >
        <h2 className="text-3xl font-bold mb-4">🎉 ¡Has llegado al final!</h2>
        <p className="text-lg text-gray-700 mb-6">
          Gracias por tomarte el tiempo de ver cada recuerdo 💕
        </p>
        <motion.div
          animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-5xl"
        >
          💖
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 text-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPhoto.id}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white shadow-xl rounded-2xl overflow-hidden w-80 sm:w-96"
        >
          <img
            src={currentPhoto.src}
            alt={currentPhoto.title}
            className="w-full h-72 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-rose-700 mb-1">
              {currentPhoto.title}
            </h2>
            <p className="text-gray-500 text-sm mb-2">{currentPhoto.date}</p>
            <p className="text-gray-700 text-sm italic">
              {currentPhoto.caption}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextCard}
        className="mt-6 px-6 py-2 bg-rose-600 text-white rounded-xl shadow-md font-semibold"
      >
        Siguiente 💫
      </motion.button>
    </div>
  );
}
