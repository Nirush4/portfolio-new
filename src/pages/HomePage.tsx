import { type JSX } from 'react';
import { Hero } from '../components/Hero';
import { ProjectsSection } from '../components/projects/ProjectsSection';
import { SkillsSection } from '../components/SkillsSection';
import { AboutSection } from '../components/AboutSection';
import { ContactsSection } from '../components/ContactsSection';

import type { translations } from '../constants/translations';
import { FRONTEND_PROJECTS, GRAPHIC_PROJECTS } from '../data/projectsData';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface HomeProps {
  lang: 'NO' | 'EN';
  t: (typeof translations)['NO'];
}

export const Home = ({ lang, t }: HomeProps): JSX.Element => {
  return (
    <>
      <Hero lang={lang} t={t} />
      <ProjectsSection
        lang={lang}
        frontendProjects={FRONTEND_PROJECTS}
        graphicProjects={GRAPHIC_PROJECTS}
      />
      <SkillsSection lang={lang} categories={SKILL_CATEGORIES} />
      <AboutSection lang={lang} />
      <ContactsSection lang={lang} t={t} />
    </>
  );
};
