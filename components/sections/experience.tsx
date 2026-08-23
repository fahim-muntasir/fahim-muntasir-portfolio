import { experienceItems } from '@/data/portfolio';
import { SectionHeading } from './section-heading';

export function Experience() {
  if (experienceItems.length === 0) return null;

  return (
    <section className="border-t border-border/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading label="Experience" title="Professional Timeline" />

        <div className="mt-12">
          {experienceItems.map((item, index) => (
            <div key={index} className="relative flex gap-6 sm:gap-8">
              <div className="relative flex flex-col items-center">
                <div className="z-10 mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-muted-foreground/40 bg-background" />
                {index < experienceItems.length - 1 && (
                  <div
                    className="absolute top-4 h-[calc(100%-1rem)] w-px bg-border/50"
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-12">
                <h3 className="text-lg font-medium text-foreground">
                  {item.role}
                </h3>
                <div className="mt-1 flex flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-3">
                  <span className="text-sm text-muted-foreground">
                    {item.organization}
                  </span>
                  <span className="hidden sm:inline text-border">·</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {item.date}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
