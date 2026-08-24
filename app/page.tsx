import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { TechStrip } from '@/components/sections/tech-strip';
import { FeaturedProject } from '@/components/sections/featured-project';
import { UserCapabilities } from '@/components/sections/user-capabilities';
import { SystemArchitecture } from '@/components/sections/system-architecture';
import { ArchitectureHighlights } from '@/components/sections/architecture-highlights';
import { EngineeringBreakdown } from '@/components/sections/engineering-breakdown';
import { About } from '@/components/sections/about';
import { Experience } from '@/components/sections/experience';
import { Certifications } from '@/components/sections/certifications';
import { Contact } from '@/components/sections/contact';
import { Education } from '@/components/sections/education';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStrip />
        <FeaturedProject />
        <UserCapabilities />
        <SystemArchitecture />
        <ArchitectureHighlights />
        <EngineeringBreakdown />
        <About />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
