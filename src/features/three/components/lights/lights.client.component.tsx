'use client';

import { DirectionalLight, Vector3 } from 'three';
import { useEffect, useRef } from 'react';
import {
  electronRadius,
  electronRadiusRandomness,
  orbitLimit,
  protonExtrusion,
  protonRadius,
} from '@/features/three/constants/constants';

const RADIUS = orbitLimit + electronRadius + electronRadiusRandomness;
const PHI = 1.5;
const THETA = -1;
const position = new Vector3();
position.setFromSphericalCoords(RADIUS, PHI, THETA);

export function Lights(props: { target: Vector3 }) {
  const dirLightRef = useRef<DirectionalLight>(null);
  //
  useEffect(() => {
    const dirLight = dirLightRef.current;
    if (!dirLight) return;
    //
    dirLight.updateWorldMatrix(true, false);
    dirLight.target.updateWorldMatrix(true, false);
  }, []);
  //
  return (
    <>
      <ambientLight />
      <directionalLight
        ref={dirLightRef}
        position={position}
        target-position={props.target}
        intensity={7}
        shadow-camera-near={0}
        shadow-camera-far={RADIUS}
        shadow-camera-left={-(protonRadius + protonExtrusion)}
        shadow-camera-right={protonRadius + protonExtrusion}
        shadow-camera-top={protonRadius + protonExtrusion}
        shadow-camera-bottom={-(protonRadius + protonExtrusion)}
        castShadow
      />
    </>
  );
}
