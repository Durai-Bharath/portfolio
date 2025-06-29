"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "from-blue-500 to-cyan-500";
      case "education":
        return "from-purple-500 to-pink-500";
      case "internship":
        return "from-emerald-500 to-teal-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 max-w-[75rem]"
    >
      <SectionHeading>Professional Journey</SectionHeading>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-gray-700 dark:text-gray-300 text-lg mb-12 max-w-3xl mx-auto leading-relaxed text-center"
      >
        A journey rooted in strong academic foundations, evolving into hands-on experience with intelligent systems and scalable solutions — bridging innovation with real-world impact.
      </motion.p>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 opacity-30" />

        <div className="space-y-12">
          {experiencesData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`flex flex-col md:flex-row items-start gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Node */}
              <div className="flex-shrink-0 relative">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${getTypeColor(
                    item.type
                  )} flex items-center justify-center text-white shadow-lg text-2xl relative z-10`}
                >
                  {item.icon}
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r opacity-20 animate-pulse blur-sm">
                  <div
                    className={`w-full h-full rounded-full bg-gradient-to-r ${getTypeColor(
                      item.type
                    )}`}
                  />
                </div>
              </div>

              {/* Content Card */}
              <div
                className={`flex-1 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <motion.div
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-500"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getTypeColor(
                            item.type
                          )} text-white shadow-sm`}
                        >
                          {item.type.charAt(0).toUpperCase() +
                            item.type.slice(1)}
                        </span>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-sm">{item.location}</span>
                      </div>
                      {item.company && (
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                          <span className="text-sm font-medium">
                            {item.company}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Key Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.type === "work" && item.title.includes("AI/ML") && (
                        <>
                          <span className="px-3 py-1 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-medium">
                            AI Model Development
                          </span>
                          <span className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium">
                            Production Deployment
                          </span>
                          <span className="px-3 py-1 text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-medium">
                            Computer Vision
                          </span>
                        </>
                      )}
                      {item.type === "work" && !item.title.includes("AI/ML") && (
                        <>
                          <span className="px-3 py-1 text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full font-medium">
                            Full-stack Development
                          </span>
                          <span className="px-3 py-1 text-xs bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full font-medium">
                            API Development
                          </span>
                          <span className="px-3 py-1 text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full font-medium">
                            Data Pipelines
                          </span>
                        </>
                      )}
                      {item.type === "internship" && (
                        <>
                          <span className="px-3 py-1 text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-medium">
                            Agile Development
                          </span>
                          <span className="px-3 py-1 text-xs bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full font-medium">
                            Team Collaboration
                          </span>
                        </>
                      )}
                      {item.type === "education" && (
                        <>
                          <span className="px-3 py-1 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-medium">
                            Research Focus
                          </span>
                          <span className="px-3 py-1 text-xs bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full font-medium">
                            Academic Excellence
                          </span>
                          <span className="px-3 py-1 text-xs bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full font-medium">
                            AI Specialization
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Timeline Connector */}
                  <div
                    className={`hidden md:block absolute top-8 ${
                      index % 2 === 0 ? "-right-4" : "-left-4"
                    } w-8 h-0.5 bg-gradient-to-r ${getTypeColor(item.type)} opacity-30`}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
