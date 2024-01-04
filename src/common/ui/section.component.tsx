import { PropsWithChildren } from 'react';
import { vstack } from '@styles/patterns';
import { SystemStyleObject } from '@styles/types';
import { css, cx } from '@styles/css';

export function Section({
  id,
  children,
  cssProp = {},
}: PropsWithChildren<{ id: string; cssProp?: SystemStyleObject }>) {
  return (
    <section
      id={id}
      className={cx(
        vstack({
          gap: '50px',
          paddingBlock: '50px',
          '& > h2': {
            fontSize: '2rem',
            fontWeight: '700',
          },
        }),
        css(cssProp),
      )}
    >
      {children}
    </section>
  );
}
