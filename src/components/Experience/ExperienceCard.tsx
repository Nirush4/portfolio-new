import type { JSX } from 'react';

interface ExperienceCardProps {
  period: string;
  role: string;
  company: string;
  link?: string;
  badge: string;
  tasks: string[];
  lang: 'NO' | 'EN';
}

export const ExperienceCard = ({
  period,
  role,
  company,
  link,
  badge,
  tasks,
  lang,
}: ExperienceCardProps): JSX.Element => {
  return (
    <div className='relative group'>
      <div className='absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#161B22] border-2 border-[#C586C0] group-hover:bg-[#C586C0] transition-colors duration-300 shadow-md z-10'></div>

      <div className='bg-[#161B22]/90  border-[#30363D] hover:border-[#C586C0]/50 transition-all duration-300 p-4 md:p-6 shadow-xl'>
        <div className='flex flex-wrap items-center justify-between gap-3 mb-3'>
          <span className='text-xs font-mono font-medium px-3 py-1 bg-[#21262D] text-[#79C0FF] rounded-full border border-[#30363D]'>
            {period}
          </span>
          <span className='text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#1b1924] text-[#C586C0] border border-[#C586C0]/30'>
            {badge}
          </span>
        </div>

        <h3 className='text-white text-xl md:text-2xl font-bold font-sans flex items-center gap-2 mb-1'>
          <span className='text-[#C586C0]'>&gt;</span> {role}
        </h3>

        <div className='flex flex-wrap items-center gap-2 mb-5 text-sm font-mono'>
          <span className='text-[#79C0FF] font-medium'>{company}</span>
          {link && (
            <>
              <span className='text-[#8B949E]'>•</span>
              <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#C586C0] hover:underline'
              >
                {link}
              </a>
            </>
          )}
        </div>

        <div className='mb-6 font-sans'>
          <p className='text-xs font-mono font-bold text-white uppercase tracking-wider mb-2.5'>
            {lang === 'NO' ? 'Fokus & Erfaring:' : 'Focus & Experience:'}
          </p>
          <ul className='space-y-2 ml-4 list-disc text-sm text-[#8B949E]'>
            {tasks.map((task, i) => (
              <li key={i} className='leading-relaxed'>
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
