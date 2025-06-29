import { StaticImageData } from "next/image";
import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ProjectData = {
  title: string;
  description: string;
  longDescription: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
  projectUrl: string;
  codeUrl: string;
  liveUrl: string;
  category: string;
  impact: string;
  status: string;
};
