import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import type {
  Profile,
  NavItem,
  TechItem,
  FeaturedProject,
  UserCapability,
  ArchitectureLayer,
  ArchitectureHighlight,
  EngineeringStep,
  ExperienceItem,
  CertificationItem,
  ContactLink,
  EducationItem,
} from "@/types/portfolio";

export const profile: Profile = {
  name: "Fahim Muntasir",
  role: "Frontend-Focused Full-Stack Developer",
  specialization: "Building Real-Time Web Applications",
  coreStack: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"],
  realtimeStack: ["Socket.IO", "WebRTC", "Redis"],
  github: "https://github.com/fahim-muntasir",
  linkedin: "https://www.linkedin.com/in/fahim-muntasir0909",
  email: "fahimmuntasir0909@gmail.com",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Project", href: "#project" },
  { label: "Engineering", href: "#engineering" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const techStack: TechItem[] = [
  { name: "React" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "Socket.IO" },
  { name: "WebRTC" },
];

export const aboutSectionTechnologies = {
  frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Redux Toolkit",
    "RTK Query",
    "Tailwind CSS",
    "Frontend Architecture",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "Socket.IO",
    "WebRTC",
    "MongoDB",
    "PostgreSQL",
    "Redis",
  ],
};

export const featuredProject: FeaturedProject = {
  name: "Syncora24",
  tagline: "A Full-Stack Real-Time Language Practice Platform",
  description:
    "Syncora24 is a real-time language practice platform where users can discover live rooms, join conversations, communicate through voice and text, and interact with other members in real time.",
  techStack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "RTK Query",
    "Node.js",
    "Express.js",
    "Socket.IO",
    "WebRTC",
    "MongoDB",
    "Redis",
    "Docker",
    "Turborepo",
  ],
  links: [
    {
      label: "Live Demo",
      href: "https://syncora24-frontend.vercel.app",
      icon: ExternalLink,
    },
    {
      label: "GitHub Repository",
      href: "https://github.com/fahim-muntasir/Syncora24",
      icon: Github,
    },
  ],
};

export const userCapabilities: UserCapability[] = [
  {
    number: "01",
    title: "Discover Live Rooms",
    description: "Browse language practice rooms that update in real time.",
  },
  {
    number: "02",
    title: "Join a Room",
    description:
      "Open a room and view the current active members before joining.",
  },
  {
    number: "03",
    title: "Real-Time Voice Communication",
    description:
      "Connect with other participants through WebRTC-powered voice communication.",
  },
  {
    number: "04",
    title: "Live Chat",
    description: "Send and receive messages instantly inside a room.",
  },
  {
    number: "05",
    title: "Create Rooms",
    description:
      "Create rooms with language, level, participant limits, and other configurations.",
  },
  {
    number: "06",
    title: "Room Moderation",
    description:
      "Hosts and moderators can manage participant audio and room moderation.",
  },
  {
    number: "07",
    title: "Leave Anytime",
    description: "Members can leave rooms without disrupting the experience.",
  },
  {
    number: "08",
    title: "Automatic Room Cleanup",
    description:
      "If a room remains empty for five minutes, it is automatically removed from Redis.",
  },
];

export const architectureLayers: ArchitectureLayer[] = [
  { label: "Next.js Frontend", type: "primary" },
  { label: "REST API + Socket.IO", type: "primary" },
  { label: "Express.js Backend", type: "primary" },
  { label: "MongoDB", sublabel: "Application Data", type: "storage" },
  { label: "Redis", sublabel: "Temporary Room State", type: "storage" },
];

export const architectureHighlights: ArchitectureHighlight[] = [
  {
    title: "Frontend Architecture",
    description:
      "Next.js App Router, TypeScript, reusable components, Redux Toolkit, and RTK Query.",
  },
  {
    title: "Real-Time Layer",
    description:
      "Socket.IO handles real-time room updates, member events, messaging, signaling, and moderation events.",
  },
  {
    title: "Voice Communication",
    description:
      "WebRTC establishes peer-to-peer audio connections between participants.",
  },
  {
    title: "Room State",
    description:
      "Redis manages temporary room data and shared real-time room state.",
  },
  {
    title: "Application Data",
    description: "MongoDB stores persistent application and user-related data.",
  },
];

