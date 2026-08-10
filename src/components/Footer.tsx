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
      style={{
        backgroundColor: 'color-mix(in oklab, #1b1924 95%, transparent)',
      }}
      className='border-t border-[#30363D] mt-16 py-8 font-mono text-xs'
    >
      <div className='max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-center md:text-left'>
        <div>
          <p className='text-[#C586C0] font-mono font-semibold tracking-wide'>
            {isNo
              ? 'Designet og utviklet av Nirushan'
              : 'Designed & Developed by Nirushan'}
          </p>
          <p className='text-[#8B949E] text-[11px] mt-1 font-sans'>
            {isNo
              ? 'Frontend-utvikler & grafisk designer'
              : 'Frontend Developer & Graphic Designer'}
          </p>
        </div>

        <nav
          aria-label={isNo ? 'Bunntekst navigasjon' : 'Footer Navigation'}
          className='flex justify-center'
        >
          <ul className='flex flex-wrap items-center justify-center gap-6 text-[#8B949E] font-sans text-sm'>
            <li>
              <a
                href='#home'
                onClick={(e) => onNavLinkClick(e, '#home')}
                className='hover:text-white focus:text-white focus:outline-none focus:ring-1 focus:ring-[#C586C0] transition-colors p-1 cursor-pointer'
              >
                {isNo ? 'Hjem' : 'Home'}
              </a>
            </li>
            <li>
              <a
                href='#projects'
                onClick={(e) => onNavLinkClick(e, '#projects')}
                className='hover:text-white focus:text-white focus:outline-none focus:ring-1 focus:ring-[#C586C0] transition-colors p-1 cursor-pointer'
              >
                {isNo ? 'Prosjekter' : 'Projects'}
              </a>
            </li>
            <li>
              <a
                href='#about'
                onClick={(e) => onNavLinkClick(e, '#about')}
                className='hover:text-white focus:text-white focus:outline-none focus:ring-1 focus:ring-[#C586C0] transition-colors p-1 cursor-pointer'
              >
                {isNo ? 'Om meg' : 'About'}
              </a>
            </li>
            <li>
              <a
                href='#contacts'
                onClick={(e) => onNavLinkClick(e, '#contacts')}
                className='hover:text-white focus:text-white focus:outline-none focus:ring-1 focus:ring-[#C586C0] transition-colors p-1 cursor-pointer'
              >
                {isNo ? 'Kontakt' : 'Contact'}
              </a>
            </li>
          </ul>
        </nav>

        <div className='flex items-center justify-center md:justify-end gap-5 text-[#8B949E]'>
          <Link
            to='https://github.com/Nirush4'
            target='_blank'
            rel='noopener noreferrer'
            aria-label={
              isNo
                ? 'Besøk GitHub-profilen min (åpner i ny fane)'
                : 'Visit my GitHub profile (opens in new tab)'
            }
            className='hover:text-white focus:text-white focus:outline-none focus:ring-1 focus:ring-[#C586C0] transition-colors'
          >
            GitHub
          </Link>
          <span aria-hidden='true' className='text-[#30363D]'>
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
            className='hover:text-white focus:text-white focus:outline-none focus:ring-1 focus:ring-[#C586C0] transition-colors'
          >
            LinkedIn
          </Link>
        </div>
      </div>

      <div className='max-w-6xl mx-auto px-6 mt-6 pt-4 border-t border-[#30363D] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8B949E] gap-2'>
        <p>
          © 2026 Nirushan.{' '}
          {isNo ? 'Alle rettigheter reservert.' : 'All rights reserved.'}
        </p>
        <p className='text-[#7EE787] font-mono'>WCAG 2.1 AA Compliant</p>
      </div>
    </footer>
  );
};
