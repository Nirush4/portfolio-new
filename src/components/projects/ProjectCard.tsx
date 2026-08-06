import type { JSX } from 'react';
import type { FrontendProject, GraphicProject } from '../../types/portfolio';

interface ProjectCardProps {
  project: FrontendProject | GraphicProject;
  onViewCaseStudy?: (project: FrontendProject | GraphicProject) => void;
}

export const ProjectCard = ({
  project,
  onViewCaseStudy,
}: ProjectCardProps): JSX.Element => {
  const isFrontend = project.category === 'frontend';

  const frontendData = isFrontend ? (project as FrontendProject) : null;
  const graphicData = !isFrontend ? (project as GraphicProject) : null;

  return (
    <div
      style={{
        backgroundColor: 'color-mix(in oklab, #1b1924 95%, transparent)',
      }}
      className='border border-[#30363D] flex flex-col justify-between overflow-hidden group font-mono rounded-lg shadow-xl transition-all duration-300 hover:border-[#C586C0]/60 hover:-translate-y-1'
    >
      <div
        style={{
          backgroundColor: 'color-mix(in oklab, #0d1117 95%, transparent)',
        }}
        className='h-48 border-b border-[#30363D] overflow-hidden relative'
      >
        <div className='absolute top-3 left-3 flex items-center gap-1.5 z-10'>
          <span className='w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80 inline-block'></span>
          <span className='w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80 inline-block'></span>
          <span className='w-2.5 h-2.5 rounded-full bg-[#27C93F]/80 inline-block'></span>
        </div>
        <img
          src={project.thumbnail}
          alt={project.name}
          className='w-full h-full object-cover group-hover:scale-105 transition-all duration-300 pt-8 opacity-95 group-hover:opacity-100'
        />
        <div
          style={{
            backgroundColor: 'color-mix(in oklab, #161B22 90%, transparent)',
          }}
          className='absolute top-2.5 right-3 backdrop-blur-md border border-[#30363D] px-2.5 py-1 text-[11px] text-[#F2CC60] uppercase tracking-wider rounded font-sans font-medium shadow-sm'
        >
          {project.category}
        </div>
      </div>

      {/* Clean Tech/Tools Badges */}
      <div
        style={{
          backgroundColor: 'color-mix(in oklab, #0d1117 60%, transparent)',
        }}
        className='px-4 py-2.5 border-b border-[#30363D] flex flex-wrap gap-1.5'
      >
        {isFrontend &&
          frontendData &&
          frontendData.technologies.map((tech, i) => (
            <span
              key={i}
              className='text-[11px] px-2 py-0.5 bg-[#21262D] text-[#79C0FF] border border-[#30363D] rounded'
            >
              {tech}
            </span>
          ))}
        {!isFrontend &&
          graphicData &&
          graphicData.tools.map((tool, i) => (
            <span
              key={i}
              className='text-[11px] px-2 py-0.5 bg-[#21262D] text-[#7EE787] border border-[#30363D] rounded'
            >
              {tool}
            </span>
          ))}
      </div>

      <div className='p-5 flex-grow flex flex-col justify-between space-y-4'>
        <div>
          {!isFrontend && graphicData && (
            <span className='text-[11px] text-[#79C0FF] uppercase tracking-wider block mb-1 font-sans font-semibold'>
              {graphicData.projectType}
            </span>
          )}
          <h3 className='text-white text-xl font-bold font-sans tracking-tight line-clamp-1'>
            {project.name}
          </h3>

          <p className='text-xs md:text-sm text-[#8B949E] mt-2.5 leading-relaxed line-clamp-3 font-sans'>
            {project.description}
          </p>

          {!isFrontend &&
            graphicData &&
            graphicData.colors &&
            graphicData.colors.length > 0 && (
              <div className='mt-4 flex items-center gap-2 pt-3 border-t border-[#30363D]/60'>
                <span className='text-[11px] text-[#8B949E] font-sans mr-1'>
                  Palette:
                </span>
                {graphicData.colors.map((c, idx) => (
                  <span
                    key={idx}
                    title={c.name}
                    className='w-4 h-4 rounded-full border border-white/20 inline-block shadow-sm'
                    style={{ backgroundColor: c.value }}
                  ></span>
                ))}
              </div>
            )}
        </div>

        <div className='space-y-3 pt-3 border-t border-[#30363D]'>
          <button
            onClick={() => onViewCaseStudy && onViewCaseStudy(project)}
            className='w-full py-2.5 px-4 border cursor-pointer border-[#C586C0]/50 bg-[#C586C0]/10 text-white text-xs font-semibold font-sans hover:bg-[#C586C0] hover:text-[#0D1117] transition-all flex items-center justify-center gap-2 rounded shadow-sm'
          >
            <span>View Case Study</span>
            <span className='font-mono'>~~&gt;</span>
          </button>

          <div className='flex gap-2'>
            {isFrontend && frontendData && (
              <>
                {frontendData.live && (
                  <a
                    href={frontendData.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 text-center py-2 border border-[#30363D] bg-[#21262D] text-[#C9D1D9] text-xs font-sans hover:border-[#C586C0] hover:text-[#C586C0] transition-colors rounded shadow-sm'
                  >
                    Live Demo ↗
                  </a>
                )}
                {frontendData.github && (
                  <a
                    href={frontendData.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 text-center py-2 border border-[#30363D] bg-[#21262D] text-[#8B949E] text-xs font-sans hover:border-[#8B949E] hover:text-white transition-colors rounded shadow-sm'
                  >
                    GitHub Code
                  </a>
                )}
              </>
            )}

            {!isFrontend && graphicData && (
              <>
                {graphicData.behance && (
                  <a
                    href={graphicData.behance}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 text-center py-2 border border-[#30363D] bg-[#21262D] text-[#C9D1D9] text-xs font-sans hover:border-[#C586C0] hover:text-[#C586C0] transition-colors rounded shadow-sm'
                  >
                    Behance ↗
                  </a>
                )}
                {graphicData.figma && (
                  <a
                    href={graphicData.figma}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 text-center py-2 border border-[#30363D] bg-[#21262D] text-[#8B949E] text-xs font-sans hover:border-[#8B949E] hover:text-white transition-colors rounded shadow-sm'
                  >
                    Figma File
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
