import { certificationItems } from '@/data/portfolio';
import { SectionHeading } from './section-heading';

export function Certifications() {
  if (certificationItems.length === 0) return null;

  return (
    <section className="border-t border-border/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="Courses & Certifications"
          title="Learning & Credentials"
        />

        <div className="mt-12">
          {certificationItems.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-base font-medium text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {item.organization}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-muted-foreground">
                    {item.year}
                  </span>

                  {item.verifyUrl && (
                    <a
                      href={item.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-foreground underline-offset-4 hover:underline"
                    >
                      Verify ↗
                    </a>
                  )}
                </div>
              </div>
              {index < certificationItems.length - 1 && (
                <div className="border-t border-border/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
