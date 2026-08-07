import { useState, useEffect, type JSX } from 'react';
import { createPortal } from 'react-dom';
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

  if (!activeItem) return <></>;

  return createPortal(
    <div
      onClick={onClose}
      className='fixed inset-0 w-screen h-screen z-[99999] bg-black/95 backdrop-blur-2xl flex items-center justify-center select-none overflow-hidden'
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div className='absolute top-0 left-0 right-0 p-4 md:p-6 flex items-center justify-between z-30 pointer-events-none'>
        <div className='pointer-events-auto bg-[#161B22]/90 backdrop-blur-md px-4 py-2 rounded-lg border border-[#30363D] text-xs font-mono text-[#8B949E] shadow-2xl'>
          <span className='text-white font-bold'>{projectName}</span> // asset [
          {index + 1} of {gallery.length}]
        </div>
        <button
          onClick={onClose}
          className='pointer-events-auto bg-[#161B22]/90 hover:bg-[#21262D] text-white hover:text-[#FF5F56] border border-[#30363D] px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all shadow-2xl cursor-pointer'
        >
          ✕ Close
        </button>
      </div>

      <button
        onClick={handlePrev}
        className='absolute left-4 md:left-8 z-30 p-4 bg-[#161B22] hover:bg-[#21262D] text-white border border-[#30363D] rounded-full shadow-2xl transition-all hover:scale-110 cursor-pointer'
        title='Previous'
      >
        &larr;
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className='relative w-full h-full flex items-center justify-center p-4 md:p-16'
      >
        {activeItem.type === 'video' ? (
          <video
            src={activeItem.src}
            controls
            autoPlay
            className='max-h-[85vh] max-w-[85vw] object-contain rounded-lg shadow-2xl'
          />
        ) : (
          <img
            src={activeItem.src}
            alt={projectName}
            className='max-h-[85vh] max-w-[85vw] object-contain rounded-lg shadow-2xl'
          />
        )}
      </div>

      <button
        onClick={handleNext}
        className='absolute right-4 md:right-8 z-30 p-4 bg-[#161B22] hover:bg-[#21262D] text-white border border-[#454d55] rounded-full shadow-2xl transition-all hover:scale-110 cursor-pointer'
        title='Next'
      >
        &rarr;
      </button>
    </div>,
    document.body
  );
};
