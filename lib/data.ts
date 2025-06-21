import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import mri from "@/public/mri.png";
import farmer from "@/public/farmer.png";
import talentScout from "@/public/talentScout.png";
import vehicle from "@/public/vehicle.png";
import hall from "@/public/hall.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "AI/ML Engineer",
    location: "Chennai, Tamilnadu, India",
    description:
      "Currently employed as an AI/ML Engineer at Annz Technology, contributing to the development and deployment of intelligent solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "2025-Present",
  },
  {
    title: "Software Engineer",
    location: "Chennai, Tamilnadu, India",
    description:
      "I worked full-time as a Software Engineer at Annuity Risk India Private Limited for 1 year..",
    icon: React.createElement(CgWorkAlt),
    date: "2024-2025",
  },
  {
    title: "Software Engineer Intern",
    location: "Chennai, Tamilnadu, India",
    description:
      "I Completed a 3-month Software Engineer internship at Annuity Risk India Private Limited.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2024",
  },
  {
    title: "B.Tech in Artificial Intelligence and Data Science",
    location: "Sivakasi,Tamilnadu,India",
    description:
      "Graduated with a B.Tech degree in Artificial Intelligence and Data Science from Mepco Schlenk Engineering College.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "MRI Brain Tumor Classification using SWIN-LSTM Model",
    description:
      "Leveraging SWIN Transformer for feature extraction and LSTM for sequence learning.",
    tags: ["Torch", "Python", "Flask"],
    projectUrl: "https://github.com/Durai-Bharath/SWIN-LSTM/",
    imageUrl: mri,
  },
  {
    title: "Farmers E-Commerce System",
    description:
      "Developed to eliminate the need for middlemen and ensuring fair pricing.",
    tags: ["PHP", "PostgreSQL", "Tomcat", "Stripe"],
    projectUrl: "https://github.com/Durai-Bharath/Farmer-E-Commerce",
    imageUrl: farmer,
  },
  {
    title: "TalentScout",
    description:
      "An AI-powered screening chatbot that dynamically generates skill-based interview questions and evaluates responses in real-time.",
    tags: ["LLM", "Vector Similarity", "SQLite", "Streamlit", "Python"],
    imageUrl: talentScout,
    projectUrl: "https://talentscout-testing.streamlit.app/",
  },
  {
    title: "Vehicle Speed Detection System",
    description:
      "Developed using the YOLO V8 model, enabling real-time object detection and speed estimation for vehicles in traffic scenarios.",
    tags: ["Anaconda ", "YOLO-V8", "CUDA", "OpenCV"],
    imageUrl: vehicle,
    projectUrl:
      "https://github.com/Durai-Bharath/Vehicle-Speed-Detection-YOLO-v8",
  },
  {
    title: "Party Hall Analytics System",
    description:
      "Implemented complex queries to analyze and visualize hall data efficiently for enhanced decision-making.",
    tags: ["HTML", "CSS", "Node", "Express", "MongoDB"],
    imageUrl: hall,
    projectUrl: "https://github.com/Durai-Bharath/Hall-Analytics-NoSQL-NodeJs",
  },
] as const;

export const skillsData = [
  // Core AI/ML
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing (NLP)",
  "Computer Vision",
  "Recommendation Systems",
  "LLM Fine-tuning",
  "RAG (Retrieval-Augmented Generation)",

  // AI/ML Frameworks
  "TensorFlow",
  "PyTorch",
  "Keras",
  "scikit-learn",
  "OpenCV",

  // LLM & Vector Tools
  "LangChain",
  "LangGraph",
  "Vector Databases (FAISS, ChromaDB)",

  // Programming Languages
  "Python",
  "Dart",
  "JavaScript",
  "TypeScript",

  // Web & Cross-Platform Development
  "Flutter",
  "React",
  "Node.js",
  "Express.js",
  "HTML",
  "CSS",

  // Databases
  "PostgreSQL",
  "MongoDB",
  "SQLite",

  // DevOps & Tools
  "Git",
  "Postman",
  "AWS",
  "Hadoop"
] as const;

