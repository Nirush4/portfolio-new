import { useState, useEffect, type JSX } from 'react';
import type { GalleryItem } from './ProjectGallery';

interface ImageModalProps {
  gallery: GalleryItem[];
  currentIndex: number;
  projectName: string;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const ImageModal = ({
  gallery,
  currentIndex,
  projectName,
  onClose,
  onNavigate,
}: ImageModalProps): JSX.Element => {
  const [index, setIndex] = useState(currentIndex);

  const activeItem = gallery[index];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIdx = index === 0 ? gallery.length - 1 : index - 1;
    setIndex(newIdx);
    onNavigate(newIdx);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIdx = index === gallery.length - 1 ? 0 : index + 1;
    setIndex(newIdx);
    onNavigate(newIdx);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const newIdx = index === 0 ? gallery.length - 1 : index - 1;
        setIndex(newIdx);
        onNavigate(newIdx);
      }
      if (e.key === 'ArrowRight') {
        const newIdx = index === gallery.length - 1 ? 0 : index + 1;
        setIndex(newIdx);
        onNavigate(newIdx);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [index, gallery.length, onClose, onNavigate]);

  return (
    <div
      onClick={onClose}
      className='fixed bottom-23 w-full left-0 z-50 flex items-center justify-center p-4'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='relative max-w-5xl w-full max-h-[90vh] bg-[#161B22] border border-[#30363D] rounded-xl overflow-hidden shadow-2xl flex flex-col'
      >
        <div className='bg-[#0d1117] px-4 py-3 border-b border-[#30363D] flex items-center justify-between text-xs font-mono text-[#8B949E]'>
          <span>
            {projectName} // asset [{index + 1} of {gallery.length}]
          </span>
          <button
            onClick={onClose}
            className='text-white hover:text-[#FF5F56] transition-colors text-sm px-2 font-bold cursor-pointer'
          >
            ✕ Close
          </button>
        </div>

        <div className='relative flex items-center justify-center p-4 bg-black/40 min-h-[400px] max-h-[75vh]'>
          <button
            onClick={handlePrev}
            className='absolute left-4 z-10 p-3 bg-[#161B22]/80 hover:bg-[#21262D] text-white border border-[#30363D] rounded-full shadow-lg transition-all hover:scale-110 cursor-pointer'
            title='Previous'
          >
            &larr;
          </button>

          {activeItem.type === 'video' ? (
            <video
              src={activeItem.src}
              controls
              autoPlay
              className='max-h-[70vh] w-auto object-contain rounded'
            />
          ) : (
            <img
              src={activeItem.src}
              alt={projectName}
              className='max-h-[70vh] w-auto object-contain rounded shadow-md'
            />
          )}

          <button
            onClick={handleNext}
            className='absolute right-4 z-10 p-3 bg-[#161B22]/80 hover:bg-[#21262D] text-white border border-[#30363D] rounded-full shadow-lg transition-all hover:scale-110 cursor-pointer'
            title='Next'
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
