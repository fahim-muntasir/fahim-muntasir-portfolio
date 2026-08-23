import { ArrowRight, Github } from 'lucide-react';

import { profile } from '@/data/portfolio';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="grid-bg grid-bg-fade absolute inset-0"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <p className="animate-fade-up font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {profile.role}
        </p>

        <h1
          className="animate-fade-up mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl"
          style={{ animationDelay: '0.1s' }}
        >
          I Build Modern Web Experiences
          <br />
          <span className="text-3xl text-muted-foreground sm:text-4xl md:text-5xl">
            & Real-Time Applications
          </span>
        </h1>

        <p
          className="animate-fade-up mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base"
          style={{ animationDelay: '0.2s' }}
        >
          I build modern, interactive web applications with a strong focus on
          frontend architecture, real-time communication, and scalable user
          experiences using React, Next.js, TypeScript, Socket.IO, and WebRTC.
        </p>

        <div
          className="animate-fade-up mt-6 flex items-center justify-center gap-2"
          style={{ animationDelay: '0.3s' }}
        >
          <span className="animate-pulse-dot h-2 w-2 rounded-full bg-success" />
          <span className="text-sm text-muted-foreground">
            Open to remote opportunities
          </span>
        </div>

        <div
          className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href="#project"
            className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View Featured Project
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-transparent px-6 text-sm font-medium text-foreground transition-all hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Github className="h-4 w-4" />
            View Code
          </a>
        </div>
      </div>
    </section>
  );
}