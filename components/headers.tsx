"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section";

export default function Headers() {
  const { activeSection, setActiveSection, SetTimeOfLastClick } =
    useActiveSectionContext();
    
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white/20 bg-white/80 backdrop-blur-[0.5rem] shadow-lg shadow-black/[0.03] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950/75 dark:border-white/10"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
      </motion.div>
      
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:gap-5 sm:flex-nowrap">
          {links.map((link, index) => (
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 25
              }}
              className="relative h-3/4 flex items-center justify-center"
              key={link.hash}
            >
              <Link
                onClick={() => {
                  setActiveSection(link.name);
                  SetTimeOfLastClick(Date.now());
                }}
                className={clsx(
                  "relative flex w-full items-center justify-center px-3 py-2 rounded-full transition-all duration-300 hover:scale-105",
                  {
                    "text-gray-950 dark:text-gray-200": activeSection === link.name,
                    "text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-gray-200": activeSection !== link.name,
                  }
                )}
                href={link.hash}
              >
                <span className="relative z-10 font-medium">{link.name}</span>
                
                {/* Simplified active section indicator */}
                {link.name === activeSection && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="absolute inset-0 -z-10 bg-white dark:bg-gray-800 rounded-full shadow-lg"
                  />
                )}
                
                {/* Simple hover effect for non-active items */}
                {link.name !== activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 bg-white/40 dark:bg-gray-700/40 rounded-full opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
