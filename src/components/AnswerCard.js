import { useState } from "react";
import useSound from 'use-sound';
import cheering from '../audio/cheering.mp3';
import correct from '../audio/correct.mp3';

const AnswerCard = (props) => {
  // Vars for easier naming
  const currScore = props.currRoundScore;

  // States
  const [isFlipped, setIsFlipped] = useState(false);

  // Audio
  const [correctAudio] = useSound(correct);
  const [cheerAudio] = useSound(cheering);

  const onCardClick = (pts) => {
    setIsFlipped(currentState => !currentState);
    props.setRoundScore(currScore + pts);
    correctAudio();
    cheerAudio();
    console.log(pts);
  }

  return (
      <div className={"answer-card " + (isFlipped ? 'flip' : '')} onClick={() => onCardClick(props.answerPts)}>
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
