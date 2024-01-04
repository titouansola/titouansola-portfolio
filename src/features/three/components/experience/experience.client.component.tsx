'use client';

import { Vector3 } from 'three';
import { useExperience } from '@/features/three/components/experience/use-experience.hook';
import { Proton } from '@/features/three/components/proton/proton.client.component';
import { Electron } from '@/features/three/components/electron/electron.client.component';
import { Lights } from '@/features/three/components/lights/lights.client.component';
import { electronNumber } from '@/features/three/constants/constants';

const position = new Vector3(15, 0, 0);

export function Experience() {
  const { groupRef, electronGroupRef } = useExperience();
  //
  return (
    <>
      <group ref={groupRef} position={position}>
        <Lights target={position} />
        <Proton />
        <group ref={electronGroupRef} scale={[0, 0, 0]}>
          {new Array(electronNumber).fill(null).map((_, i) => (
            <Electron key={i} />
          ))}
        </group>
      </group>
    </>
  );
}
