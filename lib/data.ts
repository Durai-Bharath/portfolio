import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap} from "react-icons/lu";
import { FaRobot } from "react-icons/fa";
import mri from "@/public/mri.png";
import farmer from "@/public/farmer.png";
import talentScout from "@/public/talentScout.png";
import vehicle from "@/public/vehicle.png";
import hall from "@/public/hall.png";
import supafile from "@/public/supafile.png";

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
   "Driving the development of intelligent solutions with a focus on Computer Vision, NLP, and deploying production-ready LLMs — harnessing GPU acceleration for performance and scalability.",
    icon: React.createElement(FaRobot),
    date: "2025-Present",
    company: "Annz Technology",
    type: "work"
  },
  {
    title: "Software Engineer",
    location: "Chennai, Tamilnadu, India",
    description:
      "Developed scalable software solutions with emphasis on backend systems, APIs, and data processing pipelines.",
    icon: React.createElement(CgWorkAlt),
    date: "2024-2025",
    company: "Annuity Risk India Private Limited",
    type: "work"
  },
  {
    title: "Software Engineer Intern",
    location: "Chennai, Tamilnadu, India",
    description:
      "Gained hands-on experience in software development lifecycle, agile methodologies, and collaborative development.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
    company: "Annuity Risk India Private Limited",
    type: "internship"
  },
  {
    title: "B.Tech in AI & Data Science",
    location: "Sivakasi, Tamilnadu, India",
    description:
      "Specialized in Artificial Intelligence and Data Science with focus on machine learning, deep learning, and computer vision. Graduated with distinction.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
    company: "Mepco Schlenk Engineering College",
    type: "education"
  },
] as const;

