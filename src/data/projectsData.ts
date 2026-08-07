import type { FrontendProject, GraphicProject } from '../types/portfolio';

export const FRONTEND_PROJECTS: FrontendProject[] = [
  {
    id: 1,
    name: 'Holidaze 🏡',
    description:
      'Modern accommodation booking platform built with React and TypeScript, featuring venue management, bookings, authentication, and a scalable frontend architecture.',

    problem:
      'Travelers need an easy way to discover and book accommodation, while venue owners require efficient tools for managing listings, bookings, and availability.',

    uxProcess: [
      'Researched existing accommodation booking platforms to understand user expectations and booking behaviors.',
      'Created user journeys for both customers and venue managers.',
      'Designed wireframes to validate booking workflows and venue management experiences.',
      'Tested navigation patterns and layouts to ensure accessibility and responsiveness.',
    ],

    figmaDesign: [
      'Created low-fidelity wireframes for search, booking, and venue management pages.',
      'Designed responsive high-fidelity mockups for desktop and mobile devices.',
      'Developed a reusable component system for forms, cards, and navigation.',
      'Prototyped key user interactions before development.',
    ],

    finalSolution: [
      'Built a fully responsive accommodation booking platform using React and TypeScript.',
      'Implemented venue browsing, search functionality, booking management, and availability calendars.',
      'Created a dedicated dashboard for venue managers to manage listings and reservations.',
      'Integrated authentication, form validation, state management, and automated testing.',
    ],

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
    description:
      'Frontend e-commerce application built with React and TypeScript, focused on performance, scalability, and a clean user experience.',

    problem:
      'Online shoppers need a fast and intuitive way to browse products, compare options, manage purchases, and complete transactions efficiently across all devices.',

    uxProcess: [
      'Analyzed common e-commerce user journeys and purchasing behaviors.',
      'Created user flows for product discovery, cart management, and checkout.',
      'Designed wireframes to simplify navigation and reduce friction throughout the shopping experience.',
      'Focused on accessibility, responsive layouts, and mobile-first design principles.',
    ],

    figmaDesign: [
      'Created responsive layouts for product listings, product detail pages, and checkout flows.',
      'Designed reusable UI components including cards, navigation, forms, and product galleries.',
      'Built a consistent visual hierarchy to improve product discoverability and readability.',
      'Prototyped shopping interactions and checkout experiences before development.',
    ],

    finalSolution: [
      'Built a scalable e-commerce application using React and TypeScript.',
      'Implemented product browsing, search, sorting, filtering, and detailed product pages.',
      'Created a Zustand-powered shopping cart with seamless product management.',
      'Integrated TanStack Query for efficient API communication, caching, and server-state management.',
      'Added form validation and responsive UI components for a polished user experience.',
    ],

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
    description:
      'Full-stack news platform built with React, TypeScript, and Tailwind CSS, using Supabase as a Backend-as-a-Service for authentication, database management, and secure CRUD operations.',

    problem:
      'Aspiring writers and content creators need a secure platform where they can publish, edit, and manage articles while ensuring ownership and privacy of their content.',

    uxProcess: [
      'Researched content management systems and online publishing platforms to identify common user expectations.',
      'Mapped user journeys for reading articles, creating content, editing posts, and managing accounts.',
      'Created wireframes focused on readability, content hierarchy, and streamlined navigation.',
      'Designed authentication and article management flows to reduce complexity for users.',
    ],

    figmaDesign: [
      'Designed responsive article feeds and article detail pages.',
      'Created dashboard layouts for content creation and article management.',
      'Built reusable UI components for forms, navigation, and content cards.',
      'Established a clean visual hierarchy that prioritizes readability and accessibility.',
    ],

    finalSolution: [
      'Developed a full-stack news platform using React, TypeScript, and Supabase.',
      'Implemented authentication, protected routes, and user-specific content management.',
      'Added full CRUD functionality for article creation, editing, and deletion.',
      'Applied Row Level Security (RLS) to ensure users can only modify their own content.',
      'Delivered a responsive and accessible user experience across all devices.',
    ],

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
    description:
      'Responsive and accessible auction platform built with Vanilla TypeScript and Tailwind CSS, integrating the Noroff Auction House API v2.',

    problem:
      'Users need a transparent and trustworthy auction platform where they can create listings, place bids, and manage auctions in a secure and easy-to-use environment.',

    uxProcess: [
      'Researched common auction platforms to understand bidding behavior and user expectations.',
      'Mapped user journeys for listing creation, browsing, bidding, and profile management.',
      'Created wireframes focused on clarity, accessibility, and real-time interaction flow.',
      'Tested navigation and layout structure for responsiveness across devices.',
    ],

    figmaDesign: [
      'Designed listing pages, auction detail views, and user profile dashboards.',
      'Created reusable UI components for cards, forms, and bidding interfaces.',
      'Focused on clear visual hierarchy to highlight bids and listing details.',
      'Developed responsive designs optimized for both desktop and mobile screens.',
    ],

    finalSolution: [
      'Built a complete auction platform using Vanilla TypeScript without frameworks.',
      'Integrated the Noroff Auction House API for authentication and auction data.',
      'Implemented bidding functionality, listing management, and user profiles.',
      'Added dynamic UI updates for real-time interaction without page reloads.',
      'Delivered a fully responsive and accessible user experience.',
    ],

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
    description:
      'A responsive memory card matching game built with React, TypeScript, and Tailwind CSS, featuring smooth interactions and simple game mechanics.',

    problem:
      'Players need a simple, engaging game that challenges memory skills while remaining intuitive, fast, and responsive across all devices.',

    uxProcess: [
      'Defined core game mechanics including card flipping, matching logic, and win conditions.',
      'Created user flows focusing on simplicity and quick gameplay loops.',
      'Designed wireframes for game board layout and interaction states.',
      'Tested usability to ensure smooth and predictable gameplay behavior.',
    ],

    figmaDesign: [
      'Designed card layouts and game board structure with a clear grid system.',
      'Created responsive layouts for desktop and mobile gameplay.',
      'Developed visual states for card flip, match, and mismatch interactions.',
      'Focused on a playful, minimal UI that supports gameplay clarity.',
    ],

    finalSolution: [
      'Built an interactive memory card game using React and TypeScript.',
      'Implemented card shuffling, matching logic, and win detection.',
      'Added move tracking and restart functionality for replayability.',
      'Created smooth UI interactions and responsive design using Tailwind CSS.',
    ],

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
    description:
      'A dynamic online shop built with vanilla JavaScript and real-time product data from an external API.',

    problem:
      'Customers need a simple, fast, and responsive storefront where product information is always up to date and easy to browse.',

    uxProcess: [
      'Researched common e-commerce layouts and user expectations for product browsing.',
      'Planned user flows for discovering products and viewing product details.',
      'Created wireframes focused on simplicity, clarity, and ease of navigation.',
      'Tested layouts across multiple screen sizes to ensure responsiveness.',
    ],

    figmaDesign: [
      'Designed product listing pages and product detail views.',
      'Created reusable card components for displaying product information.',
      'Focused on clear hierarchy to highlight product images, price, and description.',
      'Developed responsive layouts optimized for mobile and desktop users.',
    ],

    finalSolution: [
      'Built a dynamic storefront using vanilla JavaScript and external APIs.',
      'Implemented real-time product fetching and rendering.',
      'Created reusable functions for API handling and DOM manipulation.',
      'Delivered a responsive shopping experience without frameworks.',
    ],

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
    description:
      'Frontend social media application with post management, interactions, and responsive design.',

    problem:
      'Users need a social platform where they can create posts, interact with content, and engage with other users in a fast and responsive interface.',

    uxProcess: [
      'Analyzed common social media interaction patterns and user expectations.',
      'Created user flows for posting, commenting, liking, and following users.',
      'Designed layouts focused on content hierarchy and engagement.',
      'Tested usability across mobile and desktop devices.',
    ],

    figmaDesign: [
      'Designed feed layouts, profile pages, and post interaction components.',
      'Created reusable UI patterns for posts, comments, and user cards.',
      'Established a clear visual hierarchy for content-heavy interfaces.',
      'Designed responsive layouts optimized for mobile-first usage.',
    ],

    finalSolution: [
      'Built a frontend social media application using TypeScript and Vite.',
      'Implemented CRUD functionality for posts.',
      'Added commenting, reactions, and follow/unfollow features.',
      'Created a responsive and scalable UI using Tailwind CSS.',
      'Included unit and component testing with Vitest.',
    ],

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
    description:
      'Responsive travel vlog website with API-driven content, videos, and image-based storytelling.',

    problem:
      'Travel enthusiasts need an engaging platform where they can discover destinations and explore rich visual travel content in an intuitive way.',

    uxProcess: [
      'Researched travel blogs and media-heavy content platforms.',
      'Planned user journeys for exploring destinations and viewing travel content.',
      'Created wireframes focused on storytelling and visual engagement.',
      'Tested layouts to ensure responsiveness and usability across devices.',
    ],

    figmaDesign: [
      'Designed content-focused layouts with strong emphasis on imagery and video.',
      'Created reusable components for travel posts and media sections.',
      'Developed responsive designs optimized for mobile-first browsing.',
      'Focused on visual hierarchy to support storytelling content.',
    ],

    finalSolution: [
      'Built a travel vlog website using HTML, CSS, and JavaScript.',
      'Integrated external APIs to fetch and display travel content.',
      'Implemented responsive layouts and interactive media components.',
      'Delivered a smooth and engaging user experience across devices.',
    ],

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
    description:
      'Interactive social media platform with photo sharing, personalized feeds, and built-in camera functionality.',

    problem:
      'Users need a creative and engaging social platform where they can share visual content, personalize their profiles, and interact with a community in a seamless way.',

    uxProcess: [
      'Researched social media platforms to understand engagement patterns and user behavior.',
      'Created user flows for posting, interacting, and profile customization.',
      'Designed navigation structures focused on content discovery and ease of use.',
      'Tested usability across mobile and desktop layouts for responsiveness.',
    ],

    figmaDesign: [
      'Designed profile pages, feeds, and content creation interfaces.',
      'Created reusable card-based components for posts and interactions.',
      'Established consistent spacing, typography, and visual hierarchy.',
      'Focused on mobile-first responsive design principles.',
    ],

    finalSolution: [
      'Built a social media platform using HTML, CSS, Tailwind CSS, and JavaScript.',
      'Implemented photo posting, likes, comments, and personalized feeds.',
      'Added a built-in camera feature for instant content creation.',
      'Created a responsive and interactive user experience across devices.',
    ],

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
    description:
      'Interactive and responsive science museum website designed for children, families, and educators.',

    problem:
      'Science museums need an engaging digital experience that makes educational content accessible, interactive, and enjoyable for children, families, and educators.',

    uxProcess: [
      'Researched educational websites and museum platforms to understand user needs.',
      'Created user journeys for children, families, and educators.',
      'Designed information architecture focused on exploration and discoverability.',
      'Tested layouts for accessibility, clarity, and ease of navigation.',
    ],

    figmaDesign: [
      'Designed colorful, engaging layouts suitable for a younger audience.',
      'Created reusable content sections for exhibitions, events, and information pages.',
      'Developed responsive designs optimized for tablets, mobile, and desktop.',
      'Focused on visual storytelling and educational engagement.',
    ],

    finalSolution: [
      'Built a responsive science museum website using HTML, CSS, and JavaScript.',
      'Created structured pages for exhibitions, events, and visitor information.',
      'Implemented accessible navigation and interactive UI elements.',
      'Delivered a family-friendly educational experience across all devices.',
    ],

    technologies: ['HTML5', 'CSS3', 'JavaScript'],

    github: 'https://github.com/Nirush4/Semesterproject-1',
    live: 'https://thecommunitysciencemuseum1.netlify.app/',
    thumbnail: '/projects/community-science-museum.jpg',
    screenshots: [],
    category: 'frontend',
  },
];

