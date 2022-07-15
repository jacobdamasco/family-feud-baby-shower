import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import AnswerCard from "../components/AnswerCard";
import BlankCard from "../components/BlankCard";
import Strike from "../components/Strike";
import useKey from "../components/useKey";
import useSound from 'use-sound';
import faceoff from '../audio/faceoff.mp3';
import roundWinner from '../audio/round_winner.mp3';
import RoundScore from "../components/RoundScore";
import FaceoffStrike from "../components/FaceoffStrike";

const Round1 = () => {
  // Audio
  const [faceoffAudio] = useSound(faceoff);
  const [roundWinnerAudio] = useSound(roundWinner);

  // Keydown
  const space = useKey(' ');
  if (space) { faceoffAudio(); }
  if (useKey('a')) { roundWinnerAudio() }

  // States
  const [roundScore, setRoundScore] = useState(0);

  // Effects
  useEffect(() => {
    // need anything here?
  })


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
          <Link to={"/scoreboard"} className='link-primary text-decoration-none'><Button variant="light" className="next-btn next-btn-font">Next</Button></Link>
        </div>

        <FaceoffStrike />
        <Strike />
    </div>

  );
}


export default Round1;