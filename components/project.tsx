"use client";
import { projectsData } from "@/lib/data";
import { useState } from "react";
import Image from "next/image";
import { FiExternalLink, FiGithub, FiArrowRight, FiZap, FiTarget } from "react-icons/fi";

type projectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  longDescription,
  tags,
  codeUrl,
  liveUrl,
  imageUrl,
  category,
  impact,
  status,
}: projectProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI Research": return "from-purple-500 to-pink-500";
      case "Computer Vision": return "from-blue-500 to-cyan-500";
      case "NLP Application": return "from-emerald-500 to-teal-500";
      case "Web Application": return "from-orange-500 to-red-500";
      case "Data Analytics": return "from-indigo-500 to-purple-500";
      default: return "from-gray-500 to-gray-600";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-emerald-500";
      case "Completed": return "bg-blue-500";
      case "In Progress": return "bg-orange-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="group mb-8 sm:mb-12 last:mb-0">
      <section className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 max-w-[90rem] border border-black/5 dark:border-white/10 rounded-2xl overflow-hidden relative shadow-lg backdrop-blur-sm">
        <div className="flex flex-col lg:flex-row min-h-[24rem]">
          {/* Content Section */}
          <div className="flex-1 p-8 lg:p-10 flex flex-col">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getCategoryColor(category)} text-white shadow-sm`}>
                    {category}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(status)} animate-pulse`} />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {status}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-3">
                  {title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6 flex-1">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {description}
              </p>
              
              {/* Expandable Long Description */}
              <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                {isExpanded && longDescription && (
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {longDescription}
                    </p>
                  </div>
                )}
              </div>

              {longDescription && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm mt-2 flex items-center gap-1 transition-colors"
                >
                  {isExpanded ? "Show Less" : "Read More"}
                  <FiArrowRight className={`w-3 h-3 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                </button>
              )}
            </div>

            {/* Impact & Technologies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Impact */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <FiTarget className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-semibold text-gray-900 dark:text-white text-sm">
                    Impact
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {impact}
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <FiZap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="font-semibold text-gray-900 dark:text-white text-sm">
                    Key Technologies
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {tags.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-md">
                      +{tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Technologies Tags */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-black/[0.05] dark:bg-white/[0.05] text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-black/[0.1] dark:hover:bg-white/[0.1] transition-colors border border-gray-200 dark:border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-auto">
              {/* Only show View Live Project button if the URL is not a GitHub link */}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-sm transition-colors duration-300 shadow-lg"
                >
                  <FiExternalLink className="w-4 h-4" />
                  View Live Project
                </a>
              )}

              {codeUrl && (<a
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-sm border border-gray-200 dark:border-gray-600 shadow-md transition-colors duration-300"
              >
                <FiGithub className="w-4 h-4" />
                {codeUrl.includes('github.com') ? 'View Source Code' : 'Source Code'}
              </a>)}
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-[45%] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
            <Image
              src={imageUrl}
              alt={`${title} project screenshot`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
              loading="lazy"
            />
            
            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              <div className={`px-3 py-1 ${getStatusColor(status)} text-white text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm`}>
                {status}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
