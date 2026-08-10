import { useState, useEffect, useRef, type JSX } from 'react';
import type { translations } from '../constants/translations';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { handleNavClick } from '../utils/navigation';

interface NavbarProps {
  currentLang: 'NO' | 'EN';
  onLanguageChange: (lang: 'NO' | 'EN') => void;
  t: (typeof translations)['NO'];
}

const FolderIcon = ({
  className = 'w-4 h-4 text-[#F2CC60]',
}: {
  className?: string;
}) => (
  <svg
    className={className}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
    />
  </svg>
);

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
    <header className='fixed top-0 left-0 w-full bg-[#1b1924]/95 backdrop-blur-md border-b border-[#C586C0]/30 z-50 font-mono'>
      <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
        <Link
          to='/'
          onClick={() => {
            if (!isDetailsPage) {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className='flex items-center gap-2 text-white font-bold text-base hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#C586C0] rounded px-1'
          aria-label='Nirushan Rajamanoharan - Home'
        >
          <span className='text-[#C586C0]' aria-hidden='true'>
            const
          </span>
          <span className='text-[#4EC9B0]'>Nirushan</span>
          <span className='text-[#C586C0]' aria-hidden='true'>
            =
          </span>
          <span className='text-[#C586C0]'>
            &apos;{t.hero.developerLabel}&apos;
          </span>
        </Link>

        <nav
          aria-label='Main Navigation'
          className='hidden lg:flex items-center gap-8 text-sm'
        >
          <div className='flex items-center gap-6'>
            <a
              href='#home'
              onClick={(e) => onNavLinkClick(e, '#home')}
              className='text-white hover:text-[#C586C0] transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#C586C0] rounded px-1 group cursor-pointer'
            >
              <FolderIcon className='w-4 h-4 text-[#F2CC60] group-hover:scale-110 transition-transform' />
              <span>{t.nav.home}</span>
            </a>
            <a
              href='#projects'
              onClick={(e) => onNavLinkClick(e, '#projects')}
              className='text-[#8A99AD] hover:text-[#C586C0] transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#C586C0] rounded px-1 group cursor-pointer'
            >
              <FolderIcon className='w-4 h-4 text-[#F2CC60] group-hover:scale-110 transition-transform' />
              <span>{t.nav.works}</span>
            </a>
            <a
              href='#about'
              onClick={(e) => onNavLinkClick(e, '#about')}
              className='text-[#8A99AD] hover:text-[#C586C0] transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#C586C0] rounded px-1 group cursor-pointer'
            >
              <FolderIcon className='w-4 h-4 text-[#F2CC60] group-hover:scale-110 transition-transform' />
              <span>{t.nav.about}</span>
            </a>
            <a
              href='#contacts'
              onClick={(e) => onNavLinkClick(e, '#contacts')}
              className='text-[#8A99AD] hover:text-[#C586C0] transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#C586C0] rounded px-1 group cursor-pointer'
            >
              <FolderIcon className='w-4 h-4 text-[#F2CC60] group-hover:scale-110 transition-transform' />
              <span>{t.nav.contacts}</span>
            </a>
          </div>

          <div className='flex items-center gap-2 bg-[#21262D]/80 border border-[#C586C0]/40 px-3 py-1.5 rounded-xl text-xs shadow-sm hover:border-[#C586C0]/75 transition-colors'>
            <span className='text-[#8B949E] font-medium'>lang:</span>
            <select
              id='language-select'
              aria-label='Select Language'
              className='bg-[#161B22] border border-[#C586C0]/30 text-[#7EE787] rounded-md px-2.5 py-1 focus:outline-none focus:ring-2 focus:ring-[#C586C0] cursor-pointer font-bold tracking-wide transition-colors  hover:border-[#C586C0]'
              value={currentLang}
              onChange={(e) => onLanguageChange(e.target.value as 'NO' | 'EN')}
            >
              <option
                value='NO'
                className='bg-[#161B22] text-white font-bold py-1'
              >
                🇳🇴 NO
              </option>
              <option
                value='EN'
                className='bg-[#161B22] text-white font-bold py-1'
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
          className='lg:hidden flex flex-col justify-center items-center w-9 h-9 space-y-1.5 focus:outline-none focus:ring-2 focus:ring-[#C586C0] bg-[#161B22] border border-[#C586C0]/40 rounded p-1.5'
        >
          <span
            className={`w-4 h-0.5 bg-[#C586C0] transition-transform duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
            aria-hidden='true'
          />
          <span
            className={`w-4 h-0.5 bg-[#4EC9B0] transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
            aria-hidden='true'
          />
          <span
            className={`w-4 h-0.5 bg-[#C586C0] transition-transform duration-300 ${
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
          className='absolute top-full left-0 w-full bg-[#161B22] border-b border-[#C586C0]/40 shadow-2xl py-6 px-6 flex flex-col gap-4 lg:hidden text-sm border-t border-[#C586C0]/40'
        >
          <div className='text-xs text-[#8B949E] mb-1' aria-hidden='true'>
            // mobile-navigation.ts
          </div>
          <a
            href='#home'
            onClick={(e) => onNavLinkClick(e, '#home')}
            className='text-white hover:text-[#C586C0] transition-colors flex items-center gap-1.5 py-1 border-b border-[#2a2739] focus:outline-none focus:ring-2 focus:ring-[#C586C0] rounded px-1'
          >
            <FolderIcon className='w-4 h-4 text-[#F2CC60]' />
            <span>{t.nav.home}</span>
          </a>
          <a
            href='#projects'
            onClick={(e) => onNavLinkClick(e, '#projects')}
            className='text-[#8A99AD] hover:text-[#C586C0] transition-colors flex items-center gap-1.5 py-1 border-b border-[#2a2739] focus:outline-none focus:ring-2 focus:ring-[#C586C0] rounded px-1'
          >
            <FolderIcon className='w-4 h-4 text-[#F2CC60]' />
            <span>{t.nav.works}</span>
          </a>
          <a
            href='#about'
            onClick={(e) => onNavLinkClick(e, '#about')}
            className='text-[#8A99AD] hover:text-[#C586C0] transition-colors flex items-center gap-1.5 py-1 border-b border-[#2a2739] focus:outline-none focus:ring-2 focus:ring-[#C586C0] rounded px-1'
          >
            <FolderIcon className='w-4 h-4 text-[#F2CC60]' />
            <span>{t.nav.about}</span>
          </a>
          <a
            href='#contacts'
            onClick={(e) => onNavLinkClick(e, '#contacts')}
            className='text-[#8A99AD] hover:text-[#C586C0] transition-colors flex items-center gap-1.5 py-1 focus:outline-none focus:ring-2 focus:ring-[#C586C0] rounded px-1'
          >
            <FolderIcon className='w-4 h-4 text-[#F2CC60]' />
            <span>{t.nav.contacts}</span>
          </a>

          <div className='pt-4 flex items-center justify-between border-t border-[#2a2739] bg-[#21262D]/50 p-3.5 rounded-xl border border-[#C586C0]/30 shadow-inner'>
            <label
              htmlFor='mobile-language-select'
              className='text-xs text-[#C586C0] font-bold uppercase tracking-wider flex items-center gap-1.5'
            >
              <span>🌐</span> Språk / Language:
            </label>
            <select
              id='mobile-language-select'
              aria-label='Select Language Mobile'
              className='bg-[#161B22] border border-[#C586C0]/40 text-[#7EE787] rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#C586C0] text-xs font-bold tracking-wide cursor-pointer'
              value={currentLang}
              onChange={(e) => onLanguageChange(e.target.value as 'NO' | 'EN')}
            >
              <option
                value='NO'
                className='bg-[#161B22] text-white font-bold py-1'
              >
                🇳🇴 NO
              </option>
              <option
                value='EN'
                className='bg-[#161B22] text-white font-bold py-1'
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
