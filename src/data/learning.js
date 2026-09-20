export const learningTracks = [
  {
    id: "git-github-mastery",
    title: "Git & GitHub Open Source Mastery",
    level: "Beginner to Intermediate",
    category: "Version Control",
    icon: "GitBranch",
    description:
      "Master essential version control, repository management, pull requests, merge conflict resolution, and open-source contribution workflow.",
    modules: [
      "Understanding Git Architecture (Working Tree, Index, HEAD)",
      "Branching Strategies & Feature Workflows",
      "Drafting Professional Pull Requests & Commit Formatting",
      "Resolving Merge Conflicts & Interactive Rebase"
    ],
    resources: [
      { name: "OSCode Git Starter Guide PDF", link: "#" },
      { name: "Interactive Git Visualizer", link: "https://git-school.github.io/visualizing-git/" },
      { name: "First Contributions Repo", link: "https://github.com/firstcontributions/first-contributions" }
    ],
  },
  {
    id: "gsoc-roadmap",
    title: "Google Summer of Code (GSoC) Blueprint",
    level: "Intermediate to Advanced",
    category: "Global Mentorship",
    icon: "GraduationCap",
    description:
      "A battle-tested 4-step roadmap to land GSoC internships, select target organizations, write winning proposals, and build long-term maintainer trust.",
    modules: [
      "Organization Research & Codebase Triage (Nov – Jan)",
      "Solving Good First Issues & IRC/Discord Etiquette",
      "Writing a High-Scoring Technical Proposal",
      "Community Bonding & Iterative Sprint Delivery"
    ],
    resources: [
      { name: "Official GSoC Student Guide", link: "https://google.github.io/gsocguides/student/" },
      { name: "OSCode GSoC Winning Proposals Archive", link: "#" }
    ],
  },
  {
    id: "modern-web-dev",
    title: "Full-Stack Web Development Track",
    level: "Beginner to Advanced",
    category: "Web Engineering",
    icon: "Code",
    description:
      "From semantic HTML and Tailwind CSS to React 19, Framer Motion, Node.js microservices, and serverless Vercel deployments.",
    modules: [
      "Modern React 19 & Component Architecture",
      "Tailwind CSS v4 & Glassmorphic UI Design",
      "State Management & Framer Motion Animations",
      "RESTful APIs, Node.js & Database Integration"
    ],
    resources: [
      { name: "React 19 Official Documentation", link: "https://react.dev/" },
      { name: "Tailwind CSS v4 Reference", link: "https://tailwindcss.com/" },
      { name: "OSCode Vibe-Tagger Source Code", link: "https://github.com/oscode-cit/vibe-tagger" }
    ],
  },
  {
    id: "ai-ml-fundamentals",
    title: "Applied AI & Computer Vision Track",
    level: "Intermediate",
    category: "Artificial Intelligence",
    icon: "Cpu",
    description:
      "Explore multimodal LLMs, OpenCV image processing, Python PyTorch basics, and integrating Google Gemini APIs into real-world applications.",
    modules: [
      "Python Data Science Stack (NumPy, Pandas, Matplotlib)",
      "OpenCV Image Processing & Edge Detection",
      "Google Gemini 3 Flash Multimodal API Integration",
      "Deploying AI Microservices with FastAPI"
    ],
    resources: [
      { name: "Google AI Studio Developer Hub", link: "https://aistudio.google.com/" },
      { name: "OpenCV Python Tutorials", link: "https://docs.opencv.org/" }
    ],
  },
];
