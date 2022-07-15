import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import StartGame from './views/startgame.js';
import Scoreboard from './views/scoreboard.js';
import Round1 from './views/round1';


const App = () => {
  // States
  const [round, setRound] = useState(1)
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<StartGame />} />
        <Route path='/scoreboard' element={<Scoreboard round={round} setRound={setRound} team1Score={team1Score} setTeam1Score={setTeam1Score} team2Score={team2Score} setTeam2Score={setTeam2Score} />} />
        <Route path='/round1' element={<Round1 round={round} setRound={setRound} team1Score={team1Score} setTeam1Score={setTeam1Score} team2Score={team2Score} setTeam2Score={setTeam2Score}/>} />
      </Routes>
    </Router>
  );
}

export default App;
