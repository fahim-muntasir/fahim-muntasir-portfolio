import { profile, aboutSectionTechnologies } from '@/data/portfolio';
import { SectionHeading } from './section-heading';

export function About() {
  return (
    <section
      id="about"
      className="border-t border-border/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading label="About" title="Who I Am" />

        <div className="mt-10 max-w-4xl">
          {/* Main bio */}
          <div>
            <p className="text-base leading-relaxed text-foreground sm:text-lg">
              I am a {profile.role.toLowerCase()} who specializes in{' '}
              {profile.specialization.toLowerCase()}.
            </p>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              My strongest focus is on React, Next.js, TypeScript, frontend
              architecture, real-time applications, Socket.IO, WebRTC, and
              state management. I care about building interfaces that feel
              responsive, predictable, and well-structured — from the
              component level up to the systems that power them.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              On the backend, I work with Node.js, Express.js, MongoDB, Redis,
              and REST APIs to build the infrastructure that supports the
              experiences I design on the frontend.
            </p>
          </div>

          <div className="mt-12 border-t border-border/40 pt-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Frontend & Real-Time
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {aboutSectionTechnologies.frontend.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-border/60 bg-secondary/30 px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary/40 hover:bg-secondary/60"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Backend & Infrastructure
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {aboutSectionTechnologies.backend.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-border/60 bg-secondary/30 px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary/40 hover:bg-secondary/60"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}