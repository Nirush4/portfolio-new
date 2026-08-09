import { type JSX } from 'react';
import type { SkillCategory } from '../types/portfolio';

interface SkillsSectionProps {
  lang: 'NO' | 'EN';
  categories: SkillCategory[];
}

export const SkillsSection = ({
  lang,
  categories,
}: SkillsSectionProps): JSX.Element => {
  return (
    <section id='skills' className='max-w-6xl mx-auto px-6 py-16 font-mono'>
      <div className='flex items-center gap-4 w-full max-w-md mb-12'>
        <h2 className='text-white text-2xl md:text-3xl font-medium'>
          <span className='text-[#C778DD]'>#</span>
          {lang === 'NO' ? 'ferdigheter' : 'skills'}
        </h2>
        <div className='h-[1px] bg-[#C778DD] flex-grow'></div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start'>
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className='bg-[#161B22]/90 border-2 border-[#30363D] rounded-xl overflow-hidden shadow-xl hover:border-[#C586C0]/60 transition-all group'
          >
            <div className='px-4 py-2.5 bg-[#1F242C] border-b border-[#30363D] flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <span className='text-white text-xs font-semibold tracking-wide ml-1'>
                  {cat.title}.tsx
                </span>
              </div>
            </div>

            <div className='p-4 bg-[#171c23] text-xs leading-relaxed'>
              <div className='text-[#484F58] mb-2 select-none'>
                <span className='text-[#bcc4cd]'>
                  // Stack &amp; Capabilities
                </span>
              </div>

              <div className='flex flex-wrap gap-2 pl-2 border-l border-[#30363D]/60 ml-1'>
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className='bg-[#161B22] text-[#7EE787] border border-[#30363D] hover:border-[#C586C0]/40 px-2.5 py-1 rounded font-sans text-xs font-medium transition-all shadow-sm'
                  >
                    <span className='text-[#C586C0] mr-1'>&bull;</span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
