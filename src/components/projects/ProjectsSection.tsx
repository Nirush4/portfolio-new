import { useState, useEffect, type JSX } from 'react';
import { ProjectCard } from './ProjectCard';
import type {
  LocalizedFrontendProject,
  LocalizedGraphicProject,
} from '../../data/projectsData';
import { setStorageItem } from '../utils/localStorage';

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
  const [activeTab, setActiveTab] = useState<'frontend' | 'graphic'>(() => {
    const savedTab = localStorage.getItem('portfolio_active_project_tab');
    return savedTab === 'graphic' || savedTab === 'frontend'
      ? savedTab
      : 'frontend';
  });

  useEffect(() => {
    setStorageItem('portfolio_active_project_tab', activeTab);
  }, [activeTab]);

  const currentProjects =
    activeTab === 'frontend' ? frontendProjects : graphicProjects;

  return (
    <section id='projects' className='max-w-6xl mx-auto px-6 py-16 font-mono'>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-10 gap-6'>
        <div className='flex items-center gap-4 w-full max-w-md'>
          <h2 className='text-white text-2xl md:text-3xl font-medium'>
            <span className='text-[#C778DD]'>#</span>
            {lang === 'NO' ? 'prosjekter' : 'projects'}
          </h2>
          <div className='h-[1px] bg-[#C778DD] flex-grow'></div>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-14'>
        <button
          onClick={() => setActiveTab('frontend')}
          className={`group text-left p-5 rounded-xl border-2 transition-all duration-300 cursor-pointer flex items-center justify-between shadow-lg ${
            activeTab === 'frontend'
              ? 'bg-[#1b1924] border-[#C586C0] shadow-[#C586C0]/15 scale-[1.02]'
              : 'bg-[#161B22]/80 border-[#30363D] hover:border-[#8B949E]/50 hover:bg-[#161B22]'
          }`}
        >
          <div className='flex items-center gap-4'>
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold transition-colors ${
                activeTab === 'frontend'
                  ? 'bg-[#c062c5] text-[#0D1117]'
                  : 'bg-[#21262D] text-[#79C0FF] group-hover:bg-[#30363D]'
              }`}
            >
              &lt;/&gt;
            </div>
            <div>
              <span className='block text-[10px] uppercase font-mono tracking-wider text-[#8B949E] mb-0.5'>
                {lang === 'NO' ? 'Kodeskap' : 'Code Workspace'}
              </span>
              <span
                className={`block text-sm font-bold font-sans ${
                  activeTab === 'frontend' ? 'text-white' : 'text-[#C9D1D9]'
                }`}
              >
                {lang === 'NO' ? 'Frontend-utvikling' : 'Frontend Dev'}
              </span>
            </div>
          </div>
          <div
            className={`w-3 h-3 rounded-full border transition-all ${
              activeTab === 'frontend'
                ? 'bg-[#C586C0] border-[#C586C0] shadow-sm shadow-[#C586C0]'
                : 'border-[#30363D] bg-transparent'
            }`}
          ></div>
        </button>

        <button
          onClick={() => setActiveTab('graphic')}
          className={`group text-left p-5 rounded-xl border-2 transition-all duration-300 cursor-pointer flex items-center justify-between shadow-lg ${
            activeTab === 'graphic'
              ? 'bg-[#1b1924] border-[#7EE787] shadow-[#7EE787]/15 scale-[1.02]'
              : 'bg-[#161B22]/80 border-[#30363D] hover:border-[#8B949E]/50 hover:bg-[#161B22]'
          }`}
        >
          <div className='flex items-center gap-4'>
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center text-lg transition-colors ${
                activeTab === 'graphic'
                  ? 'bg-[#71cc75] text-[#0D1117]'
                  : 'bg-[#21262D] text-[#7EE787] group-hover:bg-[#30363D]'
              }`}
            >
              🎨
            </div>
            <div>
              <span className='block text-[10px] uppercase font-mono tracking-wider text-[#8B949E] mb-0.5'>
                {lang === 'NO' ? 'Kreativt studio' : 'Creative Studio'}
              </span>
              <span
                className={`block text-sm font-bold font-sans ${
                  activeTab === 'graphic' ? 'text-white' : 'text-[#C9D1D9]'
                }`}
              >
                {lang === 'NO' ? 'Grafisk design' : 'Graphic Design'}
              </span>
            </div>
          </div>
          <div
            className={`w-3 h-3 rounded-full border transition-all ${
              activeTab === 'graphic'
                ? 'bg-[#7EE787] border-[#7EE787] shadow-sm shadow-[#7EE787]'
                : 'border-[#30363D] bg-transparent'
            }`}
          ></div>
        </button>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {(currentProjects ?? []).map((project) => (
          <ProjectCard key={project.id} lang={lang} project={project} />
        ))}
      </div>
    </section>
  );
};
