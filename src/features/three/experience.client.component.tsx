'use client';

import { Group, Vector3 } from 'three';
import { Proton } from '@/features/three/components/proton/proton.client.component';
import { Electron } from '@/features/three/components/electron/electron.client.component';
import { Lights } from '@/features/three/components/lights/lights.client.component';
import { electronNumber } from '@/features/three/constants/constants';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const position = new Vector3(15, 0, 0);

export function Experience() {
  const groupRef = useRef<Group>(null);
  useFrame((state) => {
    const group = groupRef.current;
    if (!group) return;
    //
    const time = state.clock.getElapsedTime();
    group.position.y = 0.3 * Math.cos(time);
  });
  return (
    <>
      <OrbitControls />
      <group ref={groupRef} position={position}>
        <Lights target={position} />
        <Proton />
        {new Array(electronNumber).fill(null).map((_, i) => (
          <Electron key={i} />
        ))}
      </group>
    </>
  );
}
