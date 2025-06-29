"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      className="mb-28 max-w-[75rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>About Me</SectionHeading>

      <div className="max-w-4xl mx-auto">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-left space-y-6"
        >
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            As a Software Engineer with a specialized background in{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              Artificial Intelligence and Data Science
            </span>
            , I’m passionate about pushing the boundaries of what’s possible with intelligent systems. What drives me most is the{" "}
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">
              intersection of innovation and real-world impact
            </span>
            — I believe in building technology that solves meaningful problems and improves lives. I aspire to lead with purpose, create lasting impact, and harness the{" "}
            <span className="font-semibold text-pink-600 dark:text-pink-400">
              power of the mind
            </span>{" "}
            to achieve extraordinary outcomes.
          </p>

          </div>

          {/* Key Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
              Technical Interests
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Medical AI",
                "Computer Vision",
                "Deep Learning",
                "NLP & LLMs",
                "Algorithms",
                "System Design"
              ].map((interest, index) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:scale-105 transition-transform"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-16 p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-cyan-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-cyan-900/20 rounded-2xl border border-blue-200/50 dark:border-blue-700/50 text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Mission
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
          &ldquo;To develop solutions that are not only technically excellent, but also ethical, accessible, and genuinely impactful in solving real-world challenges.&rdquo;
        </p>
      </motion.div>
    </motion.section>
  );
}
