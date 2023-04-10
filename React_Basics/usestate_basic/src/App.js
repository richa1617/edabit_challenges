import React from "react";
import './App.css';

function App() {
  
    const [islike, setIsLike] = React.useState(true)
    
    function handleClick() {
        setIsLike(!islike)
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Do you like dogs ?</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{islike===true? "Yes" :"No"}</h1>
            </div>
        </div>
    )


  
}

export default App;
