import { educationItems } from '@/data/portfolio';
import { SectionHeading } from './section-heading';

export function Education() {
  if (educationItems.length === 0) return null;

  return (
    <section className="border-t border-border/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="Education"
          title="Academic Background"
        />

        <div className="mt-12">
          {educationItems.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-base font-medium text-foreground">
                    {item.degree}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {item.institution}
                  </p>
                </div>

                <span className="font-mono text-xs text-muted-foreground">
                  {item.date}
                </span>
              </div>

              {index < educationItems.length - 1 && (
                <div className="border-t border-border/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}