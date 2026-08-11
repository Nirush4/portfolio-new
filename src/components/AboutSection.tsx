import { type JSX } from 'react';

interface AboutSectionProps {
  lang: 'NO' | 'EN';
}

export const AboutSection = ({ lang }: AboutSectionProps): JSX.Element => {
  return (
    <section
      id='about'
      className='max-w-6xl mx-auto px-6 py-16 font-mono'
      aria-labelledby='about-section-heading'
    >
      <div className='flex items-center gap-4 w-full max-w-md mb-12'>
        <h2
          id='about-section-heading'
          className='text-white text-2xl md:text-3xl font-medium'
        >
          <span className='text-[#C778DD]' aria-hidden='true'>
            #
          </span>
          {lang === 'NO' ? 'om-meg' : 'about-me'}
        </h2>
        <div
          className='h-[1px] bg-[#C778DD] flex-grow'
          aria-hidden='true'
        ></div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center '>
        <article className='lg:col-span-7 bg-[#282C34] border border-[#ABB2BF] hover:border-[#C778DD] transition-all rounded-none overflow-hidden shadow-lg flex flex-col justify-between'>
          <div className='px-4 py-3 bg-[#21252B] border-b border-[#ABB2BF] flex items-center justify-between'>
            <div className='flex items-center gap-2' aria-hidden='true'>
              <span
                className='w-3 h-3 rounded-full bg-[#E06C75]'
                aria-hidden='true'
              ></span>
              <span
                className='w-3 h-3 rounded-full bg-[#E5C07B]'
                aria-hidden='true'
              ></span>
              <span
                className='w-3 h-3 rounded-full bg-[#98C379]'
                aria-hidden='true'
              ></span>
            </div>
            <span className='text-[10px] lowercase font-bold tracking-widest text-[#E5C07B] bg-[#21252B] px-2.5 py-0.5 rounded-none border border-[#ABB2BF]/40 font-mono'>
              bio.tsx
            </span>
          </div>

          <div className='p-5 bg-[#282C34] text-xs md:text-sm leading-relaxed text-[#ABB2BF] space-y-4'>
            <div
              className='text-[#ABB2BF] select-none flex items-center gap-2 mb-2'
              aria-hidden='true'
            >
              <span className='text-[#61AFEF]'>//</span>
              <span>
                {lang === 'NO'
                  ? 'bakgrunn, reise & erfaring'
                  : 'background, journey & experience'}
              </span>
            </div>

            {lang === 'NO' ? (
              <div
                className='space-y-4'
                tabIndex={0}
                aria-label='Personlig biografi, reise og erfaring'
              >
                <p className='text-white font-medium font-sans'>
                  <span className='text-[#C778DD]' aria-hidden='true'>
                    const
                  </span>{' '}
                  <span className='text-[#E5C07B]'>developer</span> ={' '}
                  <span className='text-[#98C379]'>&quot;nirushan&quot;</span>;{' '}
                  <span className='text-[#ABB2BF]'>
                    // frontend-utvikler med solid designbakgrunn
                  </span>
                </p>
                <p className='font-sans'>
                  jeg er{' '}
                  <strong className='text-white font-semibold'>
                    frontend-utvikler
                  </strong>{' '}
                  og{' '}
                  <strong className='text-white font-semibold'>designer</strong>{' '}
                  med{' '}
                  <strong className='text-white font-semibold'>
                    8 års erfaring
                  </strong>{' '}
                  som{' '}
                  <strong className='text-white font-semibold'>
                    grafisk designer
                  </strong>
                  . overgangen til utvikling handlet ikke om å bytte retning,
                  men om å bygge løsningene, ikke bare designe dem.
                </p>
                <p className='font-sans'>
                  jeg har{' '}
                  <strong className='text-white font-semibold'>
                    fagbrev i frontend-utvikling fra noroff school of technology
                    and digital media
                  </strong>
                  . gjennom utdanningen bygget jeg et solid fundament innen
                  moderne webutvikling, fullførte studiet med{' '}
                  <strong className='text-white font-semibold'>
                    a i alle fag
                  </strong>{' '}
                  og mottok{' '}
                  <strong className='text-white font-semibold'>
                    golden egg-prisen
                  </strong>{' '}
                  for beste studentprosjekt i 2025. jeg utvikler
                  webapplikasjoner med{' '}
                  <strong className='text-white font-semibold'>react</strong>,{' '}
                  <strong className='text-white font-semibold'>
                    typescript
                  </strong>
                  , javascript, html og css, og bruker blant annet{' '}
                  <strong className='text-white font-semibold'>
                    tailwind css
                  </strong>{' '}
                  og{' '}
                  <strong className='text-white font-semibold'>
                    react router
                  </strong>{' '}
                  i prosjektene mine. jeg er opptatt av å skrive ren og
                  vedlikeholdbar kode, bygge gjenbrukbare komponenter og utvikle
                  løsninger som er responsive, tilgjengelige og enkle å bruke.{' '}
                  <strong className='text-white font-semibold'>
                    universell utforming (wcag)
                  </strong>
                  , api-integrasjon,{' '}
                  <strong className='text-white font-semibold'>
                    ci/cd i azure devops
                  </strong>
                  , tverrfaglig samarbeid (
                  <strong className='text-white font-semibold'>
                    cross-functional collaboration
                  </strong>
                  ) og versjonskontroll med git og github er en naturlig del av
                  arbeidsflyten min, og jeg ser på testing som en viktig del av
                  utviklingsprosessen.
                </p>
                <p className='font-sans'>
                  bakgrunnen min fra grafisk design gir meg en god forståelse
                  for både designprosessen og{' '}
                  <strong className='text-white font-semibold'>
                    brukeropplevelsen
                  </strong>
                  . det gjør at jeg ikke bare kan implementere et design fra{' '}
                  <strong className='text-white font-semibold'>figma</strong>,
                  men også forstå tankene bak løsningene og samarbeide godt med
                  både designere og utviklere. jeg trives i{' '}
                  <strong className='text-white font-semibold'>
                    smidige team
                  </strong>{' '}
                  hvor samarbeid, læring og problemløsning står i sentrum, og
                  jeg liker spesielt godt å være med gjennom hele
                  utviklingsprosessen—fra idé og planlegging til ferdig produkt.
                </p>
                <p className='font-sans'>
                  nå ser jeg etter nye muligheter som{' '}
                  <strong className='text-white font-semibold'>
                    frontend-utvikler
                  </strong>{' '}
                  eller{' '}
                  <strong className='text-white font-semibold'>designer</strong>
                  , hvor jeg kan bidra med både teknisk frontend-kompetanse og
                  sterk designforståelse, samtidig som jeg{' '}
                  <strong className='text-white font-semibold'>
                    studerer nettbasert backend-utvikler for å bli en
                    fullstack-utvikler
                  </strong>
                  . ta gjerne kontakt hvis du tror min bakgrunn kan passe inn i
                  teamet ditt!
                </p>
              </div>
            ) : (
              <div
                className='space-y-4'
                tabIndex={0}
                aria-label='Personal biography, journey and experience'
              >
                <p className='text-white font-medium font-sans'>
                  <span className='text-[#C778DD]' aria-hidden='true'>
                    const
                  </span>{' '}
                  <span className='text-[#E5C07B]'>developer</span> ={' '}
                  <span className='text-[#98C379]'>&quot;nirushan&quot;</span>;{' '}
                  <span className='text-[#ABB2BF]'>
                    // frontend developer with strong design roots
                  </span>
                </p>
                <p className='font-sans'>
                  i am a{' '}
                  <strong className='text-white font-semibold'>
                    frontend developer
                  </strong>{' '}
                  and{' '}
                  <strong className='text-white font-semibold'>designer</strong>{' '}
                  with{' '}
                  <strong className='text-white font-semibold'>8 years</strong>{' '}
                  of background as a{' '}
                  <strong className='text-white font-semibold'>
                    graphic designer
                  </strong>
                  . transitioning into development was never about changing
                  direction, it was about building the solutions, not just
                  designing them.
                </p>
                <p className='font-sans'>
                  i hold a{' '}
                  <strong className='text-white font-semibold'>
                    professional degree in front-end development from Noroff
                    School of Technology and Digital Media
                  </strong>
                  . through my education, i built a solid foundation in modern
                  web engineering, completed my studies with{' '}
                  <strong className='text-white font-semibold'>
                    top grades (A)
                  </strong>{' '}
                  across all subjects, and received the{' '}
                  <strong className='text-white font-semibold'>
                    golden egg award
                  </strong>{' '}
                  for best student project in 2025. my technical stack includes{' '}
                  <strong className='text-white font-semibold'>react</strong>,{' '}
                  <strong className='text-white font-semibold'>
                    typescript
                  </strong>
                  , javascript, html, and css, supplemented by modern tooling
                  like{' '}
                  <strong className='text-white font-semibold'>
                    tailwind css
                  </strong>{' '}
                  and{' '}
                  <strong className='text-white font-semibold'>
                    react router
                  </strong>
                  . i am passionate about writing clean, maintainable code,
                  architecting reusable components, and delivering responsive,
                  accessible digital experiences.{' '}
                  <strong className='text-white font-semibold'>
                    universal design (WCAG)
                  </strong>
                  , api integrations,{' '}
                  <strong className='text-white font-semibold'>
                    CI/CD in Azure DevOps
                  </strong>
                  ,{' '}
                  <strong className='text-white font-semibold'>
                    cross-functional collaboration
                  </strong>
                  , and version control via git/github form the core of my daily
                  workflow, alongside thorough testing practices.
                </p>
                <p className='font-sans'>
                  my extensive graphic design background provides deep insight
                  into{' '}
                  <strong className='text-white font-semibold'>
                    UX/UI principles
                  </strong>
                  , visual hierarchies, and user psychology. this allows me to
                  bridge the gap between{' '}
                  <strong className='text-white font-semibold'>Figma</strong>{' '}
                  mockups and production code effortlessly while fostering
                  strong communication between designers and developers. i
                  thrive in{' '}
                  <strong className='text-white font-semibold'>
                    agile teams
                  </strong>{' '}
                  centered on continuous learning and collaborative
                  problem-solving, enjoying every phase of the software
                  lifecycle from initial concept to final deployment.
                </p>
                <p className='font-sans'>
                  i am currently seeking new opportunities as a{' '}
                  <strong className='text-white font-semibold'>
                    frontend developer
                  </strong>{' '}
                  or{' '}
                  <strong className='text-white font-semibold'>designer</strong>{' '}
                  where i can leverage both my frontend execution and design
                  sensibility, while{' '}
                  <strong className='text-white font-semibold'>
                    currently studying online backend developer to become a full
                    stack developer
                  </strong>
                  . feel free to reach out if you would like to connect!
                </p>
              </div>
            )}

            <div className='pt-4'>
              <a
                href='#contacts'
                className='inline-flex items-center gap-2 px-4 py-2 bg-[#21252B] text-white border border-[#ABB2BF]/60 text-xs font-mono rounded-none hover:border-[#C778DD] hover:text-[#C778DD] transition-all focus:outline-none focus:ring-2 focus:ring-[#C778DD]'
                aria-label={
                  lang === 'NO'
                    ? 'gå til kontaktskjema'
                    : 'navigate to contact section'
                }
              >
                <span>{lang === 'NO' ? 'kontakt meg' : 'contact me'}</span>
                <span aria-hidden='true'>-&gt;</span>
              </a>
            </div>
          </div>
        </article>

        <div className='lg:col-span-5 flex justify-center'>
          <div className='border border-[#ABB2BF] bg-[#282C34] rounded-none overflow-hidden shadow-lg w-full max-w-sm'>
            <div className='px-4 py-3 bg-[#21252B] border-b border-[#ABB2BF] flex items-center justify-between'>
              <div className='flex items-center gap-2' aria-hidden='true'>
                <span
                  className='w-3 h-3 rounded-full bg-[#E06C75]'
                  aria-hidden='true'
                ></span>
                <span
                  className='w-3 h-3 rounded-full bg-[#E5C07B]'
                  aria-hidden='true'
                ></span>
                <span
                  className='w-3 h-3 rounded-full bg-[#98C379]'
                  aria-hidden='true'
                ></span>
              </div>
              <span className='text-[10px]  font-bold tracking-widest text-[#E5C07B] bg-[#21252B] px-2.5 py-0.5 rounded-none border border-[#ABB2BF]/40 font-mono'>
                profile.png
              </span>
            </div>

            <div className='p-4 bg-[#282C34]'>
              <div
                className='w-full h-80 md:h-96 border border-[#ABB2BF]/60 bg-[#21252B] rounded-none overflow-hidden relative shadow-inner flex items-center justify-center p-2'
                role='region'
                aria-label={
                  lang === 'NO'
                    ? 'portrettbilde av nirushan rajamanoharan'
                    : 'portrait photo of nirushan rajamanoharan'
                }
              >
                <img
                  src='/portfolio_pic2.jpeg'
                  alt={
                    lang === 'NO'
                      ? 'portrettbilde av nirushan rajamanoharan'
                      : 'portrait photo of nirushan rajamanoharan'
                  }
                  className='w-full h-full object-cover rounded-none'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
