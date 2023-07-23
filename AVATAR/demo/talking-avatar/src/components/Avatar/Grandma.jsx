/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 .\grandma.glb 
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/assets/3d_models/grandma.glb')
  const { actions } = useAnimations(animations, group)
  const handleAnimation = (animationName) => {
    var from = animationName === "talk" ? 'Armature|mixamo.com|Layer0.005' : 'Armature|mixamo.com|Layer0';
    var to = animationName === "talk" ? 'Armature|mixamo.com|Layer0' : 'Armature|mixamo.com|Layer0.004';
    if (actions[from].isRunning()) {
      actions[from].fadeOut(0.3);
    }
    actions[to].reset().fadeIn(0.3).play();
  };
  useEffect(() => {
    handleAnimation(props.animationName);
  }, [props.animationName]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Hips} />
          <skinnedMesh name="Wolf3D_Body" geometry={nodes.Wolf3D_Body.geometry} material={materials['Wolf3D_Body.006']} skeleton={nodes.Wolf3D_Body.skeleton} />
          <skinnedMesh name="Wolf3D_Glasses" geometry={nodes.Wolf3D_Glasses.geometry} material={materials['Wolf3D_Glasses.003']} skeleton={nodes.Wolf3D_Glasses.skeleton} />
          <skinnedMesh name="Wolf3D_Hair" geometry={nodes.Wolf3D_Hair.geometry} material={materials['Wolf3D_Hair.004']} skeleton={nodes.Wolf3D_Hair.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Footwear" geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials['Wolf3D_Outfit_Footwear.006']} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Top" geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials['Wolf3D_Outfit_Top.006']} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
          <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials['Wolf3D_Eye.006']} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
          <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials['Wolf3D_Eye.006']} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials['Wolf3D_Skin.006']} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials['Wolf3D_Teeth.006']} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/3d_models/grandma.glb')