import { type JSX } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { handleNavClick } from '../utils/navigation';

interface FooterProps {
  lang?: 'NO' | 'EN';
}

export const Footer = ({ lang = 'EN' }: FooterProps): JSX.Element => {
  const isNo = lang === 'NO';
  const location = useLocation();
  const navigate = useNavigate();
  const isDetailsPage = location.pathname.startsWith('/projects/');

  const onNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    handleNavClick({
      e,
      sectionId,
      isDetailsPage,
      navigate,
    });
  };

  return (
    <footer
      role='contentinfo'
      className='bg-[#0B1220] border-t border-[#1E293B] py-10 font-mono text-xs text-[#8F9BAE] relative z-10'
    >
      <div className='max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-center md:text-left'>
        <div>
          <p className='text-white font-mono font-bold tracking-wide flex items-center justify-center md:justify-start gap-2'>
            <span className='text-[rgb(237,242,81)]' aria-hidden='true'>
              &gt;
            </span>
            {isNo
              ? 'Designet og utviklet av Nirushan'
              : 'Designed & Developed by Nirushan'}
          </p>
          <p className='text-[#8F9BAE] text-[11px] mt-1 font-sans'>
            {isNo
              ? 'Frontend-utvikler & grafisk designer'
              : 'Frontend Developer & Graphic Designer'}
          </p>
        </div>

        <nav
          aria-label={isNo ? 'Bunntekst navigasjon' : 'Footer Navigation'}
          className='flex justify-center'
        >
          <ul className='flex flex-wrap items-center justify-center gap-6 text-[#8F9BAE] font-mono text-xs  tracking-wider'>
            <li>
              <a
                href='#home'
                onClick={(e) => onNavLinkClick(e, '#home')}
                className='hover:text-[rgb(237,242,81)] focus:text-[rgb(237,242,81)] focus:outline-none transition-colors p-1 cursor-pointer'
              >
                {isNo ? 'Hjem' : 'Home'}
              </a>
            </li>
            <li>
              <a
                href='#projects'
                onClick={(e) => onNavLinkClick(e, '#projects')}
                className='hover:text-[rgb(237,242,81)] focus:text-[rgb(237,242,81)] focus:outline-none transition-colors p-1 cursor-pointer'
              >
                {isNo ? 'Prosjekter' : 'Projects'}
              </a>
            </li>
            <li>
              <a
                href='#about'
                onClick={(e) => onNavLinkClick(e, '#about')}
                className='hover:text-[rgb(237,242,81)] focus:text-[rgb(237,242,81)] focus:outline-none transition-colors p-1 cursor-pointer'
              >
                {isNo ? 'Om meg' : 'About'}
              </a>
            </li>
            <li>
              <a
                href='#contacts'
                onClick={(e) => onNavLinkClick(e, '#contacts')}
                className='hover:text-[rgb(237,242,81)] focus:text-[rgb(237,242,81)] focus:outline-none transition-colors p-1 cursor-pointer'
              >
                {isNo ? 'Kontakt' : 'Contact'}
              </a>
            </li>
          </ul>
        </nav>

        <div className='flex items-center justify-center md:justify-end gap-4 font-mono text-xs  tracking-wider'>
          <Link
            to='https://github.com/Nirush4'
            target='_blank'
            rel='noopener noreferrer'
            aria-label={
              isNo
                ? 'Besøk GitHub-profilen min (åpner i ny fane)'
                : 'Visit my GitHub profile (opens in new tab)'
            }
            className='hover:text-[rgb(237,242,81)] focus:text-[rgb(237,242,81)] focus:outline-none transition-colors'
          >
            GitHub
          </Link>
          <span aria-hidden='true' className='text-[#34445e]'>
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
            className='hover:text-[rgb(237,242,81)] focus:text-[rgb(237,242,81)] focus:outline-none transition-colors'
          >
            LinkedIn
          </Link>
        </div>
      </div>

      <div className='max-w-6xl mx-auto px-6 mt-8 pt-6 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8F9BAE] gap-2'>
        <p className='text-xs'>
          © 2026 Nirushan.{' '}
          {isNo ? 'Alle rettigheter reservert.' : 'All rights reserved.'}
        </p>
        <p className='text-[rgb(237,242,81)] font-mono font-bold flex items-center gap-2'>
          <span
            className='w-1.5 h-1.5 bg-[rgb(237,242,81)] rounded-full animate-pulse'
            aria-hidden='true'
          ></span>
          WCAG 2.1 AA Compliant
        </p>
      </div>
    </footer>
  );
};
