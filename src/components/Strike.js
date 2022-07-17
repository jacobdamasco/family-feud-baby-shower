import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import useSound from 'use-sound';
import ahhh from '../audio/ahhh.mp3';
import strike from '../audio/strike.mp3';

const Strike = (props) => {
  // Audio
  const [strikeAudio] = useSound(strike);
  const [ahhhAudio] = useSound(ahhh);

  // State variables from useState() in App.js
  // renaming them for easier use
  const strikeCt = props.strikeCt;
  const setStrikeCt = props.setStrikeCt;

  // State
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    if (strikeCt < 3) {
      setStrikeCt(strikeCt + 1);
    } else if (strikeCt === 3) {
      setStrikeCt(1);
    } 
    strikeAudio();
    ahhhAudio();
    setShow(true);
  }
  
  const handleClose = () => setShow(false);


  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'x') {
        handleOpen();
        const timer = setTimeout(() => {
          handleClose();
        }, 2500);
        return () => { clearTimeout(timer); }
      }
    }, []);
  }
  )


  return (
    <>
      <Modal show={show} animation={true}>
        <Modal.Header className='justify-content-center'>
          <Modal.Title className={((strikeCt >= 1)) ? "wrong-answer-font mx-3 px-5" : ''}>{((strikeCt >= 1) ? "X" : '')}</Modal.Title>
          <Modal.Title className={(strikeCt >= 2) ? "wrong-answer-font mx-3 px-5" : ''}>{(strikeCt >= 2) ? "X" : ''}</Modal.Title>
          <Modal.Title className={(strikeCt >= 3) ? "wrong-answer-font mx-3 px-5" : ''}>{(strikeCt >= 3) ? "X" : ''}</Modal.Title>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default Strike;