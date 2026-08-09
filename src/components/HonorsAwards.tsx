import { type JSX } from 'react';
import { useState } from 'react';

interface HonorsAwardsProps {
  lang: 'NO' | 'EN';
}

export const HonorsAwards = ({ lang }: HonorsAwardsProps): JSX.Element => {
  const awards = [
    {
      src: '/awards/prisutdeling-2025.jpg',
      alt:
        lang === 'NO'
          ? 'Bilde fra prisutdelingen i 2025'
          : 'Award gala photo from 2025',
    },
    {
      src: '/awards/image.jpg',
      alt: lang === 'NO' ? 'Golden Egg-prisen' : 'Golden Egg Award',
    },
  ];

  const [mainIndex, setMainIndex] = useState(0);

  return (
    <section
      id='honors-awards'
      className='max-w-6xl mx-auto px-6 py-16 font-mono'
      aria-labelledby='honors-awards-heading'
    >
      <div className='flex items-center gap-4 w-full max-w-md mb-12'>
        <h2
          id='honors-awards-heading'
          className='text-white text-2xl md:text-3xl font-medium'
        >
          <span className='text-[#C778DD]' aria-hidden='true'>
            #
          </span>
          {lang === 'NO' ? 'utmerkelser' : 'honors-awards'}
        </h2>
        <div
          className='h-[1px] bg-[#C778DD] flex-grow'
          aria-hidden='true'
        ></div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 items-start'>
        <div className='lg:col-span-7 bg-[#282C34] border border-[#ABB2BF] rounded-none overflow-hidden shadow-lg hover:border-[#C778DD] transition-all flex flex-col justify-between'>
          <div className='px-4 py-3 bg-[#21252B] border-b border-[#ABB2BF] flex items-center justify-between'>
            <h3 className='text-white text-sm font-bold tracking-wide flex items-center gap-2'>
              <span className='text-[#C778DD]' aria-hidden='true'>
                &gt;
              </span>
              {lang === 'NO'
                ? 'Golden Egg 2025 · Noroff'
                : 'Golden Egg 2025 · Noroff'}
            </h3>
            <span className='text-[10px] text-[#ABB2BF] bg-[#1E222A] px-2 py-0.5 rounded border border-[#ABB2BF]/40'>
              2025
            </span>
          </div>

          <div className='p-5 bg-[#282C34] text-xs leading-relaxed'>
            <div
              className='text-[#ABB2BF] mb-3 select-none flex items-center gap-2'
              aria-hidden='true'
            >
              <span className='text-[#61AFEF]'>//</span>
              <span>
                {lang === 'NO'
                  ? 'Anerkjennelse & Prestasjon'
                  : 'Recognition & Achievement'}
              </span>
            </div>

            <h4 className='text-white text-base md:text-lg font-bold font-sans mb-3 flex items-center gap-2'>
              <span aria-hidden='true'>🏆</span>
              <span>
                {lang === 'NO'
                  ? 'Beste studentarbeid innen frontend-utvikling'
                  : 'Best Student Work in Front-End Development'}
              </span>
            </h4>

            <div className='space-y-3 font-sans text-white/90 text-xs md:text-sm mb-4'>
              <p className='leading-relaxed text-[#ABB2BF]'>
                {lang === 'NO'
                  ? 'Denne anerkjennelsen betyr utrolig mye for meg. Fra dag én fordypet jeg meg i frontend-utvikling, og utforsket alle rammeverk, verktøy og teknikker. Reisen var utfordrende, med sene kvelder og utallige revisjoner, men hver hindring styrket mine ferdigheter og viljestyrke.'
                  : 'This recognition is deeply meaningful to me. From day one, I immersed myself in front-end development, exploring every framework, tool, and technique. The journey was challenging, with late nights and countless iterations, but every obstacle strengthened my skills and determination.'}
              </p>
              <p className='leading-relaxed text-[#ABB2BF]'>
                {lang === 'NO'
                  ? 'Å motta denne prisen under Golden Egg 2025 gjenspeiler dedikasjon, utholdenhet og en lidenskap for å skape elegante, brukervennlige webopplevelser. Det motiverer meg til å flytte grenser, innovere og forfølge ekspertise i hvert eneste prosjekt.'
                  : 'Receiving this award at Golden Egg 2025 reflects dedication, perseverance, and a passion for crafting elegant, user-friendly web experiences. It motivates me to push boundaries, innovate, and pursue excellence in every project I undertake.'}
              </p>
            </div>

            <div className='pt-3 border-t border-[#ABB2BF]/30 flex items-center justify-between text-xs font-mono'>
              <span className='text-[#ABB2BF]'>
                {lang === 'NO' ? 'Utstedt av: Noroff' : 'Issued by: Noroff'}
              </span>
              <span className='text-[#C778DD] font-semibold'>Year: 2025</span>
            </div>
          </div>
        </div>

        <div className='lg:col-span-5 bg-[#282C34] border border-[#ABB2BF] rounded-none overflow-hidden shadow-lg transition-all'>
          <div className='px-4 py-3 bg-[#21252B] border-b border-[#ABB2BF] flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <div className='flex gap-1.5' aria-hidden='true'>
                <div
                  className='w-2.5 h-2.5 rounded-full bg-[#E06C75]'
                  aria-hidden='true'
                ></div>
                <div
                  className='w-2.5 h-2.5 rounded-full bg-[#E5C07B]'
                  aria-hidden='true'
                ></div>
                <div
                  className='w-2.5 h-2.5 rounded-full bg-[#98C379]'
                  aria-hidden='true'
                ></div>
              </div>
              <span className='text-white text-xs font-semibold tracking-wide ml-1'>
                gallery.tsx
              </span>
            </div>
            <span className='text-[10px] text-[#ABB2BF] bg-[#1E222A] px-2 py-0.5 rounded border border-[#ABB2BF]/40'>
              viewer
            </span>
          </div>

          <div className='p-4 bg-[#282C34] space-y-4'>
            <div
              className='relative w-full h-[450px] md:h-[500px] border border-[#ABB2BF]/60 rounded-sm overflow-hidden bg-[#21252B] shadow-inner flex items-center justify-center p-3'
              role='region'
              aria-label={
                lang === 'NO'
                  ? 'Hovedbildevisning for utmerkelse'
                  : 'Main award image preview'
              }
            >
              <img
                src={awards[mainIndex].src}
                alt={awards[mainIndex].alt}
                className='w-full h-full object-cover transition-all duration-500'
              />
              <div className='absolute bottom-2 left-2 bg-[#21252B]/90 border border-[#ABB2BF]/60 px-2 py-1 rounded text-[10px] text-[#98C379] font-mono'>
                {awards[mainIndex].alt}
              </div>
            </div>

            <div
              className='flex gap-3 pt-1 w-full'
              role='group'
              aria-label={
                lang === 'NO' ? 'Velg bilde å vise' : 'Select image to view'
              }
            >
              {awards.map((award, index) => {
                const isSelected = mainIndex === index;
                return (
                  <button
                    key={index}
                    onClick={() => setMainIndex(index)}
                    aria-pressed={isSelected}
                    aria-label={`${
                      lang === 'NO' ? 'Vis bilde' : 'View image'
                    } ${index + 1}: ${award.alt}`}
                    className={`relative flex-1 h-20 rounded-sm overflow-hidden cursor-pointer border transition-all bg-[#21252B] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#C778DD] ${
                      isSelected
                        ? 'border-[#C778DD] ring-1 ring-[#C778DD]'
                        : 'border-[#ABB2BF]/40 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={award.src}
                      alt=''
                      aria-hidden='true'
                      className='w-full h-full object-cover object-center'
                    />
                  </button>
                );
              })}
            </div>

            <div className='text-[10px] text-[#ABB2BF] pt-2 border-t border-[#ABB2BF]/30 flex justify-between items-center'>
              <span>
                {lang === 'NO'
                  ? 'Klikk for å bytte bilde'
                  : 'Click to switch preview'}
              </span>
              <span className='text-[#C778DD] font-semibold'>Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
