import React, { useState } from 'react';
import './App.css';
import ButtonDecrement from './components/decrement';
import ButtonIncrement from './components/increment';
import Seconds from './components/seconds';

const App = (props) => {
  const [minutes, setMinutes] = useState(0);
  return (
    <div className="App">

      <header className="App-header">

        <ButtonDecrement minutes={minutes} setMinutes={setMinutes} />
        <span class="minute" >{`${minutes} Minute`}</span>
        <ButtonIncrement minutes={minutes} setMinutes={setMinutes} />
      
      </header>

      <div class="counter">
        {minutes > 0 ? <Seconds minutes={minutes} setMinutes={setMinutes} /> : null}
      </div>

    </div>
  );

}

export default App;
