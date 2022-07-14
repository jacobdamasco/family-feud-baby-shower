import { useState } from "react";
// import RoundScore from "./RoundScore";
import Round1 from "../views/round1";
import useSound from 'use-sound';
// import ahhh from '../audio/ahhh.mp3';
import cheering from '../audio/cheering.mp3';
import correct from '../audio/correct.mp3';
// import faceoff from '../audio/faceoff.mp3';
// import strike from '../audio/strike.mp3';

const AnswerCard = (props) => {
  // States
  const [isFlipped, setIsFlipped] = useState(false);

  // Audio
  const [correctAudio] = useSound(correct);
  const [cheerAudio] = useSound(cheering);

  const flipCard = () => {
    setIsFlipped(currentState => !currentState);
  }

  return (
      <div className={"answer-card " + (isFlipped ? 'flip' : '')} onClick={() => {
        flipCard();
        correctAudio();
        cheerAudio();
      }}>
        <div className="front-face row mx-auto">
          <div className="col-10 answer"><h1 className="text-white text-center game-font">{props.answer}</h1></div>
            <div className="col-2"><h1 className="text-white text-center game-font points">{props.answerPts}</h1></div>
        </div> 
        <div className="back-face">
            <div className="oval mx-auto my-auto">
                <h1 className="text-white text-center number-font">{props.answerNum}</h1>
            </div>
        </div> 
      </div>
  );
}

export default AnswerCard;
