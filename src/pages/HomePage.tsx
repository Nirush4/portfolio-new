import { type JSX } from 'react';
import { Hero } from '../components/Hero';
import { ProjectsSection } from '../components/ProjectsSection';
import { SkillsSection } from '../components/SkillsSection';
import { AboutSection } from '../components/AboutSection';
import { ContactsSection } from '../components/ContactsSection';
import { PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';
import type { translations } from '../constants/translations';

interface HomeProps {
  lang: 'NO' | 'EN';
  t: (typeof translations)['NO'];
}

export const Home = ({ lang, t }: HomeProps): JSX.Element => {
  return (
    <>
      <Hero lang={lang} t={t} />
      <ProjectsSection projects={PROJECTS} />
      <SkillsSection categories={SKILL_CATEGORIES} />
      <AboutSection />
      <ContactsSection />
    </>
  );
};
