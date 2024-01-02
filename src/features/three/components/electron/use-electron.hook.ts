import { useMemo, useRef } from 'react';
import { Color, Group, Mesh, MeshStandardMaterial } from 'three';
import { useFrame } from '@react-three/fiber';
import {
  electronRadius,
  electronRadiusRandomness,
  orbitLimit,
  protonExtrusion,
  protonRadius,
} from '@/features/three/constants/constants';

export function useElectron() {
  const electronRef = useRef<Mesh>(null);
  const electronGroupRef = useRef<Group>(null);
  //
  const params = useMemo(
    () => ({
      groupRotationSpeed: 0.1 * Math.random(),
      offset: 2 * Math.PI * Math.random(),
      radius:
        electronRadius + electronRadiusRandomness * 2 * (Math.random() - 0.5),
      orbit:
        protonRadius +
        protonExtrusion +
        electronRadius +
        electronRadiusRandomness +
        (orbitLimit - protonRadius) * Math.random(),
    }),
    [],
  );
  //
  useFrame((state) => {
    const electron = electronRef.current;
    const group = electronGroupRef.current;
    if (!electron || !group) return;
    //
    const time = state.clock.getElapsedTime();
    // Group
    group.rotation.z = params.groupRotationSpeed * (time + params.offset);
    // Electron
    const angle = 0.3 * (orbitLimit / params.orbit) * time + params.offset;
    electron.position.x = params.orbit * Math.cos(angle);
    electron.position.z = params.orbit * Math.sin(angle);
    //
    const material = electron.material as MeshStandardMaterial;
    const color = new Color(
      window
        .getComputedStyle(document.documentElement)
        .getPropertyValue('--colors-text'),
    );
    if (!material.color.equals(color)) {
      material.color.copy(color);
    }
  });
  //
  return { electronGroupRef, electronRef, ...params };
}
