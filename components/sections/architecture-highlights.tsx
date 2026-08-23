import { architectureHighlights } from '@/data/portfolio';
import { SectionHeading } from './section-heading';

export function ArchitectureHighlights() {
  return (
    <section className="border-t border-border/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="Architecture Highlights"
          title="Engineering Layers"
        />

        <div className="mt-12 grid gap-x-12 gap-y-0 sm:grid-cols-2">
          {architectureHighlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className={
                index < architectureHighlights.length - 1
                  ? 'border-b border-border/30 py-6'
                  : 'py-6 sm:border-b-0'
              }
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {highlight.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground sm:text-base">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
