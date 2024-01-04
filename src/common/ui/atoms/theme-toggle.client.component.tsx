'use client';

import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { css, cx } from '@styles/css';
import { flex } from '@styles/patterns';

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  const onClick = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
  };

  const Icon = dark ? Moon : Sun;

  return (
    <div
      onClick={onClick}
      className={cx(
        'group',
        css({
          position: 'relative',
          width: '4rem',
          height: '2rem',
          borderWidth: '2px',
          borderColor: 'border',
          borderRadius: '1000px',
          cursor: 'pointer',
          background: { base: 'transparent', _hover: 'background.alt' },
        }),
      )}
      aria-hidden
    >
      <div
        id={'theme-toggle-handle'}
        className={flex({
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
          height: '100%',
          aspectRatio: '1',
          transitionProperty: 'translate',
          transitionDuration: '150ms',
          transitionTimingFunction: 'ease',
          transformOrigin: 'center',
          translate: { base: '2rem', _dark: '0' },
          background: { base: 'button', _groupHover: 'button.hovered' },
        })}
      >
        <Icon size={'1rem'} />
      </div>
    </div>
  );
}
