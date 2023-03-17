import React from 'react';

function FlyZone( {msgContainer, animateFly, setAnimateFly} ) {
  return (
    <div className="fly-zone">
      Fly Zone!
      {animateFly ?
        <div id="plane-banner">
          <img id="plane-img" src='assets/plane-nopilot.png' alt="plane" />
          <div id="msg-cont">{msgContainer}</div>
        </div>
      : <div id="empty-plane-banner" />
      }
    </div>
  );
}

export default FlyZone;