import { css } from '@styles/css';
import { flex } from '@styles/patterns';
import { Section } from '@/common/ui/section.component';

const skillGroups = [
  {
    title: 'Design',
    skills: ['Figma', 'Panda CSS', 'Tailwind'],
  },
  {
    title: 'Front End',
    skills: ['Typescript', 'React', 'Angular', 'Three.js'],
  },
  {
    title: 'Back End',
    skills: ['Springboot', 'Postgresql', 'Mariadb'],
  },
  {
    title: 'Other',
    skills: ['Git', 'Vercel'],
  },
];

export function Skills() {
  return (
    <Section id={'skills'}>
      <h2>Skills</h2>
      <div
        className={flex({
          wrap: 'wrap',
          justify: 'space-between',
          gap: { base: '5rem', mdDown: '3rem' },
          width: '100%',
        })}
      >
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className={css({
              width: { mdDown: '150px' },
              textAlign: { mdDown: 'center' },
            })}
          >
            <h3
              className={css({
                marginBottom: '1rem',
                fontSize: '1.25rem',
                fontWeight: '700',
              })}
            >
              {group.title}
            </h3>
            <ul
              className={flex({
                direction: 'column',
                gap: '0.5rem',
              })}
            >
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
