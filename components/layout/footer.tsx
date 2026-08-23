import { Github, Linkedin } from 'lucide-react';
import { profile } from '@/data/portfolio';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-foreground">
              {profile.name}
            </span>
            <span className="text-sm text-muted-foreground">
              {profile.role}
            </span>
            <span className="mt-1 font-mono text-xs text-muted-foreground">
              React · Next.js · TypeScript · Socket.IO · WebRTC
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border/30 pt-6">
          <p className="text-xs text-muted-foreground">
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
