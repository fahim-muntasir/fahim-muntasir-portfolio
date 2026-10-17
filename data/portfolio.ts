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
    "Syncora24 is a full-stack language practice platform featuring Open Conversation and Debate rooms. Users can discover live rooms, join audio/video conversations, share screens, exchange messages, and participate in structured debates with For and Against sides. Socket.IO synchronizes room events, participant states, and moderation actions in real time.",
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
    description: "Browse active language practice rooms and see real-time room updates.",
  },
  {
    number: "02",
    title: "Open Conversation & Debate",
    description:
      "Join open-ended language conversations or participate in structured debates with For and Against sides.",
  },
  {
    number: "03",
    title: "Join a Room",
    description:
      "View room information and current participants before joining.",
  },
  {
    number: "04",
    title: "Audio & Video Communication",
    description:
      "Communicate with other participants through WebRTC-powered real-time audio and video.",
  },
  {
    number: "05",
    title: "Screen Sharing",
    description: "Share your screen with other participants during a live session.",
  },
  {
    number: "06",
    title: "Live Chat & Activity",
    description:
      "Exchange messages and see room activity such as joins, leaves, moderation actions, and room events.",
  },
  {
    number: "07",
    title: "Room Moderation",
    description:
      "Hosts and moderators can manage participants, mute members, and control room audio.",
  },
  {
    number: "08",
    title: "Participant Management",
    description: "Manage participant states, moderation roles, kicks, microphone/camera states, and room membership.",
  },
  {
    number: "09",
    title: "Room Lifecycle",
    description:
      "Hosts can end rooms while all connected clients receive synchronized room-ended updates.",
  },
  {
    number: "10",
    title: "Automatic Room Cleanup",
    description:
      "Empty rooms are automatically removed from temporary Redis state after the configured timeout.",
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
    title: "Room Types & Debate State",
    description:
      "Supports Open Conversation and Debate rooms, with For and Against side selection and participant-side presentation in debate sessions.",
  },
  {
    title: "Real-Time Layer",
    description:
      "Socket.IO handles room updates, participant events, messaging, WebRTC signaling, moderation, activity events, and room lifecycle synchronization.",
  },
  {
    title: "Real-Time Media",
    description:
      "WebRTC establishes peer-to-peer audio and video connections between participants and supports screen sharing.",
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
        "Room information and participant counts update in real time.",
        "Room cards identify whether a session is an Open Conversation or a Debate.",
      ],
    },
  },
  {
    number: "04",
    title: "Joining a Room",
    content: {
      kind: "list",
      items: [
        "Users can review room information and active participants before joining.",
        "Open Conversation rooms follow the existing joining flow.",
        "Debate rooms require users to select For or Against before joining.",
        "Participant membership and debate-side assignments are synchronized across the room experience.",
      ],
    },
  },
  {
    number: "05",
    title: "Connecting in Real Time",
    content: {
      kind: "text",
      paragraphs: [
        "Socket.IO coordinates room events, messaging, moderation, activity updates, room lifecycle events, and WebRTC signaling.",
        "WebRTC handles peer-to-peer audio, video, and screen-sharing streams.",
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
            "Room state: audio enabled, mute state, speaking users, unmuted users, force-muted users, mute-all state, mute-all excluded users, and and applicable debate-side assignments.",
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
          permissions: ["Mute/unmute themselves", "Control their own camera",  "Participate in room communication"],
        },
        {
          role: "Moderators",
          permissions: [
            "Mute/unmute individual participants",
            "Manage moderation state",
            "Moderate room participants",
          ],
        },
        {
          role: "Host",
          permissions: [
            "All moderator capabilities",
            "Mute all participants",
            "End the room",
            "Manage room lifecycle",
          ],
        },
        {
          role: "Participant Management",
          permissions: [
            "Kick participants",
            "Persist moderator assignments",
            "Persist moderation state",
            "Synchronize moderation state when participants join/rejoin",
          ],
        },
      ],
    },
  },
  {
    number: "08",
    title: "Live Room Activity",
    content: {
      kind: "events",
      intro: "Room activity is synchronized through Socket.IO and surfaced inside the chat experience, keeping participants informed about joins, leaves,  moderation actions, promotions, kicks, and room lifecycle events.",
      events: [
        "User joined",
        "User left",
        "User kicked",
        "Moderator promoted",
        "Participant muted",
        "Mute-all enabled",
        "Mute-all disabled",
        "User unmuted",
        "Camera enabled",
        "Camera disabled",
        "Room ended",
      ],
    },
  },
  {
    number: "09",
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
    number: "10",
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
    number: "11",
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
    number: "12",
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
        "Room activity",
        "Participant kicked",
        "Moderator promoted",
        "Moderation updates",
        "Mute/unmute",
        "Mute-all",
        "Camera state",
        "Speaking state",
        "Room ended",
        "WebRTC signaling",
        "Screen sharing state",
      ],
    },
  },
  {
    number: "13",
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
          why: "Real-time communication requires low-latency peer-to-peer media streams.",
          result: "Peer-to-peer audio, video, and screen-sharing communication between participants.",
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
