import Person from './Person';
import './App.css';

function App() {
   const obj = {name: 'Richa', age: 28, country: 'India'};

  return (
    <div className="container">
      <Person {...obj} />
    </div>
  )
}

export default App;

//Use the spread syntax (...) to pass an object as props