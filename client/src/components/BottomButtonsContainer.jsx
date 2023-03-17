import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import MsgModal from './MsgModal.jsx';

function BottomButtonsContainer( {msgContainer, setMsgContainer, setAnimateFly} ) {

  return (
    <div className="bott-butt-cont">
      <MsgModal
        msgContainer={msgContainer}
        setMsgContainer={setMsgContainer}
      />
      <Button
        onClick={() => setAnimateFly(true)}
      > Fly Message</Button>
    </div>
  );
}

export default BottomButtonsContainer;