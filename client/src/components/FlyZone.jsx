import React from 'react';

function FlyZone( {msgContainer} ) {
  return (
    <div className="fly-zone">
      Fly Zone!
      <div id="plane-and-banner">
        <img id="plane-img" src='assets/plane-nopilot.png' alt="plane" />
        <div id="msg-cont">{msgContainer}</div>
      </div>
    </div>
  );
}

export default FlyZone;