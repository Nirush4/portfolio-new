export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface FrontendProject {
  id: number;
  category: 'frontend';
  name: string;
  description: string;
  problem: string;
  uxProcess: string[];
  figmaDesign: string[];
  finalSolution: string[];
  technologies: string[];
  github: string;
  live: string;
  Figma?: string;
  thumbnail: string;
  screenshots: string[];
}

export interface GraphicProject {
  id: number;
  category: 'graphic' | 'video' | 'analysis';
  name: string;
  projectType: string;
  description: string;
  challenge: string;
  research: string[];
  designProcess: string[];
  designDecisions: string[];
  finalOutcome: string[];
  tools: string[];
  colors: { name: string; value: string }[];
  typography: string[];
  deliverables: string[];
  thumbnail: string;
  thumbnailType: string;
  gallery: { type: string; src: string }[];
  figma: string;
  behance: string;
}

export type Project = FrontendProject | GraphicProject;
