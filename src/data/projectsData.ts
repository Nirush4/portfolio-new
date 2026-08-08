import type { FrontendProject, GraphicProject } from '../types/portfolio';

// Multilingual text wrapper helper
export interface LocalizedText {
  NO: string;
  EN: string;
}

export interface LocalizedArray {
  NO: string[];
  EN: string[];
}

export interface LocalizedFrontendProject
  extends Omit<
    FrontendProject,
    'description' | 'problem' | 'uxProcess' | 'figmaDesign' | 'finalSolution'
  > {
  description: LocalizedText;
  problem: LocalizedText;
  uxProcess: LocalizedArray;
  figmaDesign: LocalizedArray;
  finalSolution: LocalizedArray;
}

export interface LocalizedGraphicProject
  extends Omit<
    GraphicProject,
    | 'projectType'
    | 'description'
    | 'challenge'
    | 'research'
    | 'designProcess'
    | 'designDecisions'
    | 'finalOutcome'
    | 'typography'
    | 'deliverables'
  > {
  projectType: LocalizedText;
  description: LocalizedText;
  challenge: LocalizedText;
  research: LocalizedArray;
  designProcess: LocalizedArray;
  designDecisions: LocalizedArray;
  finalOutcome: LocalizedArray;
  typography: LocalizedArray;
  deliverables: LocalizedArray;
}

