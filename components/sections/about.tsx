import { profile } from '@/data/portfolio';
import { SectionHeading } from './section-heading';

export function About() {
  return (
    <section id="about" className="border-t border-border/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading label="About" title="Who I Am" />

        <div className="mt-8 grid gap-12 sm:grid-cols-3">
          {/* Main bio */}
          <div className="sm:col-span-2">
            <p className="text-base leading-relaxed text-foreground sm:text-lg">
              I am a {profile.role.toLowerCase()} who specializes in{' '}
              {profile.specialization.toLowerCase()}.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              My strongest focus is on React, Next.js, TypeScript, frontend
              architecture, real-time applications, Socket.IO, WebRTC, and state
              management. I care about building interfaces that feel responsive,
              predictable, and well-structured — from the component level up to
              the system that powers them.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              On the backend, I work with Node.js, Express.js, MongoDB, Redis, and
              REST APIs to build the real-time infrastructure that supports the
              experiences I design on the frontend.
            </p>
          </div>

          {/* Focus areas */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Frontend Focus
              </h3>
              <ul className="mt-3 flex flex-col gap-1.5">
                {['React', 'Next.js', 'TypeScript', 'Frontend Architecture', 'Real-Time Applications', 'State Management'].map(
                  (item) => (
                    <li
                      key={item}
                      className="text-sm text-foreground"
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Full-Stack
              </h3>
              <ul className="mt-3 flex flex-col gap-1.5">
                {['Node.js', 'Express.js', 'MongoDB', 'Redis', 'REST APIs'].map(
                  (item) => (
                    <li
                      key={item}
                      className="text-sm text-foreground"
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
