import { userCapabilities } from '@/data/portfolio';
import { SectionHeading } from './section-heading';

export function UserCapabilities() {
  return (
    <section className="border-t border-border/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="What Users Can Do"
          title="A Guided User Experience"
          description="From discovering live rooms to moderating conversations, every interaction is designed for real-time language practice."
        />

        <div className="mt-12">
          {userCapabilities.map((capability, index) => (
            <div key={capability.number}>
              <div className="flex gap-6 py-6 sm:gap-8">
                <span className="font-mono text-2xl font-medium text-muted-foreground/40 sm:text-3xl">
                  {capability.number}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg font-medium text-foreground sm:text-xl">
                    {capability.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {capability.description}
                  </p>
                </div>
              </div>
              {index < userCapabilities.length - 1 && (
                <div className="border-t border-border/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
