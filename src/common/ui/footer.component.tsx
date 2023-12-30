import { center } from '@styles/patterns';

export function Footer() {
  return (
    <footer
      className={center({
        paddingTop: '70px',
        paddingBottom: '20px',
        fontSize: 'sm',
      })}
    >
      Copyrights © Titouan Sola. Made with 💚
    </footer>
  );
}
