import React, { useState } from 'react';

import BottomButtonsContainer from './BottomButtonsContainer.jsx';
import TitleBar from './TitleBar.jsx';
import FlyZone from './FlyZone.jsx';

function App() {
  const [msgContainer, setMsgContainer] = useState('Empty Message');

  return (
    <div className="app">
      <TitleBar />
      <FlyZone msgContainer={msgContainer}/>
      <BottomButtonsContainer
        msgContainer={msgContainer}
        setMsgContainer={setMsgContainer}
      />
    </div>
  );
}

export default App;
