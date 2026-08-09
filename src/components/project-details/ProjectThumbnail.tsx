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
    className='border border-[#ABB2BF] bg-[#282C34] rounded-none overflow-hidden shadow-lg relative group font-mono'
    role='region'
    aria-label={`${name} thumbnail preview`}
  >
    <div className=' overflow-hidden w-full h-72 md:h-[620px] bg-[#21252B] flex items-center justify-center p-3'>
      <img
        src={thumbnail}
        alt={name}
        className='w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500'
      />
    </div>
  </div>
);
