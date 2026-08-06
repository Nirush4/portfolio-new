import type { Project, SkillCategory } from '../types/portfolio';

export const PROJECTS: Project[] = [
  {
    title: 'Publicis Norway API Integration',
    description:
      'Built scalable web applications using React & TypeScript with CI/CD pipelines in Azure DevOps during internship.',
    tech: ['React', 'TypeScript', 'Azure DevOps', 'REST API'],
    liveUrl: '#',
    githubUrl: '#',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?fit=crop&w=600&q=80',
  },
  {
    title: 'Design System & Component Library',
    description:
      'A complete UI token system bridging Figma vector guidelines directly into reusable React components.',
    tech: ['React', 'Tailwind CSS', 'Figma', 'UX/UI'],
    liveUrl: '#',
    githubUrl: '#',
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?fit=crop&w=600&q=80',
  },
  {
    title: 'Fullstack Web Engine',
    description:
      'Web app architecture backed by Express and Node.js for reliable client-server communication.',
    tech: ['Node.js', 'Express', 'Python', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?fit=crop&w=600&q=80',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'Azure DevOps'],
  },
  {
    title: 'Design & UX',
    skills: [
      'UX/UI Design',
      'Design Systems',
      'Figma',
      '8+ Yrs Graphic Design',
    ],
  },
  {
    title: 'Development Tools',
    skills: [
      'Git / GitHub',
      'VS Code',
      'CI/CD Pipelines',
      'AI Assisted Coding',
    ],
  },
];
