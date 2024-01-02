import { PropsWithChildren } from 'react';
import { vstack } from '@styles/patterns';
import { SystemStyleObject } from '@styles/types';
import { css, cx } from '@styles/css';

export function Section({
  children,
  cssProp = {},
}: PropsWithChildren<{ cssProp?: SystemStyleObject }>) {
  return (
    <section
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
