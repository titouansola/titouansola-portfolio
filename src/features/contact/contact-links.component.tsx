import { Github, Linkedin, LucideAtom, LucideMail } from 'lucide-react';
import { Badge } from '@/common/ui/atoms/badge.component';
import { flex } from '@styles/patterns';

export function ContactLists() {
  return (
    <div
      className={flex({
        wrap: 'wrap',
        justify: { lgDown: 'center' },
        gap: '0.5rem',
        width: '100%',
      })}
    >
      <a href={'https://linkedin.com/in/titouansola'} target={'_blank'}>
        <Badge content={'Linkedin'} Icon={Linkedin} />
      </a>
      <a href={'mailto:titouansola0@gmail.com'} target={'_blank'}>
        <Badge content={'Email'} Icon={LucideMail} />
      </a>
      <a href={'https://github.com/titouansola'} target={'_blank'}>
        <Badge content={'Github'} Icon={Github} />
      </a>
      <a href={'https://www.malt.fr/profile/titouansola'} target={'_blank'}>
        <Badge content={'Malt'} Icon={LucideAtom} />
      </a>
    </div>
  );
}
