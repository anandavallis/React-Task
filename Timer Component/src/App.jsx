import React, { useState } from 'react';
import TimerComponent from './TimerComponent';

function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      <button onClick={() => setShowTimer(prev => !prev)}>
        {showTimer ? 'Stop Timer' : 'Start Timer'}
      </button>
      {showTimer && <TimerComponent />}
    </div>
  );
}

export default App;
