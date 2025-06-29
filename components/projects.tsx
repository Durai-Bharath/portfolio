"use client";
import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["All", "AI Research", "Computer Vision", "NLP Application", "Web Application", "Data Analytics"];
  
  const filteredProjects = selectedCategory && selectedCategory !== "All" 
    ? projectsData.filter(project => project.category === selectedCategory)
    : projectsData;

  return (
    <section
      ref={ref}
      id="projects"
      className="mb-28 max-w-[75rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>Featured Projects</SectionHeading>
      
      <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
      A collection of projects highlighting research, real-world applications, and innovative solutions that demonstrate the power of technology in solving meaningful problems.
      </p>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category === "All" ? null : category)}
            className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
              (selectedCategory === category) || (selectedCategory === null && category === "All")
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Count */}
      <div className="mb-8">
        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
          Showing {filteredProjects.length} of {projectsData.length} projects
          {selectedCategory && selectedCategory !== "All" && (
            <span className="ml-1 text-blue-600 dark:text-blue-400">
              in {selectedCategory}
            </span>
          )}
        </span>
      </div>

      {/* Projects Grid */}
      <div className="space-y-8">
        {filteredProjects.map((project) => (
          <div key={project.title}>
            <Project {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