export const engineeringSteps: EngineeringStep[] = [
  {
    number: "01",
    title: "The Problem",
    content: {
      kind: "text",
      paragraphs: [
        "Language learners often need opportunities to practice speaking with real people.",
        "The platform creates live rooms where people can join and communicate.",
      ],
    },
  },
  {
    number: "02",
    title: "The Approach",
    content: {
      kind: "list",
      intro: "Build a real-time room system combining:",
      items: [
        "Frontend UI",
        "REST APIs",
        "Socket.IO",
        "WebRTC",
        "Redis",
        "MongoDB",
      ],
    },
  },
  {
    number: "03",
    title: "Discovering Live Rooms",
    content: {
      kind: "list",
      items: [
        "Rooms are displayed on the application entry page.",
        "Room information updates in real time.",
        "Users can see active rooms and current participants.",
      ],
    },
  },
  {
    number: "04",
    title: "Joining a Room",
    content: {
      kind: "list",
      items: [
        "When a user selects a room, they are redirected to the room experience.",
        "A join experience/modal can show current room information and active members.",
        "Room membership is synchronized in real time.",
      ],
    },
  },
  {
    number: "05",
    title: "Connecting in Real Time",
    content: {
      kind: "text",
      paragraphs: [
        "Socket.IO manages room events. WebRTC handles peer-to-peer audio. Socket.IO also helps with WebRTC signaling.",
        "Socket.IO handles coordination, events, signaling, and synchronization. WebRTC handles peer-to-peer voice streams.",
      ],
    },
  },
  {
    number: "06",
    title: "Managing Application State",
    content: {
      kind: "layered",
      layers: [
        {
          label: "Client-Side Shared State",
          description: "Redux Toolkit manages shared application state.",
          subItems: [
            "Room state: audio enabled, mute state, speaking users, unmuted users, force-muted users, mute-all state, mute-all excluded users",
            "Authentication state: current user, authentication status",
            "Other shared application state where applicable",
          ],
        },
        {
          label: "Local State",
          description:
            "React component state for modal visibility, temporary UI interactions, and component-specific behavior.",
        },
        {
          label: "Real-Time Synchronization",
          description: "Socket.IO keeps clients synchronized.",
        },
        {
          label: "Redis",
          description: "Redis manages temporary shared room state.",
        },
        {
          label: "MongoDB",
          description: "MongoDB manages persistent application data.",
        },
      ],
    },
  },
  {
    number: "07",
    title: "Moderating the Room",
    content: {
      kind: "roles",
      intro:
        "Moderation state must remain synchronized across all participants.",
      roles: [
        {
          role: "Normal Members",
          permissions: ["Can mute and unmute themselves"],
        },
        {
          role: "Hosts and Moderators",
          permissions: [
            "Can manage their own audio",
            "Can mute or unmute individual members",
          ],
        },
        {
          role: "Host",
          permissions: [
            "Can mute all members",
            "When mute-all is enabled, normal members cannot independently unmute themselves",
          ],
        },
      ],
    },
  },
  {
    number: "08",
    title: "Managing the Room Lifecycle",
    content: {
      kind: "lifecycle",
      steps: [
        "Room Created",
        "Members Join",
        "Active",
        "Empty",
        "5 Minute Timeout",
        "Removed",
      ],
    },
  },
  {
    number: "09",
    title: "Ending a Room Safely",
    content: {
      kind: "flow",
      steps: [
        "Host Ends Room",
        "Server Validates Host",
        "Room Status → Ended",
        "Temporary Moderation State Cleared",
        "Socket Event Broadcast",
        "Members Receive Update",
        "Room Ended Modal",
        "Global Room List Updates",
      ],
    },
  },
  {
    number: "10",
    title: "Authentication & Sessions",
    content: {
      kind: "list",
      items: [
        "JWT-based authentication",
        "Access tokens",
        "Refresh tokens",
        "Protected room interactions",
        "Authenticated users are required for protected actions",
      ],
    },
  },
  {
    number: "11",
    title: "Real-Time Events",
    content: {
      kind: "events",
      intro:
        "The application uses event-based real-time synchronization through Socket.IO.",
      events: [
        "Room created",
        "User joined",
        "User left",
        "Message received",
        "Moderation updates",
        "Mute/unmute",
        "Speaking state",
        "Room ended",
        "WebRTC signaling",
      ],
    },
  },
  {
    number: "12",
    title: "Engineering Decisions",
    content: {
      kind: "decisions",
      decisions: [
        {
          question: "Why Redis for Room State?",
          why: "Rooms are temporary and require fast access and shared state during real-time interactions.",
          result: "Low-latency room state with automatic expiration.",
        },
        {
          question: "Why Redux?",
          why: "Redux manages shared client-side state used across multiple components.",
          result: "Consistent shared state for room and authentication.",
        },
        {
          question: "Why Local State?",
          why: "Temporary component-specific UI state does not need to be globally managed.",
          result: "Lighter, more maintainable component-level interactions.",
        },
        {
          question: "Why Socket.IO?",
          why: "The application requires event-driven, bidirectional communication.",
          result: "Reliable real-time events and WebRTC signaling.",
        },
        {
          question: "Why WebRTC?",
          why: "Voice communication requires low-latency peer-to-peer streams.",
          result: "Direct peer-to-peer audio between participants.",
        },
        {
          question: "Why Separate Persistent and Temporary Data?",
          why: "MongoDB stores persistent application data while Redis handles temporary real-time room state.",
          result:
            "Clear separation of concerns between persistent and ephemeral data.",
        },
      ],
    },
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    organization: "Self-Employed | Remote (Freelance)",
    date: "Jan 2023 — Present",
    description:
      "Building React.js and TypeScript applications with REST APIs, real-time communication, and modern frontend architecture. Improved frontend performance by 30% using RTK Query, optimized state management, and API caching. Built real-time chat and WebRTC audio/video features across multiple projects.",
  },
  {
    role: "Web Development Industrial Trainee",
    organization: "Kaizen IT Ltd. | On-site",
    date: "Jun 2024 — Sep 2024",
    description:
      "Completed a 3-month industrial attachment focused on web development using Python in a professional office environment.",
  },
];

export const certificationItems: CertificationItem[] = [
  {
    name: "Web Development Fundamentals",
    organization: "IBM SkillsBuild",
    year: "2025",
    verifyUrl:
      "https://www.credly.com/badges/7fdf6707-159c-4e22-a7fe-08c09bcd5723/public_url",
  },
  {
    name: "Think in a Redux Way",
    organization: "Learn with Sumit",
    year: "2022",
    verifyUrl:
      "https://learnwithsumit.com/certificates/verify/LWSCTXN-5YK1NQ5Q",
  },
];

export const educationItems: EducationItem[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "University of Global Village",
    date: "Jun 2025 — Present",
  },
  {
    degree: "Diploma in Computer Science & Technology",
    institution: "Barishal Polytechnic Institute",
    date: "Jan 2020 — Dec 2024",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email Me",
    href: "mailto:fahimmuntasir0909@gmail.com",
    icon: Mail,
    primary: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fahim-muntasir0909",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/fahim-muntasir",
    icon: Github,
  },
];
