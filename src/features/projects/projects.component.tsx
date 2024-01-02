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
      'Project description. Lorem ipsum dolor sit amet cogito ergo sum je sais pas quoi dire de plus en latin',
    tools: ['Next.js', 'Tailwind', 'Postgresql'],
  },
  {
    title: 'IPPSOP',
    image: '/projects/ippsop.png',
    imageAlt: 'IPPSOP screenshot',
    url: 'https://ippsop.fr',
    description:
      'Project description. Lorem ipsum dolor sit amet cogito ergo sum je sais pas quoi dire de plus en latin',
    tools: ['Next.js', 'Tailwind', 'Sanity'],
  },
  {
    title: "Time's up",
    image: '/projects/timesup.png',
    imageAlt: "Time's up screenshot",
    description:
      'Project description. Lorem ipsum dolor sit amet cogito ergo sum je sais pas quoi dire de plus en latin',
    tools: ['Ionic', 'React'],
  },
];

export function Projects() {
  return (
    <Section>
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
