import { flex } from '@styles/patterns';
import { ThemeToggle } from '@/common/ui/atoms/theme-toggle.client.component';

export function Header() {
  return (
    <header
      className={flex({
        align: 'center',
        justify: 'space-between',
        h: '100px',
      })}
    >
      <div></div>
      <div
        className={flex({
          smDown: { display: 'none' },
          align: 'center',
          gap: '1rem',
        })}
      >
        <nav className={flex({ align: 'center', gap: '1rem' })}>
          <a>Skills</a>
          <a>Projects</a>
          <a>Experiences</a>
          <a>Contact</a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
