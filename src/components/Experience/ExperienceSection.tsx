import { useRef, type JSX } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExperienceCard } from './ExperienceCard';

interface ExperienceSectionProps {
  lang: 'NO' | 'EN';
}

export const ExperienceSection = ({
  lang,
}: ExperienceSectionProps): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0.05, 0.95],
    ['0%', '100%']
  );

  const experiences = [
    {
      period: '02 Feb 2026 - 30 Apr 2026',
      role:
        lang === 'NO'
          ? 'Frontend-utvikler Intern'
          : 'Front-End Developer Intern',
      company: 'Publicis Norway',
      link: 'https://www.publicis.no/',
      badge: lang === 'NO' ? 'Praksis' : 'Internship',
      tasks:
        lang === 'NO'
          ? [
              'Utviklet og vedlikeholdt gjenbrukbare komponenter i React og TypeScript for en intern webapplikasjon, som bidro til bedre konsistens og raskere utvikling på tvers av kodebasen',
              'Bygget responsive og universelt utformede brukergrensesnitt ved bruk av Tailwind CSS og Mantine UI',
              'Feilsøkte, videreutviklet og optimaliserte eksisterende funksjonalitet for å forbedre ytelse og brukeropplevelse',
              'Samarbeidet tett med frontend- og backend-utviklere i et smidig (Agile) utviklingsteam, og deltok aktivt i sprint, daglige stand-ups og kodegjennomganger',
              'Benyttet Git og Azure DevOps til versjonskontroll, oppgavehåndtering og CI/CD-arbeidsflyter, og bidro til automatiserte bygge- og distribusjonsprosesser',
              'Skrev ren, vedlikeholdbar og gjenbrukbar kode i tråd med beste praksis for frontend-utvikling',
            ]
          : [
              'Developed and maintained reusable components in React and TypeScript for an internal web application, contributing to better consistency and faster development across the codebase',
              'Built responsive and accessible user interfaces using Tailwind CSS and Mantine UI',
              'Troubleshot, further developed, and optimized existing functionality to improve performance and user experience',
              'Collaborated closely with front-end and back-end developers in an Agile development team, actively participating in sprints, daily stand-ups, and code reviews',
              'Utilized Git and Azure DevOps for version control, task management, and CI/CD workflows, contributing to automated build and deployment processes',
              'Wrote clean, maintainable, and reusable code in line with front-end development best practices',
            ],
      images: [],
    },
    {
      period: '2024 - 2026',
      role:
        lang === 'NO'
          ? 'Frontend-utviklerstudent'
          : 'Front-End Developer Student',
      company: 'Noroff Oslo',
      link: '',
      badge:
        lang === 'NO' ? 'Utdanning / Utvikling' : 'Education / Development',
      tasks:
        lang === 'NO'
          ? [
              'Bygget moderne, responsive webapplikasjoner ved bruk av React og komponentbasert arkitektur',
              'Utviklet skalerbare frontend-applikasjoner med TypeScript for typesikkerhet og vedlikeholdbarhet',
              'Lagde gjenbrukbare UI-komponenter og strukturerte applikasjonslogikk ved hjelp av moderne React-mønstre',
              'Jobbet med Next.js for ruting, rendringsstrategier og ytelsesoptimalisering',
              'Integrerte API-er og håndterte asynkron dataflyt i React-applikasjoner',
              'Implementerte global tilstandsstyring og applikasjonslogikk i prosjekter basert på React',
              'Jobbet med testverktøy som Vitest, Playwright og Cypress for å sikre applikasjonens pålitelighet',
              'Samarbeidet i teammiljøer ved bruk av Git- og GitHub-arbeidsflyter i tråd med smidige prinsipper',
              'Fokusert på å skrive ren, vedlikeholdbar og skalerbar frontend-kode ved bruk av beste praksis',
            ]
          : [
              'Built modern, responsive web applications using React and component-based architecture',
              'Developed scalable front-end applications using TypeScript for type safety and maintainability',
              'Created reusable UI components and structured application logic using modern React patterns',
              'Worked with Next.js for routing, rendering strategies, and performance optimization',
              'Integrated APIs and handled asynchronous data flow in React applications',
              'Implemented global state management and application logic in React-based projects',
              'Worked with testing tools such as Vitest, Playwright, and Cypress to ensure application reliability',
              'Collaborated in team environments using Git and GitHub workflows following agile practices',
              'Focused on writing clean, maintainable, and scalable frontend code using best practices',
            ],
      images: [
        '/projects/rainydays.jpg',
        '/projects/aution-house.png',
        '/projects/holidaze.png',
        '/projects/online-shopping.png',
      ],
    },
    {
      period: 'January 2022 - August 2023',
      role: lang === 'NO' ? 'Senior designer' : 'Senior Graphic Designer',
      company: 'Halo Flights – Halo Group of Companies',
      link: 'https://www.haloflights.co.uk',
      badge: lang === 'NO' ? 'Design' : 'Design',
      tasks:
        lang === 'NO'
          ? [
              'Ledet den visuelle designstrategien for prosjekter, med sikring av samsvar med merkevareidentitet og markedsføringsmål',
              'Mentorerte juniordesignere og ga konstruktive tilbakemeldinger for å heve teamets designkvalitet',
              'Utviklet innovative designkonsepter for digitale medier, trykksaker, sosiale medier og reklamekampanjer',
              'Administrerte flere designprosjekter samtidig, og sikret rettidig levering uten at det gikk ut over kvaliteten',
              'Samarbeidet med prosjektledere, markedsførere, tekstforfattere og utviklere for å møte prosjektmål',
              'Vedlikeholdt og videreutviklet retningslinjer for merkevaren på tvers av alle visuelle eiendeler og kommunikasjoner',
              'Jobbet med UI/UX-design for nettsider, apper og interaktive plattformer, som sikrer intuitive og engasjerende brukeropplevelser',
              'Gikk igjennom alt visuelt innhold for nøyaktighet, konsistens og høye kvalitetsstandarder før levering',
            ]
          : [
              'Led the visual design strategy for projects, ensuring alignment with brand identity and marketing goals',
              'Mentor junior designers and provide constructive feedback to elevate team design quality',
              'Develop innovative design concepts for digital, print, social media, and advertising campaigns',
              'Manage multiple design projects simultaneously, ensuring timely delivery without compromising quality',
              'Collaborate with project managers, marketers, copywriters, and developers to meet project objectives',
              'Maintain and evolve brand guidelines across all visual assets and communications',
              'Work on UI/UX design for websites, apps, and interactive platforms, ensuring intuitive and engaging user experiences',
              'Review all visual content for accuracy, consistency, and high-quality standards before delivery',
            ],
      images: [
        '/graphic-design/2130330.jpg',
        '/graphic-design/2117377.jpg',
        '/graphic-design/2004986.jpg',
        '/graphic-design/1846732.png',
      ],
    },
    {
      period: '2019 - 2021',
      role: lang === 'NO' ? 'Grafisk designer' : 'Graphic Designer',
      company: 'DVSP Multi Service and Trading',
      link: '',
      badge: lang === 'NO' ? 'Design' : 'Design',
      tasks:
        lang === 'NO'
          ? [
              'Utviklet visuelt tiltalende grafikk for digital- og trykkmedier, inkludert sosiale medier, nettsider, brosjyrer, bannere, presentasjoner og markedsføringsmateriell',
              'Oversatt ideer og konsepter til fengende design som formidler det tiltenkte budskapet effektivt',
              'Sikret at alt design fulgte merkevarens retningslinjer og opprettholdt et konsistent utseende på tvers av plattformer',
              'Oppdatert og vedlikeholdt visuelle eiendeler i tråd med bedriftens merkevarestrategi',
              'Samarbeidet tett med markedsførings-, innholds- og produktteam for å forstå prosjektkrav og levere kvalitetsløsninger',
              'Håndtert flere designprosjekter fra idé til ferdigstillelse innen tidsfrister og kvalitetsstandarder',
            ]
          : [
              'Develop visually appealing graphics for digital and print media, including social media posts, websites, brochures, banners, presentations, and marketing materials',
              'Transform ideas and concepts into compelling designs that communicate the intended message effectively',
              'Ensure all designs align with brand guidelines and maintain a consistent look and feel across all platforms',
              'Update and maintain visual assets in line with the company’s branding strategy',
              'Work closely with marketing, content, and product teams to understand project requirements and deliver high-quality design solutions',
              'Manage multiple design projects from concept to completion, meeting deadlines and quality standards',
            ],
      images: [
        '/graphic-design/1730945.png',
        '/graphic-design/1731118.png',
        '/graphic-design/2004557.jpg',
        '/graphic-design/2004562.jpg',
      ],
    },
    {
      period: '2017 - 2019',
      role: lang === 'NO' ? 'Grafisk designer' : 'Graphic Designer',
      company: 'Malaysian Excellence Media Sdn. Bhd',
      link: '',
      badge: lang === 'NO' ? 'Design' : 'Design',
      tasks:
        lang === 'NO'
          ? [
              'Skapte engasjerende og visuelt overbevisende grafikk for digitale og trykte plattformer, inkludert sosiale medier, nettsider, brosjyrer og presentasjoner',
              'Oversatt konsepter og ideer til nyskapende design som formidler budskapet effektivt',
              'Opprettholdt merkevarekonsistens på tvers av alt visuelt materiale og sikret overholdelse av retningslinjer',
            ]
          : [
              'Create engaging and visually compelling graphics for digital and print platforms, including social media, websites, brochures, presentations, and marketing campaigns',
              'Translate concepts and ideas into innovative designs that effectively convey the intended message',
              'Maintain brand consistency across all visual materials and ensure adherence to brand guidelines',
            ],
      images: ['/graphic-design/steve.jpg', '/graphic-design/1873221.jpg'],
    },
    {
      period: '2014 - 2017',
      role: lang === 'NO' ? 'Grafisk designer' : 'Graphic Designer',
      company: 'Malaysian Hub Sdn. Bhd',
      link: '',
      badge: lang === 'NO' ? 'Design' : 'Design',
      tasks:
        lang === 'NO'
          ? [
              'Designet kreative og visuelt tiltalende grafiske elementer for både digitale medier og trykksaker, inkludert sosiale innlegg, nettsidegrafikk og brosjyrer',
              'Omdannet ideer og konsepter til effektive design som kommuniserte budskap klart til målgrupper',
              'Sikret at alt design fulgte retningslinjer for merkevaren og opprettholdt en konsistent, profesjonell visuell identitet',
            ]
          : [
              'Designed creative and visually appealing graphics for both digital and print media, including social posts, website visuals, brochures, presentations, and marketing materials',
              'Turned ideas and concepts into effective designs that communicated messages clearly to target audiences',
              'Ensured all designs adhered to brand guidelines, maintaining a consistent and professional visual identity across platforms',
            ],
      images: [],
    },
  ];

  return (
    <section
      id='experience'
      ref={containerRef}
      className='max-w-6xl mx-auto px-6 py-16 font-mono'
    >
      <div className='flex items-center gap-4 w-full max-w-md mb-14'>
        <h2 className='text-white text-2xl md:text-3xl font-medium'>
          <span className='text-[#C778DD]'>#</span>
          {lang === 'NO' ? 'erfaring' : 'experience'}
        </h2>
        <div className='h-[1px] bg-[#C778DD] flex-grow'></div>
      </div>

      <div className='relative ml-3 md:ml-6 pl-6 md:pl-10 space-y-6'>
        <div className='absolute left-0 md:left-0 top-3 bottom-3 w-[2px] bg-[#30363D]'></div>

        <motion.div
          style={{ height: lineHeight }}
          className='absolute left-0 md:left-0 top-3 w-[2px] bg-gradient-to-b from-[#C586C0] via-[#7EE787] to-[#C586C0] rounded-full'
        ></motion.div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <ExperienceCard
              period={exp.period}
              role={exp.role}
              company={exp.company}
              link={exp.link}
              badge={exp.badge}
              tasks={exp.tasks}
              lang={lang}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
