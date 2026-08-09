import React, { type JSX } from 'react';
import { translations } from '../constants/translations';

interface BackgroundAccentsProps {
  lang: 'NO' | 'EN';
  t: (typeof translations)['NO'];
}

export const BackgroundAccents = ({
  t,
}: BackgroundAccentsProps): JSX.Element => {
  return (
    <>
      <div className='fixed left-6 xl:left-10 top-1/3 hidden xl:flex flex-col items-center gap-3 z-25 font-mono select-none'>
        <span className='text-[11px] text-white font-semibold tracking-wider writing-mode-vertical mb-2'>
          {t.sidebar.socials}
        </span>

        <div className='w-[1px] h-12 bg-[#919191a7] transition-all duration-300 hover:bg-[#569CD6]'></div>

        <div className='flex flex-col gap-6 text-[#808080] py-3 items-center'>
          <div className='relative flex items-center group'>
            <span className='absolute left-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-[10px] text-[#569CD6] font-bold bg-[#161B22] border border-[#30363D] px-2 py-0.5 rounded shadow-md whitespace-nowrap pointer-events-none'>
              git.push
            </span>
            <a
              href='https://github.com/Nirush4'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub Profile'
              className='text-[#e5e5e5] hover:text-[#d1c975] transition-all duration-300 transform hover:-translate-y-0.5 p-1.5 bg-[#161B22]/80 border border-[#30363D] rounded-md shadow-sm'
            >
              <svg className='w-5 h-5 fill-current' viewBox='0 0 24 24'>
                <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' />
              </svg>
            </a>
          </div>

          <div className='relative flex items-center group'>
            <span className='absolute left-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-[10px] text-[#4EC9B0] font-bold bg-[#161B22] border border-[#30363D] px-2 py-0.5 rounded shadow-md whitespace-nowrap pointer-events-none'>
              connect
            </span>
            <a
              href='https://www.linkedin.com/in/nirushan-rajamanoharan/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn Profile'
              className='text-[#e5e5e5] hover:text-[#569CD6] transition-all duration-300 transform hover:-translate-y-0.5 p-1.5 bg-[#161B22]/80 border border-[#30363D] rounded-md shadow-sm'
            >
              <svg className='w-5 h-5 fill-current' viewBox='0 0 24 24'>
                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
              </svg>
            </a>
          </div>
        </div>

        <div className='w-[1px] h-12 bg-[#919191a7] transition-all duration-300 hover:bg-[#569CD6]'></div>

        <span className='text-[10px] text-white font-bold tracking-wider px-1.5 py-0.5 bg-[#161B22] border border-[#30363D] rounded shadow-inner mt-1'>
          {t.sidebar.active}
        </span>
      </div>
    </>
  );
};

export const DotGrid: React.FC<{
  rows?: number;
  cols?: number;
  className?: string;
}> = ({ rows = 5, cols = 5, className = '' }) => {
  return (
    <div
      className={`grid gap-2.5 bg-transparent ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: rows * cols }).map((_, i) => (
        <span
          key={i}
          className='w-1.5 h-1.5 bg-[#C586C0]/60 rounded-full inline-block transition-all hover:bg-[#C586C0] hover:scale-125'
        ></span>
      ))}
    </div>
  );
};
