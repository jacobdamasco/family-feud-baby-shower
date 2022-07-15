const RoundScore = (props) => {
  return (
    <>
      <div className="container-score justify-content-center">
        <h1 className="round-score game-font text-white text-center">{props.roundScore}</h1>
      </div>
      <div className="container-break"></div>
    </>
  );
}

export default RoundScore;
