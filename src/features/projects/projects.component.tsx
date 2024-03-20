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
      'A professional website request by Gaël Guenec. Fitness coach landing page, replacing an 11 years old website.',
    tools: ['Next.js', 'Tailwind', 'Sanity'],
  },
  {
    title: 'Inversed Pendulum',
    image: '/projects/inversed-pendulum-3d.png',
    imageAlt: 'Inversed Pendulum 3D screenshot',
    url: 'https://inversed-pendulum.vercel.app',
    description:
      'A 3D simulation of an inversed pendulum. The goal is to keep the pendulum balanced by moving the cart left and right.',
    tools: ['React', 'Three.js', 'R3F', 'Rapier'],
  },
  {
    title: '[WIP] Web Tuner',
    image: '/projects/webtuner.png',
    imageAlt: 'Web Tuner screenshot',
    url: 'https://web-tuner.vercel.app',
    description:
      'A web application to help musicians tune their instruments. I am working on accessibility, and a better design.',
    tools: ['JavaScript', 'Web Audio API'],
  },
  {
    title: '[WIP] Othello',
    image: '/projects/othello.png',
    imageAlt: 'Othello screenshot',
    url: 'https://othello-reverso.vercel.app',
    description:
      'A web application to play Othello / Reverso with 2 players on the same device. Red dots are shown at cells you can play on.',
    tools: ['React', 'TypeScript'],
  },
  {
    title: "Time's up",
    image: '/projects/timesup.png',
    imageAlt: "Time's up screenshot",
    description:
      'Popular game that I used to play with friends, I wanted to build a web application to get rid of pen and paper.',
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
