import { type JSX } from 'react';
import { Hero } from '../components/Hero';
import { ProjectsSection } from '../components/projects/ProjectsSection';
import { SkillsSection } from '../components/SkillsSection';
import { AboutSection } from '../components/AboutSection';
import { ContactsSection } from '../components/ContactsSection';

import {
  getLocalizedSkills,
  type translations,
} from '../constants/translations';
import { FRONTEND_PROJECTS, GRAPHIC_PROJECTS } from '../data/projectsData';

import { ExperienceSection } from '../components/Experience/ExperienceSection';
import { HonorsAwards } from '../components/HonorsAwards';

interface HomeProps {
  lang: 'NO' | 'EN';
  t: (typeof translations)['NO'];
}

export const Home = ({ lang, t }: HomeProps): JSX.Element => {
  const categories = getLocalizedSkills(lang);

  return (
    <>
      <Hero lang={lang} t={t} />
      <ProjectsSection
        lang={lang}
        frontendProjects={FRONTEND_PROJECTS}
        graphicProjects={GRAPHIC_PROJECTS}
      />
      <ExperienceSection lang={lang} />
      <SkillsSection lang={lang} categories={categories} />
      <HonorsAwards lang={lang} />
      <AboutSection lang={lang} />
      <ContactsSection lang={lang} t={t} />
    </>
  );
};
