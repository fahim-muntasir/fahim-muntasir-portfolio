import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const inter = localFont({
  src: [
    {
      path: '../assets/fonts/Inter-VariableFont_opsz,wght.ttf',
      style: 'normal',
      weight: '100 900',
    },
    {
      path: '../assets/fonts/Inter-Italic-VariableFont_opsz,wght.ttf',
      style: 'italic',
      weight: '100 900',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = localFont({
  src: [
    {
      path: '../assets/fonts/JetBrainsMono-VariableFont_wght.ttf',
      style: 'normal',
      weight: '100 900',
    },
    {
      path: '../assets/fonts/JetBrainsMono-Italic-VariableFont_wght.ttf',
      style: 'italic',
      weight: '100 900',
    },
  ],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: 'Frontend-Focused Full-Stack Developer | Real-Time Web Applications',
  description:
    'Frontend-focused full-stack developer specializing in building real-time web applications with React, Next.js, TypeScript, Socket.IO, and WebRTC.',
  keywords: [
    'Frontend Developer',
    'Full-Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Real-Time Web Applications',
    'Socket.IO',
    'WebRTC',
    'Node.js',
  ],
  authors: [{ name: 'Developer' }],
  openGraph: {
    title: 'Frontend-Focused Full-Stack Developer | Real-Time Web Applications',
    description:
      'Building modern, interactive web applications with a focus on frontend architecture, real-time communication, and scalable user experiences.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frontend-Focused Full-Stack Developer',
    description:
      'Building modern, interactive web applications with a focus on frontend architecture and real-time communication.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
