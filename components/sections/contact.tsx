import { contactLinks } from '@/data/portfolio';
import { cn } from '@/lib/utils';

export function Contact() {
  return (
    <section id="contact" className="border-t border-border/40 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Let&apos;s Build Something Meaningful
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          I am interested in remote frontend and full-stack opportunities where I
          can build modern web experiences, interactive products, and real-time
          applications.
        </p>

        <div className="mx-auto mt-10 grid w-full max-w-md grid-cols-1 gap-3 sm:flex sm:w-auto sm:max-w-none sm:justify-center">
          {contactLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg px-6 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] sm:h-11 sm:w-auto',
                  link.primary
                    ? 'bg-primary text-primary-foreground shadow-sm hover:opacity-90'
                    : 'border border-border bg-background/50 text-foreground hover:bg-secondary hover:border-border/80'
                )}
              >
                {Icon && (
                  <Icon className="h-4 w-4 shrink-0" />
                )}

                <span>{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