export const FRONTEND_PROJECTS: LocalizedFrontendProject[] = [
  {
    id: 1,
    name: 'Holidaze 🏡',
    description: {
      NO: 'Moderne plattform for overnattingsbestilling bygget med React og TypeScript, med stedshåndtering, bestillinger, autentisering og en skalerbar frontend-arkitektur.',
      EN: 'Modern accommodation booking platform built with React and TypeScript, featuring venue management, bookings, authentication, and a scalable frontend architecture.',
    },
    problem: {
      NO: 'Reisende trenger en enkel måte å oppdage og bestille overnatting på, mens utleiere krever effektive verktøy for å administrere annonser, bestillinger og tilgjengelighet.',
      EN: 'Travelers need an easy way to discover and book accommodation, while venue owners require efficient tools for managing listings, bookings, and availability.',
    },
    uxProcess: {
      NO: [
        'Undersøkte eksisterende plattformer for overnattingsbestilling for å forstå brukerens forventninger og bestillingsadferd.',
        'Skapte brukerreiser for både kunder og utleiere.',
        'Designet trådkerter for å validere bestillingsflyter og administrasjonsopplevelser.',
        'Testet navigeringsmønstre og oppsett for å sikre tilgjengelighet og responsivitet.',
      ],
      EN: [
        'Researched existing accommodation booking platforms to understand user expectations and booking behaviors.',
        'Created user journeys for both customers and venue managers.',
        'Designed wireframes to validate booking workflows and venue management experiences.',
        'Tested navigation patterns and layouts to ensure accessibility and responsiveness.',
      ],
    },
    figmaDesign: {
      NO: [
        'Laget lav-fidelitets trådkerter for søk, bestilling og administrasjonssider.',
        'Designet responsive høy-fidelitets mockups for stasjonære og mobile enheter.',
        'Utviklet et gjenbrukbart komponent-system for skjemaer, kort og navigasjon.',
        'Prototypet viktige brukerinteraksjoner før utvikling.',
      ],
      EN: [
        'Created low-fidelity wireframes for search, booking, and venue management pages.',
        'Designed responsive high-fidelity mockups for desktop and mobile devices.',
        'Developed a reusable component system for forms, cards, and navigation.',
        'Prototyped key user interactions before development.',
      ],
    },
    finalSolution: {
      NO: [
        'Bygget en fullt responsiv plattform for overnattingsbestilling med React og TypeScript.',
        'Implementerte stedssøk, søkefunksjonalitet, bestillingshåndtering og tilgjengelighetskalendere.',
        'Opprettet et dedikert dashbord for utleiere for å administrere oppføringer og reservasjoner.',
        'Integrerte autentisering, skjemavalidering, tilstandshåndtering og automatisert testing.',
      ],
      EN: [
        'Built a fully responsive accommodation booking platform using React and TypeScript.',
        'Implemented venue browsing, search functionality, booking management, and availability calendars.',
        'Created a dedicated dashboard for venue managers to manage listings and reservations.',
        'Integrated authentication, form validation, state management, and automated testing.',
      ],
    },
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Mantine UI',
      'Material UI',
      'Zustand',
      'React Hook Form',
      'Zod',
      'Vitest',
      'Playwright',
    ],
    github: 'https://github.com/Nirush4/Holidaze-booking-platform',
    live: 'https://holidaze-booking-hub.netlify.app/',
    Figma:
      'https://www.figma.com/design/XNqFbiOZuNuuIp7xPNdLtc/Holidaze?node-id=0-1&t=w4cNDvcLeRQdYoPI-1',
    thumbnail: '/projects/holidaze.png',
    screenshots: [],
    category: 'frontend',
  },

  {
    id: 2,
    name: 'Online Shop 🛒',
    description: {
      NO: 'Frontend e-handelsapplikasjon bygget med React og TypeScript, med fokus på ytelse, skalerbarhet og en ren brukeropplevelse.',
      EN: 'Frontend e-commerce application built with React and TypeScript, focused on performance, scalability, and a clean user experience.',
    },
    problem: {
      NO: 'Nettshoppere trenger en rask og intuitiv måte å bla gjennom produkter, sammenligne alternativer, administrere kjøp og fullføre transaksjoner effektivt på tvers av enheter.',
      EN: 'Online shoppers need a fast and intuitive way to browse products, compare options, manage purchases, and complete transactions efficiently across all devices.',
    },
    uxProcess: {
      NO: [
        'Analyserte vanlige e-handels brukerreiser og kjøpsadferd.',
        'Skapte brukerflyter for produktoppdagelse, kurv- og betalingshåndtering.',
        'Designet trådkerter for å forenkle navigasjon og redusere friksjon gjennom handleopplevelsen.',
        'Fokuserte på tilgjengelighet, responsive layouter og mobilførst designprinsipper.',
      ],
      EN: [
        'Analyzed common e-commerce user journeys and purchasing behaviors.',
        'Created user flows for product discovery, cart management, and checkout.',
        'Designed wireframes to simplify navigation and reduce friction throughout the shopping experience.',
        'Focused on accessibility, responsive layouts, and mobile-first design principles.',
      ],
    },
    figmaDesign: {
      NO: [
        'Laget responsive oppsett for produktlister, produktsider og sjekk ut-flyter.',
        'Designet gjenbrukbare UI-komponenter inkludert kort, navigasjon, skjemaer og produktgallerier.',
        'Bygget et konsistent visuelt hierarki for å forbedre produktoppdagelse og lesbarhet.',
        'Prototypet handleinteraksjoner og kasseopplevelser før utvikling.',
      ],
      EN: [
        'Created responsive layouts for product listings, product detail pages, and checkout flows.',
        'Designed reusable UI components including cards, navigation, forms, and product galleries.',
        'Built a consistent visual hierarchy to improve product discoverability and readability.',
        'Prototyped shopping interactions and checkout experiences before development.',
      ],
    },
    finalSolution: {
      NO: [
        'Bygget en skalerbar e-handelsapplikasjon med React og TypeScript.',
        'Implementerte produktlesing, søk, sortering, filtrering og detaljerte produktsider.',
        'Opprettet en Zustand-drevet handlekurv med sømløs produkthåndtering.',
        'Integrerte TanStack Query for effektiv API-kommunikasjon, cachenivåer og server-state håndtering.',
        'La til skjemavalidering og responsive UI-komponenter for en polert brukeropplevelse.',
      ],
      EN: [
        'Built a scalable e-commerce application using React and TypeScript.',
        'Implemented product browsing, search, sorting, filtering, and detailed product pages.',
        'Created a Zustand-powered shopping cart with seamless product management.',
        'Integrated TanStack Query for efficient API communication, caching, and server-state management.',
        'Added form validation and responsive UI components for a polished user experience.',
      ],
    },
    technologies: [
      'React',
      'TypeScript',
      'TanStack Query',
      'Zustand',
      'Zod',
      'Mantine UI',
      'Tailwind CSS',
    ],
    github: 'https://github.com/Nirush4/JavaScript-Frameworks',
    live: 'https://online-shopping-master.netlify.app/',
    thumbnail: '/projects/online-shopping.png',
    screenshots: [],
    category: 'frontend',
  },

  {
    id: 3,
    name: 'NewsHub 📰',
    description: {
      NO: 'Fullstack nyhetsplattform bygget med React, TypeScript og Tailwind CSS, som bruker Supabase som Backend-as-a-Service for autentisering, databasedrift og sikre CRUD-operasjoner.',
      EN: 'Full-stack news platform built with React, TypeScript, and Tailwind CSS, using Supabase as a Backend-as-a-Service for authentication, database management, and secure CRUD operations.',
    },
    problem: {
      NO: 'Aspirerende skribenter og innholdsskapere trenger en sikker plattform der de kan publisere, redigere og administrere artikler samtidig som de sikrer eierskap og personvern for innholdet sitt.',
      EN: 'Aspiring writers and content creators need a secure platform where they can publish, edit, and manage articles while ensuring ownership and privacy of their content.',
    },
    uxProcess: {
      NO: [
        'Undersøkte innholdsforvaltningssystemer og publiseringsplattformer på nett for å identifisere vanlige brukerforventninger.',
        'Kartla brukerreiser for å lese artikler, opprette innhold, redigere innlegg og administrere kontoer.',
        'Skapte trådkerter med fokus på lesbarhet, innholdshierarki og strømlinjeformet navigasjon.',
        'Designet autentiserings- og artikkelhåndteringsflyter for å redusere kompleksitet for brukere.',
      ],
      EN: [
        'Researched content management systems and online publishing platforms to identify common user expectations.',
        'Mapped user journeys for reading articles, creating content, editing posts, and managing accounts.',
        'Created wireframes focused on readability, content hierarchy, and streamlined navigation.',
        'Designed authentication and article management flows to reduce complexity for users.',
      ],
    },
    figmaDesign: {
      NO: [
        'Designet responsive artikkelstrømmer og artiklenes detaljsider.',
        'Opprettet dashbordoppsett for innholdsskaping og artikkelhåndtering.',
        'Bygget gjenbrukbare UI-komponenter for skjemaer, navigasjon og innholds-kort.',
        'Etablerte et rent visuelt hierarki som prioriterer lesbarhet og tilgjengelighet.',
      ],
      EN: [
        'Designed responsive article feeds and article detail pages.',
        'Created dashboard layouts for content creation and article management.',
        'Built reusable UI components for forms, navigation, and content cards.',
        'Established a clean visual hierarchy that prioritizes readability and accessibility.',
      ],
    },
    finalSolution: {
      NO: [
        'Utviklet en fullstack nyhetsplattform med React, TypeScript og Supabase.',
        'Implementerte autentisering, beskyttede ruter og brukerspesifikk innholdsforvaltning.',
        'La til full CRUD-funksjonalitet for oppretting, redigering og sletting av artikler.',
        'Brukte Row Level Security (RLS) for å sikre at brukere bare kan endre sitt eget innhold.',
        'Leverte en responsiv og tilgjengelig brukeropplevelse på tvers av enheter.',
      ],
      EN: [
        'Developed a full-stack news platform using React, TypeScript, and Supabase.',
        'Implemented authentication, protected routes, and user-specific content management.',
        'Added full CRUD functionality for article creation, editing, and deletion.',
        'Applied Row Level Security (RLS) to ensure users can only modify their own content.',
        'Delivered a responsive and accessible user experience across all devices.',
      ],
    },
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'Supabase Auth',
      'PostgreSQL',
    ],
    github: 'https://github.com/Nirush4/Development-platforms-ca-nirush',
    live: 'https://news-hubnet.netlify.app/?q=&page=1',
    thumbnail: '/projects/news-hub.png',
    screenshots: [],
    category: 'frontend',
  },

  {
    id: 4,
    name: 'Auction House 🏷️',
    description: {
      NO: 'Responsiv og tilgjengelig auksjonsplattform bygget med ren TypeScript og Tailwind CSS, som integrerer Noroff Auction House API v2.',
      EN: 'Responsive and accessible auction platform built with Vanilla TypeScript and Tailwind CSS, integrating the Noroff Auction House API v2.',
    },
    problem: {
      NO: 'Brukere trenger en transparent og pålitelig auksjonsplattform der de kan opprette oppføringer, legge inn bud og administrere auksjoner i et sikkert og brukervennlig miljø.',
      EN: 'Users need a transparent and trustworthy auction platform where they can create listings, place bids, and manage auctions in a secure and easy-to-use environment.',
    },
    uxProcess: {
      NO: [
        'Undersøkte vanlige auksjonsplattformer for å forstå budgivningsadferd og brukerforventninger.',
        'Kartla brukerreiser for oppretting av oppføringer, surfing, budgivning og profiladministrasjon.',
        'Skapte trådkerter med fokus på klarhet, tilgjengelighet og sanntids samhandlingsflyt.',
        'Testet navigasjon og layoutstruktur for responsivitet på tvers av enheter.',
      ],
      EN: [
        'Researched common auction platforms to understand bidding behavior and user expectations.',
        'Mapped user journeys for listing creation, browsing, bidding, and profile management.',
        'Created wireframes focused on clarity, accessibility, and real-time interaction flow.',
        'Tested navigation and layout structure for responsiveness across devices.',
      ],
    },
    figmaDesign: {
      NO: [
        'Designet oppføringssider, auksjonsdetaljer og brukerprofil-dashboards.',
        'Opprettet gjenbrukbare UI-komponenter for kort, skjemaer og budgivningsgrensesnitt.',
        'Fokusert på klart visuelt hierarki for å fremheve bud og oppføringsdetaljer.',
        'Utviklet responsive design optimalisert for både stasjonære og mobile skjermer.',
      ],
      EN: [
        'Designed listing pages, auction detail views, and user profile dashboards.',
        'Created reusable UI components for cards, forms, and bidding interfaces.',
        'Focused on clear visual hierarchy to highlight bids and listing details.',
        'Developed responsive designs optimized for both desktop and mobile screens.',
      ],
    },
    finalSolution: {
      NO: [
        'Bygget en komplett auksjonsplattform ved hjelp av ren TypeScript uten rammeverk.',
        'Integrerte Noroff Auction House API for autentisering og auksjonsdata.',
        'Implementerte budfunksjonalitet, oppføringsadministrasjon og brukerprofiler.',
        'La til dynamiske UI-oppdateringer for sanntidsinteraksjon uten sideinnlesninger.',
        'Leverte en fullstendig responsiv og tilgjengelig brukeropplevelse.',
      ],
      EN: [
        'Built a complete auction platform using Vanilla TypeScript without frameworks.',
        'Integrated the Noroff Auction House API for authentication and auction data.',
        'Implemented bidding functionality, listing management, and user profiles.',
        'Added dynamic UI updates for real-time interaction without page reloads.',
        'Delivered a fully responsive and accessible user experience.',
      ],
    },
    technologies: [
      'HTML5',
      'Tailwind CSS',
      'TypeScript',
      'Noroff API v2',
      'JWT Authentication',
    ],
    github: 'https://github.com/Nirush4/Auction-House',
    live: 'https://auctionn-house.netlify.app/',
    Figma:
      'https://www.figma.com/design/24nEKpFa9DxvuXji5oADrA/Auction-House?node-id=0-1&t=V6CCv8hOE97gdcae-1',
    thumbnail: '/projects/aution-house.png',
    screenshots: [],
    category: 'frontend',
  },

  {
    id: 5,
    name: 'Flip Match – Memory Card Game',
    description: {
      NO: 'Et responsivt huskespill (memory) bygget med React, TypeScript og Tailwind CSS, med jevne interaksjoner og enkle spillmekanikker.',
      EN: 'A responsive memory card matching game built with React, TypeScript, and Tailwind CSS, featuring smooth interactions and simple game mechanics.',
    },
    problem: {
      NO: 'Spillere trenger et enkelt, engasjerende spill som utfordrer hukommelsesferdighetene samtidig som det forblir intuitivt, raskt og responsivt på tvers av alle enheter.',
      EN: 'Players need a simple, engaging game that challenges memory skills while remaining intuitive, fast, and responsive across all devices.',
    },
    uxProcess: {
      NO: [
        'Definerte kjernespillmekanikker inkludert kortsnudd logikk, matchinglogikk og seiersbetingelser.',
        'Skapte brukerflyter med fokus på enkelhet og raske spilløp.',
        'Designet trådkerter for spillebrettets layout og interaksjonstilstander.',
        'Testet brukervennlighet for å sikre jevn og forutsigbar spilladferd.',
      ],
      EN: [
        'Defined core game mechanics including card flipping, matching logic, and win conditions.',
        'Created user flows focusing on simplicity and quick gameplay loops.',
        'Designed wireframes for game board layout and interaction states.',
        'Tested usability to ensure smooth and predictable gameplay behavior.',
      ],
    },
    figmaDesign: {
      NO: [
        'Designet kort-layouter og spillebrettstruktur med et klart rutenettsystem.',
        'Opprettet responsive oppsett for stasjonær og mobil spilling.',
        'Utviklet visuelle tilstander for kortvending, matching og feilmatching.',
        'Fokusert på en leken, minimal UI som opprettholder spillbarhetens klarhet.',
      ],
      EN: [
        'Designed card layouts and game board structure with a clear grid system.',
        'Created responsive layouts for desktop and mobile gameplay.',
        'Developed visual states for card flip, match, and mismatch interactions.',
        'Focused on a playful, minimal UI that supports gameplay clarity.',
      ],
    },
    finalSolution: {
      NO: [
        'Bygget et interaktivt huskespill med React og TypeScript.',
        'Implementerte kortstokking, matchinglogikk og seiersdeteksjon.',
        'La til trekksporing og omstartfunksjonalitet for gjenspillbarhet.',
        'Opprettet jevne UI-interaksjoner og responsivt design ved hjelp av Tailwind CSS.',
      ],
      EN: [
        'Built an interactive memory card game using React and TypeScript.',
        'Implemented card shuffling, matching logic, and win detection.',
        'Added move tracking and restart functionality for replayability.',
        'Created smooth UI interactions and responsive design using Tailwind CSS.',
      ],
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/Nirush4/Flip-Match',
    live: 'https://flip-match-memory.netlify.app/',
    thumbnail: '/projects/flip-match.png',
    screenshots: [],
    category: 'frontend',
  },

  {
    id: 6,
    name: 'Rainy Days – Interactive Product Storefronts',
    description: {
      NO: 'En dynamisk nettbutikk bygget med ren JavaScript og sanntids produktdata fra et eksternt API.',
      EN: 'A dynamic online shop built with vanilla JavaScript and real-time product data from an external API.',
    },
    problem: {
      NO: 'Kunder trenger en enkel, rask og responsiv butikkfront hvor produktinformasjonen alltid er oppdatert og enkel å bla igjennom.',
      EN: 'Customers need a simple, fast, and responsive storefront where product information is always up to date and easy to browse.',
    },
    uxProcess: {
      NO: [
        'Undersøkte vanlige e-handelslayouter og brukerforventninger til produktlesing.',
        'Planla brukerflyter for å oppdage produkter og se produktdetaljer.',
        'Skapte trådkerter med fokus på enkelhet, klarhet og enkel navigering.',
        'Testet oppsett på tvers av flere skjermstørrelser for å sikre responsivitet.',
      ],
      EN: [
        'Researched common e-commerce layouts and user expectations for product browsing.',
        'Planned user flows for discovering products and viewing product details.',
        'Created wireframes focused on simplicity, clarity, and ease of navigation.',
        'Tested layouts across multiple screen sizes to ensure responsiveness.',
      ],
    },
    figmaDesign: {
      NO: [
        'Designet produktsider og produktdetaljvisninger.',
        'Opprettet gjenbrukbare kortkomponenter for visning av produktinformasjon.',
        'Fokusert på klart hierarki for å fremheve produktbilder, pris og beskrivelse.',
        'Utviklet responsive oppsett optimalisert for mobil- og stasjonærbrukere.',
      ],
      EN: [
        'Designed product listing pages and product detail views.',
        'Created reusable card components for displaying product information.',
        'Focused on clear hierarchy to highlight product images, price, and description.',
        'Developed responsive layouts optimized for mobile and desktop users.',
      ],
    },
    finalSolution: {
      NO: [
        'Bygget en dynamisk butikkfront ved hjelp av ren JavaScript og eksterne APIer.',
        'Implementerte sanntids produkthentting og gjengivelse.',
        'Opprettet gjenbrukbare funksjoner for API-håndtering og DOM-manipulasjon.',
        'Leverte en responsiv handleopplevelse uten rammeverk.',
      ],
      EN: [
        'Built a dynamic storefront using vanilla JavaScript and external APIs.',
        'Implemented real-time product fetching and rendering.',
        'Created reusable functions for API handling and DOM manipulation.',
        'Delivered a responsive shopping experience without frameworks.',
      ],
    },
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'REST API'],
    github: 'https://github.com/Nirush4/Fed1-JavaScript-1-CA-Rainy-Days',
    live: 'https://rainydays-webshop-no.netlify.app/',
    Figma:
      'https://www.figma.com/design/hgQ4WNNGSHOxg9DViYzdIA/Rainydays-Superman?node-id=0-1&t=2S1d9x6TllOtDOsy-1',
    thumbnail: '/projects/rainydays.jpg',
    screenshots: [],
    category: 'frontend',
  },

  {
    id: 7,
    name: 'Social Media App – Frontend Social Platform',
    description: {
      NO: 'Frontend sosiale medier-applikasjon med innleggsadministrasjon, interaksjoner og responsivt design.',
      EN: 'Frontend social media application with post management, interactions, and responsive design.',
    },
    problem: {
      NO: 'Brukere trenger en sosial plattform hvor de kan opprette innlegg, samhandle med innhold og engasjere seg med andre brukere i et raskt og responsivt grensesnitt.',
      EN: 'Users need a social platform where they can create posts, interact with content, and engage with other users in a fast and responsive interface.',
    },
    uxProcess: {
      NO: [
        'Analyserte vanlige interaksjonsmønstre på sosiale medier og brukerforventninger.',
        'Skapte brukerflyter for posting, kommentarer, likerklikk og følging av brukere.',
        'Designet layouter med fokus på innholdshierarki og engasjement.',
        'Testet brukervennlighet på tvers av mobile og stasjonære enheter.',
      ],
      EN: [
        'Analyzed common social media interaction patterns and user expectations.',
        'Created user flows for posting, commenting, liking, and following users.',
        'Designed layouts focused on content hierarchy and engagement.',
        'Tested usability across mobile and desktop devices.',
      ],
    },
    figmaDesign: {
      NO: [
        'Designet feed-layouter, profil-sider og komponenter for innleggets interaksjoner.',
        'Opprettet gjenbrukbare UI-mønstre for innlegg, kommentarer og brukerkort.',
        'Etablerte et klart visuelt hierarki for innholdstunge grensesnitt.',
        'Designet responsive oppsett optimalisert for mobilførst bruk.',
      ],
      EN: [
        'Designed feed layouts, profile pages, and post interaction components.',
        'Created reusable UI patterns for posts, comments, and user cards.',
        'Established a clear visual hierarchy for content-heavy interfaces.',
        'Designed responsive layouts optimized for mobile-first usage.',
      ],
    },
    finalSolution: {
      NO: [
        'Bygget en frontend sosiale medier-applikasjon med TypeScript og Vite.',
        'Implementerte CRUD-funksjonalitet for innlegg.',
        'La til kommentarer, reaksjoner og følg/avfølg-funksjoner.',
        'Opprettet et responsivt og skalerbart brukergrensesnitt ved hjelp av Tailwind CSS.',
        'Inkluderte enhets- og komponenttesting med Vitest.',
      ],
      EN: [
        'Built a frontend social media application using TypeScript and Vite.',
        'Implemented CRUD functionality for posts.',
        'Added commenting, reactions, and follow/unfollow features.',
        'Created a responsive and scalable UI using Tailwind CSS.',
        'Included unit and component testing with Vitest.',
      ],
    },
    technologies: [
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'HTML5',
      'CSS3',
      'Vitest',
    ],
    github: 'https://github.com/Nirush4/JavaScript-2-Course-Assignment',
    live: 'https://javascript-2-assignment-socialmedia.netlify.app/',
    thumbnail: '/projects/social-media-app.png',
    screenshots: [],
    category: 'frontend',
  },

  {
    id: 8,
    name: 'Lens of Wanderlust 📸 – Travel Vlog Page',
    description: {
      NO: 'Responsiv reisevlogg-nettside med API-drevet innhold, videoer og bildebasert historiefortelling.',
      EN: 'Responsive travel vlog website with API-driven content, videos, and image-based storytelling.',
    },
    problem: {
      NO: 'Reiseentusiaster trenger en engasjerende plattform der de kan oppdage reisemål og utforske rikt visuelt reiseinnhold på en intuitiv måte.',
      EN: 'Travel enthusiasts need an engaging platform where they can discover destinations and explore rich visual travel content in an intuitive way.',
    },
    uxProcess: {
      NO: [
        'Undersøkte reiseblogger og innholdstunge medieplattformer.',
        'Planla brukerreiser for å utforske reisemål og se reiseinnhold.',
        'Skapte trådkerter med fokus på historiefortelling og visuelt engasjement.',
        'Testet oppsett for å sikre responsivitet og brukervennlighet på tvers av enheter.',
      ],
      EN: [
        'Researched travel blogs and media-heavy content platforms.',
        'Planned user journeys for exploring destinations and viewing travel content.',
        'Created wireframes focused on storytelling and visual engagement.',
        'Tested layouts to ensure responsiveness and usability across devices.',
      ],
    },
    figmaDesign: {
      NO: [
        'Designet innholdsfokuserte layouter med sterk vekt på bilder og video.',
        'Opprettet gjenbrukbare komponenter for reiseinnlegg og medieseksjoner.',
        'Utviklet responsive design optimalisert for mobilførst surfing.',
        'Fokusert på visuelt hierarki for å støtte historiefortellende innhold.',
      ],
      EN: [
        'Designed content-focused layouts with strong emphasis on imagery and video.',
        'Created reusable components for travel posts and media sections.',
        'Developed responsive designs optimized for mobile-first browsing.',
        'Focused on visual hierarchy to support storytelling content.',
      ],
    },
    finalSolution: {
      NO: [
        'Bygget en reisevlogg-nettside med HTML, CSS og JavaScript.',
        'Integrerte eksterne APIer for å hente og vise reiseinnhold.',
        'Implementerte responsive layouter og interaktive mediekomponenter.',
        'Leverte en jevn og engasjerende brukeropplevelse på tvers av enheter.',
      ],
      EN: [
        'Built a travel vlog website using HTML, CSS, and JavaScript.',
        'Integrated external APIs to fetch and display travel content.',
        'Implemented responsive layouts and interactive media components.',
        'Delivered a smooth and engaging user experience across devices.',
      ],
    },
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'REST APIs'],
    github: 'https://github.com/Nirush4/FED1-exam-Nirush',
    live: 'https://lensofwanderlust.netlify.app/',
    Figma:
      'https://www.figma.com/design/tC4Vb684z0vqyUyatYSfpv/Lens-of-Wanderlust?node-id=0-1&t=0WfBButjx90Q0IqV-1',
    thumbnail: '/projects/lensofwanderlust-vlog.jpg',
    screenshots: [],
    category: 'frontend',
  },

  {
    id: 9,
    name: 'Square Pumpkin 🤳🏼 – Social Media Platform',
    description: {
      NO: 'Interaktiv plattform for sosiale medier med bildedeling, personlige feeder og innebygd kamerafunksjonalitet.',
      EN: 'Interactive social media platform with photo sharing, personalized feeds, and built-in camera functionality.',
    },
    problem: {
      NO: 'Brukere trenger en kreativ og engasjerende sosial plattform hvor de kan dele visuelt innhold, tilpasse profilene sine og samhandle med et fellesskap på en sømløs måte.',
      EN: 'Users need a creative and engaging social platform where they can share visual content, personalize their profiles, and interact with a community in a seamless way.',
    },
    uxProcess: {
      NO: [
        'Undersøkte plattformer for sosiale medier for å forstå engasjementsmønstre og brukeradferd.',
        'Skapte brukerflyter for posting, samhandling og profiltilpasning.',
        'Designet navigasjonsstrukturer med fokus på innholdsfunn og brukervennlighet.',
        'Testet brukervennlighet på tvers av mobil- og stasjonære layouter for responsivitet.',
      ],
      EN: [
        'Researched social media platforms to understand engagement patterns and user behavior.',
        'Created user flows for posting, interacting, and profile customization.',
        'Designed navigation structures focused on content discovery and ease of use.',
        'Tested usability across mobile and desktop layouts for responsiveness.',
      ],
    },
    figmaDesign: {
      NO: [
        'Designet profilsider, feeder og grensesnitt for innholdsskaping.',
        'Opprettet gjenbrukbare kortbaserte komponenter for innlegg og interaksjoner.',
        'Etablerte konsekvent avstand, typografi og visuelt hierarki.',
        'Fokusert på prinsipper for mobilførst responsivt design.',
      ],
      EN: [
        'Designed profile pages, feeds, and content creation interfaces.',
        'Created reusable card-based components for posts and interactions.',
        'Established consistent spacing, typography, and visual hierarchy.',
        'Focused on mobile-first responsive design principles.',
      ],
    },
    finalSolution: {
      NO: [
        'Bygget en plattform for sosiale medier med HTML, CSS, Tailwind CSS og JavaScript.',
        'Implementerte bildeposting, likes, kommentarer og personlige feeder.',
        'La til en innebygd kamerafunksjon for øyeblikkelig innholdsskaping.',
        'Opprettet en responsiv og interaktiv brukeropplevelse på tvers av enheter.',
      ],
      EN: [
        'Built a social media platform using HTML, CSS, Tailwind CSS, and JavaScript.',
        'Implemented photo posting, likes, comments, and personalized feeds.',
        'Added a built-in camera feature for instant content creation.',
        'Created a responsive and interactive user experience across devices.',
      ],
    },
    technologies: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/Nirush4/Fed1-agency-1-ca',
    live: 'https://squarepumpkin.netlify.app/',
    thumbnail: '/projects/squarepumpkin.jpg',
    screenshots: [],
    category: 'frontend',
  },

  {
    id: 10,
    name: 'The Community Science Museum: Discover Together',
    description: {
      NO: 'Interaktiv og responsiv vitenskapsmuseum-nettside designet for barn, familier og lærere.',
      EN: 'Interactive and responsive science museum website designed for children, families, and educators.',
    },
    problem: {
      NO: 'Vitenskapsmuseer trenger en engasjerende digital opplevelse som gjør pedagogisk innhold tilgjengelig, interaktivt og morsomt for barn, familier og lærere.',
      EN: 'Science museums need an engaging digital experience that makes educational content accessible, interactive, and enjoyable for children, families, and educators.',
    },
    uxProcess: {
      NO: [
        'Undersøkte pedagogiske nettsider og museumsplattformer for å forstå brukerbehov.',
        'Skapte brukerreiser for barn, familier og lærere.',
        'Designet informasjonsarkitektur med fokus på utforskning og oppdagbarhet.',
        'Testet oppsett for tilgjengelighet, klarhet og enkel navigering.',
      ],
      EN: [
        'Researched educational websites and museum platforms to understand user needs.',
        'Created user journeys for children, families, and educators.',
        'Designed information architecture focused on exploration and discoverability.',
        'Tested layouts for accessibility, clarity, and ease of navigation.',
      ],
    },
    figmaDesign: {
      NO: [
        'Designet fargerike, engasjerende layouter som passer for et yngre publikum.',
        'Opprettet gjenbrukbare innholdsseksjoner for utstillinger, arrangementer og informasjonssider.',
        'Utviklet responsive design optimalisert for nettbrettet, mobil og stasjonær PC.',
        'Fokusert på visuell historiefortelling og pedagogisk engasjement.',
      ],
      EN: [
        'Designed colorful, engaging layouts suitable for a younger audience.',
        'Created reusable content sections for exhibitions, events, and information pages.',
        'Developed responsive designs optimized for tablets, mobile, and desktop.',
        'Focused on visual storytelling and educational engagement.',
      ],
    },
    finalSolution: {
      NO: [
        'Bygget en responsiv vitenskapsmuseum-nettside med HTML, CSS og JavaScript.',
        'Opprettet strukturerte sider for utstillinger, arrangementer og besøksinformasjon.',
        'Implementerte tilgjengelig navigasjon og interaktive UI-elementer.',
        'Leverte en familievennlig pedagogisk opplevelse på tvers av alle enheter.',
      ],
      EN: [
        'Built a responsive science museum website using HTML, CSS, and JavaScript.',
        'Created structured pages for exhibitions, events, and visitor information.',
        'Implemented accessible navigation and interactive UI elements.',
        'Delivered a family-friendly educational experience across all devices.',
      ],
    },
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Nirush4/Semesterproject-1',
    live: 'https://thecommunitysciencemuseum1.netlify.app/',
    thumbnail: '/projects/community-science-museum.jpg',
    screenshots: [],
    category: 'frontend',
  },
];

