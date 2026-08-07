import type { JSX } from 'react';

interface ProjectHeaderProps {
  name: string;
  projectType?: string;
  description: string;
}

export const ProjectHeader = ({
  name,
  projectType,
  description,
}: ProjectHeaderProps): JSX.Element => (
  <div className='space-y-3'>
    <h1 className='text-white text-3xl md:text-5xl font-extrabold tracking-tight font-sans'>
      {name}
    </h1>
    {projectType && (
      <p className='text-xs md:text-sm font-semibold text-[#79C0FF] uppercase tracking-wider font-sans'>
        {projectType}
      </p>
    )}
    <p className='text-sm md:text-base text-[#8B949E] font-sans leading-relaxed pt-2'>
      {description}
    </p>
  </div>
);
