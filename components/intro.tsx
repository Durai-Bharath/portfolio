"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import img from "../public/img.jpg";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare, FaKaggle } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiDocumentText } from "react-icons/hi";
import { LuBrain } from "react-icons/lu";
import { BiChip } from "react-icons/bi";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const [isMounted, setIsMounted] = useState(false);
  const [neuralConnections, setNeuralConnections] = useState<Array<{id: number, x2: number, y2: number}>>([]);

  useEffect(() => {
    setIsMounted(true);
    // Calculate neural connections only on client side to avoid hydration errors
    const connections = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x2: 100 + 60 * Math.cos(i * Math.PI / 4),
      y2: 100 + 60 * Math.sin(i * Math.PI / 4),
    }));
    setNeuralConnections(connections);
  }, []);
  
  const floatingElements = [
    { icon: LuBrain, color: "text-purple-500", position: "top-4 left-8", delay: 0 },
    { icon: BiChip, color: "text-blue-500", position: "top-12 right-12", delay: 0.5 },
    { icon: LuBrain, color: "text-emerald-500", position: "bottom-16 left-4", delay: 1 },
    { icon: BiChip, color: "text-orange-500", position: "bottom-8 right-8", delay: 1.5 },
  ];

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[75rem] text-center sm:mb-0 scroll-mt-[100rem] relative min-h-screen flex items-center justify-center"
      id="home"
    >
      {/* Floating AI/ML Icons */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 0.6, scale: 1, rotate: 0 }}
          transition={{ 
            delay: element.delay + 1,
            duration: 0.8,
            type: "spring",
            stiffness: 200
          }}
          className={`absolute ${element.position} ${element.color} text-3xl hidden lg:block`}
        >
          <motion.div
            animate={{ 
              y: [-5, 5, -5],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: element.delay
            }}
          >
            {React.createElement(element.icon)}
          </motion.div>
        </motion.div>
      ))}

      <div className="flex flex-col items-center">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 0.8,
          }}
          className="relative mb-12"
        >
          {/* Neural Network Inspired Background */}
          <div className="absolute -inset-20 opacity-20">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <radialGradient id="neuralGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
                </radialGradient>
              </defs>
              <motion.circle
                cx="100" cy="100" r="80"
                fill="url(#neuralGrad)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
              {/* Neural connections */}
              {isMounted && neuralConnections.map((connection) => (
                <motion.line
                  key={connection.id}
                  x1="100" y1="100"
                  x2={connection.x2}
                  y2={connection.y2}
                  stroke="#6366F1"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.8 + connection.id * 0.1, duration: 0.5 }}
                />
              ))}
            </svg>
          </div>

          {/* Profile Image with Glassmorphism Effect */}
          <div className="relative">
            <motion.div
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-30 blur-lg"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <div className="relative backdrop-blur-sm bg-white/10 dark:bg-black/10 rounded-full p-2 border border-white/20">
              <Image
                src={img}
                alt="Bharath - AI/ML Researcher"
                width={200}
                height={200}
                priority={true}
                className="h-48 w-48 object-cover rounded-full border-4 border-white/50 dark:border-white/30 shadow-2xl"
              />
            </div>
          </div>

          {/* Status Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute -bottom-2 -right-2 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
          >
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Active Researcher
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-4xl px-4"
        >
          {/* Title with Gradient Text */}
          <motion.h1 
            className="text-4xl font-bold mb-6 sm:text-5xl lg:text-6xl leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="block text-gray-900 dark:text-white mb-2">
              Hello, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent font-extrabold">
                Bharath
              </span>
            </span>
            <motion.span 
              className="block text-2xl sm:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 font-medium"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              Exploring Intelligence, Driven by the Question &ldquo;Why&rdquo;
              </motion.span>
          </motion.h1>

          {/* Research Focus Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {[
            { text: "Curious", gradient: "from-indigo-500 to-violet-500" },
            { text: "Problem Solver", gradient: "from-rose-500 to-pink-600" },
            { text: "Grit", gradient: "from-sky-500 to-blue-600" },
            { text: "Responsible", gradient: "from-gray-500 to-zinc-500" },            
            ].map((tag, index) => (
              <motion.div
                key={tag.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`px-4 py-2 bg-gradient-to-r ${tag.gradient} text-white rounded-full text-sm font-medium shadow-lg backdrop-blur-sm`}
              >
                {tag.text}
              </motion.div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="text-base md:text-lg text-center leading-relaxed text-gray-800 dark:text-gray-300 mb-8 max-w-2xl mx-auto px-4"
        >
          Passionate about technology and always <span className="font-semibold text-indigo-600 dark:text-indigo-400">curious to learn</span>.  
          I enjoy solving tough problems and <span className="font-semibold text-blue-600 dark:text-blue-400">adapting through challenges</span>.  
          Driven by <span className="font-semibold text-gray-700 dark:text-gray-400">perseverance</span>,  
          I aim to create something meaningful in life.
        </motion.p>


          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="flex justify-center gap-4 mt-8"
          >
            {[
              { href: "https://www.linkedin.com/in/bharath-durai/", icon: BsLinkedin, label: "LinkedIn" },
              { href: "https://github.com/bharath-profile", icon: FaGithubSquare, label: "GitHub" },
              { href: "https://leetcode.com/u/BharathDurai/", icon: SiLeetcode, label: "LeetCode" },
              { href: "https://www.kaggle.com/duraibharath", icon: FaKaggle, label: "Kaggle" },
              { href: "/bharath-resume-june-2025.pdf", icon: HiDocumentText, label: "Resume" } // Add your resume link here
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-2xl p-3 rounded-full bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:bg-white dark:hover:bg-black/30 transition-all duration-300 shadow-lg"
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
