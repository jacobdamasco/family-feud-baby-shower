import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import TeamScore from '../components/TeamScore';

const Scoreboard = () => {
  var roundNum = 1;
  var round = "/round" + roundNum.toString();

  useEffect(() => {
    console.log("Scoreboard rendered.");
  });

  return (
    
    <div className="container-scoreboard">
        <div className="team-1">
          <TeamScore />
        </div>
        <div className="team-2">
          <TeamScore />
        </div>
        <div className="container-next-btn mx-auto">
          <Link to={round} className='link-primary text-decoration-none'><Button variant="light" className="next-btn next-btn-font">Next</Button></Link>
        </div>
    </div>

  );

}

export default Scoreboard;