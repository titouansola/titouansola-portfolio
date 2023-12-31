'use client';

import { css } from '@styles/css';
import { Canvas } from '@react-three/fiber';
import { Experience } from '@/features/three/components/experience/experience.client.component';

export function ThreeScene() {
  return (
    <div
      className={css({
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        zIndex: '-1',
      })}
    >
      <Canvas camera={{ position: [0, 0, 30] }} shadows>
        <Experience />
      </Canvas>
    </div>
  );
}
