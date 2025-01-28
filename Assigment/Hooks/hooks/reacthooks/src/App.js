
import { useRef, useState } from 'react';


function App() {

  const [count,setcount]=useState(0)
  const rendercount=useRef(0)
  const incrementState = () => {
    setcount(count + 1);
  };

  const incrementRef=()=>{
    rendercount.current = rendercount.current + 1;
    console.log('Ref Incremented:', rendercount.current);
  }
  return (
    <div className="App">
 <h1>Using useRef to Avoid Re-renders</h1>
      <div>
        <h2>State-based counter (Triggers re-renders): {count}</h2>
        <button onClick={incrementState} >Increment State Counter</button>
      </div>

      <div>
        <h2>Ref-based counter (No re-renders): {rendercount.current}</h2>
        <button onClick={incrementRef}>Increment Ref Counter</button>
      </div>

      <p>
        Notice how updating the <strong>ref-based counter</strong> does not trigger a re-render, 
        while updating the <strong>state-based counter</strong> causes a re-render.
      </p>
      
    </div>
  );
}

export default App;
