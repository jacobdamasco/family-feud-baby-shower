import { useEffect, useState } from "react";
import useSound from 'use-sound';
import useKey from "./useKey";
import ahhh from '../audio/ahhh.mp3';
import strike from '../audio/strike.mp3';

const Strike = () => {
  // Audio
  const [strikeAudio] = useSound(strike);
  const [ahhhAudio] = useSound(ahhh);

  // Key Control
  const lowercaseXKey = useKey('x');
  const uppercaseXKey = useKey('X');

  // States
  const [strikeCt, setStrikeCt] = useState(1);

  useEffect(() => {
    
  });

  if (lowercaseXKey) {
    strikeAudio();
    ahhhAudio();
  }

  return (
    <div className={"modal-bg justify-content-center align-items-center" + (lowercaseXKey ? 'bg-active' : '')}>
      <div className="x-modal justify-content-center align-items-center">
        {lowercaseXKey && <h1 className="wrong-answer-font mx-3 px-5">X</h1>}
      </div>
    </div>
  );
}

export default Strike;
