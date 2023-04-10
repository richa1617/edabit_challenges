import logo from './logo.svg';
import './App.css';
const frameworks = [ 
  {
    id: 1,
    name: "React"
  }, 
  {
    id: 2,
    name: "Angular"
  }, 
  {
    id: 3,
    name: "Node"
  }
 ];
                                   
function App() {
  const listJSFrameworks = frameworks.map((framework, index) => 
  <li key={index}>{framework.name}</li>
);
  return (
    <div>
      {listJSFrameworks}
    </div>
  );
}

export default App;
