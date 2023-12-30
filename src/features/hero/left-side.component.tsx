import { css } from '@styles/css';
import { ContactLists } from '@/features/contact/contact-links.component';
import { flex } from '@styles/patterns';

export function HeroLeftSide() {
  return (
    <div
      className={flex({
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '6rem',
      })}
    >
      <div>
        <h1 className={css({ color: 'links' })}>
          <span
            className={css({
              fontSize: { base: '2rem', mdDown: '1.5rem' },
              fontWeight: '700',
            })}
          >
            Hello! I am
          </span>
          <br />
          <span
            className={css({
              fontSize: { base: '6rem', mdDown: '4rem' },
              fontWeight: '800',
            })}
          >
            Titouan Sola
          </span>
        </h1>
        <p className={css({ fontSize: { base: '1.5rem', mdDown: '1rem' } })}>
          <span className={css({ fontWeight: '700' })}>
            Web Software Engineer.
          </span>
          <br />
          I&apos;m engaged to make the web accessible and green, from conception
          to production.
          <br />
          <span className={css({ fontWeight: '300' })}>(he / him)</span>
        </p>
      </div>
      <ContactLists />
    </div>
  );
}
