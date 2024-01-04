import { flex } from '@styles/patterns';
import { ThemeToggle } from '@/common/ui/atoms/theme-toggle.client.component';

export function Header() {
  return (
    <header
      className={flex({
        align: 'center',
        justify: 'space-between',
        height: '100px',
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
          <a href={'#skills'}>Skills</a>
          <a href={'#projects'}>Projects</a>
          <a href={'#experiences'}>Experiences</a>
          <a href={'#contact'}>Contact</a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
