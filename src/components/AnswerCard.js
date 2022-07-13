const AnswerCard = (props) => {
  return (
      <div className="answer-card">
        <div className="front-face row mx-auto">
          <div className="col-10 answer"><h1 className="text-white text-center game-font">{props.answer}</h1></div>
            <div className="col-2"><h1 className="text-white text-center game-font points">{props.answerPts}</h1></div>
        </div> 
        <div className="back-face">
            <div className="oval mx-auto my-auto">
                <h1 className="text-white text-center number-font">1</h1>
            </div>
        </div> 
      </div>
  );
}

export default AnswerCard;
