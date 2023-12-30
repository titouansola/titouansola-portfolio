import { Github, Linkedin, LucideMail, Twitter } from 'lucide-react';
import { Badge } from '@/common/ui/atoms/badge.component';
import { flex } from '@styles/patterns';

export function ContactLists() {
  return (
    <div
      className={flex({
        gap: '0.5rem',
        flexWrap: 'wrap',
        justifyContent: { lgDown: 'center' },
      })}
    >
      <a href={'https://twitter.com/Kanaa_ts'} target={'_blank'}>
        <Badge content={'Twitter'} Icon={Twitter} />
      </a>
      <a href={'https://linkedin.com/in/titouansola'} target={'_blank'}>
        <Badge content={'Linkedin'} Icon={Linkedin} />
      </a>
      <a href={'mailto:titouansola0@gmail.com'} target={'_blank'}>
        <Badge content={'Email'} Icon={LucideMail} />
      </a>
      <a href={'https://github.com/titouansola'} target={'_blank'}>
        <Badge content={'Github'} Icon={Github} />
      </a>
    </div>
  );
}
