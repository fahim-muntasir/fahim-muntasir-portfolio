'use client';

import { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type ProjectScreenshot = {
  src: StaticImageData;
  alt: string;
  title: string;
  description: string;
};

type ProjectGalleryProps = {
  screenshots: ProjectScreenshot[];
};

export function ProjectGallery({ screenshots }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeScreenshot = screenshots[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? screenshots.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === screenshots.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="mt-12">
      <div className="group relative overflow-hidden rounded-xl border border-border/60 bg-secondary/20">
        <div className="relative h-[300px] w-full sm:h-[400px] md:h-[500px] lg:h-[580px]">
          <Image
            src={activeScreenshot.src}
            alt={activeScreenshot.alt}
            priority={activeIndex === 0}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            className="object-contain transition-transform duration-500"
          />
        </div>

        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous screenshot"
          className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-background/80 text-foreground opacity-0 backdrop-blur-sm transition-all hover:bg-background group-hover:opacity-100 focus:opacity-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={showNext}
          aria-label="Next screenshot"
          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-background/80 text-foreground opacity-0 backdrop-blur-sm transition-all hover:bg-background group-hover:opacity-100 focus:opacity-100"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="border-t border-border/60 bg-background/80 px-5 py-4 backdrop-blur-sm sm:px-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium text-foreground">
                {activeScreenshot.title}
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                {activeScreenshot.description}
              </p>
            </div>

            <span className="shrink-0 font-mono text-xs text-muted-foreground">
              {String(activeIndex + 1).padStart(2, '0')} / {String(screenshots.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
        {screenshots.map((screenshot, index) => (
          <button
            key={screenshot.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`View ${screenshot.title}`}
            aria-current={index === activeIndex ? 'true' : undefined}
            className={`relative aspect-video w-32 shrink-0 overflow-hidden rounded-md border transition-all sm:w-40 ${index === activeIndex
                ? 'border-primary/80 opacity-100 ring-1 ring-secondary'
                : 'border-border opacity-70 hover:opacity-80'
              }`}
          >
            <Image
              src={screenshot.src}
              alt=""
              fill
              sizes="(max-width: 640px) 128px, 160px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}