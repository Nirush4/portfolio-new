import { type JSX } from 'react';
import { DotGrid } from './BackgroundAccents';
import { translations } from '../constants/translations';

interface HeroProps {
  lang: 'NO' | 'EN';
  t: (typeof translations)['NO'];
}

export const Hero = ({ t, lang }: HeroProps): JSX.Element => {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='relative bg-[#0B1220] text-[#8F9BAE] overflow-hidden'>
      <section
        id='home'
        className='max-w-6xl mx-auto px-6 pt-24 md:pt-28 pb-20 grid md:grid-cols-12 gap-6 items-center relative font-mono min-h-screen'
      >
        <div className='md:col-span-7 z-10'>
          <div className='text-xs text-[#8F9BAE] mb-3 font-semibold tracking-wider flex items-center space-x-2'>
            <span className='text-base text-[rgb(237,242,81)]'>const</span>
            <span className='text-base text-white'>
              {t.hero.developerLabel}
            </span>
            <span className='text-[#8F9BAE]'>=</span>
            <span className='text-[rgb(237,242,81)]'>&#123;</span>
          </div>

          <h1 className='text-white text-3xl md:text-4xl font-extrabold leading-tight tracking-tight pl-3 border-l-4 border-[rgb(237,242,81)]'>
            <span className='text-[#8F9BAE]'>{t.hero.nameKey}:</span>{' '}
            <span className='text-white'>'{t.hero.role}'</span>, <br />
            <span className='text-[#8F9BAE]'>{t.hero.titleKey}:</span>{' '}
            <span className='text-[rgb(237,242,81)]'>'{t.hero.title}'</span>,{' '}
            <br />
            <span className='text-[#8F9BAE]'>{t.hero.focusKey}:</span>{' '}
            <span className='text-white'>'{t.hero.focus}'</span>
            <span className='text-[rgb(237,242,81)]'>&#125;</span>
          </h1>

          <div className='mt-6 text-xs md:text-sm leading-relaxed text-[#8F9BAE] max-w-lg bg-[#121A2C] p-4 rounded-none border border-[#1E293B] shadow-2xl'>
            <span className='text-[#A3E635] block mb-1'>
              // {t.hero.comment1}
            </span>
            <span className='text-[#A3E635] block mb-2'>
              // {t.hero.comment2}
            </span>
            <span className='text-[rgb(237,242,81)]'>return</span>{' '}
            <span className='text-[rgb(237,242,81)]'>&lt;</span>
            <span className='text-white'>{t.hero.appName}</span>{' '}
            <span className='text-[#8F9BAE]'>userCentric</span>=
            <span className='text-[rgb(237,242,81)]'>&#123;true&#125;</span>{' '}
            <span className='text-[rgb(237,242,81)]'>/&gt;</span>;
          </div>

          <div className='mt-8 flex items-center gap-4'>
            <a
              href='#contacts'
              onClick={(e) => handleSmoothScroll(e, 'contacts')}
              className='px-6 py-3 bg-[#0C121E] text-[rgb(237,242,81)] border border-[rgb(237,242,81)] font-black text-xs tracking-widest hover:bg-[rgb(237,242,81)] hover:text-[#0C121E] transition-all'
            >
              {t.hero.contactBtn}
            </a>
            <a
              href='#projects'
              onClick={(e) => handleSmoothScroll(e, 'projects')}
              className='px-6 py-3 bg-[rgb(237,242,81)] text-[#0C121E] font-black text-xs tracking-widest hover:bg-[#DCE13B] transition-all'
            >
              {t.hero.projectBtn}
            </a>
          </div>
        </div>

        <div className='md:col-span-5 relative flex flex-col items-center'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-44 h-44 border border-[#1E293B] pointer-events-none z-0'></div>
          <div className='absolute top-10 left--2 -translate-x-1/2 w-44 h-44 border border-[rgb(237,242,81)]/40 pointer-events-none z-0'></div>

          <div className='w-full max-w-[340px] relative z-10'>
            <img
              src='/portfolio_pic.png'
              alt='Nirushan Rajamanoharan'
              className='w-full h-auto object-cover'
            />
          </div>

          <DotGrid
            rows={6}
            cols={6}
            className='absolute right-[-10px] top-32 z-25 p-0 gap-3 opacity-30'
          />

          <div className='absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 w-[90%] bg-[#0C121E]/95 border border-[#1E293B] px-4 py-2.5 rounded-none shadow-2xl flex items-center gap-3 backdrop-blur-md z-30'>
            <span className='w-2.5 h-2.5 bg-[rgb(237,242,81)] inline-block shrink-0'></span>
            <span className='text-xs text-[#8F9BAE]  tracking-wider'>
              {t.hero.workingOn}{' '}
              <strong className='text-white font-semibold'>
                {lang === 'NO' ? 'backend-utvikling' : 'backend development'}
              </strong>
            </span>
          </div>
        </div>
      </section>

      <div className='absolute right-0 bottom-[-10px] w-25 h-30 border-l border-t border-b border-[#1E293B] pointer-events-none z-20 hidden xl:block' />
    </div>
  );
};
