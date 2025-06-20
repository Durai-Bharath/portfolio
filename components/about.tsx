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
      transition={{
        delay: 0.175,
      }}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        {" "}
        After graduating with a degree in{" "}
        <span className="font-medium">
          Artificial Intelligence and Data Science
        </span>
        , I have been deeply passionate about using technology to solve
        real-world problems. Throughout my journey, I have worked on diverse
        projects, including{" "}
        <span className="font-medium">
          brain tumor classification using AI, personalized recommendation
          systems, and vehicle speed detection
        </span>
        . My favorite part of software development is the{" "}
        <span className="italic">problem-solving aspect</span>. I{" "}
        <span className="underline">love</span> the challenge of building
        efficient and impactful solutions. My technical expertise includes{" "}
        <span className="font-medium">
          {" "}
          Python, React, Next.js, Node.js, Flutter, and MongoDB{" "}
        </span>{" "}
        , alongside advanced knowledge of AI/ML frameworks like PyTorch,
        TensorFlow, and Keras. I am also familiar with cloud services like AWS
        and Azure and constantly explore new technologies to stay at the
        forefront of innovation.{" "}
      </p>{" "}
      <p> 
        {" "}
        I enjoy playing
        <span className="font-medium"> hockey </span>, a sport I have
        represented at district-level tournaments. I am highly curious and{" "}
        <span className="font-medium">love learning new things</span>.
        Currently, I’m diving deeper into{" "}
        <span className="font-medium">AI/ML research</span> and enhancing my
        knowledge in areas like{" "}
        <span className="font-medium">
          natural language processing, computer vision, and cross-platform app
          development with Flutter
        </span>
        . In my free time, I enjoy exploring emerging technologies, and working
        on personal projects that spark my creativity.{" "}
      </p>
    </motion.section>
  );
}
