import { type JSX } from 'react';
import type { Project } from '../types/portfolio';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection = ({
  projects,
}: ProjectsSectionProps): JSX.Element => {
  return (
    <section id='projects' className='max-w-5xl mx-auto px-6 py-16'>
      <div className='flex justify-between items-center mb-12'>
        <div className='flex items-center gap-4 w-full max-w-md'>
          <h2 className='text-white text-2xl font-medium'>
            <span className='text-[#C778DD]'>#</span>projects
          </h2>
          <div className='h-[1px] bg-[#C778DD] flex-grow'></div>
        </div>
        <a
          href='#'
          className='text-xs text-white hover:underline whitespace-nowrap'
        >
          View all ~~&gt;
        </a>
      </div>

      <div className='grid md:grid-cols-3 gap-4'>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className='border border-[#ABB2BF] bg-[#282C34] flex flex-col'
          >
            <div className='h-48 border-b border-[#ABB2BF] overflow-hidden'>
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
              />
            </div>
            <div className='p-2 border-b border-[#ABB2BF] text-xs text-[#ABB2BF] flex flex-wrap gap-x-2'>
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
            <div className='p-4 flex-grow flex flex-col justify-between'>
              <div>
                <h3 className='text-white text-xl font-medium'>
                  {project.title}
                </h3>
                <p className='text-xs text-[#ABB2BF] mt-3 leading-relaxed'>
                  {project.description}
                </p>
              </div>
              <div className='mt-6 flex gap-3'>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className='px-4 py-1.5 border border-[#C778DD] text-white text-xs hover:bg-[#C778DD]/10 transition-colors'
                  >
                    Live &lt;~&gt;
                  </a>
                )}
                {project.cachedUrl && (
                  <a
                    href={project.cachedUrl}
                    className='px-4 py-1.5 border border-[#ABB2BF] text-[#ABB2BF] text-xs hover:bg-[#ABB2BF]/10 transition-colors'
                  >
                    Cached &gt;=
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
