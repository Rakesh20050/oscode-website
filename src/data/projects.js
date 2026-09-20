export const projects = [
  {
    id: "vibetagger",
    title: "Vibe-Tagger AI",
    creator: "Kirithi & OSCode Tech Team",
    member: "Kirithi",
    category: "AI & Social Tech",
    status: "Completed",
    description:
      "An AI-powered social media copywriter that uses computer vision to analyze photo composition and generate contextually relevant, viral-ready captions in seconds.",
    fullDescription:
      "OSCode CIT's flagship open-source AI project designed to eliminate 'caption block' for creators. Built by Kirithi and team, Vibe-Tagger leverages multimodal LLMs to inspect photo composition, lighting, and mood—generating custom tone-matched captions with 1-tap clipboard copying.",
    features: [
      "Multi-Modal Vision Analysis: Direct image uploads analyzed via Google Gemini 3 Flash without manual prompting",
      "Dynamic Vibe Presets: Curates customizable tone styles including Short, Witty, Professional, Savage, and Gen-Z",
      "One-Tap Clipboard Integration: Built-in instant copying for seamless social media posting",
      "Cyber-Black Glassmorphism: Responsive, mobile-first design built with Tailwind CSS and Framer Motion"
    ],
    technologies: [
      "React 19",
      "Google Gemini 3 Flash",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "Vercel"
    ],
    github: "https://github.com/oscode-cit/vibe-tagger",
    liveDemo: "https://vibe-tagger-oscode-cit.vercel.app",
    images: ["/images/projects/vibe-tagger.png"],
  },
  {
    id: "os-club-live-collaboration",
    title: "OS.CLUB — Real-Time Collaboration Engine",
    creator: "Durga Prajapati & OSCode Tech Team",
    member: "Durga Prajapati",
    category: "Open Source",
    status: "Active / Ongoing",
    description:
      "A real-time GitHub-integrated gamified platform turning coding activity into a live social experience with streak tracking, issue claiming, and live coding pods.",
    fullDescription:
      "Engineered by Durga Prajapati and the OSCode Tech Team, OS.CLUB connects directly with GitHub organizations and translates repository events into an interactive live workspace. Designed to make open-source accessible to beginners, the platform features a Command Center for leaders to track live commits and a Contribution Hub with swipeable issue cards.",
    features: [
      "Command Center: Live commit counting, webhook streams, and repo telemetry",
      "Contribution Hub: Tagged good-first-issues with 1-click instant claiming",
      "Club Lounge: Real-time presence indicators, stream pods, and streak counters",
      "Automated scoring, gamified leaderboards, and WebSocket push updates"
    ],
    technologies: ["React", "Flutter", "Node.js", "WebSockets", "GitHub API", "Firestore"],
    github: "https://github.com/durgaprajapati083/os-club",
    liveDemo: "https://oscodecit.in",
    images: ["/images/projects/oscodespace.png"],
  },
  {
    id: "oscode-web-platform",
    title: "OSCode CIT Official Platform",
    creator: "OSCode CIT Technical Team",
    member: "OSCode Team",
    category: "Open Source",
    status: "Completed",
    description:
      "The official open-source community platform and activity engine built for Cambridge Institute of Technology students, featuring modular event logs, dynamic registries, and club telemetry.",
    fullDescription:
      "The OSCode CIT platform serves as the central hub for the student developer community. Built with modern React and Framer Motion, it features real-world project repositories, transparent leadership archives, activity registries, and an interactive interface designed to bridge academic learning with open-source development.",
    features: [
      "Interactive event logging with multi-image uncropped modal galleries",
      "Modular project showcase and student achievement registry with popups",
      "Custom precision theme inspired by OSCode electric blue brand identity",
      "Client-side zero-backend direct email compose communication workflows"
    ],
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite", "Vercel"],
    github: "https://github.com/oscode-cit/OSCodeCIT_Website",
    liveDemo: "https://oscodecit.in",
    images: ["/images/projects/oscodewebsite.png"],
  },
  {
    id: "snippet-studio",
    title: "SnippetStudio IDE",
    creator: "Riddhima, Abhesh & OSCode Tech Team",
    member: "Abhesh Mandal",
    category: "Developer Tools",
    status: "Active / Ongoing",
    description:
      "A collaborative web-based code editor and execution workspace allowing developers to write, execute, save, fork, and share code snippets across multiple languages.",
    fullDescription:
      "SnippetStudio is a browser-based developer ideation tool built during an OSCode 7-day engineering sprint. It integrates Monaco Editor with cloud execution engines to compile and run code in real-time, backed by cloud storage for forkable snippet links and preconfigured language starter templates.",
    features: [
      "Monaco Editor integration with language selection and syntax highlighting",
      "Remote code execution and runtime error tracing via Judge0 / Piston API",
      "Snippet save, fork, and share URL generation with Supabase backend",
      "Preloaded starter code templates and customizable developer themes"
    ],
    technologies: ["React", "Monaco Editor", "Supabase", "Judge0 API", "Tailwind CSS"],
    github: "https://github.com/oscode-cit/snippet-studio",
    liveDemo: "",
    images: ["/images/projects/codeide.png"],
  },
];