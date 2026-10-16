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
    <div id='projects' className='relative w-full font-mono overflow-hidden'>
      <section className='bg-[rgb(237,242,81)] pt-20 pb-16 px-6 text-[#0C121E]'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-12 gap-6'>
            <div className='flex items-center gap-4 w-full max-w-md'>
              <h2 className='text-[#0C121E] text-2xl md:text-3xl font-black uppercase tracking-tight'>
                <span className='text-[#0C121E]/60'>/</span>{' '}
                {lang === 'NO' ? 'prosjekter' : 'projects'}
              </h2>
              <div className='h-[2px] bg-[#0C121E] flex-grow'></div>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-14'>
            <button
              onClick={() => handleTabChange('frontend')}
              className={`group text-left p-5 border-2 transition-all duration-300 cursor-pointer flex items-center justify-between rounded-none ${
                activeTab === 'frontend'
                  ? 'bg-[#0C121E] text-white border-[#0C121E] shadow-[4px_4px_0px_0px_rgba(12,18,30,0.3)]'
                  : 'bg-[rgb(237,242,81)] text-[#0C121E] border-[#0C121E] hover:bg-[#0C121E] hover:text-white'
              }`}
            >
              <div className='flex items-center gap-4'>
                <div
                  className={`w-12 h-12 flex items-center justify-center text-sm font-bold transition-colors ${
                    activeTab === 'frontend'
                      ? 'bg-[rgb(237,242,81)] text-[#0C121E]'
                      : 'bg-[#0C121E] text-white group-hover:bg-[rgb(237,242,81)] group-hover:text-[#0C121E]'
                  }`}
                >
                  &lt;/&gt;
                </div>
                <div>
                  <span
                    className={`block text-[10px] uppercase tracking-widest mb-0.5 font-bold ${
                      activeTab === 'frontend'
                        ? 'text-[#8F9BAE]'
                        : 'text-[#0C121E]/70 group-hover:text-[#8F9BAE]'
                    }`}
                  >
                    {lang === 'NO' ? 'Kodeskap' : 'Code Workspace'}
                  </span>
                  <span className='block text-sm font-black uppercase tracking-wider'>
                    {lang === 'NO' ? 'Frontend-utvikling' : 'Frontend Dev'}
                  </span>
                </div>
              </div>
              <div
                className={`w-3 h-3 transition-all ${
                  activeTab === 'frontend'
                    ? 'bg-[rgb(237,242,81)]'
                    : 'border-2 border-[#0C121E] bg-transparent group-hover:border-[rgb(237,242,81)] group-hover:bg-[rgb(237,242,81)]'
                }`}
              ></div>
            </button>

            <button
              onClick={() => handleTabChange('graphic')}
              className={`group text-left p-5 border-2 transition-all duration-300 cursor-pointer flex items-center justify-between rounded-none ${
                activeTab === 'graphic'
                  ? 'bg-[#0C121E] text-white border-[#0C121E] shadow-[4px_4px_0px_0px_rgba(12,18,30,0.3)]'
                  : 'bg-[rgb(237,242,81)] text-[#0C121E] border-[#0C121E] hover:bg-[#0C121E] hover:text-white'
              }`}
            >
              <div className='flex items-center gap-4'>
                <div
                  className={`w-12 h-12 flex items-center justify-center text-sm transition-colors ${
                    activeTab === 'graphic'
                      ? 'bg-[rgb(237,242,81)] text-[#0C121E]'
                      : 'bg-[#0C121E] text-white group-hover:bg-[rgb(237,242,81)] group-hover:text-[#0C121E]'
                  }`}
                >
                  🎨
                </div>
                <div>
                  <span
                    className={`block text-[10px] uppercase tracking-widest mb-0.5 font-bold ${
                      activeTab === 'graphic'
                        ? 'text-[#8F9BAE]'
                        : 'text-[#0C121E]/70 group-hover:text-[#8F9BAE]'
                    }`}
                  >
                    {lang === 'NO' ? 'Kreativt studio' : 'Creative Studio'}
                  </span>
                  <span className='block text-sm font-black uppercase tracking-wider'>
                    {lang === 'NO' ? 'Grafisk design' : 'Graphic Design'}
                  </span>
                </div>
              </div>
              <div
                className={`w-3 h-3 transition-all ${
                  activeTab === 'graphic'
                    ? 'bg-[rgb(237,242,81)]'
                    : 'border-2 border-[#0C121E] bg-transparent group-hover:border-[rgb(237,242,81)] group-hover:bg-[rgb(237,242,81)]'
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

      <div
        className='w-full h-16 md:h-24 bg-[rgb(237,242,81)]'
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 25%, 0 100%)',
        }}
      />
    </div>
  );
};
