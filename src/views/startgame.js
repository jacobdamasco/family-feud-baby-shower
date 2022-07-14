import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import familyFeudLogo from '../imgs/family_feud_logo.png';
import useSound from 'use-sound';
import useKey from '../components/useKey';
import startMusic from '../audio/start_game.mp3';

const StartGame = () => {

	const space = ' ';
	const [startMusicAudio] = useSound(startMusic);
	
	if (useKey(space)) { startMusicAudio() };

	useEffect(() => {
		console.log("Start game rendered.");
	});

		return (
			<div>
				<div className="container-start">
						<div className="column">
							<img src={familyFeudLogo} alt="Family Feud Logo" className="family-feud-logo" />

							<Link to="/scoreboard" className='link-start text-decoration-none'>
								<h1 className="main-font py-3">START GAME</h1>
							</Link>
						</div>
				</div>
			</div>
		);
}

export default StartGame;
