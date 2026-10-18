import type { JSX } from 'react';

interface ProjectThumbnailProps {
  thumbnail: string;
  name: string;
}

export const ProjectThumbnail = ({
  thumbnail,
  name,
}: ProjectThumbnailProps): JSX.Element => (
  <div
    className='border border-[#1E293B] bg-[#121A2C] rounded-none overflow-hidden shadow-xl relative group font-mono'
    role='region'
    aria-label={`${name} thumbnail preview`}
  >
    <div className='overflow-hidden w-full h-72 md:h-[620px] bg-[#0C121E] flex items-center justify-center'>
      <img
        src={thumbnail}
        alt={name}
        className='w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 rounded-none'
      />
    </div>
  </div>
);
