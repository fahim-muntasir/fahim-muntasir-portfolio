import { ArrowRight, Github } from 'lucide-react';

import { profile } from '@/data/portfolio';

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="grid-bg grid-bg-fade absolute inset-0" aria-hidden="true" />

      <div className="relative w-full">
        {/* Hanging Lamp */}
        <div className="lamp-container pointer-events-none absolute left-1/2 top-[-7.5rem] z-[3] flex -translate-x-1/2 flex-col items-center md:top-[-9.5rem]" aria-hidden="true">
          <div className="lamp-cable h-24 w-px sm:h-28 md:h-32" />

          <div className="relative flex flex-col items-center">
            <div className="lamp-holder h-4 w-7 rounded-t-md border sm:h-5 sm:w-8" />

            <div className="lamp-neck h-2 w-4 sm:h-3 sm:w-5" />

            <div className="lamp-shade relative h-6 w-16 rounded-t-full border sm:h-7 sm:w-20">
              <div className="lamp-bulb h-2.5 w-11 sm:h-3 sm:w-14" />

              <div className="lamp-bulb-glow h-6 w-14 sm:h-7 sm:w-16" />
            </div>

            <div className="lamp-soft-glow absolute top-[4rem] h-16 w-24 sm:top-[4.5rem] sm:h-20 sm:w-32" />
          </div>
        </div>

        {/* Warm Ambient Light */}
        <div className="hero-light-ambient pointer-events-none absolute left-1/2 top-[7rem] z-[1] h-[550px] w-[min(1100px,150vw)] -translate-x-1/2 blur-3xl sm:top-[8rem] sm:h-[600px]" aria-hidden="true" />

        {/* Wide Light Spread */}
        <div className="hero-light-spread pointer-events-none absolute left-1/2 top-[10rem] z-[1] h-[420px] w-[min(1300px,200vw)] -translate-x-1/2 blur-[80px]" aria-hidden="true" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-3xl px-4 pb-24 pt-24 text-center sm:px-6 sm:pb-28 sm:pt-24">
          <p className="animate-fade-up font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {profile.role}
          </p>

          <h1 className="animate-fade-up mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl" style={{ animationDelay: '0.1s' }}>
            I Build Modern Web Experiences
            <br />
            <span className="text-3xl text-muted-foreground sm:text-4xl md:text-5xl">
              & Real-Time Applications
            </span>
          </h1>

          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base" style={{ animationDelay: '0.2s' }}>
            I build modern, interactive web applications with a strong focus on frontend architecture, real-time communication, and scalable user experiences using React, Next.js, TypeScript, Socket.IO, and WebRTC.
          </p>

          <div className="animate-fade-up mt-6 flex items-center justify-center gap-2" style={{ animationDelay: '0.3s' }}>
            <span className="animate-pulse-dot h-2 w-2 rounded-full bg-success" />
            <span className="text-sm text-muted-foreground">Open to remote opportunities</span>
          </div>

          <div className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ animationDelay: '0.4s' }}>
            <a href="#project" className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              View Featured Project
              <ArrowRight className="h-4 w-4" />
            </a>

            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-transparent px-6 text-sm font-medium text-foreground transition-all hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              <Github className="h-4 w-4" />
              View Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}