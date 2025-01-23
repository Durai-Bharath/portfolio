import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import mri from "@/public/mri.png";
import farmer from "@/public/farmer.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
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
    title: "Word Prediction",
    description:
      "To accurately predict the next word in a sequence, enhancing text input efficiency.",
    tags: ["LSTM", "N-Gram", "NLTK"],
    imageUrl: wordanalyticsImg,
    projectUrl: "https://github.com/Durai-Bharath/Word-Prediction-using-LSTM",
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
  "Tensorflow",
  "keras",
  "sklearn",
  "PyTorch",
  "Weka",
  "Orange",
  "Tableau",
  "Python",
  "Flutter",
  "CV2",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "R",
  "MongoDB",
  "Neo4j",
  "Cassandra",
  "Express",
  "PostgreSQL",
  "Hadoop",
  "kafka",
  "Docker",
  "Postman",
  "Tailwind CSS",
  "Kubernetes",
  "Spring Boot",
  "Hibernate",
  "AWS",
] as const;
