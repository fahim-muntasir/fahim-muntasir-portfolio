import { SectionHeading } from './section-heading';
import Image from 'next/image';
import architectureDiagram from '@/assets/diagrams/architecture-diagram.png';

export function SystemArchitecture() {
  return (
    <section className="border-t border-border/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="System Architecture"
          title="How the System Is Built"
          description="A real-time architecture connecting the Next.js frontend to an Express.js backend through REST APIs and Socket.IO, with WebRTC handling peer-to-peer audio, video, and screen sharing. MongoDB stores persistent data while Redis manages temporary room state."
        />

        {/* Architecture diagram */}
        <div className="mt-12 flex flex-col items-center">
          <Image
            src={architectureDiagram}
            alt="System Architecture Diagram"
            className="rounded-lg border border-border/40"
          />
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border/40 sm:grid-cols-2">
          <div className="bg-secondary/20 p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              WebRTC
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground">
              Peer-to-peer audio, video, and screen sharing.
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