export const projectsData = [
  {
    title: "MRI Brain Tumor Classification using SWIN-LSTM",
    description: "Advanced deep learning model combining SWIN Transformer for spatial feature extraction with LSTM for temporal sequence learning, achieving high accuracy in medical image classification.",
    longDescription: "This project focuses on leveraging state-of-the-art deep learning architectures for medical image analysis. The SWIN Transformer excels at capturing hierarchical visual representations while the LSTM component handles sequential dependencies in medical imaging data.",
    tags: ["PyTorch", "Computer Vision", "Medical AI", "Deep Learning", "Python", "Flask"],
    category: "AI Research",
    projectUrl: "https://github.com/Durai-Bharath/SWIN-LSTM/",
    codeUrl: "https://github.com/Durai-Bharath/SWIN-LSTM/",
    liveUrl: null,
    imageUrl: mri,
    impact: "Potential to assist radiologists in early tumor detection",
    status: "Completed"
  },
  {
    title: "Supafile – Service Platform for Company Secretaries",
    description: `Developed a cross-platform Flutter application that allows users to discover and book a variety of professional services offered by Company Secretaries, including legal filings, business registrations, and compliance support.`,
    longDescription: `Supafile streamlines the service discovery and engagement process for users seeking professional assistance from certified Company Secretaries. The app features a scalable backend built with Pocketbase, seamless payment integration via Zoho Pay, and a secure database design that supports dynamic service listings, user profiles, order management, and secure transactions.`,
    tags: ["Flutter", "Pocketbase", "Zoho Pay", "Scalable Architecture"],
    category: "Cross-platform Application",
    projectUrl: "https://supafile.in/",
    codeUrl: null,
    liveUrl: "https://supafile.in/",
    imageUrl: supafile, 
    impact: "Empowers professionals with a dedicated platform to manage and deliver compliance services more efficiently.",
    status: "Live"
  },
  {
    title: "TalentScout - AI-Powered Interview System",
    description: "Intelligent screening chatbot that dynamically generates skill-based interview questions and evaluates candidate responses using advanced NLP techniques and vector similarity matching.",
    longDescription: "An end-to-end AI recruitment solution that personalizes interview experiences based on job requirements. Uses LLM for question generation and vector databases for semantic similarity scoring.",
    tags: ["LLM", "NLP", "Vector Databases", "Streamlit", "Python", "AI"],
    category: "NLP Application",
    projectUrl: "https://talentscout-testing.streamlit.app/",
    codeUrl: "https://github.com/Durai-Bharath/TalentScout",
    liveUrl: "https://talentscout-testing.streamlit.app/",
    imageUrl: talentScout,
    impact: "Streamlines recruitment process for HR teams",
    status: "Live"
  },
  {
    title: "Vehicle Speed Detection System",
    description: "Real-time computer vision system using YOLO V8 for object detection and speed estimation in traffic scenarios, enabling automated traffic monitoring and analysis.",
    longDescription: "Implementation of cutting-edge object detection algorithms for traffic analysis. The system processes video streams in real-time to detect vehicles and calculate their speeds using advanced computer vision techniques.",
    tags: ["YOLO V8", "Computer Vision", "OpenCV", "CUDA", "Python", "Real-time"],
    category: "Computer Vision",
    projectUrl: "https://github.com/Durai-Bharath/Vehicle-Speed-Detection-YOLO-v8",
    codeUrl: "https://github.com/Durai-Bharath/Vehicle-Speed-Detection-YOLO-v8",
    liveUrl: null,
    imageUrl: vehicle,
    impact: "Enhances traffic monitoring and road safety",
    status: "Completed"
  },
  {
    title: "Farmers E-Commerce Platform",
    description: "Direct-to-consumer platform eliminating middlemen in agricultural trade, featuring secure payments, inventory management, and fair pricing algorithms.",
    longDescription: "A comprehensive e-commerce solution designed to empower farmers by providing direct access to consumers. Features include real-time pricing, secure payment processing, and analytics dashboard.",
    tags: ["PHP", "PostgreSQL", "Tomcat", "Stripe", "Full-stack", "E-commerce"],
    category: "Web Application",
    projectUrl: "https://github.com/Durai-Bharath/Farmer-E-Commerce",
    codeUrl: "https://github.com/Durai-Bharath/Farmer-E-Commerce",
    liveUrl: null,
    imageUrl: farmer,
    impact: "Empowers farmers with fair pricing",
    status: "Completed"
  },
  {
    title: "Party Hall Analytics System",
    description: "Comprehensive analytics platform for event venue management with complex querying capabilities, data visualization, and business intelligence features.",
    longDescription: "A data-driven solution for event venue management that provides insights into booking patterns, revenue optimization, and operational efficiency through advanced analytics and visualization.",
    tags: ["Node.js", "Express", "MongoDB", "Analytics", "NoSQL", "Visualization"],
    category: "Data Analytics",
    projectUrl: "https://github.com/Durai-Bharath/Hall-Analytics-NoSQL-NodeJs",
    codeUrl: "https://github.com/Durai-Bharath/Hall-Analytics-NoSQL-NodeJs",
    liveUrl: null,
    imageUrl: hall,
    impact: "Optimizes venue operations and revenue",
    status: "Completed"
  }
] as const;

export const skillsData = [
  // Core AI/ML
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing",
  "Computer Vision",
  "Recommendation Systems",
  "LLM Fine-tuning",
  "RAG Systems",
  "Neural Networks",

  // AI/ML Frameworks
  "TensorFlow",
  "PyTorch",
  "Keras",
  "scikit-learn",
  "OpenCV",
  "Hugging Face",
  "YOLO",

  // LLM & Vector Tools
  "LangChain",
  "LangGraph",
  "Vector Databases",
  "FAISS",
  "ChromaDB",
  "vllm",

  // Programming Languages
  "C",
  "C++",
  "Java",
  "Python",
  "Dart",
  "SQL",

  // Web & Mobile Development
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Flutter",
  "HTML/CSS",
  "Tailwind CSS",

  // Databases & Cloud
  "PostgreSQL",
  "MongoDB",
  "Neo4j",
  "Cassandra",
  "SQLite",
  "AWS",
  "Firebase",

  // Tools & Technologies
  "Git",
  "Docker",
  "Jupyter",
  "Streamlit",
  "Flask",
  "FastAPI",
  "Postman",
  "CUDA"
] as const;

