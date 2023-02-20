import React from 'react';

function FlyZone( {msgContainer} ) {
  return (
    <div className="fly-zone">
      <div id="plane-and-banner"> Fly Zone!</div>
      <div>{msgContainer}</div>
    </div>
  );
}

export default FlyZone;