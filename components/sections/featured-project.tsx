import { featuredProject } from '@/data/portfolio';
import { SectionHeading } from './section-heading';
import projectImage1 from "@/assets/images/ss1.png";
import projectImage2 from "@/assets/images/ss2.png";
import projectImage3 from "@/assets/images/ss3.png";
import projectImage4 from "@/assets/images/ss4.png";
import projectImage5 from "@/assets/images/ss5.png";
import projectImage6 from "@/assets/images/ss6.png";
import projectImage7 from "@/assets/images/ss7.png";
import projectImage8 from "@/assets/images/ss8.png";

import { ProjectGallery } from "./project-gallery";

const projectScreenshots = [
  {
    src: projectImage1,
    alt: "Syncora24 live rooms discovery interface",
    title: "Discover Live Rooms",
    description:
      "Browse active language practice rooms with real-time updates.",
  },
  {
    src: projectImage2,
    alt: "Syncora24 debate room details and side selection modal",
    title: "Debate Room Details & Side Selection",
    description:
      "Review room details and choose For or Against before joining a debate.",
  },
  {
    src: projectImage3,
    alt: "Syncora24 live voice and video practice room",
    title: "Live Open Conversation Room",
    description:
      "Practice speaking through real-time audio and video with other participants.",
  },
  {
    src: projectImage4,
    alt: "Syncora24 debate room with For and Against participants",
    title: "Structured Debate Room",
    description:
      "Discuss a shared topic with participants organized by debate side.",
  },
  {
    src: projectImage8,
    alt: "Syncora24 room host and moderator action controls",
    title: "Host & Moderator Actions",
    description:
      "Access room management and moderation actions when needed.",
  },
  {
    src: projectImage6,
    alt: "Syncora24 participant management and moderation controls",
    title: "Participant & Moderation Controls",
    description:
      "Manage participants, moderator roles, and audio permissions.",
  },
  {
    src: projectImage7,
    alt: "Syncora24 screen sharing in a live practice room",
    title: "Screen Sharing",
    description:
      "Share your screen with other participants during a live session.",
  },
  {
    src: projectImage5,
    alt: "Syncora24 real-time chat and room activity panel",
    title: "Real-Time Chat & Activity",
    description:
      "Exchange messages and follow participant activity as it happens.",
  },
];

export function FeaturedProject() {
  const { name, tagline, description, techStack, links } = featuredProject;

  return (
    <section id="project" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="Featured Engineering Project"
          title={name}
          description={tagline}
        />

        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>

        <ProjectGallery screenshots={projectScreenshots} />

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-border px-5 text-sm font-medium text-foreground transition-all hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {Icon && <Icon className="h-4 w-4" />}
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="mt-12 border-t border-border/40 pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Technology Stack
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border/60 bg-secondary/40 px-3 py-1.5 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
