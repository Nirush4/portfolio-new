export const translations = {
  EN: {
    nav: {
      home: 'Home',
      works: 'Projects',
      about: 'About',
      contacts: 'Contacts',
    },
    hero: {
      developerLabel: 'Developer',
      appName: 'SeamlessWebApps',
      nameKey: 'name',
      titleKey: 'title',
      focusKey: 'focus',
      role: 'Nirushan',
      title: 'Front-End Dev',
      focus: 'UX & Fullstack',
      comment1: '// 8 years in graphic design (incl. Senior role)',
      comment2: '// Specializing in React, TypeScript & UX systems',
      contactBtn: 'await contact()',
      projectBtn: 'git view-projects()',
      status: 'Backend Studies',
      workingOn: 'I am currently studying',
    },
    sidebar: {
      socials: '// socials',
      active: 'active',
    },
  },
  NO: {
    nav: {
      home: 'hjem',
      works: 'prosjekter',
      about: 'om-meg',
      contacts: 'kontakt',
    },
    hero: {
      developerLabel: 'Utvikler',
      appName: 'SømløseNettApper',
      nameKey: 'navn',
      titleKey: 'tittel',
      focusKey: 'fokus',
      role: 'Nirushan',
      title: 'Front-end utvikler',
      focus: 'UX & fullstack',
      comment1: '// 8 års grafisk design (inkl. Senior-rolle)',
      comment2: '// Spesialisert i react, typeScript & UX-systemer',
      contactBtn: 'await kontakt()',
      projectBtn: 'git se-prosjekter()',
      status: 'Backend-studier',
      workingOn: 'Jeg studerer for tiden',
    },
    sidebar: {
      socials: '// sosiale',
      active: 'aktiv',
    },
  },
};

import type { SkillCategory } from '../types/portfolio';

export const getLocalizedSkills = (lang: 'NO' | 'EN'): SkillCategory[] => {
  if (lang === 'NO') {
    return [
      {
        title: 'Frontend',
        skills: [
          'React',
          'TypeScript',
          'JavaScript',
          'HTML5',
          'CSS3',
          'Tailwind CSS',
          'Next.js',
          'Redux',
          'Zustand',
          'React Hook Form',
          'Zod',
          'Context API',
          'Sass',
          'Bootstrap',
          'Mantine UI',
          'Material UI',
          'REST API',
          'WebSockets',
          'Vite',
        ],
      },
      {
        title: 'Samarbeid & metodikk',
        skills: [
          'Agile/Scrum',
          'Komponentbasert utvikling',
          'Responsivt design',
          'Universell utforming (WCAG)',
          'Git',
          'GitHub',
          'Azure DevOps (CI/CD)',
          'Jira',
          'Confluence',
          'Sprintplanlegging',
          'Kodegjennomgang',
        ],
      },
      {
        title: 'Testing',
        skills: ['Playwright', 'Cypress', 'Vitest', 'Jest', 'MSW'],
      },
      {
        title: 'Backend (grunnleggende)',
        skills: [
          'Node.js',
          'Express',
          'Hono',
          'Python',
          'PostgreSQL',
          'Supabase',
        ],
      },
      {
        title: 'UX/UI & design (tilleggsstyrke)',
        skills: [
          'Figma',
          'Designsystemer',
          'Wireframing og prototyping',
          'Brukersentrert design',
          'Visuell kommunikasjon',
          'Adobe Creative Suite',
        ],
      },
    ];
  }

  return [
    {
      title: 'Frontend',
      skills: [
        'React',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Next.js',
        'Redux',
        'Zustand',
        'React Hook Form',
        'Zod',
        'Context API',
        'Sass',
        'Bootstrap',
        'Mantine UI',
        'Material UI',
        'REST API',
        'WebSockets',
        'Vite',
      ],
    },
    {
      title: 'Collaboration & Methodology',
      skills: [
        'Agile/Scrum',
        'Component-based development',
        'Responsive design',
        'Accessibility (WCAG)',
        'Git',
        'GitHub',
        'Azure DevOps (CI/CD)',
        'Jira',
        'Confluence',
        'Sprint planning',
        'Code review',
      ],
    },
    {
      title: 'Testing',
      skills: ['Playwright', 'Cypress', 'Vitest', 'Jest', 'MSW'],
    },
    {
      title: 'Backend (Fundamentals)',
      skills: [
        'Node.js',
        'Express',
        'Hono',
        'Python',
        'PostgreSQL',
        'Supabase',
      ],
    },
    {
      title: 'UX/UI & Design (Additional Strength)',
      skills: [
        'Figma',
        'Design systems',
        'Wireframing & prototyping',
        'User-centered design',
        'Visual communication',
        'Adobe Creative Suite',
      ],
    },
  ];
};
