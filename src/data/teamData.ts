export interface Person {
  name: string;
  role: string;
  image: string;
  backgroundImage?: string;
  description: string;
  skills?: string[];
  github?: string;
  linkedin?: string;
}

export interface TeamMember {
  name: string;
  role?: string;
  image: string;
  github?: string;
  linkedin?: string;
}

export interface Department {
  name: string;
  shortName: string;
  description: string;
  lead: Person;
  members: TeamMember[];
  accent: "blue" | "cyan" | "purple" | "green";
}

/* =========================================================
   ORGANIZER
========================================================= */

export const organizer: Person = {
  name: "Bharat Kumar S",
  role: "Club Head",
  image: "/images/team/organizer.jpeg",
  backgroundImage: "/images/team/backgrounds/organizer-bg.jpg",

  description:
    "The driving force behind OSCODE CIT, helping build a community where students learn, create, collaborate, and contribute to technology and open source.",

  skills: [
    "Leadership",
    "Open Source",
    "Community",
    "Technology",
  ],

  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
};

/* =========================================================
   CLUB LEAD + CLUB CO-LEAD
========================================================= */

export const leadership: Person[] = [
  {
    name: "Riddhima Utreja",
    role: "Club Lead",
    image: "/images/team/club-lead.jpeg",
    backgroundImage:
      "/images/team/backgrounds/club-lead-bg.jpg",

    description:
      "Leading the OSCODE CIT community, coordinating initiatives, supporting members, and creating opportunities for students to explore technology and open source.",

    skills: [
      "Leadership",
      "Development",
      "Open Source",
      "Community",
    ],

    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },

  {
    name: "C Bindu Rekha",
    role: "Club Co-Lead",
    image: "/images/team/club-co-lead.jpg",
    backgroundImage:
      "/images/team/backgrounds/club-co-lead-bg.jpg",

    description:
      "Supporting the club's vision through collaboration, event coordination, technical activities, and helping members grow their skills.",

    skills: [
      "Leadership",
      "Management",
      "Technology",
      "Community",
    ],

    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
];

/* =========================================================
   DEPARTMENTS
========================================================= */

export const departments: Department[] = [
  /* =======================================================
     TECHNICAL TEAM
  ======================================================= */

  {
    name: "TECHNICAL TEAM",
    shortName: "Tech",

    accent: "blue",

    description:
      "Builds, develops, experiments, and turns ideas into real technical projects.",

    /* -----------------------------
       TECHNICAL LEAD
    ----------------------------- */

    lead: {
      name: "Durga Prajapati",
      role: "Technical Lead",
      image: "/images/team/technical-lead.jpg",
      backgroundImage:
        "/images/team/backgrounds/technical-bg.jpg",

      description:
        "Leads the technical team in building projects, exploring new technologies, and helping members improve their development skills.",

      skills: [
        "Web Development",
        "Programming",
        "Open Source",
        "Projects",
      ],

      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/",
    },

    /* -----------------------------
       TECHNICAL TEAM MEMBERS
    ----------------------------- */

    members: [
      {
        name: "Rakesh Kumar Shah",
        role: "Developer",
        image:
          "/images/team/members/technical-1.jpeg",
        github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
      },

      {
        name: "Deepraj Kumar Gupta",
        role: "Developer",
        image:
          "/images/team/members/technical-2.jpg",
      },

      {
        name: "Tejas S",
        role: "Developer",
        image:
          "/images/team/members/technical-3.jpeg",
      },
      {
        name: "Abhesh Mandal",
        role: "Developer",
        image:
          "/images/team/members/technical-4.jpg",
      },
      {
        name: "Deeksha SK",
        role: "Developer",
        image:
          "/images/team/members/technical-5.jpeg",
      },
      {
        name: "Anshika Singh",
        role: "Developer",
        image:
          "/images/team/members/technical-6.jpeg",
      },
      {
        name: "Sharath",
        role: "Developer",
        image:
          "/images/team/members/technical-7.jpeg",
      },
    ],
  },

  /* =======================================================
     R&D TEAM
  ======================================================= */

  

  /* =======================================================
     SOCIAL MEDIA TEAM
  ======================================================= */

  {
    name: "SOCIAL MEDIA TEAM",
    shortName: "Social",

    accent: "cyan",

    description:
      "Connects OSCODE CIT with the community through creative digital communication and media.",

    /* -----------------------------
       SOCIAL MEDIA LEAD
    ----------------------------- */

    lead: {
      name: "K Lipika Shree",
      role: "Social Media Lead",
      image:
        "/images/team/social-media-lead.jpeg",
      backgroundImage:
        "/images/team/backgrounds/social-media-bg.jpg",

      description:
        "Leads the social media team in creating engaging content, managing digital communication, and showcasing OSCODE CIT activities.",

      skills: [
        "Content Creation",
        "Social Media",
        "Design",
        "Communication",
      ],

      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/",
    },

    /* -----------------------------
       SOCIAL MEDIA MEMBERS
    ----------------------------- */

    members: [
      {
        name: "Social Media Member 1",
        role: "Content Creator",
        image:
          "/images/team/members/social-1.jpg",
      },

      {
        name: "Social Media Member 2",
        role: "Designer",
        image:
          "/images/team/members/social-2.jpg",
      },

      {
        name: "Social Media Member 3",
        role: "Media Member",
        image:
          "/images/team/members/social-3.jpg",
      },
    ],
  },

  /* =======================================================
     EVENT TEAM
  ======================================================= */

  {
    name: "EVENT TEAM",
    shortName: "Events",

    accent: "purple",

    description:
      "Plans and executes workshops, hackathons, meetups, technical sessions, and community activities.",

    /* -----------------------------
       EVENT LEAD
    ----------------------------- */

    lead: {
      name: "Aishwarya Gadela",
      role: "Event Lead",
      image:
        "/images/team/event-lead.jpg",
      backgroundImage:
        "/images/team/backgrounds/event-bg.jpg",

      description:
        "Coordinates events and activities that bring students together to learn, collaborate, compete, and build.",

      skills: [
        "Event Management",
        "Coordination",
        "Communication",
        "Planning",
      ],

      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/",
    },

    /* -----------------------------
       EVENT TEAM MEMBERS
    ----------------------------- */

    members: [
      {
        name: "Event Member 1",
        role: "Event Coordinator",
        image:
          "/images/team/members/event-1.jpg",
      },

      {
        name: "Event Member 2",
        role: "Coordinator",
        image:
          "/images/team/members/event-2.jpg",
      },

      {
        name: "Event Member 3",
        role: "Volunteer",
        image:
          "/images/team/members/event-3.jpg",
      },
    ],
  },
   /* =======================================================
     R&D TEAM
  ======================================================= */

  {
    name: "R&D TEAM",
    shortName: "R&D",

    accent: "green",

    description:
      "Explores emerging technologies, researches ideas, and experiments with innovative solutions.",

    /* -----------------------------
       R&D LEAD
    ----------------------------- */

    lead: {
      name: "S Nishaanth",
      role: "R&D Lead",
      image: "/images/team/rnd-lead.jpeg",
      backgroundImage:
        "/images/team/backgrounds/rnd-bg.jpg",

      description:
        "Leads research and experimentation within OSCODE CIT, exploring emerging technologies and turning interesting ideas into practical solutions.",

      skills: [
        "Research",
        "AI & ML",
        "Innovation",
        "Experimentation",
      ],

      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/",
    },

    /* -----------------------------
       R&D TEAM MEMBERS
       
       Punith S is included here as
       another R&D team member.
    ----------------------------- */

    members: [
      {
        name: "Punith S",
        role: "R&D Member",
        image:
          "/images/team/rnd1-lead.jpg",
        github: "https://github.com/",
        linkedin: "https://www.linkedin.com/",
      },

      {
        name: "R&D Member 2",
        role: "Researcher",
        image:
          "/images/team/members/rd-2.jpg",
      },

      {
        name: "R&D Member 3",
        role: "AI/ML Member",
        image:
          "/images/team/members/rd-3.jpg",
      },
    ],
  },
   /* =======================================================
     R&D TEAM
  ======================================================= */

  {
    name: "R&D TEAM",
    shortName: "R&D",

    accent: "green",

    description:
      "Explores emerging technologies, researches ideas, and experiments with innovative solutions.",

    /* -----------------------------
       R&D LEAD
    ----------------------------- */

    lead: {
      name: "Punith S.",
      role: "R&D Lead",
      image: "/images/team/rnd1-lead.jpg",
      backgroundImage:
        "/images/team/backgrounds/rnd-bg.jpg",

      description:
        "Leads research and experimentation within OSCODE CIT, exploring emerging technologies and turning interesting ideas into practical solutions.",

      skills: [
        "Research",
        "AI & ML",
        "Innovation",
        "Experimentation",
      ],

      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/",
    },

    /* -----------------------------
       R&D TEAM MEMBERS
       
       Punith S is included here as
       another R&D team member.
    ----------------------------- */

    members: [
      {
        name: "Punith S",
        role: "R&D Member",
        image:
          "/images/team/rnd1-lead.jpg",
        github: "https://github.com/",
        linkedin: "https://www.linkedin.com/",
      },

      {
        name: "R&D Member 2",
        role: "Researcher",
        image:
          "/images/team/members/rd-2.jpg",
      },

      {
        name: "R&D Member 3",
        role: "AI/ML Member",
        image:
          "/images/team/members/rd-3.jpg",
      },
    ],
  },
];
const teamData = {
  organizer,
  leadership,
  departments,
};

export default teamData;

