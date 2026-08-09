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
  <header className='space-y-3 font-mono'>
    <h1 className='text-white text-3xl md:text-5xl font-extrabold tracking-tight font-sans'>
      <span className='text-[#C778DD]' aria-hidden='true'>
        &gt;
      </span>{' '}
      {name}
    </h1>
    {projectType && (
      <p className='text-xs md:text-sm font-semibold text-[#61AFEF] uppercase tracking-wider font-sans'>
        {projectType}
      </p>
    )}
    <p className='text-sm md:text-base text-[#ABB2BF] font-sans leading-relaxed pt-2'>
      {description}
    </p>
  </header>
);
