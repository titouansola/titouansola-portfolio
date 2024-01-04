import { useRef } from 'react';
import { Mesh, TextureLoader, Vector3 } from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { useScaleAnimation } from '@/features/three/components/use-scale-animation.hook';

const rotationAxis = new Vector3(0, 1, 0).normalize();

export function useProton() {
  const protonRef = useRef<Mesh>(null);
  const texture = useLoader(TextureLoader, '/textures/world_texture.png');
  //
  useScaleAnimation(protonRef);
  //
  useFrame((_, delta) => {
    const proton = protonRef.current;
    if (!proton) return;
    //
    proton.rotateOnWorldAxis(rotationAxis, delta / 20);
  });
  //
  return { protonRef, texture };
}
