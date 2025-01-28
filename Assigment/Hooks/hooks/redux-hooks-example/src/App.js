
import './App.css';
import React, { useState } from 'react';

function App() {
  // src/App.js


function App() {
  // Set up a state variable to hold the counter value
  const [counter, setCounter] = useState(0);

  // Function to increment the counter
  const add= () => setCounter(counter + 1);

  // Function to decrement the counter
  const remove=()=> setCounter(counter - 1);
}
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={add}>Increment</button>
      <button onClick={remove}>Decrement</button>
    </div>
  );
}

export default App;
