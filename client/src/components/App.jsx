import React, { useState, useEffect } from 'react';

import BottomButtonsContainer from './BottomButtonsContainer.jsx';
import TitleBar from './TitleBar.jsx';
import FlyZone from './FlyZone.jsx';

function App() {
  const [msgContainer, setMsgContainer] = useState('Empty Message');
  const [animateFly, setAnimateFly] = useState(false);

  // useEffect(()=> {
  //   console.log('')
  // }, [])

  return (
    <div className="app">
      <TitleBar />
      <FlyZone
        msgContainer={msgContainer}
        animateFly={animateFly}
        setAnimateFly={setAnimateFly}
      />
      <BottomButtonsContainer
        msgContainer={msgContainer}
        setMsgContainer={setMsgContainer}
        setAnimateFly={setAnimateFly}
      />
    </div>
  );
}

export default App;