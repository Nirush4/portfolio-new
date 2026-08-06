export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl: string;
  cachedUrl?: string;
  image: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