export const GRAPHIC_PROJECTS: LocalizedGraphicProject[] = [
  {
    id: 11,
    category: 'graphic',
    name: 'Ritual Set',
    projectType: {
      NO: 'Emballasjedesign og Merkevareidentitet',
      EN: 'Packaging Design & Brand Identity',
    },
    description: {
      NO: 'Et konsept for premium emballasje til duftprodukter for hjemmet, designet for å oppmuntre til mindfulness gjennom intensive daglige ritualer. Den visuelle identiteten kombinerer skandinavisk minimalisme, taktile materialer og raffinert typografi for å skape en tidløs luksusopplevelse.',
      EN: 'A premium home fragrance packaging concept designed to encourage mindfulness through intentional daily rituals. The visual identity combines Scandinavian minimalism, tactile materials, and refined typography to create a timeless luxury experience.',
    },
    challenge: {
      NO: 'Design et premium emballasjesystem som formidler ro, håndverk og kvalitet samtidig som det skaper en engasjerende utpakkings opplevelse for et luksuriøst duftprodukt.',
      EN: 'Design a premium packaging system that communicates calm, craftsmanship, and quality while creating an engaging unboxing experience for a luxury home fragrance product.',
    },
    research: {
      NO: [
        'Utforsket skandinavisk interiørdesign og luksuriøse emballasjetrender.',
        'Analyserte merkevarer innen premium duft og livsstil for å forstå visuell posisjonering.',
        'Samlet referanser med fokus på minimalisme, naturlige materialer og taktile overflater.',
        'Utviklet moodboards for å definere merkevarens visuelle språk og emosjonelle retning.',
      ],
      EN: [
        'Explored Scandinavian interior design and luxury packaging trends.',
        'Analyzed premium home fragrance and lifestyle brands to understand visual positioning.',
        'Collected references focused on minimalism, natural materials, and tactile finishes.',
        'Developed mood boards to define the visual language and emotional direction of the brand.',
      ],
    },
    designProcess: {
      NO: [
        'Skapte merkevarekonseptet rundt ideen om å bremse opp og omfavne tilsiktede daglige ritualer.',
        'Designet et komplett emballasjesystem inkludert den stive gaveesken, påfyllingskartongen og produktpresentasjonen.',
        'Valgte materialer, utførelser og fargepaletter som forsterket en rolig og eksklusiv estetikk.',
        'Produserte høy-fidelitets mockups for å visualisere produktet på tvers av detaljhandel-, livsstils- og markedsføringssammenhenger.',
      ],
      EN: [
        'Created the brand concept around the idea of slowing down and embracing intentional daily rituals.',
        'Designed a complete packaging system including the rigid gift box, refill carton, and product presentation.',
        'Selected materials, finishes, and color palettes that reinforced a calm and premium aesthetic.',
        'Produced high-fidelity mockups to visualize the product across retail, lifestyle, and marketing contexts.',
      ],
    },
    designDecisions: {
      NO: [
        'Brukte bein-farget papp for å skape et mykt og dempet eksklusivt utseende.',
        'Innførte terrakotta-keramikkelementer for å tilføre varme og en håndlaget følelse.',
        'Brukte messingdetaljer for å formidle raffinement uten å overvelde den minimalistiske estetikken.',
        'Valgte elegant typografi med raus hvit plass for å forbedre lesbarheten og forsterke skandinaviske designprinsipper.',
        'Opprettholdt en behersket nøytral fargepalett for å sikre at emballasjen forble tidløs og produktfokusert.',
        'Regisserte realistiske livsstils- og makrodetalj-mockups for å fremheve materialer, teksturer og håndverk.',
      ],
      EN: [
        'Used bone-colored paperboard to create a soft and understated premium appearance.',
        'Introduced terracotta ceramic elements to add warmth and a handcrafted feel.',
        'Applied brass accents to communicate refinement without overwhelming the minimalist aesthetic.',
        'Selected elegant typography with generous white space to improve readability and reinforce Scandinavian design principles.',
        'Maintained a restrained neutral color palette to ensure the packaging remained timeless and product-focused.',
        'Directed realistic lifestyle and macro-detail mockups to highlight materials, textures, and craftsmanship.',
      ],
    },
    finalOutcome: {
      NO: [
        'Utviklet et sammenhengende luksusemballasjesystem som passer for nisjebutikker og merker for premium interiørutstyr.',
        'Skapte en konsistent visuell identitet på tvers av emballasje, produktpresentasjon og salgsfremmende bilder.',
        'Demonstrert hvordan gjennomtenkt emballasjedesign kan styrke merkevareoppfatningen og forbedre kundeopplevelsen.',
        'Leverte realistiske kommersielle mockups for porteføljepresentasjon og markedsføringsapplikasjoner.',
      ],
      EN: [
        'Developed a cohesive luxury packaging system suitable for boutique retail and premium homeware brands.',
        'Created a consistent visual identity across packaging, product presentation, and promotional imagery.',
        'Demonstrated how thoughtful packaging design can strengthen brand perception and enhance the customer experience.',
        'Delivered realistic commercial mockups for portfolio presentation and marketing applications.',
      ],
    },
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    colors: [
      { name: 'Bone White', value: '#E8DFD0' },
      { name: 'Terracotta', value: '#C96F52' },
      { name: 'Brass Gold', value: '#B59A6A' },
      { name: 'Warm Beige', value: '#F4EDE2' },
    ],
    typography: {
      NO: ['Moderne Serif', 'Minimalistisk Sans Serif'],
      EN: ['Modern Serif', 'Minimal Sans Serif'],
    },
    deliverables: {
      NO: [
        'Merkevareidentitet',
        'Emballasjedesign',
        'Stiv Gaveeske',
        'Påfyllingskartong',
        'Produktvisualisering',
        'Livsstilsmockups',
        'Detaljhandelsmockups',
        'Hovedproduktbilder',
      ],
      EN: [
        'Brand Identity',
        'Packaging Design',
        'Rigid Gift Box',
        'Refill Carton',
        'Product Visualization',
        'Lifestyle Mockups',
        'Retail Mockups',
        'Hero Product Images',
      ],
    },
    thumbnail: '/projects/graphic/ritual-set/image.png',
    thumbnailType: 'image',
    gallery: [
      { type: 'image', src: '/projects/graphic/ritual-set/image.png' },
      { type: 'image', src: '/projects/graphic/ritual-set/image1.png' },
      { type: 'image', src: '/projects/graphic/ritual-set/image2.png' },
      { type: 'image', src: '/projects/graphic/ritual-set/image3.png' },
    ],
    figma: '',
    behance: '',
  },
  {
    id: 12,
    category: 'graphic',
    name: 'Halo Flights — Cruise Campaign',
    projectType: {
      NO: 'Sosiale Medier Annonsegnist',
      EN: 'Social Media Advertising Design',
    },
    description: {
      NO: 'En slagkraftig kvadratisk annonse for sosiale medier som fremmer et tidsbegrenset MSC Virtuosa-casetilbud for Halo Flights. Designet kombinerer aspirerende livsstilsfotografering, dristig typografi og tydelige priser for å drive direkte bestillinger fra en overfylt sosial feed.',
      EN: 'A high-impact square-format social media ad promoting a limited-time MSC Virtuosa cruise offer for Halo Flights. The design combines aspirational lifestyle photography, bold typography, and clear pricing to drive direct bookings from a crowded social feed.',
    },
    challenge: {
      NO: 'Design en enkel kvadratisk annonse som kan stoppe rullingen på Instagram og Facebook, formidle en luksuriøs cruiseopplevelse umiddelbart, og likevel bære nok pris-, tilbud- og tillitsinformasjon til å konvertere en surfende bruker til en ledelse — uten at layouten føles rotete eller lavpris.',
      EN: 'Design a single square ad that could stop the scroll on Instagram and Facebook, communicate a premium cruise experience instantly, and still carry enough pricing, offer, and trust information to convert a browsing user into a lead — without the layout feeling cluttered or downmarket.',
    },
    research: {
      NO: [
        'Gjennomførte revisjon av betalte sosiale annonser fra reisebyråer og OTA-plattformer for å identifisere gjentakende oppsettsmønstre og konverteringstriggere.',
        'Studerte markedsføringsfotografering for cruiselinjer for å forstå premium reiselivsposisjonering.',
        'Gjennomgikk plassering av tillitsmerker og hierarki på tvers av reisebestillingsannonser.',
        'Samlet referansebilder rundt gulltimens himmel og øyeblikk om bord på livsstilen.',
      ],
      EN: [
        'Audited paid social ads from travel agencies and OTA platforms to identify recurring layout patterns and conversion triggers.',
        'Studied cruise-line marketing photography to understand premium travel positioning.',
        'Reviewed trust-badge placement and hierarchy across travel booking ads.',
        'Collected reference imagery around golden-hour skies and onboard lifestyle moments.',
      ],
    },
    designProcess: {
      NO: [
        'Kartla annonsen som en topp-til-bunn oppmerksomhetsbane: merkevaregjenkjenning, livsstilsbevis, emosjonell krok, tilbud, hastesak, tillit.',
        'Blokkerte inn livsstilsinnlegg for å forhåndsvise opplevelser om bord.',
        'Plasserte cruiseskipet som det sentrale visuelle ankeret.',
        'Lagdelte priser og hastverkselementer sist.',
        'Finjusterte overskriftens typografiskala og vinkel.',
      ],
      EN: [
        'Mapped the ad as a top-to-bottom attention path: brand recognition, lifestyle proof, emotional hook, offer, urgency, trust.',
        'Blocked out lifestyle insets to preview onboard experiences.',
        'Positioned the cruise ship as the central visual anchor.',
        'Layered pricing and urgency elements last.',
        'Refined headline typography scale and angle.',
      ],
    },
    designDecisions: {
      NO: [
        'Brukte dyp marineblå som forankrende merkevarefarge.',
        'Innførte havblå som et sekundært aksent.',
        'Brukte solnedgangsoransje for å koble designet til hovedfotograferingen.',
        'Reserverte signalrødt for meldinger om hastesak.',
        'Brukte hvitt for maksimal kontrast.',
        'La til nøytral gråtone for tillitsmerkeområder.',
      ],
      EN: [
        'Used deep navy as the anchoring brand color.',
        'Introduced ocean blue as a secondary accent.',
        'Used sunset orange to connect the design with the hero photography.',
        'Reserved signal red for urgency messaging.',
        'Used white for maximum contrast.',
        'Added neutral grey for trust badge areas.',
      ],
    },
    finalOutcome: {
      NO: [
        'Leverte en rullestoppende ressurs for kampanjer i sosiale medier.',
        'Opprettet et gjenbrukbart annonseoppsett-system.',
        'Balanserte emosjonell reisehistoriefortelling med konverteringsfokusert informasjon.',
        'Produserte et fleksibelt kampanjefundament.',
      ],
      EN: [
        'Delivered a scroll-stopping social media campaign asset.',
        'Created a reusable advertising layout system.',
        'Balanced emotional travel storytelling with conversion-focused information.',
        'Produced a flexible campaign foundation.',
      ],
    },
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    colors: [
      { name: 'Deep Navy', value: '#0E2F5A' },
      { name: 'Ocean Blue', value: '#1E6FB8' },
      { name: 'Sunset Orange', value: '#F39C4A' },
      { name: 'Signal Red', value: '#D9303E' },
      { name: 'Pure White', value: '#FFFFFF' },
      { name: 'Light Neutral Grey', value: '#D9DDE3' },
    ],
    typography: {
      NO: ['Fet Komprimert Display', 'Ren Sans Serif'],
      EN: ['Bold Condensed Display', 'Clean Sans Serif'],
    },
    deliverables: {
      NO: [
        'Design av annonser i sosiale medier',
        'Kampanjelayout-system',
        'Livsstil bildekomposisjon',
        'Prisgrafikk',
        'Tillitsmerke bunntekst-system',
        'Karusellvariantkonsepter',
        'Tilpasning av historformat',
      ],
      EN: [
        'Social Media Ad Design',
        'Campaign Layout System',
        'Lifestyle Photo Composition',
        'Pricing Graphics',
        'Trust Badge Footer System',
        'Carousel Variant Concepts',
        'Story Format Adaptation',
      ],
    },
    thumbnail: '/projects/graphic/msc/image.png',
    thumbnailType: 'image',
    gallery: [{ type: 'image', src: '/projects/graphic/msc/image.png' }],
    figma: '',
    behance: '',
  },
  {
    id: 13,
    category: 'graphic',
    name: 'Portrait Study — Line & Ink',
    projectType: {
      NO: 'Vektorillustrasjon',
      EN: 'Vector Illustration',
    },
    description: {
      NO: 'En monokrom vektorportrettillustrasjon som utforsker realistisk likhet gjennom linjearbeid og håndtegnede klekkingsteknikker. Verket bruker kontrollert linjearbeid og tverrskravering for å oversette en fotografisk referanse til en ren, skalerbar vektorillustrasjon.',
      EN: 'A monochrome vector portrait illustration exploring realistic likeness through line work and hand-drawn hatching techniques. The piece uses controlled linework and cross-hatch shading to translate a photographic reference into a clean, scalable vector illustration.',
    },
    challenge: {
      NO: 'Gjenopprett et fotografisk portrett som en fullstendig vektorillustrasjon, som fanger realistisk likhet, hudtekstur og ansiktsstruktur ved å bruke kun svart-hvitt linjearbeid og klekking — uten å stole på fotografiske gradienter eller airbrush-skyggelegging.',
      EN: 'Recreate a photographic portrait as a fully vector illustration, capturing realistic likeness, skin texture, and facial structure using only black-and-white linework and hatching — without relying on photographic gradients or airbrushed shading.',
    },
    research: {
      NO: [
        'Studerte klassiske teknologier for rissetavler samt penn-og-blekk portrettillustrasjon.',
        'Analyserte referansefotografering for å kartlegge sentrale ansiktslandemerker, lysretning og skyggesoner før linjearbeidet startet.',
        'Gjennomgikk vektorportrettkunstnere som bruker klekking og prikking for å simulere tonell dybde uten flate graderinger.',
        'Brøt ned referansebildet i distinkte verdisoner for å planlegge linjetetthet på forhånd.',
      ],
      EN: [
        'Studied classic scratchboard and pen-and-ink portrait illustration techniques.',
        'Analyzed reference photography to map key facial landmarks, light direction, and shadow zones before starting linework.',
        'Reviewed vector portrait artists who use hatching and stippling to simulate tonal depth without flat gradients.',
        'Broke the reference image down into distinct value zones to plan line density in advance.',
      ],
    },
    designProcess: {
      NO: [
        'Bygget illustrasjonen i lag, med utgangspunkt i en grov vektorbaseform.',
        'Konstruerte ansiktstrekk først for å låse inn likhet før du la til omgivende tekstur.',
        'La til retningsbestemte hårstrå ved hjelp av individuelle vektorslag.',
        'Lagdelte varierende linjevekter og klekkingstetthet på tvers av ansiktsområder.',
        'Finjusterte kontrasten ved å skyve mørkere skyggeområder mot urørte høydepunkter.',
      ],
      EN: [
        'Built the illustration in layers, starting with a rough vector base shape.',
        'Constructed facial features first to lock in likeness before adding surrounding texture.',
        'Added directional hair strands using individual vector strokes.',
        'Layered varying line weights and hatching density across facial areas.',
        'Refined contrast by pushing darker shadow areas against untouched highlights.',
      ],
    },
    designDecisions: {
      NO: [
        'Holdt paletten strengt svart-hvitt for å fokusere på linjekvalitet, kontrast og form.',
        'Brukte fin retningsbestemt klekking for å antyde tekstur og vekstretning.',
        'Gjengav briller med konsistent linjevekt for klarhet.',
        'Bevarte hvit plass rundt høydepunkter for å forhindre visuell overbelastning.',
        'Brukte tyngre linjearbeid rundt kjeven, ørene og kragen for å skape dybde.',
        'Forenklet klærne til solide svarte former for å beholde fokuset på ansiktsdetaljer.',
      ],
      EN: [
        'Kept the palette strictly black and white to focus on line quality, contrast, and form.',
        'Used fine directional hatching to imply texture and growth direction.',
        'Rendered glasses with consistent line weight for clarity.',
        'Preserved white space around highlights to prevent visual overload.',
        'Used heavier linework around the jaw, ears, and collar to create depth.',
        'Simplified clothing into solid black shapes to keep focus on facial detail.',
      ],
    },
    finalOutcome: {
      NO: [
        'Produserte et skalerbart vektorportrett som passer for utskrift og visning i stort format.',
        'Oppnådde realistisk likhet ved hjelp av kun lineære illustrasjonsteknikker.',
        'Demonstrert kontroll over linjevekt, tetthet og tonell dybde.',
        'Skapte en personlig illustrasjonsstudie som viser vektorhåndverk.',
      ],
      EN: [
        'Produced a scalable vector portrait suitable for print and large-format display.',
        'Achieved realistic likeness using only linear illustration techniques.',
        'Demonstrated control over line weight, density, and tonal depth.',
        'Created a personal illustration study showcasing vector craftsmanship.',
      ],
    },
    tools: ['Adobe Illustrator'],
    colors: [
      { name: 'Deep Black', value: '#000000' },
      { name: 'Pure White', value: '#FFFFFF' },
    ],
    typography: {
      NO: [],
      EN: [],
    },
    deliverables: {
      NO: ['Vektorportrett Illustrasjon', 'Utskriftsklart Kunstverk'],
      EN: ['Vector Portrait Illustration', 'Print-Ready Artwork'],
    },
    thumbnail: '/projects/graphic/steve_jobs/steve.jpg',
    thumbnailType: 'image',
    gallery: [
      { type: 'image', src: '/projects/graphic/steve_jobs/part1_top_left.png' },
      {
        type: 'image',
        src: '/projects/graphic/steve_jobs/part2_top_right.png',
      },
      {
        type: 'image',
        src: '/projects/graphic/steve_jobs/part3_bottom_left.png',
      },
      {
        type: 'image',
        src: '/projects/graphic/steve_jobs/part4_bottom_right.png',
      },
    ],
    figma: '',
    behance: '',
  },
  {
    id: 14,
    category: 'video',
    name: 'Halo Philippines — Website Welcome Video',
    projectType: {
      NO: 'Bevegelsesgrafikk og Videoreklame',
      EN: 'Motion Graphics & Video Advertising',
    },
    description: {
      NO: 'En velkomstvideo laget for Halo Philippines-nettsiden, som introduserer byrået og bygger emosjonelle bånd rundt flyreiser til Filippinene. Redigeringen kombinerer gjenforeningsøyeblikk for familier, reisemål- og flyplassopptak, poeng for fly- og kundevurderinger samt livsstilsreisebilder, og avsluttes med merkevarekontakten og sosiale detaljer.',
      EN: 'A welcome video created for the Halo Philippines website, introducing the agency and building emotional connection around flights to the Philippines. The edit combines family-reunion moments, destination and airport footage, in-flight and customer review proof points, and lifestyle travel shots, closing on branded contact and social details.',
    },
    challenge: {
      NO: 'Lag en enkel velkomstvideo til forsiden som introduserer Halo Philippines-merkevaren, bygger emosjonell tillit gjennom ekte kundemomenter, gir troverdighetssignaler og avsluttes med tydelig kontaktinformasjon innenfor en kort oppmerksomhetskrets.',
      EN: 'Create a single welcome video for the homepage that introduces the Halo Philippines brand, builds emotional trust through real customer moments, provides credibility signals, and closes with clear contact information within a short attention-holding runtime.',
    },
    research: {
      NO: [
        'Gjennomgikk velkomstvideoformater for forsiden som brukes av reisebyråer.',
        'Identifiserte familiegjenforeninger som den sterkeste emosjonelle kroken.',
        'Reviderte tilgjengelige opptak inklusive familieøyeblikk, flyplasser, flyreiser, anmeldelser og reisemål.',
        'Studerte metoder for anmeldelsesoverlegg for presentasjon av tillitssignaler.',
      ],
      EN: [
        'Reviewed homepage welcome-video formats used by travel agencies.',
        'Identified family reunions as the strongest emotional hook.',
        'Audited available footage including family moments, airports, flights, reviews, and destinations.',
        'Studied review overlay techniques for presenting trust signals.',
      ],
    },
    designProcess: {
      NO: [
        'Strukturerte videoen rundt emosjonell krok, merkevarerespons, bevis, aspirasjon og kontakt.',
        'Sekvenserte opptak for å balansere emosjonelle øyeblikk med merkevareseksjoner.',
        'Designet tekstoverlegg med høy kontrast for lesbarhet.',
        'Opprettet komposisjoner av anmeldelsesskjermbilder.',
        'Bygget et merkevarebeskyttet avslutningskort med kontaktinformasjon.',
      ],
      EN: [
        'Structured the video around emotional hook, brand reassurance, proof, aspiration, and contact.',
        'Sequenced footage to balance emotional moments with branded segments.',
        'Designed high-contrast text overlays for readability.',
        'Created review screenshot compositions.',
        'Built a branded closing card with contact details.',
      ],
    },
    designDecisions: {
      NO: [
        'Åpnet med et autentisk familiegjenforeningsøyeblikk i stedet for merkevarebygging.',
        'Brukte fet hvit typografi for meldingsklarhet.',
        'La til kundevurderinger rundt emosjonelle opptak.',
        'Inkluderte ekte reiseøyeblikk for å forsterke tilliten.',
        'Avsluttet med et rent merkevareavslutningskort.',
        'Opprettholdt lilla og rosa merkevarestyling.',
      ],
      EN: [
        'Opened with an authentic family reunion moment instead of branding.',
        'Used bold white typography for message clarity.',
        'Layered customer reviews around emotional footage.',
        'Included real travel moments to reinforce trust.',
        'Closed with a clean branded end card.',
        'Maintained purple and pink brand styling.',
      ],
    },
    finalOutcome: {
      NO: [
        'Leverte en emosjonell introduksjonsvideo for forsiden.',
        'Kombinerte tillitssignaler med historiefortelling.',
        'Opprettet en gjenbrukbar videostruktur for fremtidige kampanjer.',
        'Produserte en klar merkevarekontaktslutt.',
      ],
      EN: [
        'Delivered an emotional homepage introduction video.',
        'Combined trust signals with storytelling.',
        'Created a reusable video structure for future campaigns.',
        'Produced a clear branded contact ending.',
      ],
    },
    tools: ['Adobe Premiere Pro', 'Adobe After Effects'],
    colors: [
      { name: 'Deep Purple', value: '#4B0082' },
      { name: 'Soft Pink', value: '#E8A0BF' },
      { name: 'Luxury Gold', value: '#D4AF37' },
      { name: 'Pure White', value: '#FFFFFF' },
    ],
    typography: {
      NO: ['Fet Sans Serif', 'Skrift-Aksent'],
      EN: ['Bold Sans Serif', 'Script Accent'],
    },
    deliverables: {
      NO: [
        'Velkomstvideo for Nettside',
        'Tekstoverlegg for Bevegelsesgrafikk',
        'Sekvens for Kundevurderings-overlegg',
        'Merkevarebeskyttet Avslutningskort',
        'Kutt ned for Sosiale Medier',
      ],
      EN: [
        'Website Welcome Video',
        'Motion Graphic Text Overlays',
        'Customer Review Overlay Sequence',
        'Branded End Card',
        'Social Media Cutdown',
      ],
    },
    thumbnail:
      '/projects/graphic/halo_philippines/halo-philippines-welcome-thumbnail.jpg',
    thumbnailType: 'image',
    gallery: [
      {
        type: 'video',
        src: '/projects/graphic/halo_philippines/halo_philippines.mp4',
      },
    ],
    figma: '',
    behance: '',
  },
  {
    id: 15,
    category: 'analysis',
    name: "Munchy's Oat Krunch — Print Ad Breakdown",
    projectType: {
      NO: 'Designanalyse / Trykt Animasjonsgjennomgang',
      EN: 'Design Analysis / Print Advertisement Teardown',
    },
    description: {
      NO: "En designanalyse av Munchy's Oat Krunch-trykkannonse...",
      EN: "A design breakdown of Munchy's Oat Krunch print advertisement...",
    },
    challenge: {
      NO: 'Analyser virkningsfulle elementer i trykt markedsføring.',
      EN: 'Analyze high-impact elements in print marketing.',
    },
    research: {
      NO: ['Studerte trykte reklametrender og forbrukerpsykologi.'],
      EN: ['Studied print ad trends and consumer psychology.'],
    },
    designProcess: {
      NO: ['Dekonstruerte visuelt hierarki og fargebruk.'],
      EN: ['Deconstructed visual hierarchy and color usage.'],
    },
    designDecisions: {
      NO: [
        'Fremhevet viktigheten av naturlige teksturer og ærlig matmarkedsføring.',
      ],
      EN: [
        'Highlighted the importance of natural textures and honest food marketing.',
      ],
    },
    finalOutcome: {
      NO: ['Leverte en omfattende visuell analyserapport.'],
      EN: ['Delivered a comprehensive visual analysis report.'],
    },
    tools: ['Figma', 'Notion'],
    colors: [
      { name: 'Oat Golden', value: '#D4A373' },
      { name: 'Forest Green', value: '#283618' },
    ],
    typography: {
      NO: ['Sans Serif'],
      EN: ['Sans Serif'],
    },
    deliverables: {
      NO: ['Designanalyse', 'Visuell Nedbryting'],
      EN: ['Design Analysis', 'Visual Teardown'],
    },
    thumbnail: '/projects/graphic/munchys/munchys.jpg',
    thumbnailType: 'image',
    gallery: [{ type: 'image', src: '/projects/graphic/munchys/munchys.jpg' }],
    figma: '',
    behance: '',
  },
];
