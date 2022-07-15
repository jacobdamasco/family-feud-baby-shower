import { useEffect } from 'react';
import familyFeudLogo from '../imgs/family_feud_baby_shower_ed.png';
import useSound from 'use-sound';
import useKey from '../components/useKey';
import endMusic from '../audio/end_game.mp3';

const StartGame = () => {

	const space = ' ';
	const [endMusicAudio] = useSound(endMusic);
	
	if (useKey(space)) { endMusicAudio() };

	useEffect(() => {
		console.log("End game rendered.");
	});

		return (
			<div>
				<div className="container-start">
						<div className="column">
              <h1 className="game-font text-white py-3">THANKS FOR PLAYING!</h1>
							<img src={familyFeudLogo} alt="Family Feud Logo" className="family-feud-logo" />
						</div>
				</div>
			</div>
		);
}

export default StartGame;
