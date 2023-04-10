import React, { useState, useEffect } from 'react';
import './App.css';
//// by default runs after every re-render

function App() {
 const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('call useEffect');
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
  });

  console.log('render component');
  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
   
}

export default App;
