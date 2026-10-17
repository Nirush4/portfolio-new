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

  const handlePageClick = (page: number) => {
    onPageChange(page);
    setTimeout(() => {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className='flex flex-col sm:flex-row items-center justify-between bg-[#0C121E] border-2 border-[#0C121E] px-6 py-4 rounded-none gap-4 shadow-[4px_4px_0px_0px_rgba(12,18,30,0.8)] font-mono text-[#8F9BAE]'>
      <div className='text-xs flex items-center gap-2 tracking-wider font-bold'>
        <span className='text-[rgb(237,242,81)]'>//</span>
        <span>
          {lang === 'NO' ? 'Viser side' : 'Showing page'}{' '}
          <strong className='text-white text-sm font-black'>
            {currentPage}
          </strong>{' '}
          {lang === 'NO' ? 'av' : 'of'}{' '}
          <strong className='text-white text-sm font-black'>
            {totalPages}
          </strong>
        </span>
      </div>

      <div className='flex items-center gap-2'>
        <button
          onClick={() => handlePageClick(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1.5 text-xs font-black tracking-wider transition-all flex items-center gap-1 cursor-pointer rounded-none border ${
            currentPage === 1
              ? 'opacity-40 cursor-not-allowed border-[#1E293B] text-[#8F9BAE] bg-[#121A2C]'
              : 'border-[#1E293B] bg-[#121A2C] text-white hover:border-[rgb(237,242,81)] hover:text-[rgb(237,242,81)]'
          }`}
        >
          <span>&lt;</span> {lang === 'NO' ? 'Forrige' : 'Prev'}
        </button>

        <div className='flex items-center gap-1.5'>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={`w-8 h-8 text-xs font-black transition-all flex items-center justify-center cursor-pointer rounded-none border ${
                currentPage === page
                  ? 'bg-[rgb(237,242,81)] border-[rgb(237,242,81)] text-[#0C121E] shadow-sm'
                  : 'border-[#1E293B] bg-[#121A2C] text-[#8F9BAE] hover:border-[#8F9BAE] hover:text-white'
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => handlePageClick(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-3 py-1.5 text-xs font-black tracking-wider transition-all flex items-center gap-1 cursor-pointer rounded-none border ${
            currentPage === totalPages
              ? 'opacity-40 cursor-not-allowed border-[#1E293B] text-[#8F9BAE] bg-[#121A2C]'
              : 'border-[#1E293B] bg-[#121A2C] text-white hover:border-[rgb(237,242,81)] hover:text-[rgb(237,242,81)]'
          }`}
        >
          {lang === 'NO' ? 'Neste' : 'Next'} <span>&gt;</span>
        </button>
      </div>
    </div>
  );
};
