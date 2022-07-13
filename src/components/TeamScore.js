import { useState } from 'react';

const TeamScore = () => {
  const [teamScore, setTeamScore] = useState(0);
  
  return (
    <div>
      <h1 className="main-font text-white">{teamScore}</h1>
    </div>
  );
}

export default TeamScore;