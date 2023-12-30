import { ContactLists } from '@/features/contact/contact-links.component';
import { css } from '@styles/css';

export function Contact() {
  return (
    <section
      className={css({
        flexDirection: 'column',
        alignItems: 'center',
        gap: '50px',
      })}
    >
      <h2>Contact</h2>
      <div>
        <p className={css({ textAlign: 'center', marginBottom: '1.5rem' })}>
          I&apos;m available anytime to talk about your projects!
        </p>
        <ContactLists />
      </div>
    </section>
  );
}
