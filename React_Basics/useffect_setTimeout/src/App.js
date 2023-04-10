import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"
function App() {
     const [count, setCount] = useState(1);

 useEffect(function () {
       const timeout =setTimeout(function () {
          console.log('Hello from setTimeout')
      }, 1000)
   return function ()  {
          clearTimeout(timeout)
      }
  }, [count])

  return (
    <div className="App">
      <h1>setTimeout </h1>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
    </div>
  );
}

export default App;
