import React, { useState } from "react";
import SwipeCards from "./components/SwipeCards";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [started, setStarted] = useState(false);

  const photos = [
    { id: 1, src: "/photos/1.jpg", title: "Tu primer sonrisa", date: "2001", caption: "Desde bebé se notaba la nobleza de tu corazón" },
    { id: 2, src: "/photos/2.jpg", title: "Graduación", date: "2019", caption: "Uno de los momentos más importantes de tu vida 🎓" },
    { id: 3, src: "/photos/3.jpg", title: "Nosotros", date: "2023", caption: "Cada día contigo es mi parte favorita del día ❤️" },
    { id: 4, src: "/photos/4.jpg", title: "Tu viaje", date: "2024", caption: "La aventura más linda de todas 🌍" },
    // agrega más fotos aquí...
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100 text-rose-700 overflow-hidden">
      <AnimatePresence>
        {!started ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center p-8"
          >
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold mb-3"
            >
              🎁 Sorpresa para ti 💕
            </motion.h1>

            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm text-gray-700 max-w-xs mb-6"
            >
              Desliza las tarjetas y recorre algunos de los momentos más lindos de tu vida.
            </motion.p>

            <motion.button
              onClick={() => setStarted(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-rose-600 text-white rounded-xl shadow-lg font-semibold text-sm"
            >
              Empezar 💫
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <SwipeCards photos={photos} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
