
const TeamScore = (props) => {

  return (
    <div className={props.teamContainerClass}>
      <h1 className="main-font text-white">{(props.teamContainerClass === "team-1") ? props.team1Score : props.team2Score}</h1>
    </div>
  );
}

export default TeamScore;
