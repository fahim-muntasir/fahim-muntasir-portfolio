import { architectureLayers } from '@/data/portfolio';
import { SectionHeading } from './section-heading';
import { cn } from '@/lib/utils';

export function SystemArchitecture() {
  return (
    <section className="border-t border-border/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="System Architecture"
          title="How the System Is Built"
          description="A layered architecture connecting the Next.js frontend through REST APIs and Socket.IO to an Express.js backend, backed by MongoDB for persistent data and Redis for temporary room state."
        />

        {/* Architecture diagram */}
        <div className="mt-12 flex flex-col items-center">
          {architectureLayers.slice(0, 3).map((layer, index) => (
            <div key={layer.label} className="flex flex-col items-center">
              <div
                className={cn(
                  'flex min-w-[260px] flex-col items-center gap-1 rounded-lg border px-8 py-5 text-center sm:min-w-[320px]',
                  layer.type === 'primary'
                    ? 'border-border/60 bg-secondary/30'
                    : 'border-border/40 bg-transparent'
                )}
              >
                <span className="text-sm font-medium text-foreground sm:text-base">
                  {layer.label}
                </span>
              </div>
              {index < architectureLayers.length - 1 && (
                <div className="flex h-10 items-center" aria-hidden="true">
                  <div className="h-10 w-px bg-border/60" />
                </div>
              )}
            </div>
          ))}

          {/* Branch to storage */}
          <div className="flex h-10 items-center" aria-hidden="true">
            <div className="h-10 w-px bg-border/60" />
          </div>

          <div className="relative w-full max-w-2xl">
            <div className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-border/60" aria-hidden="true" />
            <div className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-border/60" aria-hidden="true" />
            <div className="absolute left-1/4 top-0 h-4 w-px -translate-x-1/2 bg-border/60" aria-hidden="true" />
            <div className="absolute right-1/4 top-0 h-4 w-px translate-x-1/2 bg-border/60" aria-hidden="true" />
          </div>

          <div className="mt-4 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
            {architectureLayers.slice(3).map((layer) => (
              <div
                key={layer.label}
                className="flex flex-col items-center gap-1 rounded-lg border border-border/40 bg-transparent px-6 py-5 text-center"
              >
                <span className="text-sm font-medium text-foreground sm:text-base">
                  {layer.label}
                </span>
                {layer.sublabel && (
                  <span className="font-mono text-xs text-muted-foreground">
                    {layer.sublabel}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border/40 sm:grid-cols-2">
          <div className="bg-secondary/20 p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              WebRTC
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground">
              Peer-to-peer audio between clients.
            </p>
          </div>
          <div className="bg-secondary/20 p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Socket.IO
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground">
              Real-time events and WebRTC signaling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
