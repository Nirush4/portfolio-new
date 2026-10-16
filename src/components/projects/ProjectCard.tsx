import type { JSX } from 'react';
import { useNavigate } from 'react-router-dom';
import type {
  LocalizedFrontendProject,
  LocalizedGraphicProject,
} from '../../data/projectsData';

interface ProjectCardProps {
  lang: 'NO' | 'EN';
  project: LocalizedFrontendProject | LocalizedGraphicProject;
  onViewCaseStudy?: (
    project: LocalizedFrontendProject | LocalizedGraphicProject
  ) => void;
}

export const ProjectCard = ({
  lang,
  project,
  onViewCaseStudy,
}: ProjectCardProps): JSX.Element => {
  const navigate = useNavigate();

  const isCoding =
    project.category === 'frontend' ||
    project.category === 'fullstack' ||
    project.category === 'backend';

  const codingData = isCoding ? (project as LocalizedFrontendProject) : null;
  const graphicData = !isCoding ? (project as LocalizedGraphicProject) : null;

  const handleCaseStudyClick = () => {
    if (onViewCaseStudy) {
      onViewCaseStudy(project);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/projects/${project.id}`);
  };

  return (
    <div className='bg-[#0C121E] border-2 border-[#0C121E] flex flex-col justify-between overflow-hidden group font-mono shadow-[4px_4px_0px_0px_rgba(12,18,30,0.8)] transition-all duration-300 hover:-translate-y-1 rounded-none text-white'>
      <div className='h-48 bg-[#070B14] border-b-2 border-[#0C121E] overflow-hidden relative'>
        <div className='absolute top-3 left-3 flex items-center gap-1.5 z-10'>
          <span className='w-2.5 h-2.5 bg-[#FF5F56] inline-block'></span>
          <span className='w-2.5 h-2.5 bg-[#FFBD2E] inline-block'></span>
          <span className='w-2.5 h-2.5 bg-[#27C93F] inline-block'></span>
        </div>
        <img
          src={project.thumbnail}
          alt={project.name}
          className='w-full h-full object-cover group-hover:scale-105 transition-all duration-300 pt-8 opacity-95 group-hover:opacity-100'
        />
        <div className='absolute top-2.5 right-3 bg-[rgb(237,242,81)] text-[#0C121E] px-2.5 py-1 text-[10px] uppercase tracking-widest font-black border border-[#0C121E]'>
          {project.category}
        </div>
      </div>

      <div className='px-4 py-2.5 bg-[#121A2C] border-b border-[#1E293B] flex flex-wrap gap-1.5'>
        {isCoding &&
          codingData &&
          (codingData.technologies || []).map((tech, i) => (
            <span
              key={i}
              className='text-[10px] px-2 py-0.5 bg-[#0C121E] text-[#8F9BAE] border border-[#1E293B] uppercase tracking-wider font-bold'
            >
              {tech}
            </span>
          ))}
        {!isCoding &&
          graphicData &&
          (graphicData.tools || []).map((tool, i) => (
            <span
              key={i}
              className='text-[10px] px-2 py-0.5 bg-[#0C121E] text-[rgb(237,242,81)] border border-[#1E293B] uppercase tracking-wider font-bold'
            >
              {tool}
            </span>
          ))}
      </div>

      <div className='p-5 flex-grow flex flex-col justify-between space-y-4'>
        <div>
          {!isCoding && graphicData && graphicData.projectType && (
            <span className='text-[10px] text-[rgb(237,242,81)] uppercase tracking-widest block mb-1 font-extrabold'>
              {graphicData.projectType[lang]}
            </span>
          )}
          <h3 className='text-white text-lg font-black uppercase tracking-tight line-clamp-1'>
            {project.name}
          </h3>

          <p className='text-xs text-[#8F9BAE] mt-2.5 leading-relaxed line-clamp-3'>
            {project.description[lang]}
          </p>

          {!isCoding &&
            graphicData &&
            graphicData.colors &&
            graphicData.colors.length > 0 && (
              <div className='mt-4 flex items-center gap-2 pt-3 border-t border-[#1E293B]'>
                <span className='text-[10px] text-[#8F9BAE] uppercase tracking-wider mr-1 font-bold'>
                  {lang === 'NO' ? 'Palett:' : 'Palette:'}
                </span>
                {graphicData.colors.map((c, idx) => (
                  <span
                    key={idx}
                    role='img'
                    aria-label={`Color swatch: ${c.name}`}
                    title={c.name}
                    className='w-3.5 h-3.5 border border-white/30 inline-block shadow-sm'
                    style={{ backgroundColor: c.value }}
                  ></span>
                ))}
              </div>
            )}
        </div>

        <div className='space-y-2.5 pt-3 border-t border-[#1E293B]'>
          <button
            onClick={handleCaseStudyClick}
            className='w-full py-2.5 px-4 cursor-pointer bg-white text-[#0C121E] text-xs font-black uppercase tracking-widest hover:bg-[rgb(237,242,8)] transition-all flex items-center justify-center gap-2 rounded-none'
          >
            <span>{lang === 'NO' ? 'Se saksstudie' : 'View Case Study'}</span>
            <span className='font-mono'>~~&gt;</span>
          </button>

          <div className='flex gap-2'>
            {isCoding && codingData && (
              <>
                {codingData.live && (
                  <a
                    href={codingData.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 text-center py-2 border border-[#1E293B] bg-[#121A2C] text-[#8F9BAE] text-[11px] uppercase tracking-wider hover:border-[#8F9BAE] hover:text-white transition-colors font-bold'
                  >
                    {lang === 'NO' ? 'Direkte demo ↗' : 'Live Demo ↗'}
                  </a>
                )}
                {codingData.github && (
                  <a
                    href={codingData.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 text-center py-2 border border-[#1E293B] bg-[#121A2C] text-[#8F9BAE] text-[11px] uppercase tracking-wider hover:border-[#8F9BAE] hover:text-white transition-colors font-bold'
                  >
                    {lang === 'NO' ? 'GitHub kode' : 'GitHub Code'}
                  </a>
                )}
              </>
            )}

            {!isCoding && graphicData && (
              <>
                {graphicData.behance && (
                  <a
                    href={graphicData.behance}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 text-center py-2 border border-[#1E293B] bg-[#121A2C] text-[#8F9BAE] text-[11px] uppercase tracking-wider hover:border-[#8F9BAE] hover:text-white transition-colors font-bold'
                  >
                    Behance ↗
                  </a>
                )}
                {graphicData.figma && (
                  <a
                    href={graphicData.figma}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 text-center py-2 border border-[#1E293B] bg-[#121A2C] text-[#8F9BAE] text-[11px] uppercase tracking-wider hover:border-[#8F9BAE] hover:text-white transition-colors font-bold'
                  >
                    {lang === 'NO' ? 'Figma-fil' : 'Figma File'}
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
