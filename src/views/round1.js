import AnswerCard from "../components/AnswerCard";
import BlankCard from "../components/BlankCard";
import Strike from "../components/Strike";
import useKey from "../components/useKey";
import useSound from 'use-sound';
import faceoff from '../audio/faceoff.mp3';

const Round1 = () => {
  
  const [faceoffAudio] = useSound(faceoff);
  const space = useKey(' ');


  if (space) { faceoffAudio(); }


  return (
    <div className="container-round">
        <div className="row justify-content-center">
            <h1 className="round-score game-font text-white text-center">0</h1>
        </div> 

        <div className="container-answer mx-auto my-5">
          <AnswerCard answerNum={"1"} answer={"SING LULLABY"} answerPts={"51"} />
          <AnswerCard answerNum={"5"} answer={"READ"} answerPts={"4"} />
          <AnswerCard answerNum={"2"} answer={"ROCK THEM"} answerPts={"32"} />
          <AnswerCard answerNum={"6"} answer={"SHH / HUSH"} answerPts={"2"} />
          <AnswerCard answerNum={"3"} answer={"GIVE WARM MILK"} answerPts={"9"} />
          <BlankCard />
          <AnswerCard answerNum={"4"} answer={"GO ON CAR RIDE"} answerPts={"8"} />
          <BlankCard />
        </div>
        <div class="modal-bg justify-content-center align-items-center">
          <Strike />
        </div>
    </div>
  );

}


export default Round1;