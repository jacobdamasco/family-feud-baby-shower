import { useState } from "react";
import useSound from 'use-sound';
import ahhh from '../audio/ahhh.mp3';
import cheering from '../audio/cheering.mp3';
import correct from '../audio/correct.mp3';
import faceoff from '../audio/faceoff.mp3';
import roundWinner from '../audio/round_winner.mp3';
import strike from '../audio/strike.mp3';


const AnswerCard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  //Audio
  const [playCorrect] = useSound(correct);
  const [playCheer] = useSound(cheering);

  const flipCard = (prevFlip) => {
    setIsFlipped(current => !current);
  }

  return (
      <div className={"answer-card " + (isFlipped ? 'flip' : '')} onClick={() => {
        flipCard();
        playCorrect();
        playCheer();
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
