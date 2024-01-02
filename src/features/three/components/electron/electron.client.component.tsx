'use client';

import { useElectron } from '@/features/three/components/electron/use-electron.hook';
import { electronMaterial } from '@/features/three/constants/constants';

export function Electron() {
  const { electronGroupRef, electronRef, radius } = useElectron();
  return (
    <group ref={electronGroupRef}>
      <mesh ref={electronRef} material={electronMaterial} castShadow>
        <sphereGeometry args={[radius]} />
      </mesh>
    </group>
  );
}
