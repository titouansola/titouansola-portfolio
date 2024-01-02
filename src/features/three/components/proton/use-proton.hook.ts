import { useEffect, useRef } from 'react';
import { Mesh, TextureLoader, Vector3 } from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { gsap } from 'gsap';

const rotationAxis = new Vector3(0, 1, 0).normalize();

export function useProton() {
  const protonRef = useRef<Mesh>(null);
  const texture = useLoader(TextureLoader, '/textures/world_texture.png');
  //
  useFrame((_, delta) => {
    const proton = protonRef.current;
    if (!proton) return;
    //
    proton.rotateOnWorldAxis(rotationAxis, delta / 20);
  });
  //
  useEffect(() => {
    const proton = protonRef.current;
    if (!proton) return;
    //
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(proton.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.5,
        ease: 'back.out(4)',
      }).delay(1);
    });
    return () => ctx.revert();
  }, []);
  //
  return { protonRef, texture };
}
