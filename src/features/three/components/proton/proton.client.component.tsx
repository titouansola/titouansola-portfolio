'use client';

import { Color, MeshStandardMaterial } from 'three';
import ShaderMaterial from 'three-custom-shader-material';
import {
  protonExtrusion,
  protonRadius,
} from '@/features/three/constants/constants';
import { useProton } from '@/features/three/components/proton/use-proton.hook';
import vertex from '@/features/three/components/proton/shaders/vertex.glsl';
import fragment from '@/features/three/components/proton/shaders/fragment.glsl';

export function Proton() {
  const { protonRef, texture } = useProton();

  return (
    <mesh
      ref={protonRef}
      rotation-x={Math.PI / 12}
      scale={[0, 0, 0]}
      receiveShadow
    >
      <sphereGeometry args={[protonRadius, 1024, 1024]} />
      <ShaderMaterial
        baseMaterial={MeshStandardMaterial}
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={{
          uTexture: { value: texture },
          uExtrusion: { value: protonExtrusion },
          uEarthColor: { value: new Color('#38b119') },
          uWaterColor: { value: new Color('#0f44a0') },
          uBorderColor: { value: new Color('#002a11') },
        }}
        silent
        transparent
      />
    </mesh>
  );
}
