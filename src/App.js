import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import StartGame from './views/gamestart.js';
import Scoreboard from './views/scoreboard.js';
import Round1 from './views/round1';
import Round2 from './views/round2';
import Round3 from './views/round3';
import Round4 from './views/round4';
import Round5 from './views/round5';
import GameEnd from './views/gameend';


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
        <Route path='/round2' element={<Round2 round={round} setRound={setRound} team1Score={team1Score} setTeam1Score={setTeam1Score} team2Score={team2Score} setTeam2Score={setTeam2Score}/>} />
        <Route path='/round3' element={<Round3 round={round} setRound={setRound} team1Score={team1Score} setTeam1Score={setTeam1Score} team2Score={team2Score} setTeam2Score={setTeam2Score}/>} />
        <Route path='/round4' element={<Round4 round={round} setRound={setRound} team1Score={team1Score} setTeam1Score={setTeam1Score} team2Score={team2Score} setTeam2Score={setTeam2Score}/>} />
        <Route path='/round5' element={<Round5 round={round} setRound={setRound} team1Score={team1Score} setTeam1Score={setTeam1Score} team2Score={team2Score} setTeam2Score={setTeam2Score}/>} />
        <Route path='/game-end' element={<GameEnd />} />
      </Routes>
    </Router>
  );
}

export default App;