export const GRAPHIC_PROJECTS: GraphicProject[] = [
  {
    id: 11,
    category: 'graphic',
    name: 'Ritual Set',
    projectType: 'Packaging Design & Brand Identity',
    description:
      'A premium home fragrance packaging concept designed to encourage mindfulness through intentional daily rituals. The visual identity combines Scandinavian minimalism, tactile materials, and refined typography to create a timeless luxury experience.',
    challenge:
      'Design a premium packaging system that communicates calm, craftsmanship, and quality while creating an engaging unboxing experience for a luxury home fragrance product.',
    research: [
      'Explored Scandinavian interior design and luxury packaging trends.',
      'Analyzed premium home fragrance and lifestyle brands to understand visual positioning.',
      'Collected references focused on minimalism, natural materials, and tactile finishes.',
      'Developed mood boards to define the visual language and emotional direction of the brand.',
    ],
    designProcess: [
      'Created the brand concept around the idea of slowing down and embracing intentional daily rituals.',
      'Designed a complete packaging system including the rigid gift box, refill carton, and product presentation.',
      'Selected materials, finishes, and color palettes that reinforced a calm and premium aesthetic.',
      'Produced high-fidelity mockups to visualize the product across retail, lifestyle, and marketing contexts.',
    ],
    designDecisions: [
      'Used bone-colored paperboard to create a soft and understated premium appearance.',
      'Introduced terracotta ceramic elements to add warmth and a handcrafted feel.',
      'Applied brass accents to communicate refinement without overwhelming the minimalist aesthetic.',
      'Selected elegant typography with generous white space to improve readability and reinforce Scandinavian design principles.',
      'Maintained a restrained neutral color palette to ensure the packaging remained timeless and product-focused.',
      'Directed realistic lifestyle and macro-detail mockups to highlight materials, textures, and craftsmanship.',
    ],
    finalOutcome: [
      'Developed a cohesive luxury packaging system suitable for boutique retail and premium homeware brands.',
      'Created a consistent visual identity across packaging, product presentation, and promotional imagery.',
      'Demonstrated how thoughtful packaging design can strengthen brand perception and enhance the customer experience.',
      'Delivered realistic commercial mockups for portfolio presentation and marketing applications.',
    ],
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    colors: [
      { name: 'Bone White', value: '#E8DFD0' },
      { name: 'Terracotta', value: '#C96F52' },
      { name: 'Brass Gold', value: '#B59A6A' },
      { name: 'Warm Beige', value: '#F4EDE2' },
    ],
    typography: ['Modern Serif', 'Minimal Sans Serif'],
    deliverables: [
      'Brand Identity',
      'Packaging Design',
      'Rigid Gift Box',
      'Refill Carton',
      'Product Visualization',
      'Lifestyle Mockups',
      'Retail Mockups',
      'Hero Product Images',
    ],
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
    projectType: 'Social Media Advertising Design',
    description:
      'A high-impact square-format social media ad promoting a limited-time MSC Virtuosa cruise offer for Halo Flights. The design combines aspirational lifestyle photography, bold typography, and clear pricing to drive direct bookings from a crowded social feed.',
    challenge:
      'Design a single square ad that could stop the scroll on Instagram and Facebook, communicate a premium cruise experience instantly, and still carry enough pricing, offer, and trust information to convert a browsing user into a lead — without the layout feeling cluttered or downmarket.',
    research: [
      'Audited paid social ads from travel agencies and OTA platforms to identify recurring layout patterns and conversion triggers.',
      'Studied cruise-line marketing photography to understand premium travel positioning.',
      'Reviewed trust-badge placement and hierarchy across travel booking ads.',
      'Collected reference imagery around golden-hour skies and onboard lifestyle moments.',
    ],
    designProcess: [
      'Mapped the ad as a top-to-bottom attention path: brand recognition, lifestyle proof, emotional hook, offer, urgency, trust.',
      'Blocked out lifestyle insets to preview onboard experiences.',
      'Positioned the cruise ship as the central visual anchor.',
      'Layered pricing and urgency elements last.',
      'Refined headline typography scale and angle.',
    ],
    designDecisions: [
      'Used deep navy as the anchoring brand color.',
      'Introduced ocean blue as a secondary accent.',
      'Used sunset orange to connect the design with the hero photography.',
      'Reserved signal red for urgency messaging.',
      'Used white for maximum contrast.',
      'Added neutral grey for trust badge areas.',
    ],
    finalOutcome: [
      'Delivered a scroll-stopping social media campaign asset.',
      'Created a reusable advertising layout system.',
      'Balanced emotional travel storytelling with conversion-focused information.',
      'Produced a flexible campaign foundation.',
    ],
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    colors: [
      { name: 'Deep Navy', value: '#0E2F5A' },
      { name: 'Ocean Blue', value: '#1E6FB8' },
      { name: 'Sunset Orange', value: '#F39C4A' },
      { name: 'Signal Red', value: '#D9303E' },
      { name: 'Pure White', value: '#FFFFFF' },
      { name: 'Light Neutral Grey', value: '#D9DDE3' },
    ],
    typography: ['Bold Condensed Display', 'Clean Sans Serif'],
    deliverables: [
      'Social Media Ad Design',
      'Campaign Layout System',
      'Lifestyle Photo Composition',
      'Pricing Graphics',
      'Trust Badge Footer System',
      'Carousel Variant Concepts',
      'Story Format Adaptation',
    ],
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
    projectType: 'Vector Illustration',
    description:
      'A monochrome vector portrait illustration exploring realistic likeness through line work and hand-drawn hatching techniques. The piece uses controlled linework and cross-hatch shading to translate a photographic reference into a clean, scalable vector illustration.',
    challenge:
      'Recreate a photographic portrait as a fully vector illustration, capturing realistic likeness, skin texture, and facial structure using only black-and-white linework and hatching — without relying on photographic gradients or airbrushed shading.',
    research: [
      'Studied classic scratchboard and pen-and-ink portrait illustration techniques.',
      'Analyzed reference photography to map key facial landmarks, light direction, and shadow zones before starting linework.',
      'Reviewed vector portrait artists who use hatching and stippling to simulate tonal depth without flat gradients.',
      'Broke the reference image down into distinct value zones to plan line density in advance.',
    ],
    designProcess: [
      'Built the illustration in layers, starting with a rough vector base shape.',
      'Constructed facial features first to lock in likeness before adding surrounding texture.',
      'Added directional hair strands using individual vector strokes.',
      'Layered varying line weights and hatching density across facial areas.',
      'Refined contrast by pushing darker shadow areas against untouched highlights.',
    ],
    designDecisions: [
      'Kept the palette strictly black and white to focus on line quality, contrast, and form.',
      'Used fine directional hatching to imply texture and growth direction.',
      'Rendered glasses with consistent line weight for clarity.',
      'Preserved white space around highlights to prevent visual overload.',
      'Used heavier linework around the jaw, ears, and collar to create depth.',
      'Simplified clothing into solid black shapes to keep focus on facial detail.',
    ],
    finalOutcome: [
      'Produced a scalable vector portrait suitable for print and large-format display.',
      'Achieved realistic likeness using only linear illustration techniques.',
      'Demonstrated control over line weight, density, and tonal depth.',
      'Created a personal illustration study showcasing vector craftsmanship.',
    ],
    tools: ['Adobe Illustrator'],
    colors: [
      { name: 'Deep Black', value: '#000000' },
      { name: 'Pure White', value: '#FFFFFF' },
    ],
    typography: [],
    deliverables: ['Vector Portrait Illustration', 'Print-Ready Artwork'],
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
    projectType: 'Motion Graphics & Video Advertising',
    description:
      'A welcome video created for the Halo Philippines website, introducing the agency and building emotional connection around flights to the Philippines. The edit combines family-reunion moments, destination and airport footage, in-flight and customer review proof points, and lifestyle travel shots, closing on branded contact and social details.',
    challenge:
      'Create a single welcome video for the homepage that introduces the Halo Philippines brand, builds emotional trust through real customer moments, provides credibility signals, and closes with clear contact information within a short attention-holding runtime.',
    research: [
      'Reviewed homepage welcome-video formats used by travel agencies.',
      'Identified family reunions as the strongest emotional hook.',
      'Audited available footage including family moments, airports, flights, reviews, and destinations.',
      'Studied review overlay techniques for presenting trust signals.',
    ],
    designProcess: [
      'Structured the video around emotional hook, brand reassurance, proof, aspiration, and contact.',
      'Sequenced footage to balance emotional moments with branded segments.',
      'Designed high-contrast text overlays for readability.',
      'Created review screenshot compositions.',
      'Built a branded closing card with contact details.',
    ],
    designDecisions: [
      'Opened with an authentic family reunion moment instead of branding.',
      'Used bold white typography for message clarity.',
      'Layered customer reviews around emotional footage.',
      'Included real travel moments to reinforce trust.',
      'Closed with a clean branded end card.',
      'Maintained purple and pink brand styling.',
    ],
    finalOutcome: [
      'Delivered an emotional homepage introduction video.',
      'Combined trust signals with storytelling.',
      'Created a reusable video structure for future campaigns.',
      'Produced a clear branded contact ending.',
    ],
    tools: ['Adobe Premiere Pro', 'Adobe After Effects'],
    colors: [
      { name: 'Deep Purple', value: '#4B0082' },
      { name: 'Soft Pink', value: '#E8A0BF' },
      { name: 'Luxury Gold', value: '#D4AF37' },
      { name: 'Pure White', value: '#FFFFFF' },
    ],
    typography: ['Bold Sans Serif', 'Script Accent'],
    deliverables: [
      'Website Welcome Video',
      'Motion Graphic Text Overlays',
      'Customer Review Overlay Sequence',
      'Branded End Card',
      'Social Media Cutdown',
    ],
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
    projectType: 'Design Analysis / Print Advertisement Teardown',
    description:
      "A design breakdown of Munchy's Oat Krunch print catalog advertisement, examining how the layout, product photography, and trust-signal placement work together to communicate category leadership and product variety in a single-page format.",
    challenge:
      'Analyze how a category-leading snack brand structures a single print page to simultaneously build brand recognition, spotlight hero product photography, prove market credibility, showcase a full product range, and provide clear business contact information — all within one static layout.',
    research: [
      "Reviewed the ad's overall grid to identify how attention flows from brand mark to hero product to supporting range.",
      'Studied the accreditation and award badge placement to understand how credibility markers are used to reinforce the "No.1" positioning claim.',
      'Compared the hero product photography treatment against the smaller packaging shots to assess how scale and cropping direct focus.',
      'Noted the use of the torn-poster illustration device as a layout technique for breaking the product out of a flat background.',
    ],
    designProcess: [
      'Mapped the page into four functional zones: brand header, hero product statement, product range strip, and corporate footer.',
      'Traced the visual hierarchy from the logo (top left) through the hero biscuit image to the bold "No.1" claim beneath it.',
      'Identified how the four flavor variants are presented as a uniform horizontal row to communicate range without competing with the hero shot.',
      'Examined the footer band as a distinct color-blocked zone separating brand contact information from the promotional content above.',
    ],
    designDecisions: [
      'Notes that the torn-paper illustration around the hero biscuit is used to create depth and make the product feel like it is breaking through the page, adding dynamism to a static print format.',
      'Observes that certification and award badges are placed close to the brand logo rather than near the product, positioning credibility as a brand-level claim rather than a single-product one.',
      'Highlights the consistent circular red mark shared between the logo and packaging designs, reinforcing brand recognition even at the small scale of the four product shots.',
      'Points out that the bold red "No.1" claim uses a different color from the rest of the palette specifically to draw the eye as the page\'s single strongest statement.',
      'Notes the product range row is kept visually uniform in size and spacing so no single flavor is favored over another, supporting a "full range" message rather than a single hero SKU.',
      "Identifies the footer's solid red color block as a deliberate device to separate transactional/contact information from the emotive product storytelling above it.",
    ],
    finalOutcome: [
      'Produced a structured teardown identifying the layout, hierarchy, and credibility-building techniques used in a category-leading FMCG print advertisement.',
      'Demonstrated the ability to reverse-engineer commercial design decisions rather than only originate new ones.',
      'Built a reference framework (brand header, hero statement, range strip, footer) that can inform future packaging or catalog ad layouts.',
    ],
    tools: ['Adobe Photoshop (annotation)', 'Adobe Illustrator'],
    colors: [
      { name: 'Red', value: '#C62828' },
      { name: 'Pure White', value: '#FFFFFF' },
      { name: 'Warm Brown', value: '#8B5E3C' },
      { name: 'Gold', value: '#D4AF37' },
    ],
    typography: [
      'Bold Script Logotype',
      'Bold Serif Display',
      'Clean Sans Serif',
    ],
    deliverables: [
      'Design Breakdown Document',
      'Layout Hierarchy Analysis',
      'Annotated Reference Image',
    ],
    thumbnail: '/projects/graphic/munchys/munchys.jpg',
    thumbnailType: 'image',
    gallery: [{ type: 'image', src: '/projects/graphic/munchys/munchys.jpg' }],
    figma: '',
    behance: '',
  },
  {
    id: 16,
    category: 'graphic',
    name: 'Voltage — Energy Drink Product & Packaging Design',
    projectType: 'Beverage Product & Packaging Design',
    description:
      'A bold energy drink concept built around speed, focus, and adrenaline. The product and packaging system pairs a sleek matte can design with a high-contrast neon identity, translating raw energy into a visual language that stands out on crowded convenience store shelves.',
    challenge:
      'Design a full beverage packaging system — from the can itself to its multipack carrier — that communicates high energy and performance at a glance, while remaining premium enough to differentiate from typical high-sugar, low-cost energy drink branding.',
    research: [
      'Analyzed leading energy drink brands to identify recurring visual clichés (aggressive typography, generic lightning bolts, oversaturated color) worth avoiding.',
      'Studied convenience store cooler environments to understand shelf density and how packaging needs to read instantly from a distance.',
      "Collected references on motorsport, night-run, and performance-culture visuals to inform the brand's energy narrative.",
      'Built mood boards contrasting matte-black premium aesthetics against neon accent colors to test shelf standout versus refinement.',
    ],
    designProcess: [
      'Developed the brand concept around the idea of "controlled energy" — power that is precise rather than chaotic.',
      'Designed the can form and label system, testing label wrap treatments and finish combinations for shelf impact.',
      'Extended the identity into a multipack carrier and case packaging, maintaining visual consistency across all formats.',
      'Produced high-fidelity commercial mockups simulating cooler shelf placement, lifestyle use, and studio product photography.',
    ],
    designDecisions: [
      'Used a matte black can body as the base to signal premium positioning and create maximum contrast against the neon-lime accent color.',
      'Introduced a single sharp lightning-bolt mark rather than a busy graphic system, keeping the logo legible at small scale and from a distance.',
      'Applied a brushed metallic silver band around the can to add a tactile, engineered quality that reinforces a "performance product" feel over a "sugary drink" feel.',
      'Selected a bold geometric sans-serif for the wordmark to communicate speed and precision, paired with a condensed monospace for functional details like caffeine content.',
      'Restrained the color palette to black, neon-lime, and silver only, avoiding the multi-color chaos common in the category to keep the brand feeling controlled and premium.',
      'Designed the multipack carrier with die-cut circular windows so the neon can tops remain visible on shelf, preserving shelf recognition even when packaged.',
      'Directed dynamic, motion-inspired product photography (condensation, splash, light streaks) to reinforce the energy narrative across marketing touchpoints.',
    ],
    finalOutcome: [
      'Developed a cohesive product and packaging system that reads as premium and performance-driven rather than generic or purely sugar-fueled.',
      'Created a scalable visual identity that holds up across single-can, multipack, and case formats without losing shelf impact.',
      'Demonstrated how restrained color and material choices can differentiate a product within a highly saturated, visually loud category.',
      'Delivered a full set of commercial-grade product visualizations suitable for retail, lifestyle, and advertising use.',
    ],
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Dimension'],
    colors: [
      { name: 'Matte Black', value: '#111111' },
      { name: 'Neon Lime', value: '#C6FF3D' },
      { name: 'Brushed Silver', value: '#B8BCC2' },
      { name: 'Electric Blue', value: '#2E9BFF' },
    ],
    typography: ['Bold Geometric Sans Serif', 'Condensed Monospace'],
    deliverables: [
      'Brand Identity',
      'Can Design',
      'Label Design',
      'Multipack Carrier Design',
      'Case Packaging',
      'Product Visualization',
      'Lifestyle Mockups',
      'Retail/Cooler Mockups',
      'Hero Product Images',
    ],
    thumbnail: '/projects/graphic/voltage/cover.png',
    thumbnailType: 'image',
    gallery: [
      { type: 'image', src: '/projects/graphic/voltage/cover.png' },
      { type: 'image', src: '/projects/graphic/voltage/image.png' },
      { type: 'image', src: '/projects/graphic/voltage/image1.png' },
      { type: 'image', src: '/projects/graphic/voltage/image2.png' },
      { type: 'image', src: '/projects/graphic/voltage/image3.png' },
    ],
    figma: '',
    behance: '',
  },
];
