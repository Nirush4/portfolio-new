import { type JSX, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { translations } from '../constants/translations';

interface NotFoundPageProps {
  lang: 'NO' | 'EN';
  t: (typeof translations)['NO'];
}

export const NotFoundPage = ({ lang, t }: NotFoundPageProps): JSX.Element => {
  const [dots, setDots] = useState('');
  // Safely capture full deployed URL including pathname, search params, and hash
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Animated loading ellipsis effect for terminal log
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      id='main-content'
      className='min-h-screen bg-[#0B1220] text-white font-mono flex flex-col justify-center items-center px-4 sm:px-6 py-28 relative overflow-hidden'
      role='main'
      aria-labelledby='error-title'
    >
      <div className='sr-only' aria-live='assertive'>
        {t.notFound.ariaLive} {currentUrl}
      </div>

      <div
        className='absolute inset-0 pointer-events-none flex items-center justify-center opacity-5 select-none'
        aria-hidden='true'
      >
        <span className='text-[20vw] font-black text-[rgb(237,242,81)] tracking-tighter'>
          404
        </span>
      </div>

      <div className='max-w-2xl w-full bg-[#0C121E] border border-[#1E293B] rounded-none shadow-2xl relative z-10 overflow-hidden'>
        <div className='border-b border-[#1E293B] bg-[#0B1220] px-4 py-3 flex items-center justify-between'>
          <div className='flex items-center gap-2' aria-hidden='true'>
            <span className='w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80 inline-block'></span>
            <span className='w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80 inline-block'></span>
            <span className='w-2.5 h-2.5 rounded-full bg-[#27C93F]/80 inline-block'></span>
            <span className='ml-3 text-[11px] sm:text-xs text-[#8F9BAE] font-mono'>
              {t.notFound.fileName}
            </span>
          </div>
          <span
            className='text-[10px] font-bold tracking-widest text-[#FF5F56] bg-[#0C121E] px-2 py-0.5 border border-[#1E293B]'
            aria-label='HTTP Status 404'
          >
            {t.notFound.status}
          </span>
        </div>

        <div className='p-6 sm:p-10 text-left space-y-6'>
          <div>
            <div className='flex items-center gap-2 text-xs sm:text-sm text-[rgb(237,242,81)] mb-2 overflow-x-auto'>
              <span className='text-[#8F9BAE] shrink-0' aria-hidden='true'>
                $
              </span>
              <span className='whitespace-nowrap'>GET {currentUrl}</span>
            </div>
            <p className='text-xs text-[#FF5F56] font-bold tracking-wider'>
              [{t.notFound.errorLog}
              {dots}]
            </p>
          </div>

          <div className='py-5 border-y border-[#1E293B] bg-[#0B1220] px-4 flex items-center justify-between'>
            <div>
              <span className='text-[10px] text-[#8F9BAE] uppercase tracking-widest block mb-1'>
                {t.notFound.exceptionLabel}
              </span>
              <h1
                id='error-title'
                className='text-5xl sm:text-7xl font-black text-white tracking-tighter'
              >
                404
                <span
                  className='text-[rgb(237,242,81)] animate-pulse'
                  aria-hidden='true'
                >
                  _
                </span>
              </h1>
            </div>
            <div className='text-right'>
              <span
                className='text-[10px] font-mono bg-[#1E293B] text-[rgb(237,242,81)] px-2 py-1 inline-block'
                aria-label={`Current language ${lang}`}
              >
                lang: {lang}
              </span>
            </div>
          </div>

          <p className='text-[#8F9BAE] text-xs sm:text-sm leading-relaxed font-sans break-all'>
            {t.notFound.description(currentUrl)}
          </p>

          <div className='pt-2'>
            <Link
              to={`/${window.location.search}`}
              className='w-full inline-flex items-center justify-center gap-3 bg-[rgb(237,242,81)] text-[#0C121E] font-black text-xs sm:text-sm px-6 py-3.5 hover:bg-white transition-all tracking-wider shadow-[4px_4px_0px_0px_rgba(237,242,81,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(237,242,81,0.4)] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0C121E]'
              aria-label={t.notFound.buttonText}
            >
              <span aria-hidden='true'>&larr;</span>
              <span>{t.notFound.buttonText}</span>
            </Link>
          </div>
        </div>

        <div
          className='bg-[#0B1220] border-t border-[#1E293B] px-4 py-2 flex items-center justify-between text-[10px] text-[#8F9BAE]'
          aria-hidden='true'
        >
          <span className='flex items-center gap-1.5'>
            <span className='w-2 h-2 rounded-full bg-[#27C93F] inline-block'></span>
            {t.notFound.serverStatus}
          </span>
          <span>UTF-8</span>
        </div>
      </div>
    </main>
  );
};
