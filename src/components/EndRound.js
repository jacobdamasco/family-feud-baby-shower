import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const EndRound = (props) => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { setShow(true); }
    }, []);
  }
  )


  return (
    <>
      <Modal show={show} animation={true}>
        <Modal.Header className='justify-content-center'>
          <Modal.Title className="">
            <Link to={{
              pathname: "/scoreboard",
              state: {}
            }}><Button variant="light" className="next-btn next-btn-font">Next</Button></Link></Modal.Title>         
        </Modal.Header>
      </Modal>
    </>
  );
}

export default EndRound;