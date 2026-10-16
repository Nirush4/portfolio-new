import { useState, useEffect, useRef, type JSX } from 'react';
import type { translations } from '../constants/translations';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { handleNavClick } from '../utils/navigation';

interface NavbarProps {
  currentLang: 'NO' | 'EN';
  onLanguageChange: (lang: 'NO' | 'EN') => void;
  t: (typeof translations)['NO'];
}

export const Navbar = ({
  currentLang,
  onLanguageChange,
  t,
}: NavbarProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const isDetailsPage = location.pathname.startsWith('/projects/');

  const toggleMenu = () => setIsOpen(!isOpen);

  const onNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    handleNavClick({
      e,
      sectionId,
      isDetailsPage,
      navigate,
      setIsOpen,
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        toggleButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <header className='fixed top-0 left-0 w-full bg-[#0B1220]/95 backdrop-blur-md border-b border-[#1E293B] z-50 font-mono'>
      <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
        <Link
          to='/'
          onClick={() => {
            if (!isDetailsPage) {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className='flex items-center gap-1.5 text-white font-extrabold text-sm md:text-base hover:text-[rgb(237,242,81)] transition-colors focus:outline-none focus:ring-1 focus:ring-[rgb(237,242,81)] px-1'
          aria-label='Nirushan Rajamanoharan - Home'
        >
          <span className='text-[rgb(237,242,81)]' aria-hidden='true'>
            const
          </span>
          <span className='text-white'>Nirushan</span>
          <span className='text-[#8F9BAE]' aria-hidden='true'>
            =
          </span>
          <span className='text-[rgb(237,242,81)]'>
            &apos;{t.hero.developerLabel}&apos;
          </span>
        </Link>

        <nav
          aria-label='Main Navigation'
          className='hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider'
        >
          <div className='flex items-center gap-6'>
            <a
              href='#home'
              onClick={(e) => onNavLinkClick(e, '#home')}
              className='text-[#8F9BAE] hover:text-[rgb(237,242,81)] transition-colors flex items-center gap-1 focus:outline-none focus:ring-1 focus:ring-[rgb(237,242,81)] px-1 group cursor-pointer'
            >
              <span className='text-[rgb(237,242,81)] font-mono'>/</span>
              <span>{t.nav.home}</span>
            </a>
            <a
              href='#projects'
              onClick={(e) => onNavLinkClick(e, '#projects')}
              className='text-[#8F9BAE] hover:text-[rgb(237,242,81)] transition-colors flex items-center gap-1 focus:outline-none focus:ring-1 focus:ring-[rgb(237,242,81)] px-1 group cursor-pointer'
            >
              <span className='text-[rgb(237,242,81)] font-mono'>/</span>
              <span>{t.nav.works}</span>
            </a>
            <a
              href='#about'
              onClick={(e) => onNavLinkClick(e, '#about')}
              className='text-[#8F9BAE] hover:text-[rgb(237,242,81)] transition-colors flex items-center gap-1 focus:outline-none focus:ring-1 focus:ring-[rgb(237,242,81)] px-1 group cursor-pointer'
            >
              <span className='text-[rgb(237,242,81)] font-mono'>/</span>
              <span>{t.nav.about}</span>
            </a>
            <a
              href='#contacts'
              onClick={(e) => onNavLinkClick(e, '#contacts')}
              className='text-[#8F9BAE] hover:text-[rgb(237,242,81)] transition-colors flex items-center gap-1 focus:outline-none focus:ring-1 focus:ring-[rgb(237,242,81)] px-1 group cursor-pointer'
            >
              <span className='text-[rgb(237,242,81)] font-mono'>/</span>
              <span>{t.nav.contacts}</span>
            </a>
          </div>

          <div className='flex items-center gap-2 bg-[#0C121E] border border-[#1E293B] px-3 py-1.5 text-xs rounded-none shadow-sm hover:border-[rgb(237,242,81)]/50 transition-colors'>
            <span className='text-[#8F9BAE] font-bold'>LANG:</span>
            <select
              id='language-select'
              aria-label='Select Language'
              className='bg-[#0B1220] border border-[#1E293B] text-[rgb(237,242,81)] px-2 py-0.5 focus:outline-none focus:ring-1 focus:ring-[rgb(237,242,81)] cursor-pointer font-black tracking-wider transition-colors hover:border-[rgb(237,242,81)]'
              value={currentLang}
              onChange={(e) => onLanguageChange(e.target.value as 'NO' | 'EN')}
            >
              <option
                value='NO'
                className='bg-[#0C121E] text-white font-bold py-1'
              >
                🇳🇴 NO
              </option>
              <option
                value='EN'
                className='bg-[#0C121E] text-white font-bold py-1'
              >
                🇬🇧 EN
              </option>
            </select>
          </div>
        </nav>

        <button
          ref={toggleButtonRef}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls='mobile-menu'
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className='lg:hidden flex flex-col justify-center items-center w-9 h-9 space-y-1.5 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[rgb(237,242,81)] bg-[#0C121E] border border-[#1E293B] p-1.5 rounded-none'
        >
          <span
            className={`w-4 h-0.5 bg-[rgb(237,242,81)] transition-transform duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
            aria-hidden='true'
          />
          <span
            className={`w-4 h-0.5 bg-white transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
            aria-hidden='true'
          />
          <span
            className={`w-4 h-0.5 bg-[rgb(237,242,81)] transition-transform duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
            aria-hidden='true'
          />
        </button>
      </div>

      {isOpen && (
        <div
          id='mobile-menu'
          ref={mobileMenuRef}
          className='absolute top-full left-0 w-full bg-[#0C121E] border-b border-[#1E293B] shadow-2xl py-6 px-6 flex flex-col gap-4 lg:hidden text-xs uppercase font-bold tracking-wider border-t border-[#1E293B]'
        >
          <a
            href='#home'
            onClick={(e) => onNavLinkClick(e, '#home')}
            className='text-white hover:text-[rgb(237,242,81)] transition-colors flex items-center gap-1.5 py-1.5 border-b border-[#1E293B] focus:outline-none focus:ring-1 focus:ring-[rgb(237,242,81)] px-1'
          >
            <span className='text-[rgb(237,242,81)]'>/</span>
            <span>{t.nav.home}</span>
          </a>
          <a
            href='#projects'
            onClick={(e) => onNavLinkClick(e, '#projects')}
            className='text-[#8F9BAE] hover:text-[rgb(237,242,81)] transition-colors flex items-center gap-1.5 py-1.5 border-b border-[#1E293B] focus:outline-none focus:ring-1 focus:ring-[rgb(237,242,81)] px-1'
          >
            <span className='text-[rgb(237,242,81)]'>/</span>
            <span>{t.nav.works}</span>
          </a>
          <a
            href='#about'
            onClick={(e) => onNavLinkClick(e, '#about')}
            className='text-[#8F9BAE] hover:text-[rgb(237,242,81)] transition-colors flex items-center gap-1.5 py-1.5 border-b border-[#1E293B] focus:outline-none focus:ring-1 focus:ring-[rgb(237,242,81)] px-1'
          >
            <span className='text-[rgb(237,242,81)]'>/</span>
            <span>{t.nav.about}</span>
          </a>
          <a
            href='#contacts'
            onClick={(e) => onNavLinkClick(e, '#contacts')}
            className='text-[#8F9BAE] hover:text-[rgb(237,242,81)] transition-colors flex items-center gap-1.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-[rgb(237,242,81)] px-1'
          >
            <span className='text-[rgb(237,242,81)]'>/</span>
            <span>{t.nav.contacts}</span>
          </a>

          <div className='pt-4 flex items-center justify-between border-t border-[#1E293B] bg-[#0B1220] p-3.5 border border-[#1E293B]'>
            <label
              htmlFor='mobile-language-select'
              className='text-xs text-[rgb(237,242,81)] font-bold uppercase tracking-wider flex items-center gap-1.5'
            >
              <span>🌐</span> Språk / Language:
            </label>
            <select
              id='mobile-language-select'
              aria-label='Select Language Mobile'
              className='bg-[#0C121E] border border-[#1E293B] text-[rgb(237,242,81)] px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[rgb(237,242,81)] text-xs font-bold tracking-wider cursor-pointer'
              value={currentLang}
              onChange={(e) => onLanguageChange(e.target.value as 'NO' | 'EN')}
            >
              <option
                value='NO'
                className='bg-[#0C121E] text-white font-bold py-1'
              >
                🇳🇴 NO
              </option>
              <option
                value='EN'
                className='bg-[#0C121E] text-white font-bold py-1'
              >
                🇬🇧 EN
              </option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
};
