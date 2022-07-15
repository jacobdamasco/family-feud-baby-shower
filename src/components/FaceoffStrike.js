import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import useSound from 'use-sound';
import ahhh from '../audio/ahhh.mp3';
import strike from '../audio/strike.mp3';

const FaceoffStrike = () => {
  // Audio
  const [strikeAudio] = useSound(strike);
  const [ahhhAudio] = useSound(ahhh);

  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);
  
  const handleClose = () => setShow(false);


  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'X') {
        handleOpen();
        strikeAudio();
        ahhhAudio();
        const timer = setTimeout(() => {
          handleClose();
        }, 1500);
        return () => { clearTimeout(timer); }
      }
    }, []);
  }
  )


  return (
    <>
      <Modal show={show} animation={true}>
        <Modal.Header className='justify-content-center'>
          <Modal.Title className="wrong-answer-font mx-3 px-5">X</Modal.Title>         
        </Modal.Header>
      </Modal>
    </>
  );
}

export default FaceoffStrike;