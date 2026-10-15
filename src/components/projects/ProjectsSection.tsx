import { useState, useEffect, type JSX } from 'react';
import { ProjectCard } from './ProjectCard';
import { Pagination } from './Pagination';
import type {
  LocalizedFrontendProject,
  LocalizedGraphicProject,
} from '../../data/projectsData';
import { getStorageItem, setStorageItem } from '../../utils/localStorage';

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
    const savedTab = getStorageItem<'frontend' | 'graphic'>(
      'portfolio_active_project_tab',
      'frontend'
    );
    return savedTab === 'graphic' || savedTab === 'frontend'
      ? savedTab
      : 'frontend';
  });

  const [currentPage, setCurrentPage] = useState<number>(1);
  const ITEMS_PER_PAGE = 6;

  const handleTabChange = (tab: 'frontend' | 'graphic') => {
    if (tab !== activeTab) {
      setActiveTab(tab);
      setCurrentPage(1);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setStorageItem('portfolio_active_project_tab', activeTab);
  }, [activeTab]);

  const currentProjects =
    activeTab === 'frontend' ? frontendProjects : graphicProjects;

  const totalPages = Math.ceil(currentProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = currentProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section
      id='projects'
      className='bg-[#0B1220] py-20 px-6 font-mono text-[#8F9BAE]'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-12 gap-6'>
          <div className='flex items-center gap-4 w-full max-w-md'>
            <h2 className='text-white text-2xl md:text-3xl font-extrabold uppercase tracking-tight'>
              <span className='text-[rgb(237,242,81)]'>#</span>
              {lang === 'NO' ? 'prosjekter' : 'projects'}
            </h2>
            <div className='h-[1px] bg-[#1E293B] flex-grow'></div>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-14'>
          <button
            onClick={() => handleTabChange('frontend')}
            className={`group text-left p-5 border transition-all duration-300 cursor-pointer flex items-center justify-between rounded-none ${
              activeTab === 'frontend'
                ? 'bg-[#121A2C] border-[rgb(237,242,81)] shadow-xl'
                : 'bg-[#0C121E] border-[#1E293B] hover:border-[#8F9BAE]/50 hover:bg-[#121A2C]'
            }`}
          >
            <div className='flex items-center gap-4'>
              <div
                className={`w-12 h-12 flex items-center justify-center text-sm font-bold transition-colors ${
                  activeTab === 'frontend'
                    ? 'bg-[rgb(237,242,81)] text-[#0C121E]'
                    : 'bg-[#1E293B] text-white group-hover:bg-[#2A384C]'
                }`}
              >
                &lt;/&gt;
              </div>
              <div>
                <span className='block text-[10px] uppercase tracking-widest text-[#8F9BAE] mb-0.5 font-bold'>
                  {lang === 'NO' ? 'Kodeskap' : 'Code Workspace'}
                </span>
                <span
                  className={`block text-sm font-bold uppercase tracking-wider ${
                    activeTab === 'frontend' ? 'text-white' : 'text-[#8F9BAE]'
                  }`}
                >
                  {lang === 'NO' ? 'Frontend-utvikling' : 'Frontend Dev'}
                </span>
              </div>
            </div>
            <div
              className={`w-3 h-3 transition-all ${
                activeTab === 'frontend'
                  ? 'bg-[rgb(237,242,81)]'
                  : 'border border-[#1E293B] bg-transparent'
              }`}
            ></div>
          </button>

          <button
            onClick={() => handleTabChange('graphic')}
            className={`group text-left p-5 border transition-all duration-300 cursor-pointer flex items-center justify-between rounded-none ${
              activeTab === 'graphic'
                ? 'bg-[#121A2C] border-[rgb(237,242,81)] shadow-xl'
                : 'bg-[#0C121E] border-[#1E293B] hover:border-[#8F9BAE]/50 hover:bg-[#121A2C]'
            }`}
          >
            <div className='flex items-center gap-4'>
              <div
                className={`w-12 h-12 flex items-center justify-center text-sm transition-colors ${
                  activeTab === 'graphic'
                    ? 'bg-[rgb(237,242,81)] text-[#0C121E]'
                    : 'bg-[#1E293B] text-white group-hover:bg-[#2A384C]'
                }`}
              >
                🎨
              </div>
              <div>
                <span className='block text-[10px] uppercase tracking-widest text-[#8F9BAE] mb-0.5 font-bold'>
                  {lang === 'NO' ? 'Kreativt studio' : 'Creative Studio'}
                </span>
                <span
                  className={`block text-sm font-bold uppercase tracking-wider ${
                    activeTab === 'graphic' ? 'text-white' : 'text-[#8F9BAE]'
                  }`}
                >
                  {lang === 'NO' ? 'Grafisk design' : 'Graphic Design'}
                </span>
              </div>
            </div>
            <div
              className={`w-3 h-3 transition-all ${
                activeTab === 'graphic'
                  ? 'bg-[rgb(237,242,81)]'
                  : 'border border-[#1E293B] bg-transparent'
              }`}
            ></div>
          </button>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
          {(paginatedProjects ?? []).map((project) => (
            <ProjectCard key={project.id} lang={lang} project={project} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          lang={lang}
        />
      </div>
    </section>
  );
};
