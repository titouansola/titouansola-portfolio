import { useRef } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';
import { useScaleAnimation } from '@/features/three/components/use-scale-animation.hook';

export function useExperience() {
  const groupRef = useRef<Group>(null);
  const electronGroupRef = useRef<Group>(null);
  //
  useScaleAnimation(electronGroupRef);
  //
  useFrame((state) => {
    const group = groupRef.current;
    if (!group) return;
    //
    const time = state.clock.getElapsedTime();
    group.position.y = 0.3 * Math.cos(time);
  });
  //
  return { groupRef, electronGroupRef };
}
