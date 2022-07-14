import AnswerCard from "../components/AnswerCard";
import BlankCard from "../components/BlankCard";
import Strike from "../components/Strike";
import useKey from "../components/useKey";
import useSound from 'use-sound';
import faceoff from '../audio/faceoff.mp3';
import roundWinner from '../audio/round_winner.mp3';
import { useState } from "react";

const Round1 = () => {
  const [roundScore, setRoundScore] = useState(0);
  const [faceoffAudio] = useSound(faceoff);
  const [roundWinnerAudio] = useSound(roundWinner);

  const space = useKey(' ');

  if (space) { faceoffAudio(); }
  if (useKey('a')) { roundWinnerAudio() }

  return (
    <div className="container-round">
        <div className="row justify-content-center">
          <h1 className="round-score game-font text-white text-center">{roundScore}</h1>
        </div>

        <div className="container-answer mx-auto my-5">
          <AnswerCard answerNum={"1"} answer={"SING LULLABY"} answerPts={51} />
          <AnswerCard answerNum={"5"} answer={"READ"} answerPts={4} />
          <AnswerCard answerNum={"2"} answer={"ROCK THEM"} answerPts={32} />
          <AnswerCard answerNum={"6"} answer={"HUSH, BE QUIET"} answerPts={2} />
          <AnswerCard answerNum={"3"} answer={"GIVE WARM MILK"} answerPts={9} />
          <BlankCard />
          <AnswerCard answerNum={"4"} answer={"GO ON CAR RIDE"} answerPts={8} />
          <BlankCard />
        </div>

        <Strike />
    </div>
  );

}


export default Round1;