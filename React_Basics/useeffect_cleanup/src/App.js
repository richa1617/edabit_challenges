import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
 const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
}

export default App;
