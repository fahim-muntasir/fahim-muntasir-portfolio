'use client';

import { useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navItems, profile } from '@/data/portfolio';
import { useScrollSpy, useScrolled } from '@/hooks/use-scroll-spy';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(navItems.map((n) => n.href.replace('#', '')));
  const scrolled = useScrolled(20);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-background/0'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#home"
          className="font-mono text-sm font-medium tracking-tight text-foreground transition-opacity hover:opacity-70"
        >
          <span className="font-mono text-sm font-medium">
            <span className="text-muted-foreground">&lt;</span>
            {profile.name}
            <span className="text-muted-foreground"> /&gt;</span>
          </span>
          {/* <span className="text-muted-foreground">.dev</span> */}
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = activeId === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'group flex items-center gap-2 text-sm transition-colors',
                  isActive
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <span
                  className={cn(
                    'h-1 w-1 rounded-full transition-all duration-300',
                    isActive
                      ? 'bg-success opacity-100'
                      : 'bg-muted-foreground opacity-0 group-hover:opacity-40'
                  )}
                />
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="text-muted-foreground transition-colors hover:text-foreground md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => {
              const isActive = activeId === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'flex items-center gap-2.5 rounded-md px-3 py-2.5 text-sm transition-colors',
                    isActive
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  <span
                    className={cn(
                      'h-1 w-1 rounded-full',
                      isActive ? 'bg-success' : 'bg-transparent'
                    )}
                  />
                  {item.label}
                </a>
              );
            })}
            <div className="mt-2 flex items-center gap-4 border-t border-border/40 px-3 pt-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
