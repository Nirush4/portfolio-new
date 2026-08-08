import { type JSX } from 'react';
import { DotGrid } from './BackgroundAccents';

interface AboutSectionProps {
  lang: 'NO' | 'EN';
}

export const AboutSection = ({ lang }: AboutSectionProps): JSX.Element => {
  return (
    <section id='about' className='max-w-5xl mx-auto px-6 py-16 font-mono'>
      <div className='flex items-center gap-4 w-full max-w-sm mb-12'>
        <h2 className='text-white text-2xl font-medium'>
          <span className='text-[#FFE135]'>#</span>
          {lang === 'NO' ? 'om-meg' : 'about-me'}
        </h2>
        <div className='h-[1px] bg-[#FFE135] flex-grow'></div>
      </div>

      <div className='grid md:grid-cols-12 gap-8 items-center'>
        <div className='md:col-span-7 space-y-4 text-xs md:text-sm leading-relaxed text-[#8A99AD]'>
          {lang === 'NO' ? (
            <>
              <p className='text-white font-medium'>
                Jeg er Nirushan, en frontend-utvikler med en solid
                designbakgrunn.
              </p>
              <p>
                Frontend-utvikler med praktisk erfaring fra React- og
                TypeScript-baserte webapplikasjoner, bygget i smidige team med
                tett samarbeid mellom frontend, backend og design.
              </p>
              <p>
                Kombinerer dette med 8 års bakgrunn som grafisk designer, med
                solid forståelse for UX/UI, designsystemer og hvordan man gjør
                komplekst innhold forståelig og til å stole på for
                sluttbrukeren.
              </p>
              <p>
                Har fagbrev i frontend-utvikling fra Noroff Oslo (toppkarakteren
                A i alle fag) og praksisperiode hos Publicis Norway med
                API-integrasjoner, CI/CD i Azure DevOps og tett samarbeid på
                tvers av fag. Studerer for tiden backend-utvikling på nettbasert
                bachelorgrad.
              </p>
            </>
          ) : (
            <>
              <p className='text-white font-medium'>
                I am Nirushan, a frontend developer with a strong design
                background.
              </p>
              <p>
                Frontend developer with hands-on experience building React and
                TypeScript web applications in agile teams, working closely
                across frontend, backend, and design.
              </p>
              <p>
                Combining this with an 8-year background as a graphic designer,
                bringing a solid understanding of UX/UI, design systems, and how
                to make complex content intuitive and trustworthy for the end
                user.
              </p>
              <p>
                Holds a vocational certificate in frontend development from
                Noroff Oslo (top grade A in all subjects) and completed an
                internship at Publicis Norway featuring API integrations, CI/CD
                in Azure DevOps, and cross-functional collaboration. Currently
                studying backend development for an online bachelor's degree.
              </p>
            </>
          )}

          <div className='pt-2'>
            <a
              href='#contacts'
              className='inline-block px-4 py-2 border border-[#4FC3F7] text-[#4FC3F7] hover:bg-[#4FC3F7]/10 transition-colors text-xs'
            >
              {lang === 'NO' ? 'Kontakt meg ->' : 'Contact me ->'}
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
