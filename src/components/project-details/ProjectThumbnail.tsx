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
    style={{
      backgroundColor: 'color-mix(in oklab, #0d1117 95%, transparent)',
    }}
    className='border border-[#30363D] rounded-lg overflow-hidden shadow-inner relative group'
  >
    <div className='absolute top-3 left-4 flex items-center gap-1.5 z-10 opacity-70'>
      <span className='w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block'></span>
      <span className='w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block'></span>
      <span className='w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block'></span>
    </div>

    <div className='pt-10 overflow-hidden w-full h-72 md:h-[620px]'>
      <img
        src={thumbnail}
        alt={name}
        className='w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500'
      />
    </div>
  </div>
);
