import React from 'react';

import './App.css';

function App() {

  const inputRef=React.useRef()

  function clickHandler(){
    inputRef.current.focus()
  }
  return (

    <div>
      <h2>useRef to access underlying DOM</h2>
      <input type="text" ref={inputRef}/>
      <button onClick={clickHandler}>Focus input</button>
    </div>
  )
}

export default App;
