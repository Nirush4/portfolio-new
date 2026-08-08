import { type JSX } from 'react';

import { DotGrid } from './BackgroundAccents';
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
    <section id='skills' className='max-w-5xl mx-auto px-6 py-16'>
      <div className='flex items-center gap-4 w-full max-w-sm mb-12'>
        <h2 className='text-white text-2xl font-medium'>
          <span className='text-[#C778DD]'>#</span>
          {lang === 'NO' ? 'ferdigheter' : 'skills'}
        </h2>
        <div className='h-[1px] bg-[#C778DD] flex-grow'></div>
      </div>

      <div className='grid md:grid-cols-12 gap-8 items-start'>
        {/* Left Graphics Accent Column */}
        <div className='hidden md:col-span-4 md:flex flex-col gap-8 relative pt-4'>
          <DotGrid rows={5} cols={5} className='opacity-50' />
          <div className='w-24 h-24 border border-[#ABB2BF] absolute top-12 left-20'></div>
          <div className='w-16 h-16 border border-[#C778DD] absolute bottom-0 left-4'></div>
        </div>

        {/* Right Modular Skill Cards */}
        <div className='md:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-start'>
          {categories.map((cat, idx) => (
            <div key={idx} className='border border-[#ABB2BF] bg-[#282C34]'>
              <div className='p-2 border-b border-[#ABB2BF] text-white text-xs font-semibold'>
                {cat.title}
              </div>
              <div className='p-2 text-xs text-[#ABB2BF] leading-relaxed flex flex-wrap gap-x-2 gap-y-1'>
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
