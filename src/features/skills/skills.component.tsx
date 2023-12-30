import { css } from '@styles/css';
import { flex } from '@styles/patterns';

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
    <section
      className={css({
        flexDirection: 'column',
        alignItems: 'center',
        gap: '50px',
      })}
    >
      <h2>Skills</h2>
      <div
        className={flex({
          flexWrap: 'wrap',
          gap: { base: '5rem', mdDown: '3rem' },
          justifyContent: 'space-between',
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
                fontSize: '1.25rem',
                fontWeight: '700',
                marginBottom: '1rem',
              })}
            >
              {group.title}
            </h3>
            <ul
              className={flex({
                flexDirection: 'column',
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
    </section>
  );
}
