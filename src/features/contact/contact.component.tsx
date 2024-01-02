import { css } from '@styles/css';
import { ContactLists } from '@/features/contact/contact-links.component';
import { Section } from '@/common/ui/section.component';

export function Contact() {
  return (
    <Section>
      <h2>Contact</h2>
      <div>
        <p className={css({ textAlign: 'center', marginBottom: '1.5rem' })}>
          I&apos;m available anytime to talk about your projects!
        </p>
        <ContactLists />
      </div>
    </Section>
  );
}
