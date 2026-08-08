import { useState, type JSX } from 'react';

import { ProjectCard } from './ProjectCard';
import type {
  LocalizedFrontendProject,
  LocalizedGraphicProject,
} from '../../data/projectsData';

interface ProjectsSectionProps {
  lang: 'NO' | 'EN';
  frontendProjects: LocalizedFrontendProject[];
  graphicProjects: LocalizedGraphicProject[];
}

export const ProjectsSection = ({
  lang,
  frontendProjects = [],
  graphicProjects = [],
}: ProjectsSectionProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState<'frontend' | 'graphic'>(
    'frontend'
  );

  const currentProjects =
    activeTab === 'frontend' ? frontendProjects : graphicProjects;

  return (
    <section id='projects' className='max-w-6xl mx-auto px-6 py-16 font-mono'>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-12 gap-6'>
        <div className='flex items-center gap-4 w-full max-w-md'>
          <h2 className='text-white text-2xl md:text-3xl font-medium'>
            <span className='text-[#C778DD]'>#</span>
            {lang === 'NO' ? 'prosjekter' : 'projects'}
          </h2>
          <div className='h-[1px] bg-[#C778DD] flex-grow'></div>
        </div>

        <div className='flex items-center bg-[#282C34] p-1 rounded border border-[#ABB2BF]/40 self-start md:self-auto'>
          <button
            onClick={() => setActiveTab('frontend')}
            className={`px-4 py-1 text-xs font-medium rounded transition-all ${
              activeTab === 'frontend'
                ? 'bg-[#fbd100] text-[#16181d] font-bold '
                : 'text-[#ABB2BF] hover:text-white cursor-pointer'
            }`}
          >
            {lang === 'NO' ? 'Frontend-utvikling' : 'Frontend Dev'}
          </button>
          <button
            onClick={() => setActiveTab('graphic')}
            className={`px-4 py-1 text-xs font-medium rounded transition-all ${
              activeTab === 'graphic'
                ? 'bg-[#fbd100] text-[#16181d] font-bold'
                : 'text-[#ABB2BF] hover:text-white cursor-pointer'
            }`}
          >
            {lang === 'NO' ? 'Grafisk design' : 'Graphic Design'}
          </button>
        </div>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {(currentProjects ?? []).map((project) => (
          <ProjectCard key={project.id} lang={lang} project={project} />
        ))}
      </div>
    </section>
  );
};
