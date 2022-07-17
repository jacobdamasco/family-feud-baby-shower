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


const Round2 = (props) => {

  // Audio
  const [faceoffAudio] = useSound(faceoff);
  const [roundWinnerAudio] = useSound(roundWinner);

  // Keydown
  const space = useKey(' ');
  if (space) { faceoffAudio(); }

  // State variables from useState() in App.js
  // renaming them for easier use
  const team1Score = props.team1Score;
  const team2Score = props.team2Score;
  const setRound = props.setRound;
  const setTeam1Score = props.setTeam1Score;
  const setTeam2Score = props.setTeam2Score;

  // States
  const [roundScore, setRoundScore] = useState(0);
  const [strikeCt, setStrikeCt] = useState(0);

  // Effects Helper Function
  const handleKeyDown = (e) => {
    if (e.key === '1') {
      roundWinnerAudio()
      setTeam1Score(roundScore + team1Score);
      setRound(3);
    } else if (e.key === '2') {
      roundWinnerAudio()
      setTeam2Score(roundScore + team2Score);
      setRound(3);
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

          <AnswerCard answerNum={"1"} answer={"LUGGAGE"} answerPts={43} currRoundScore={roundScore} setRoundScore={setRoundScore}/>
          <AnswerCard answerNum={"5"} answer={"FLOWERS/GIFT FOR BABY"} answerPts={4} currRoundScore={roundScore} setRoundScore={setRoundScore}/>
          <AnswerCard answerNum={"2"} answer={"WIFE"} answerPts={19} currRoundScore={roundScore} setRoundScore={setRoundScore}/>
          <AnswerCard answerNum={"6"} answer={"CAR SEAT"} answerPts={4} currRoundScore={roundScore} setRoundScore={setRoundScore}/>
          <AnswerCard answerNum={"3"} answer={"EXTRA CLOTHES"} answerPts={18} currRoundScore={roundScore} setRoundScore={setRoundScore}/>
          <BlankCard />
          <AnswerCard answerNum={"4"} answer={"BABY BAG"} answerPts={5} currRoundScore={roundScore} setRoundScore={setRoundScore}/>
          <BlankCard />
        </div>

        <FaceoffStrike />
        <Strike strikeCt={strikeCt} setStrikeCt={setStrikeCt} />
        <EndRound />
    </div>

  );
}


export default Round2;
