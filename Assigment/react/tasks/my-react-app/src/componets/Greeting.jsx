import React from 'react';

function Greeting() {
  // Functional component that accepts a name prop
  function Students(props) {
    return <h1>Hello, {props.name}!</h1>;
  }

  return (
    <div>
      
      <Students name="Rutvik" />
      <Students name="manan" />
    </div>
  );
}

export default Greeting;
