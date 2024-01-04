import { flex } from '@styles/patterns';
import { ProjectModel } from '@/features/projects/project.model';
import { Project } from '@/features/projects/project.component';
import { Section } from '@/common/ui/section.component';

const projects: ProjectModel[] = [
  {
    title: 'Roller Derby Quizz',
    image: '/projects/rdq.png',
    imageAlt: 'Roller Derby Quizz screenshot',
    url: 'https://roller-derby-quizz.vercel.app',
    description:
      'A quizz about the rules of Roller Derby. Questions are created, updated and moderated by the community itself.',
    tools: ['Next.js', 'Tailwind', 'Postgresql'],
  },
  {
    title: 'IPPSOP',
    image: '/projects/ippsop.png',
    imageAlt: 'IPPSOP screenshot',
    url: 'https://ippsop.fr',
    description:
      'A professional website request by Gaël Guenec. Entreprenarial landing page refreshed, replacing an 11 years old website based on Joomla. The objective was to push IPPSOP into a modern digital communication.',
    tools: ['Next.js', 'Tailwind', 'Sanity'],
  },
  {
    title: "Time's up",
    image: '/projects/timesup.png',
    imageAlt: "Time's up screenshot",
    description:
      'Popular society game that I used to play at parties, I wanted to build an application to be able to play without papers and pen.',
    tools: ['Ionic', 'React'],
  },
];

export function Projects() {
  return (
    <Section id={'projects'}>
      <h2>Public projects</h2>
      <div
        className={flex({
          justify: 'space-between',
          wrap: 'wrap',
          gap: '3rem',
          width: '100%',
        })}
      >
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
