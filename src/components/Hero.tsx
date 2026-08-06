import { type JSX } from 'react';
import { DotGrid } from './BackgroundAccents';
import { translations } from '../constants/translations';

interface HeroProps {
  lang: 'NO' | 'EN';
  t: (typeof translations)['NO'];
}

export const Hero = ({ t }: HeroProps): JSX.Element => {
  return (
    <div className='relative'>
      <section
        id='home'
        className='max-w-6xl mx-auto px-6 pt-24 md:pt-28 pb-20 grid md:grid-cols-12 gap-6 items-center relative font-mono min-h-screen'
      >
        <div className='md:col-span-7 z-10'>
          <div className='text-xs text-[#8B949E] mb-3 font-semibold tracking-wide flex items-center space-x-2'>
            <span className='text-[#C586C0]'>const</span>
            <span className='text-[#4EC9B0]'>{t.hero.developerLabel}</span>
            <span className='text-[#d4d4d4]'>=</span>
            <span className='text-[#C586C0]'>&#123;</span>
          </div>

          <h1 className='text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight pl-2 border-l border-[#C586C0]/40'>
            <span className='text-[#C586C0]'>{t.hero.nameKey}:</span>{' '}
            <span className='text-white'>'{t.hero.role}'</span>, <br />
            <span className='text-[#C586C0]'>{t.hero.titleKey}:</span>{' '}
            <span className='text-[#C586C0]'>'{t.hero.title}'</span>, <br />
            <span className='text-[#C586C0]'>{t.hero.focusKey}:</span>{' '}
            <span className='text-white'>'{t.hero.focus}'</span>
            <span className='text-[#C586C0]'>&#125;</span>
          </h1>

          <div className='mt-6 text-xs md:text-sm leading-relaxed text-[#8B949E] max-w-lg bg-[#161B22] p-4 rounded-md border border-[#C586C0]/30 shadow-inner'>
            <span className='text-[#6a9955] block mb-1'>{t.hero.comment1}</span>
            <span className='text-[#6a9955] block mb-2'>{t.hero.comment2}</span>
            <span className='text-[#C586C0]'>return</span>{' '}
            <span className='text-[#C586C0]'>&lt;</span>
            <span className='text-[#4EC9B0]'>{t.hero.appName}</span>{' '}
            <span className='text-[#9cdcfe]'>userCentric</span>=
            <span className='text-[#C586C0]'>&#123;true&#125;</span>{' '}
            <span className='text-[#C586C0]'>/&gt;</span>;
          </div>

          <div className='mt-8 flex items-center gap-4'>
            <a
              href='#contacts'
              className='px-5 py-2.5 border border-[#C586C0] text-white font-semibold text-sm rounded-md hover:bg-[#C586C0]/20 transition-all transform hover:-translate-y-0.5 shadow-sm'
            >
              {t.hero.contactBtn}
            </a>
            <a
              href='#projects'
              className='px-5 py-2.5 border border-[#30363D] bg-[#21262D] text-[#C9D1D9] hover:text-[#C586C0] hover:border-[#C586C0] rounded-md transition-all text-sm'
            >
              {t.hero.projectBtn}
            </a>
          </div>
        </div>

        <div className='md:col-span-5 relative flex flex-col items-center pt-8'>
          <div className='absolute top-2 left-1/2 -translate-x-1/2 w-44 h-44 border border-[#C586C0]/70 pointer-events-none z-0'></div>
          <div className='absolute top-10 left--2 -translate-x-1/2 w-44 h-44 border border-[#C586C0]/40 pointer-events-none z-0'></div>
          <div className='w-full max-w-[340px] relative z-10'>
            <img
              src='/pic_for_portfolio.png'
              alt='Nirushan Rajamanoharan'
              className='w-full h-auto object-cover'
            />
          </div>

          <DotGrid
            rows={6}
            cols={6}
            className='absolute right-[-10px] top-32 z-25 p-0 gap-3'
          />

          <div className='absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 w-[90%] bg-[#161B22]/95 border border-[#C586C0]/40 px-4 py-2.5 rounded shadow-2xl flex items-center gap-3 backdrop-blur-md z-30'>
            <span className='w-2.5 h-2.5 bg-[#C586C0] rounded-sm inline-block shrink-0'></span>
            <span className='text-xs text-[#8B949E] whitespace-nowrap'>
              Currently working on{' '}
              <strong className='text-white font-semibold'>Portfolio</strong>
            </span>
          </div>
        </div>
      </section>

      <div className='absolute right-0 bottom-[-10px] w-25 h-30 border-l-2 border-t-2 border-b-2 border-[#484f58] pointer-events-none z-20 hidden xl:block' />
    </div>
  );
};
