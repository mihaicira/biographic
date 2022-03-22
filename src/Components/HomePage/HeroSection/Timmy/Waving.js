/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const deg2rad = (degrees) => degrees * (Math.PI / 180);
var Interval;

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/waving.glb");
  const { actions } = useAnimations(animations, group);
  const [rotateY, setRotateY] = useState(0.3);

  useThree(({ camera }) => {
    camera.rotation.set(deg2rad(32), 0, 0);
  });

  const resetAnim = () => {
    actions["Armature|mixamo.com|Layer0"].reset();
  };

  const rotateEvent = () => {
    let rotateValue = (window.scrollY / 700) * -1 + 0.2;
    setRotateY(rotateValue);
  };

  useEffect(() => {
    actions["Armature|mixamo.com|Layer0"].setLoop(THREE.LoopOnce);
    setTimeout(() => {
      actions["Armature|mixamo.com|Layer0"].play();
    }, 1000);

    document.addEventListener("scroll", rotateEvent);

    // document
    //   .getElementById("timmyContainer")
    //   .addEventListener("mouseenter", resetAnim);
    Interval = setInterval(resetAnim, 8000);
  }, []);

  useEffect(
    () => () => {
      document.removeEventListener("scroll", rotateEvent);
      clearInterval(Interval);
    },
    []
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="Armature" rotation={[2, 0, rotateY]} scale={0.033}>
          <primitive object={nodes.mixamorig6Hips} />
          <skinnedMesh
            geometry={nodes.Ch09.geometry}
            material={materials.Ch09_body}
            skeleton={nodes.Ch09.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/waving.glb");
