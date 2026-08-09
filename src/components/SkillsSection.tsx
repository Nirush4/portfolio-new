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
    <section
      id='skills'
      className='max-w-6xl mx-auto px-6 py-16 font-mono'
      aria-labelledby='skills-heading'
    >
      <div className='flex items-center gap-4 w-full max-w-md mb-12'>
        <h2
          id='skills-heading'
          className='text-white text-2xl md:text-3xl font-medium'
        >
          <span className='text-[#C778DD]' aria-hidden='true'>
            #
          </span>
          {lang === 'NO' ? 'ferdigheter' : 'skills'}
        </h2>
        <div
          className='h-[1px] bg-[#C778DD] flex-grow'
          aria-hidden='true'
        ></div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start'>
        {categories.map((cat, idx) => (
          <article
            key={idx}
            className='bg-[#282C34] border border-[#3d454e] rounded-none overflow-hidden shadow-lg hover:border-[#C778DD] transition-all flex flex-col justify-between'
          >
            <div className='px-4 py-3 bg-[#21252B] border-b border-[#ABB2BF] flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <div className='flex gap-1.5' aria-hidden='true'>
                  <div
                    className='w-2.5 h-2.5 rounded-full bg-[#E06C75]'
                    aria-hidden='true'
                  ></div>
                  <div
                    className='w-2.5 h-2.5 rounded-full bg-[#E5C07B]'
                    aria-hidden='true'
                  ></div>
                  <div
                    className='w-2.5 h-2.5 rounded-full bg-[#98C379]'
                    aria-hidden='true'
                  ></div>
                </div>
                <span className='text-white text-xs font-semibold tracking-wide ml-1'>
                  {cat.title.toLowerCase().replace(/\s+/g, '-')}.tsx
                </span>
              </div>
            </div>

            <div className='p-5 bg-[#161B22] text-xs leading-relaxed'>
              <div
                className='text-[#ABB2BF] mb-3 select-none flex items-center gap-2'
                aria-hidden='true'
              >
                <span className='text-[#61AFEF]'>//</span>
                <span>Stack &amp; Capabilities</span>
              </div>

              <ul
                className='flex flex-wrap gap-2 m-0 p-0 list-none'
                aria-label={`${cat.title} ${
                  lang === 'NO' ? 'ferdigheter' : 'skills'
                }`}
              >
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx}>
                    <span className='inline-block font-sans font-medium text-[#98C379] bg-[#21252B] border border-[#ABB2BF]/60 hover:border-[#C778DD] px-2.5 py-1 transition-all'>
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
