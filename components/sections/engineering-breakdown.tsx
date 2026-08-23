import { engineeringSteps } from '@/data/portfolio';
import type { EngineeringContent } from '@/types/portfolio';
import { SectionHeading } from './section-heading';
import { cn } from '@/lib/utils';

function ContentRenderer({ content }: { content: EngineeringContent }) {
  switch (content.kind) {
    case 'text':
      return (
        <div className="flex flex-col gap-3">
          {content.paragraphs.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {p}
            </p>
          ))}
        </div>
      );

    case 'list':
      return (
        <div className="flex flex-col gap-3">
          {content.intro && (
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {content.intro}
            </p>
          )}
          <ul className="flex flex-col gap-2">
            {content.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-foreground sm:text-base"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      );

    case 'layered':
      return (
        <div className="flex flex-col gap-0">
          {content.layers.map((layer, i) => (
            <div key={i}>
              <div className="py-4">
                <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground">
                  {layer.label}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {layer.description}
                </p>
                {layer.subItems && (
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {layer.subItems.map((sub, j) => (
                      <li
                        key={j}
                        className="ml-4 text-sm leading-relaxed text-muted-foreground"
                      >
                        — {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {i < content.layers.length - 1 && (
                <div className="border-t border-border/30" />
              )}
            </div>
          ))}
        </div>
      );

    case 'roles':
      return (
        <div className="flex flex-col gap-4">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {content.intro}
          </p>
          <div className="overflow-hidden rounded-lg border border-border/40">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/40 bg-secondary/20">
                  <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Role
                  </th>
                  <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Permissions
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.roles.map((role, i) => (
                  <tr
                    key={i}
                    className={cn(
                      'align-top',
                      i < content.roles.length - 1 && 'border-b border-border/30'
                    )}
                  >
                    <td className="px-4 py-4 text-sm font-medium text-foreground">
                      {role.role}
                    </td>
                    <td className="px-4 py-4">
                      <ul className="flex flex-col gap-1.5">
                        {role.permissions.map((perm, j) => (
                          <li
                            key={j}
                            className="text-sm leading-relaxed text-muted-foreground"
                          >
                            {perm}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case 'lifecycle':
    case 'flow':
      return (
        <div className="flex flex-col items-start gap-0">
          {content.steps.map((step, i) => (
            <div key={i} className="flex flex-col items-start">
              <div className="flex items-center gap-3 py-2">
                <span className="h-2 w-2 rounded-full border border-muted-foreground/40" />
                <span className="text-sm text-foreground sm:text-base">{step}</span>
              </div>
              {i < content.steps.length - 1 && (
                <div className="ml-[3px] h-6 w-px bg-border/60" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      );

    case 'events':
      return (
        <div className="flex flex-col gap-4">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {content.intro}
          </p>
          <div className="flex flex-wrap gap-2">
            {content.events.map((event, i) => (
              <span
                key={i}
                className="rounded-md border border-border/50 bg-secondary/30 px-3 py-1.5 font-mono text-xs text-muted-foreground"
              >
                {event}
              </span>
            ))}
          </div>
        </div>
      );

    case 'decisions':
      return (
        <div className="flex flex-col gap-0">
          {content.decisions.map((decision, i) => (
            <div key={i}>
              <div className="py-5">
                <h4 className="text-base font-medium text-foreground sm:text-lg">
                  {decision.question}
                </h4>
                <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-6">
                  <div className="flex-1">
                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground/60">
                      Why
                    </span>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {decision.why}
                    </p>
                  </div>
                  <div className="hidden sm:block sm:w-px sm:bg-border/30" />
                  <div className="flex-1">
                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground/60">
                      Result
                    </span>
                    <p className="mt-1 text-sm leading-relaxed text-foreground">
                      {decision.result}
                    </p>
                  </div>
                </div>
              </div>
              {i < content.decisions.length - 1 && (
                <div className="border-t border-border/30" />
              )}
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

export function EngineeringBreakdown() {
  return (
    <section id="engineering" className="border-t border-border/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="Engineering Breakdown"
          title="How Syncora24 Was Engineered"
          description="A connected story following the engineering process from problem to solution to technical decisions."
        />

        {/* Timeline */}
        <div className="mt-16">
          {engineeringSteps.map((step, index) => (
            <div key={step.number} className="relative flex gap-6 sm:gap-8">
              <div className="relative flex flex-col items-center">

                <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background">
                  <span className="font-mono text-xs font-medium text-muted-foreground">
                    {step.number}
                  </span>
                </div>

                {index < engineeringSteps.length - 1 && (
                  <div
                    className="absolute top-10 h-[calc(100%-2.5rem)] w-px bg-border/50"
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Right content */}
              <div className="flex-1 pb-16">
                <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                  {step.title}
                </h3>
                <div className="mt-4">
                  <ContentRenderer content={step.content} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
