import { useState, type JSX } from 'react';
import { ImageModal } from './ImageModal';

export interface GalleryItem {
  type: string;
  src: string;
}

interface ProjectGalleryProps {
  gallery: GalleryItem[];
  projectName: string;
}

export const ProjectGallery = ({
  gallery,
  projectName,
}: ProjectGalleryProps): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  if (!gallery || gallery.length === 0) return <></>;

  const handleCardClick = (i: number) => {
    if (window.innerWidth >= 768) {
      setCurrentIndex(i);
    }
  };

  return (
    <>
      <div className='space-y-4 pt-2'>
        <h3 className='text-white text-base font-bold font-mono flex items-center gap-2'>
          <span className='text-[#7EE787]'>05 //</span> Visual Gallery & Assets
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {gallery.map((item, i) => (
            <div
              key={i}
              onClick={() => handleCardClick(i)}
              style={{
                backgroundColor:
                  'color-mix(in oklab, #161B22 60%, transparent)',
              }}
              className='border border-[#30363D] rounded-lg overflow-hidden h-72 shadow-md relative group md:cursor-pointer'
            >
              {item.type === 'video' ? (
                <video src={item.src} className='w-full h-full object-cover' />
              ) : (
                <img
                  src={item.src}
                  alt={`${projectName} asset ${i + 1}`}
                  className='w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-300'
                />
              )}

              <div className='absolute inset-0 bg-black/20 opacity-0 md:group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center pointer-events-none'>
                <span className='text-xs font-mono bg-[#161B22]/90 text-white px-3 py-1.5 rounded border border-[#30363D] shadow-lg'>
                  Click to Expand ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentIndex !== null && (
        <ImageModal
          gallery={gallery}
          currentIndex={currentIndex}
          projectName={projectName}
          onClose={() => setCurrentIndex(null)}
          onNavigate={(newIdx) => setCurrentIndex(newIdx)}
        />
      )}
    </>
  );
};
