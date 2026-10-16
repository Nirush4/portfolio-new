import { type JSX, useState } from 'react';

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
    <div
      id='honors-awards'
      className='relative w-full font-mono overflow-hidden bg-[#F4F5F7]'
    >
      <div
        className='w-full h-12 md:h-20 bg-[#F4F5F7] -mb-1 relative z-10'
        style={{
          clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)',
        }}
        aria-hidden='true'
      />

      <section
        className='max-w-6xl mx-auto px-6 py-2 font-mono relative z-10'
        aria-labelledby='honors-awards-heading'
      >
        <div className='flex items-center gap-4 w-full max-w-md mb-12'>
          <h2
            id='honors-awards-heading'
            className='text-[#0C121E] text-2xl md:text-4xl font-black uppercase tracking-tight'
          >
            <span
              className='text-[rgb(237,242,81)] bg-[#0C121E] px-2 py-0.5 mr-1'
              aria-hidden='true'
            >
              #
            </span>
            {lang === 'NO' ? 'priser' : 'honors-awards'}
          </h2>
          <div
            className='h-[2px] bg-[#0C121E] flex-grow'
            aria-hidden='true'
          ></div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 items-start'>
          <div className='lg:col-span-7 bg-white border-2 border-[#0C121E] rounded-none overflow-hidden shadow-[4px_4px_0px_0px_rgba(12,18,30,1)] hover:border-[#0C121E] transition-all flex flex-col justify-between'>
            <div className='px-4 py-3 bg-[#0C121E] border-b-2 border-[#0C121E] flex items-center justify-between text-white'>
              <h3 className='text-white text-sm font-bold tracking-wide flex items-center gap-2'>
                <span className='text-[rgb(237,242,81)]' aria-hidden='true'>
                  &gt;
                </span>
                {lang === 'NO'
                  ? 'Golden Egg 2025 · Noroff'
                  : 'Golden Egg 2025 · Noroff'}
              </h3>
              <span className='text-[10px] text-[#0C121E] bg-[rgb(237,242,81)] px-2 py-0.5 rounded border border-[#0C121E] font-bold'>
                2025
              </span>
            </div>

            <div className='p-5 bg-white text-xs leading-relaxed text-[#0C121E]'>
              <div
                className='text-[#0C121E]/70 mb-3 select-none flex items-center gap-2'
                aria-hidden='true'
              >
                <span className='text-[rgb(237,242,81)] bg-[#0C121E] px-1 py-0.5 font-bold'>
                  //
                </span>
                <span>
                  {lang === 'NO'
                    ? 'Anerkjennelse & Prestasjon'
                    : 'Recognition & Achievement'}
                </span>
              </div>

              <h4 className='text-[#0C121E] text-base md:text-lg font-bold font-sans mb-3 flex items-center gap-2'>
                <span aria-hidden='true'>🏆</span>
                <span>
                  {lang === 'NO'
                    ? 'Beste studentarbeid innen frontend-utvikling'
                    : 'Best Student Work in Front-End Development'}
                </span>
              </h4>

              <div className='space-y-3 font-sans text-[#0C121E]/90 text-xs md:text-sm mb-4'>
                <p className='leading-relaxed text-[#0C121E]/80'>
                  {lang === 'NO'
                    ? 'Denne anerkjennelsen betyr utrolig mye for meg. Fra dag én fordypet jeg meg i frontend-utvikling, og utforsket alle rammeverk, verktøy og teknikker. Reisen var utfordrende, med sene kvelder og utallige revisjoner, men hver hindring styrket mine ferdigheter og viljestyrke.'
                    : 'This recognition is deeply meaningful to me. From day one, I immersed myself in front-end development, exploring every framework, tool, and technique. The journey was challenging, with late nights and countless iterations, but every obstacle strengthened my skills and determination.'}
                </p>
                <p className='leading-relaxed text-[#0C121E]/80'>
                  {lang === 'NO'
                    ? 'Å motta denne prisen under Golden Egg 2025 gjenspeiler dedikasjon, utholdenhet og en lidenskap for å skape elegante, brukervennlige webopplevelser. Det motiverer meg til å flytte grenser, innovere og forfølge ekspertise i hvert eneste prosjekt.'
                    : 'Receiving this award at Golden Egg 2025 reflects dedication, perseverance, and a passion for crafting elegant, user-friendly web experiences. It motivates me to push boundaries, innovate, and pursue excellence in every project I undertake.'}
                </p>
              </div>

              <div className='pt-3 border-t-2 border-[#0C121E]/10 flex items-center justify-between text-xs font-mono'>
                <span className='text-[#0C121E]/80 font-medium'>
                  {lang === 'NO'
                    ? 'Utstedt av: Noroff School of Technology and Digital Media'
                    : 'Issued by: Noroff School of Technology and Digital Media'}
                </span>
                <span className='bg-[rgb(237,242,81)] text-[#0C121E] px-2 py-0.5 border border-[#0C121E] font-bold'>
                  Year: 2025
                </span>
              </div>
            </div>
          </div>

          <div className='lg:col-span-5 bg-white border-2 border-[#0C121E] rounded-none overflow-hidden shadow-[4px_4px_0px_0px_rgba(12,18,30,1)] transition-all'>
            <div className='px-4 py-3 bg-[#0C121E] border-b-2 border-[#0C121E] flex items-center justify-between text-white'>
              <div className='flex items-center gap-2'>
                <div className='flex gap-1.5' aria-hidden='true'>
                  <div
                    className='w-2.5 h-2.5 rounded-full bg-[#FF5F56]'
                    aria-hidden='true'
                  ></div>
                  <div
                    className='w-2.5 h-2.5 rounded-full bg-[#FFBD2E]'
                    aria-hidden='true'
                  ></div>
                  <div
                    className='w-2.5 h-2.5 rounded-full bg-[#27C93F]'
                    aria-hidden='true'
                  ></div>
                </div>
                <span className='text-white text-xs font-semibold tracking-wide ml-1'>
                  gallery.tsx
                </span>
              </div>
              <span className='text-[10px] text-[#0C121E] bg-[rgb(237,242,81)] px-2 py-0.5 rounded border border-[#0C121E] font-bold'>
                viewer
              </span>
            </div>

            <div className='p-4 bg-white space-y-4'>
              <div
                className='relative w-full h-[450px] md:h-[500px] border-2 border-[#0C121E] rounded-sm overflow-hidden bg-[#F4F5F7] shadow-inner flex items-center justify-center'
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
                <div className='absolute bottom-2 left-2 bg-[#0C121E]/90 text-white border border-[#0C121E] px-2 py-1 rounded text-[10px] font-mono'>
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
                      className={`relative flex-1 h-20 rounded-sm overflow-hidden cursor-pointer border-2 transition-all bg-[#F4F5F7] flex items-center justify-center focus:outline-none ${
                        isSelected
                          ? 'border-[#0C121E] ring-2 ring-[rgb(237,242,81)]'
                          : 'border-[#0C121E]/30 opacity-70 hover:opacity-100'
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

              <div className='text-[10px] text-[#0C121E]/70 pt-2 border-t-2 border-[#0C121E]/10 flex justify-between items-center'>
                <span>
                  {lang === 'NO'
                    ? 'Klikk for å bytte bilde'
                    : 'Click to switch preview'}
                </span>
                <span className='bg-[rgb(237,242,81)] text-[#0C121E] px-1.5 py-0.5 border border-[#0C121E] font-semibold'>
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className='w-full h-12 md:h-20 bg-[#F4F5F7] -mt-1 relative z-10'
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 25%, 0 100%)',
        }}
        aria-hidden='true'
      />
    </div>
  );
};
