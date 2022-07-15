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


const Round4 = (props) => {

  // Audio
  const [faceoffAudio] = useSound(faceoff);
  const [roundWinnerAudio] = useSound(roundWinner);

  // Keydown
  const space = useKey(' ');
  const enterKey = useKey('Enter');
  if (space) { faceoffAudio(); }
  if (enterKey) { roundWinnerAudio() }

  // State variables from useState() in App.js
  // renaming them for easier use
  const team1Score = props.team1Score;
  const team2Score = props.team2Score;
  const setRound = props.setRound;
  const setTeam1Score = props.setTeam1Score;
  const setTeam2Score = props.setTeam2Score;

  // States
  const [roundScore, setRoundScore] = useState(0);

  // Effects Helper Function
  const handleKeyDown = (e) => {
    if (e.key === '1') {
      setTeam1Score(roundScore + team1Score);
      setRound(5);
    } else if (e.key === '2') {
      setTeam2Score(roundScore + team2Score);
      setRound(5);
    }
  }

  // Effects
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  })

  return (

    <div className="container-round">
        <div className="container-answer mx-auto my-auto">
          <RoundScore roundScore={roundScore}/>

          <AnswerCard answerNum={"1"} answer={"PEE/POO ON ME"} answerPts={43} currRoundScore={roundScore} setRoundScore={setRoundScore}/>
          <AnswerCard answerNum={"5"} answer={"SNEEZE, COUGH"} answerPts={9} currRoundScore={roundScore} setRoundScore={setRoundScore}/>
          <AnswerCard answerNum={"2"} answer={"DROP THEM"} answerPts={24} currRoundScore={roundScore} setRoundScore={setRoundScore}/>
          <BlankCard />
          <AnswerCard answerNum={"3"} answer={"SPIT, THROW UP"} answerPts={18} currRoundScore={roundScore} setRoundScore={setRoundScore}/>
          <BlankCard />
          <AnswerCard answerNum={"4"} answer={"CRY"} answerPts={9} currRoundScore={roundScore} setRoundScore={setRoundScore}/>
          <BlankCard />
        </div>

        <FaceoffStrike />
        <Strike />
        <EndRound />
    </div>

  );
}


export default Round4;
