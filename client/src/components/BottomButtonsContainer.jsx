import React from 'react';
import Button from 'react-bootstrap/Button';

function BottomButtonsContainer() {
  return (
    <div className="bott-butt-cont">
      <div className="title-text">
        <Button>Create New Message</Button>
        <Button> Fly Message</Button>
      </div>
    </div>
  );
}

export default BottomButtonsContainer;