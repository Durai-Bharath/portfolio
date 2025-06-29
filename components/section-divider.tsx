"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center my-24 relative">
      {/* Simplified central gradient orb */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.125, type: "spring", stiffness: 200 }}
      >
        <motion.div
          className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 dark:opacity-40"
          animate={{ rotate: 360 }}
          transition={{
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          }}
        />
      </motion.div>

      {/* Simple connecting lines */}
      <motion.div
        className="absolute h-0.5 w-16 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600 -left-20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      />
      <motion.div
        className="absolute h-0.5 w-16 bg-gradient-to-l from-transparent via-gray-300 to-transparent dark:via-gray-600 -right-20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      />
    </div>
  );
}