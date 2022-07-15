import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import TeamScore from '../components/TeamScore';

const Scoreboard = (props) => {
  // State variables from useState() in App.js
  // renaming them for easier use
  const round = props.round;
  const team1Score = props.team1Score;
  const team2Score = props.team2Score;

  // Effects
  useEffect(() => {
    console.log("Scoreboard rendered.");
    console.log();
  });

  return (
    
    <div className="container-scoreboard">
        <TeamScore team1Score={team1Score} teamContainerClass={"team-1"} />
        <TeamScore team2Score={team2Score} teamContainerClass={"team-2"}/>
        <div className="container-next-btn mx-auto">
          <Link to={{
            pathname: ((round < 6) ? ("/round" + round.toString()) : "/game-end")
          }} className='link-primary text-decoration-none'>
            <Button variant="light" className="next-btn next-btn-font">Next</Button>
          </Link>
        </div>
    </div>

  );

}

export default Scoreboard;