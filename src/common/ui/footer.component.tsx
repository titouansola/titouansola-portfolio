import { center } from '@styles/patterns';

export function Footer() {
  return (
    <footer
      className={center({
        paddingTop: '70px',
        paddingBottom: '20px',
        fontSize: '0.75rem',
      })}
    >
      Copyrights © Titouan Sola. Made with 💚
    </footer>
  );
}
