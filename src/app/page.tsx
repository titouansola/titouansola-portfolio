import { Hero } from '@/features/hero/hero.component';
import { Skills } from '@/features/skills/skills.component';
import { Projects } from '@/features/projects/projects.component';
import { Experiences } from '@/features/experiences/experiences.component';
import { Contact } from '@/features/contact/contact.component';

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Experiences />
      <Contact />
    </>
  );
}
