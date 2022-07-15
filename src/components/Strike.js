import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import useSound from 'use-sound';
import ahhh from '../audio/ahhh.mp3';
import strike from '../audio/strike.mp3';
import roundWinner from '../audio/round_winner.mp3';

const Strike = () => {
  // Audio
  const [strikeAudio] = useSound(strike);
  const [ahhhAudio] = useSound(ahhh);
  const [roundWinnerAudio] = useSound(roundWinner);

  const [show, setShow] = useState(false);
  const [strikeCt, setStrikeCt] = useState(0);

  const handleOpen = () => { 
    if (strikeCt < 3) {
      setStrikeCt(strikeCt + 1);
    } else if (strikeCt === 3) {
      setStrikeCt(1);
      roundWinnerAudio();
    } 
    setShow(true);
  }
  
  const handleClose = () => setShow(false);


  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'x') { 
        handleOpen();
        strikeAudio();
        ahhhAudio();
        const timer = setTimeout(() => {
          handleClose();
        }, 3000);
        return () => { clearTimeout(timer); }
      }
    }, []);
  }
  )


  return (
    <>
      <Modal show={show} animation={true}>
        <Modal.Header className='justify-content-center'>
          <Modal.Title className={(strikeCt >= 1) ? "wrong-answer-font mx-3 px-5" : ''}>{(strikeCt >= 1) ? "X" : ''}</Modal.Title>
          <Modal.Title className={(strikeCt >= 2) ? "wrong-answer-font mx-3 px-5" : ''}>{(strikeCt >= 2) ? "X" : ''}</Modal.Title>
          <Modal.Title className={(strikeCt >= 3) ? "wrong-answer-font mx-3 px-5" : ''}>{(strikeCt >= 3) ? "X" : ''}</Modal.Title>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default Strike;