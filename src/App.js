import StartGame from './views/startgame.js';
import Scoreboard from './views/scoreboard.js';
import Round1 from './views/round1';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<StartGame />} />
        <Route path='/scoreboard' element={<Scoreboard />} />
        <Route path='/round1' element={<Round1 />} />
      </Routes>
    </Router>
  );
}

export default App;
