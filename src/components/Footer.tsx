import { type JSX } from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  lang?: 'NO' | 'EN';
}

export const Footer = ({ lang = 'EN' }: FooterProps): JSX.Element => {
  const isNo = lang === 'NO';

  return (
    <footer
      role='contentinfo'
      className='border-t border-[#ABB2BF]/30 mt-16 py-8 bg-[#282C34] font-mono text-xs'
    >
      <div className='max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-center md:text-left'>
        <div>
          <p className='text-[#C778DD] font-mono font-semibold tracking-wide'>
            {isNo
              ? 'Designet og utviklet av Nirushan'
              : 'Designed & Developed by Nirushan'}
          </p>
          <p className='text-[#ABB2BF]/80 text-[11px] mt-1 font-sans'>
            {isNo
              ? 'Frontend-utvikler & grafisk designer'
              : 'Frontend Developer & Graphic Designer'}
          </p>
        </div>

        <nav
          aria-label={isNo ? 'Bunntekst navigasjon' : 'Footer Navigation'}
          className='flex justify-center'
        >
          <ul className='flex flex-wrap items-center justify-center gap-6 text-[#ABB2BF] font-sans text-sm'>
            <li>
              <a
                href='#home'
                className='hover:text-white focus:text-white focus:outline-none focus:ring-1 focus:ring-[#C778DD] transition-colors p-1'
              >
                {isNo ? 'Hjem' : 'Home'}
              </a>
            </li>
            <li>
              <a
                href='#works'
                className='hover:text-white focus:text-white focus:outline-none focus:ring-1 focus:ring-[#C778DD] transition-colors p-1'
              >
                {isNo ? 'Prosjekter' : 'Projects'}
              </a>
            </li>
            <li>
              <a
                href='#about-me'
                className='hover:text-white focus:text-white focus:outline-none focus:ring-1 focus:ring-[#C778DD] transition-colors p-1'
              >
                {isNo ? 'Om meg' : 'About'}
              </a>
            </li>
            <li>
              <a
                href='#contacts'
                className='hover:text-white focus:text-white focus:outline-none focus:ring-1 focus:ring-[#C778DD] transition-colors p-1'
              >
                {isNo ? 'Kontakt' : 'Contact'}
              </a>
            </li>
          </ul>
        </nav>

        <div className='flex items-center justify-center md:justify-end gap-5 text-[#ABB2BF]'>
          <Link
            to='https://github.com/Nirush4'
            target='_blank'
            rel='noopener noreferrer'
            aria-label={
              isNo
                ? 'Besøk GitHub-profilen min (åpner i ny fane)'
                : 'Visit my GitHub profile (opens in new tab)'
            }
            className='hover:text-white focus:text-white focus:outline-none focus:ring-1 focus:ring-[#C778DD] transition-colors'
          >
            GitHub
          </Link>
          <span aria-hidden='true' className='text-[#ABB2BF]/40'>
            /
          </span>
          <Link
            to='https://www.linkedin.com/in/nirushan-rajamanoharan/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label={
              isNo
                ? 'Besøk LinkedIn-profilen min (åpner i ny fane)'
                : 'Visit my LinkedIn profile (opens in new tab)'
            }
            className='hover:text-white focus:text-white focus:outline-none focus:ring-1 focus:ring-[#C778DD] transition-colors'
          >
            LinkedIn
          </Link>
        </div>
      </div>

      <div className='max-w-6xl mx-auto px-6 mt-6 pt-4 border-t border-[#ABB2BF]/15 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#ABB2BF] gap-2'>
        <p>
          © 2026 Nirushan.{' '}
          {isNo ? 'Alle rettigheter reservert.' : 'All rights reserved.'}
        </p>
        <p className='text-[#98C379] font-mono'>WCAG 2.1 AA Compliant</p>
      </div>
    </footer>
  );
};
