import { RefObject, useEffect } from 'react';
import { gsap } from 'gsap';
import { Object3D } from 'three';

export function useScaleAnimation(objectRef: RefObject<Object3D>) {
  useEffect(() => {
    const object = objectRef.current;
    if (!object) return;
    //
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(object.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.5,
        ease: 'back.out(2)',
      }).delay(1);
    });
    return () => ctx.revert();
  }, []);
}
