import React from 'react'
import { useEffect , useRef} from 'react';

function App() {

   let inputref =useRef()

   useEffect(()=>{
    inputref.current.focus()
   })

  return (

      
    <div>
      <label>Firstname</label>
      <input type="name" ref={inputref} />
      <label>Lastname</label>
      <input type="name" />
    </div>
  );
}

export default App;
