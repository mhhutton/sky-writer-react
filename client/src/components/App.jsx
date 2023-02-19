import React from 'react';

import BottomButtonsContainer from './BottomButtonsContainer.jsx'
import TitleBar from './TitleBar.jsx'
import FlyZone from './FlyZone.jsx'

function App() {
  return (
    <div className="app">
      <TitleBar />
      <FlyZone />
      <BottomButtonsContainer />
    </div>
  );
}

export default App;
