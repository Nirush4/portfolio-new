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
    <div className='relative group font-mono'>
      <div className='absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-none bg-[rgb(237,242,81)] border-2 border-[#0C121E] group-hover:bg-[#0C121E] transition-colors duration-300 shadow-md z-10'></div>

      <div className='bg-white border-2 border-[#0C121E] p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(12,18,30,1)] rounded-none text-[#0C121E]'>
        <div className='flex flex-wrap items-center justify-between gap-3 mb-4'>
          <span className='text-xs font-bold px-3 py-1 bg-[#0C121E] text-white tracking-wider'>
            {period}
          </span>
          <span className='text-[10px] font-black tracking-widest px-2.5 py-1 bg-[rgb(237,242,81)] border border-[#0C121E] text-[#0C121E]'>
            {badge}
          </span>
        </div>

        <h3 className='text-[#0C121E] text-xl md:text-2xl font-black tracking-tight flex items-center gap-2 mb-1'>
          <span>&gt;</span> {role}
        </h3>

        <div className='flex flex-wrap items-center gap-2 mb-5 text-xs text-[#0C121E]/80 font-bold tracking-wider'>
          <span className='text-[#0C121E] font-black'>{company}</span>
          {link && (
            <>
              <span>•</span>
              <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#0C121E] underline hover:bg-[rgb(237,242,81)] px-1 transition-colors'
              >
                {link} ↗
              </a>
            </>
          )}
        </div>

        <div>
          <p className='text-xs font-black text-[#0C121E] tracking-widest mb-3 border-b-2 border-[#0C121E]/20 pb-2'>
            {lang === 'NO' ? 'Fokus & Erfaring:' : 'Focus & Experience:'}
          </p>
          <ul className='space-y-2 ml-4 list-disc text-xs md:text-sm text-[#0C121E]/90 font-medium'>
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
