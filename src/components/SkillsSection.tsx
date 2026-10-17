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
    <div
      id='skills'
      className='relative w-full font-mono overflow-hidden bg-[#0B1220]'
    >
      <div
        className='w-full h-12 md:h-20 bg-[#F4F5F7] -mb-1 relative z-10'
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0%)',
        }}
        aria-hidden='true'
      />

      <section
        className='bg-[#0B1220] py-16 px-6 text-[#8F9BAE] relative z-10'
        aria-labelledby='skills-heading'
      >
        <div className='max-w-6xl mx-auto'>
          <div className='flex items-center gap-4 w-full max-w-md mb-12'>
            <h2
              id='skills-heading'
              className='text-white text-2xl md:text-4xl font-black tracking-tight'
            >
              <span
                className='text-[rgb(237,242,81)] bg-[#0C121E] border border-[#1E293B] px-2 py-0.5 mr-2'
                aria-hidden='true'
              >
                #
              </span>
              {lang === 'NO' ? 'ferdigheter' : 'skills'}
            </h2>
            <div
              className='h-[2px] bg-[#1E293B] flex-grow'
              aria-hidden='true'
            ></div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start'>
            {categories.map((cat, idx) => (
              <article
                key={idx}
                className='bg-[#121A2C] border border-[#1E293B] rounded-none overflow-hidden shadow-xl hover:border-[rgb(237,242,81)]/80 transition-all flex flex-col justify-between group'
              >
                <div className='px-4 py-3 bg-[#0C121E] border-b border-[#1E293B] flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <div className='flex gap-1.5' aria-hidden='true'>
                      <div
                        className='w-2.5 h-2.5 bg-[#FF5F56]/80'
                        aria-hidden='true'
                      ></div>
                      <div
                        className='w-2.5 h-2.5 bg-[#FFBD2E]/80'
                        aria-hidden='true'
                      ></div>
                      <div
                        className='w-2.5 h-2.5 bg-[#27C93F]/80'
                        aria-hidden='true'
                      ></div>
                    </div>
                    <span className='text-white text-xs font-bold tracking-wider ml-1'>
                      {cat.title.toLowerCase().replace(/\s+/g, '-')}.tsx
                    </span>
                  </div>
                </div>

                <div className='p-5 bg-[#121A2C] text-xs leading-relaxed'>
                  <div
                    className='text-[#8F9BAE] mb-4 select-none flex items-center gap-2 font-bold tracking-wider text-[11px]'
                    aria-hidden='true'
                  >
                    <span className='text-[rgb(237,242,81)]'>//</span>
                    <span>{cat.subTitle}</span>
                  </div>

                  <ul
                    className='flex flex-wrap gap-2 m-0 p-0 list-none'
                    aria-label={`${cat.title} ${
                      lang === 'NO' ? 'ferdigheter' : 'skills'
                    }`}
                  >
                    {cat.skills.map((skill, sIdx) => (
                      <li key={sIdx}>
                        <span className='inline-block font-mono text-[11px] font-bold tracking-wider text-[#8F9BAE] bg-[#0C121E] border border-[#1E293B] group-hover:border-[rgb(237,242,81)]/50 group-hover:text-white px-2.5 py-1 transition-all'>
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div
        className='w-full h-12 md:h-20 bg-[#F4F5F7] -mt-1 relative z-10'
        style={{
          clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)',
        }}
        aria-hidden='true'
      />
    </div>
  );
};
