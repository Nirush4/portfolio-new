import { type JSX } from 'react';
import { DotGrid } from './BackgroundAccents';

export const AboutSection = (): JSX.Element => {
  return (
    <section id='about' className='max-w-5xl mx-auto px-6 py-16 font-mono'>
      <div className='flex items-center gap-4 w-full max-w-sm mb-12'>
        <h2 className='text-white text-2xl font-medium'>
          <span className='text-[#FFE135]'>#</span>about-me
        </h2>
        <div className='h-[1px] bg-[#FFE135] flex-grow'></div>
      </div>

      <div className='grid md:grid-cols-12 gap-8 items-center'>
        <div className='md:col-span-7 space-y-4 text-xs md:text-sm leading-relaxed text-[#8A99AD]'>
          <p className='text-white font-medium'>
            I am Nirushan and front end developer with design background.
          </p>
          <p>
            Front-end utvikler med praktisk erfaring fra React og TypeScript
            baserte webapplikasjoner, bygget i smidige team med tett samarbeid
            mellom frontend, back-end og design.
          </p>
          <p>
            Kombinerer dette med 8 års bakgrunn som grafisk designer, med solid
            forståelse for UX/UI, designsystemer og hvordan man gjør komplekst
            innhold forståelig og til å stole på for sluttbrukeren.
          </p>
          <p>
            Har fagbrev i front-end utvikling fra Noroff Oslo (toppkarakteren A
            i alle fag) og praksisperiode hos Publicis Norway med API
            integrasjoner, CI/CD i Azure DevOps og tett samarbeid på tvers av
            fag. Studerer for tiden back-end utvikling på nettbasert
            bachelorgrad.
          </p>
          <div className='pt-2'>
            <a
              href='#contacts'
              className='inline-block px-4 py-2 border border-[#4FC3F7] text-[#4FC3F7] hover:bg-[#4FC3F7]/10 transition-colors text-xs'
            >
              Contact me -&gt;
            </a>
          </div>
        </div>

        <div className='md:col-span-5 flex justify-center relative'>
          <DotGrid
            rows={5}
            cols={5}
            className='absolute top-4 left-4 -z-10 opacity-50'
          />
          <div className='w-64 h-80 border-b border-[#FFE135] bg-[#1E2230] border border-[#2E3548] overflow-hidden relative'>
            <img
              src='/nirushan.png'
              alt='Nirushan Rajamanoharan'
              className='w-full h-full object-cover'
            />
          </div>
          <DotGrid
            rows={5}
            cols={5}
            className='absolute bottom-4 right-4 -z-10 opacity-50'
          />
        </div>
      </div>
    </section>
  );
};
