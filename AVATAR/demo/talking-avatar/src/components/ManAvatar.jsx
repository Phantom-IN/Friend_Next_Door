import { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Html } from '@react-three/drei'
import { Model } from "./Avatar/Man";
import { ConvaiClient } from 'convai-web-sdk';
import { SETTINGS } from '../constants';

const convaiClient = new ConvaiClient({
  apiKey: SETTINGS['CONVAI-API-KEY'],
  characterId: SETTINGS['Man'],
  enableAudio: true,
});

export default function ManAvatar() {
  const [userText, setUserText] = useState("Click & Hold or Tap & Hold to Talk!");
  const finalizedUserText = useRef();
  const [npcText, setNpcText] = useState("");
  const npcTextRef = useRef();

  const [isTalking, setIsTalking] = useState(false);

  convaiClient.setResponseCallback((response) => {
    if (response.hasUserQuery()) {
      var transcript = response.getUserQuery();
      var isFinal = transcript.getIsFinal();
      if (isFinal) {
        finalizedUserText.current += " " + transcript.getTextData();
        transcript = "";
      }
      if (transcript) {
        setUserText(finalizedUserText.current + transcript.getTextData());
      } else {
        setUserText(finalizedUserText.current);
      }
    }
    if (response.hasAudioResponse()) {
      var audioResponse = response?.getAudioResponse();
      npcTextRef.current += " " + audioResponse.getTextData();
      setNpcText(npcTextRef.current);
    }
  });

  convaiClient.onAudioPlay(() => {
    setIsTalking(true);
  });

  convaiClient.onAudioStop(() => {
    setIsTalking(false);
  });

  const [interactionStarted, setInteractionStarted] = useState(false);

  function handleInteractionStart() {
    setInteractionStarted(true);
    finalizedUserText.current = "";
    npcTextRef.current = "";
    setUserText("");
    setNpcText("");
    convaiClient.startAudioChunk();
  }

  function handleInteractionEnd() {
    setInteractionStarted(false);
    convaiClient.endAudioChunk();
  }

  useEffect(() => {
    function handleMouseDown() {
      handleInteractionStart();
    }

    function handleMouseUp() {
      handleInteractionEnd();
    }

    function handleTouchStart() {
      handleInteractionStart();
    }

    function handleTouchEnd() {
      handleInteractionEnd();
    }

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <Canvas shadows camera={{ position: [0, 0, 15], fov: 30 }}>
      <Environment files="/assets/avatar_bg/Man.hdr" ground={{ height: 5, radius: 30, scale: 20 }} />
      <Model position={[0, 0, 3]} scale={1.8} animationName={isTalking ? "talk" : "idle"} />
      <Html position={[-1.5, -0.75, 3]}>
        {userText && (<div style={{
          width: '100%', height: '100%', overflow: 'auto', borderRadius: '10px',
          background: 'rgba(115, 117, 109, 0.5)', padding: '10px', textAlign: 'center'
        }}>
          <p style={{ maxHeight: '300px', width: '300px' }}>{userText}</p>
        </div>)}
      </Html>
      <Html position={[1, 3, 3]}>
        {npcText && (<div style={{
          width: '100%', height: '100%', overflow: 'auto', borderRadius: '10px',
          background: 'rgba(255, 255, 255, 0.7)', padding: '10px', textAlign: 'center'
        }}>
          <p style={{ maxHeight: '300px', width: '300px' }}>{npcText}</p>
        </div>)}
      </Html>
      <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2.25} />
    </Canvas>
  );
}
