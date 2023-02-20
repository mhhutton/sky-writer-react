import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import MsgModal from './MsgModal.jsx';

function BottomButtonsContainer( {msgContainer, setMsgContainer} ) {

  return (
    <div className="bott-butt-cont">
      <MsgModal
        msgContainer={msgContainer}
        setMsgContainer={setMsgContainer}
      />
      <Button> Fly Message</Button>
    </div>
  );
}

export default BottomButtonsContainer;