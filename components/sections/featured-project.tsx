import { featuredProject } from '@/data/portfolio';
import { SectionHeading } from './section-heading';

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

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-border/60">
            <img
              src="https://images.pexels.com/photos/7013900/pexels-photo-7013900.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Syncora24 live rooms interface showing real-time language practice rooms"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden rounded-lg border border-border/60">
            <img
              src="https://images.pexels.com/photos/7643888/pexels-photo-7643888.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Syncora24 room experience with active participants in a voice room"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

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
