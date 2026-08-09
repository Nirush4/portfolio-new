import type { JSX } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  lang: 'NO' | 'EN';
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  lang,
}: PaginationProps): JSX.Element | null => {
  if (totalPages <= 1) return null;

  return (
    <div className='flex flex-col sm:flex-row items-center justify-between bg-[#161B22]/80 border border-[#30363D] px-6 py-4 rounded-xl gap-4 shadow-md'>
      <div className='text-xs text-[#8B949E] flex items-center gap-2'>
        <span className='text-[#C586C0]'>//</span>
        <span>
          {lang === 'NO' ? 'Viser side' : 'Showing page'}{' '}
          <strong className='text-white text-base'>{currentPage}</strong>{' '}
          {lang === 'NO' ? 'av' : 'of'}{' '}
          <strong className='text-white text-base'>{totalPages}</strong>
        </span>
      </div>

      <div className='flex items-center gap-2'>
        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1.5 text-xs rounded-lg border transition-all flex items-center gap-1 cursor-pointer ${
            currentPage === 1
              ? 'opacity-45 cursor-not-allowed border-[#30363D] text-[#8B949E]'
              : 'border-[#30363D] bg-[#21262D] text-white hover:border-[#C586C0] hover:text-[#C586C0]'
          }`}
        >
          <span>&lt;</span> {lang === 'NO' ? 'Forrige' : 'Prev'}
        </button>

        <div className='flex items-center gap-1.5'>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-8 h-8 text-xs font-bold rounded-lg border transition-all flex items-center justify-center cursor-pointer ${
                currentPage === page
                  ? 'bg-[#1b1924] border-[#C586C0] text-[#C586C0] shadow-sm shadow-[#C586C0]/20'
                  : 'border-[#30363D] bg-[#21262D] text-[#8B949E] hover:border-[#8B949E] hover:text-white'
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-3 py-1.5 text-xs rounded-lg border transition-all flex items-center gap-1 cursor-pointer ${
            currentPage === totalPages
              ? 'opacity-45 cursor-not-allowed border-[#30363D] text-[#8B949E]'
              : 'border-[#30363D] bg-[#21262D] text-white hover:border-[#C586C0] hover:text-[#C586C0]'
          }`}
        >
          {lang === 'NO' ? 'Neste' : 'Next'} <span>&gt;</span>
        </button>
      </div>
    </div>
  );
};
