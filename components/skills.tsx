"use client";
import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { BiChip, BiData, BiBrain } from "react-icons/bi";
import { FaRobot, FaPython, FaReact, FaDocker } from "react-icons/fa";

const skillCategories = {
  "AI/ML Core": {
    skills: [
      "Machine Learning", "Deep Learning", "Natural Language Processing", 
      "Computer Vision", "Neural Networks", "Reinforcement Learning"
    ],
    icon: BiBrain,
    color: "from-purple-500 to-pink-500",
    description: "Core AI/ML methodologies and techniques"
  },
  "AI Frameworks": {
    skills: [
      "TensorFlow", "PyTorch", "Keras", "scikit-learn", 
      "OpenCV", "Hugging Face", "YOLO"
    ],
    icon: BiChip,
    color: "from-blue-500 to-cyan-500",
    description: "Deep learning and ML frameworks"
  },
  "LLM & Advanced AI": {
    skills: [
      "LLM Fine-tuning", "RAG Systems", "LangChain", "LangGraph", 
      "Vector Databases", "FAISS", "ChromaDB", "VLLM"
    ],
    icon: FaRobot,
    color: "from-emerald-500 to-teal-500",
    description: "Large Language Models and modern AI systems"
  },
  "Programming": {
    skills: [
      "Python", "C" , "C++" , "Java", "Dart", "SQL"
    ],
    icon: FaPython,
    color: "from-green-500 to-emerald-500",
    description: "Programming languages and paradigms"
  },
  "Web & Mobile": {
    skills: [
      "React", "Next.js", "Node.js", "Express.js", "Flutter", 
      "HTML/CSS", "Tailwind CSS"
    ],
    icon: FaReact,
    color: "from-orange-500 to-red-500",
    description: "Full-stack development technologies"
  },
  "Data & Cloud": {
    skills: [
      "PostgreSQL", "MongoDB","Neo4j" , "Cassandra" , "SQLite", "AWS", "Firebase"
    ],
    icon: BiData,
    color: "from-indigo-500 to-purple-500",
    description: "Databases and cloud platforms"
  },
  "Tools & DevOps": {
    skills: [
      "Git", "Docker", "Jupyter", "Streamlit", "Flask", 
      "FastAPI", "Postman", "CUDA" , "Tableau"
    ],
    icon: FaDocker,
    color: "from-teal-500 to-blue-500",
    description: "Development tools and deployment"
  }
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const getFilteredSkills = () => {
    if (selectedCategory) {
      return skillCategories[selectedCategory as keyof typeof skillCategories].skills
        .filter(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    
    if (searchTerm) {
      return skillsData.filter(skill => 
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return null;
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[75rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Technical Expertise</SectionHeading>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-gray-700 dark:text-gray-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed"
      >
          A versatile and evolving skill set across software engineering, intelligent systems, and scalable architectures — grounded in strong fundamentals and driven by a passion for building impactful, real-world solutions.

      </motion.p>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 max-w-md mx-auto"
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Category Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-12"
      >
        <div className="flex flex-wrap justify-center gap-4">
          <motion.button
            onClick={() => {
              setSelectedCategory(null);
              setSearchTerm("");
            }}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              selectedCategory === null
                ? 'bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg scale-105'
                : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Skills
          </motion.button>
          
          {Object.entries(skillCategories).map(([category, data], index) => (
            <motion.button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setSearchTerm("");
              }}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category
                  ? `bg-gradient-to-r ${data.color} text-white shadow-lg scale-105`
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.05 }}
            >
              {React.createElement(data.icon, { className: "w-4 h-4" })}
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Skills Display */}
      <motion.div className="space-y-8">
        {/* Filtered Skills View */}
        {(selectedCategory || searchTerm) && filteredSkills && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {selectedCategory || `Search Results (${filteredSkills.length})`}
              </h3>
              {selectedCategory && (
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {skillCategories[selectedCategory as keyof typeof skillCategories].description}
                </p>
              )}
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`px-5 py-3 rounded-xl border bg-white/90 dark:bg-gray-800/90 border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300 backdrop-blur-sm ${
                    selectedCategory 
                      ? `hover:bg-gradient-to-r hover:${skillCategories[selectedCategory as keyof typeof skillCategories].color} hover:text-white hover:border-transparent`
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="font-medium text-gray-800 dark:text-white">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Categories View */}
        {!selectedCategory && !searchTerm && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillCategories).map(([category, data], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + categoryIndex * 0.1 }}
                className="group"
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-500 h-full">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${data.color} flex items-center justify-center text-white shadow-lg`}>
                      {React.createElement(data.icon, { className: "w-6 h-6" })}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        {category}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {data.skills.length} skills
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {data.description}
                  </p>

                  {/* Skills Preview */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {data.skills.slice(0, 4).map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.02 }}
                        className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium"
                      >
                        {skill}
                      </motion.span>
                    ))}
                    {data.skills.length > 4 && (
                      <span className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg">
                        +{data.skills.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* View All Button */}
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full mt-auto px-4 py-2 bg-gradient-to-r ${data.color} text-white rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                  >
                    View All Skills
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}
