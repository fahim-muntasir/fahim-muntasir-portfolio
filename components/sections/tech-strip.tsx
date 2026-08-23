import { techStack } from '@/data/portfolio';

export function TechStrip() {
  return (
    <section className="border-t border-border/40 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8">
          {techStack.map((tech, index) => (
            <div key={tech.name} className="flex items-center gap-6 sm:gap-8">
              {index > 0 && (
                <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />
              )}
              <span className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
