import { useEffect, useState } from "react";
import AnswerCard from "../components/AnswerCard";
import BlankCard from "../components/BlankCard";
import Strike from "../components/Strike";
import useKey from "../components/useKey";
import RoundScore from "../components/RoundScore";
import FaceoffStrike from "../components/FaceoffStrike";
import EndRound from "../components/EndRound";

// importing useSounds, sound files
import useSound from 'use-sound';
import faceoff from '../audio/faceoff.mp3';
import roundWinner from '../audio/round_winner.mp3';
import { Link } from "react-router-dom";



const Round1 = () => {
  // Audio
  const [faceoffAudio] = useSound(faceoff);
  const [roundWinnerAudio] = useSound(roundWinner);

  // Keydown
  const space = useKey(' ');
  const aKey = useKey('a');
  const rightArrow = useKey('ArrowRight');
  if (space) { faceoffAudio(); }
  if (aKey) { roundWinnerAudio() }


  // States
  const [roundScore, setRoundScore] = useState(0);

  // Effects
  useEffect(() => {
    // need anything here?
  })

  const handleLinkKeyDown = () => {
    if (rightArrow) {}
  }

  return (

    <div className="container-round">
        <div className="container-answer mx-auto my-auto">
          <RoundScore roundScore={roundScore}/>

          <AnswerCard answerNum={"1"} answer={"SING LULLABY"} answerPts={51} currRoundScore={roundScore} setRoundScore={setRoundScore}/>
          <AnswerCard answerNum={"5"} answer={"READ"} answerPts={4} currRoundScore={roundScore} setRoundScore={setRoundScore}/>
          <AnswerCard answerNum={"2"} answer={"ROCK THEM"} answerPts={32} currRoundScore={roundScore} setRoundScore={setRoundScore}/>
          <AnswerCard answerNum={"6"} answer={"HUSH, BE QUIET"} answerPts={2} currRoundScore={roundScore} setRoundScore={setRoundScore}/>
          <AnswerCard answerNum={"3"} answer={"GIVE WARM MILK"} answerPts={9} currRoundScore={roundScore} setRoundScore={setRoundScore}/>
          <BlankCard />
          <AnswerCard answerNum={"4"} answer={"GO ON CAR RIDE"} answerPts={8} currRoundScore={roundScore} setRoundScore={setRoundScore}/>
          <BlankCard />
        </div>

        <FaceoffStrike />
        <Strike />
        <EndRound />
    </div>

  );
}


export default Round1;
