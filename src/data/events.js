const events = [
  {
    id: 1,
    title: "OSCode CIT Inauguration",
    date: "01 Oct 2025",
    venue: "SMV Block Auditorium, OSCode CIT",
    address: "OSCode CIT, Bengaluru, Karnataka",
    location: "SMV Block Auditorium, OSCode CIT, Bengaluru, Karnataka",
    images: [
      "/images/events/oscodecit-inauguration-2025/oscodecit-inauguration-2025-1.webp",
      "/images/events/oscodecit-inauguration-2025/oscodecit-inauguration-2025-2.webp",
      "/images/events/oscodecit-inauguration-2025/oscodecit-inauguration-2025-3.webp",
      "/images/events/oscodecit-inauguration-2025/oscodecit-inauguration-2025-4.webp",
    ],
    about:
      "The event marked the formal inauguration of OSCode CIT, a student club established to promote open-source development and technical learning among students. The inauguration introduced the club to the student community, outlining its objectives, planned activities, and its focus on fostering a culture of collaborative and open-source-driven technical growth.",
    participation:
      "The event was organized for the launch of OSCode CIT. Students of OSCode CIT, along with faculty and prospective club members, attended the inauguration held at the SMV Block Auditorium.",
    outcome:
      "The inauguration provided students with an introduction to open-source communities, collaborative technical work, and the range of workshops and initiatives the club planned to undertake, encouraging early interest in open-source contribution and technology-driven learning.",
    description:
      "The event marked the formal inauguration of OSCode CIT, a student club established to promote open-source development and technical learning among students.",
  },
  {
    id: 2,
    title: "GIT and GITHUB Session",
    date: "30 Oct 2025",
    venue: "Online Event",
    address: "Online Event",
    location: "Online Event",
    images: ["/images/events/github-session-2025/github-session-2025-1.webp"],
    about:
      "This was an online educational session focused on Git and GitHub, two of the most widely used tools in modern software development. The session introduced participants to the fundamentals of version control, repository management, and the core workflows used by developers to track and manage changes in code.",
    participation:
      "Students of OSCode CIT attended the online session to build a foundational understanding of Git and GitHub, particularly in the context of collaborative and open-source software development.",
    outcome:
      "The session helped students understand how developers use Git and GitHub to manage projects, collaborate with others, and contribute to open-source repositories, laying the groundwork for future participation in open-source initiatives.",
    description:
      "An online educational session focused on Git and GitHub, introducing version control fundamentals, repository management, and core collaborative workflows.",
  },
  {
    id: 3,
    title: "Bengaluru Tech Summit (BTS) 2025",
    date: "20 Nov 2025",
    venue: "Bangalore International Exhibition Centre (BIEC)",
    address: "Tumkur Road, Madavara Post, Bengaluru, Karnataka",
    location: "BIEC, Bengaluru, Karnataka",
    images: [
      "/images/events/bengaluru-tech-summit-2025/bts25-1.webp",
      "/images/events/bengaluru-tech-summit-2025/bts25-2.webp",
      "/images/events/bengaluru-tech-summit-2025/bts25-3.webp",
      "/images/events/bengaluru-tech-summit-2025/bts25-4.webp",
      "/images/events/bengaluru-tech-summit-2025/bts25-5.webp",
    ],
    about:
      "The Bengaluru Tech Summit (BTS) is one of Bengaluru's major technology and innovation events. The 2025 edition, the 28th in its series, was held from 18 to 20 November 2025 at BIEC under the theme 'FutuRise,' with a focus on technology, innovation, startups, business, emerging technologies, and industry collaboration.",
    participation:
      "Students of OSCode CIT visited the summit on 20 November 2025, using the opportunity to explore the broader technology ecosystem on display at the event.",
    outcome:
      "The visit allowed students to observe innovative solutions and startup exhibitions, interact with technology professionals, and gain exposure to current developments across the technology and innovation sector.",
    description:
      "Students visited the 28th edition of BTS under the theme 'FutuRise', exploring startup exhibitions, emerging tech, and industry collaboration.",
  },
  {
    id: 4,
    title: "GSoC / Google Summer of Code Roadmap",
    date: "11 Jan 2026",
    venue: "SMV Auditorium, CIT Bangalore",
    address: "OSCode CIT, Bengaluru, Karnataka",
    location: "CIT Bangalore, SMV Auditorium",
    images: [
      "/images/events/gsoc-roadmap-2026/GSOC.jpg",
      "/images/events/gsoc-roadmap-2026/gsoc-1.webp",
      "/images/events/gsoc-roadmap-2026/gsoc-2.webp",
    ],
    about:
      "Google Summer of Code (GSoC) is a global, online mentoring program that introduces new contributors to open-source software development. Selected participants work on programming projects over a defined period, under the guidance of mentors from established open-source organizations.",
    participation:
      "Students of OSCode CIT organized and attended a GSoC-related session on campus to build awareness of the program. The session focused on explaining the structure of GSoC, including project selection, mentorship, and the general process of engaging with open-source communities.",
    outcome:
      "Students gained an understanding of how the GSoC program works and what is involved in preparing for and contributing to open-source projects. The session was oriented toward student learning and awareness.",
    description:
      "An awareness and preparation session covering project selection, proposal drafting, and navigating global open-source mentorship under GSoC.",
  },
  {
    id: 5,
    title: "Microsoft – TechSync Event",
    date: "31 Jan 2026",
    venue: "Microsoft Research Office",
    address: "Microsoft Research Office, Ashok Nagar, Bengaluru",
    location: "Ashok Nagar, Bengaluru",
    images: [
      "/images/events/microsoft-techsync-2026/microsoft-techsync-2026-1.webp",
      "/images/events/microsoft-techsync-2026/microsoft-techsync-2026-2.webp",
      "/images/events/microsoft-techsync-2026/microsoft-techsync-2026-3.webp",
      "/images/events/microsoft-techsync-2026/microsoft-techsync-2026-4.webp",
      "/images/events/microsoft-techsync-2026/microsoft-techsync-2026-5.webp",
    ],
    about:
      "TechSync was an industry-oriented event associated with Microsoft and OSCode, providing participants with exposure to technology, innovation, and practical software design concepts.",
    participation:
      "Students of OSCode CIT participated in the TechSync event and received recognition for Best Lab Idea.",
    outcome:
      "Achievement: OSCode CIT received the Best Lab Idea award at the TechSync event, reflecting the club's technical participation in an industry-oriented, innovation-focused platform.",
    description:
      "OSCode CIT participated in the Microsoft TechSync event and won the 'Best Lab Idea' award for practical innovation.",
  },
  {
    id: 6,
    title: "IISc Open Day 2026",
    date: "7 March 2026",
    venue: "Indian Institute of Science (IISc), Bengaluru",
    address: "C. V. Raman Avenue / C. V. Raman Road, near C.N.R. Rao Circle, Bengaluru, Karnataka 560012",
    location: "IISc Bengaluru",
    images: [
      "/images/events/iisc-open-day-2026/iisc26-1.webp",
      "/images/events/iisc-open-day-2026/iisc26-2.webp",
      "/images/events/iisc-open-day-2026/iisc26-3.webp",
      "/images/events/iisc-open-day-2026/iisc26-4.webp",
      "/images/events/iisc-open-day-2026/iisc26-5.webp",
      "/images/events/iisc-open-day-2026/iisc26-6.webp",
    ],
    about:
      "IISc Open Day is an annual event organized by the Indian Institute of Science (IISc) that allows students, science and technology enthusiasts, and members of the public to explore the institute and learn about its research activities. The official 2026 Open Day featured experimental demonstrations, poster presentations, exhibitions, lectures, quizzes, competitions, and research-related activities across various departments.",
    participation:
      "Students of OSCode CIT visited IISc on 7 March 2026 to attend the Open Day and explore the institute's research offerings.",
    outcome:
      "The visit exposed students to research projects, laboratories, demonstrations, and technological innovations across different departments, helping them understand how scientific research and technology are applied to real-world problems.",
    description:
      "A research immersion visit showcasing cutting-edge engineering labs, experimental scientific demonstrations, and technological innovations at IISc.",
  },
  {
    id: 7,
    title: "Drone Workshop",
    date: "26 March 2026",
    venue: "Nitte Meenakshi Institute of Technology (NMIT)",
    address: "Govindapura, BSF Campus, Yelahanka, Bengaluru, Karnataka",
    location: "NMIT, BSF Campus, Yelahanka",
    images: [
      "/images/events/first-drone-workshop-2026/drone-workshop-1.webp",
      "/images/events/first-drone-workshop-2026/drone-workshop-2.webp",
      "/images/events/first-drone-workshop-2026/drone-workshop-3.webp",
      "/images/events/first-drone-workshop-2026/drone-workshop-4.webp",
      "/images/events/first-drone-workshop-2026/drone-workshop-5.webp",
      "/images/events/first-drone-workshop-2026/drone-workshop-6.webp",
    ],
    about:
      "A drone workshop conducted at Nitte Meenakshi Institute of Technology (NMIT), focusing on the basics of drones, including their components, working principles, applications, and fundamental concepts related to drone technology.",
    participation:
      "Students of OSCode CIT were involved in the workshop and shared their knowledge with participants, helping introduce them to the fundamentals of drone technology through an interactive learning session.",
    outcome:
      "Participants gained an introductory-level understanding of drone components, calibration, and working principles, establishing foundational knowledge in unmanned aerial hardware systems.",
    description:
      "Hands-on workshop introducing drone hardware architecture, component assembly, flight principles, and calibration.",
  },
  {
    id: 8,
    title: "James Dyson Session",
    date: "23 April 2026",
    venue: "Online Event",
    address: "Online Event",
    location: "Online Event",
    images: [
      "/images/events/james-dyson-2026/james-dyson-2026-1.webp",
      "/images/events/james-dyson-2026/james-dyson-2026-2.webp",
    ],
    about:
      "This was an online, educational and innovation-focused session that gave students exposure to engineering, design thinking, and the process of translating ideas into practical solutions for real-world problems.",
    participation:
      "Students of OSCode CIT attended the online session as part of the club's ongoing effort to expose members to engineering and innovation-focused learning opportunities.",
    outcome:
      "The session encouraged students to think creatively, understand the connection between engineering and design thinking, and appreciate the process of developing solutions that address practical challenges.",
    description:
      "Design thinking and problem-solving session exploring the lifecycle of translating conceptual engineering into tangible consumer hardware.",
  },
  {
    id: 9,
    title: "DEF-TECH Bharat 2026",
    date: "22 May 2026",
    venue: "KTPO, Whitefield",
    address: "KTPO, Whitefield, Bengaluru, Karnataka",
    location: "KTPO, Whitefield",
    images: [
      "/images/events/deftech-2026/deftech26-1.webp",
      "/images/events/deftech-2026/deftech26-2.webp",
      "/images/events/deftech-2026/deftech26-3.webp",
      "/images/events/deftech-2026/deftech26-4.webp",
      "/images/events/deftech-2026/deftech26-5.webp",
      "/images/events/deftech-2026/deftech26-6.webp",
      "/images/events/deftech-2026/deftech26-7.webp",
      "/images/events/deftech-2026/deftech26-8.webp",
    ],
    about:
      "The Defense Tech event provided exposure to the intersection of technology, engineering, innovation, and defence applications across air, land, sea, and space domains.",
    participation:
      "Students of OSCode CIT attended/participated in the event as part of their engagement with advanced engineering and innovation-focused activities.",
    outcome:
      "The event helped students learn about emerging technologies and their applications in the defence sector, gaining awareness of how technological innovation contributes to national security and advanced systems.",
    description:
      "Deep dive into advanced defense research, autonomous systems, electronics, and aerospace manufacturing.",
  },
  {
  id: 10,
  title: "Decode SIH 2026",
  date: "05 Sept 2026",
  venue: "Cambridge Institute of Technology, Bengaluru",
  address: "Cambridge Institute of Technology, Bengaluru",
  location: "Cambridge Institute of Technology, Bengaluru, Karnataka",

  images: [
    "/images/events/decodesih-2026/decodesih26-1.webp",
    "/images/events/decodesih-2026/decodesih26-2.webp",
    "/images/events/decodesih-2026/decodesih26-3.webp",
    "/images/events/decodesih-2026/decodesih26-4.webp",
    "/images/events/decodesih-2026/decodesih26-5.webp",
    "/images/events/decodesih-2026/decodesih26-6.webp",
    "/images/events/decodesih-2026/decodesih26-7.webp",
    "/images/events/decodesih-2026/decodesih26-8.webp",
    "/images/events/decodesih-2026/decodesih26-9.webp",
    "/images/events/decodesih-2026/decodesih26-10.webp",
    "/images/events/decodesih-2026/decodesih26-11.webp",
    "/images/events/decodesih-2026/decodesih26-12.webp",
    "/images/events/decodesih-2026/decodesih26-13.webp",
    "/images/events/decodesih-2026/decodesih26-14.webp",
    "/images/events/decodesih-2026/decodesih26-15.webp",
    "/images/events/decodesih-2026/decodesih26-16.webp",
    "/images/events/decodesih-2026/decodesih26-17.webp",
  ],

  about:
    "Decode SIH 2026 was a technology and innovation-focused event conducted at Cambridge Institute of Technology, Bengaluru, bringing together students to explore problem-solving, emerging technologies, and innovation in preparation for the Smart India Hackathon.",

  participation:
    "OSCode CIT members contributed to the successful conduct of Decode SIH 2026 by supporting the event as student volunteers and organizers, assisting with event coordination, participant management, and other on-ground activities.",

  outcome:
    "The event provided students with an opportunity to engage with the hackathon ecosystem, collaborate on real-world problem statements, and gain exposure to innovation and technology-driven problem solving. The involvement of OSCode CIT members also strengthened the club's role in organizing and supporting technology-focused initiatives on campus.",

  description:
    "A campus-hosted technology and innovation event organized to foster hackathon culture, student collaboration, and problem-solving, with OSCode CIT members contributing as volunteers and organizers.",
},
];

export default events;