import { css } from '@styles/css';
import { Badge } from '@/common/ui/atoms/badge.component';
import { ProjectModel } from '@/features/projects/project.model';
import { Project } from '@/features/projects/project.component';
import { flex } from '@styles/patterns';

const projects: ProjectModel[] = [
  {
    title: 'Roller Derby Quizz',
    image: '/rdq.png',
    imageAlt: 'Roller Derby Quizz screenshot',
    url: 'https://roller-derby-quizz.vercel.app',
    description:
      'Project description. Lorem ipsum dolor sit amet cogito ergo sum je sais pas quoi dire de plus en latin',
    tools: ['Next.js', 'Tailwind', 'Postgresql'],
  },
  {
    title: 'IPPSOP',
    image: '/ippsop.png',
    imageAlt: 'IPPSOP screenshot',
    url: 'https://ippsop.fr',
    description:
      'Project description. Lorem ipsum dolor sit amet cogito ergo sum je sais pas quoi dire de plus en latin',
    tools: ['Next.js', 'Tailwind', 'Sanity'],
  },
  {
    title: "Time's up",
    image: '/timesup.png',
    imageAlt: "Time's up screenshot",
    description:
      'Project description. Lorem ipsum dolor sit amet cogito ergo sum je sais pas quoi dire de plus en latin',
    tools: ['Ionic', 'React'],
  },
];

export function Projects() {
  return (
    <section
      className={css({
        flexDirection: 'column',
        alignItems: 'center',
        gap: '50px',
      })}
    >
      <h2>Public projects</h2>
      {/* PROJECT GROUPS */}
      <div
        className={flex({
          gap: '3rem',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          width: '100%',
        })}
      >
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
