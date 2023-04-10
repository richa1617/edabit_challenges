import React from 'react';

function Child(props) {
    console.log("Child render")
    return (
        <div>
            <h2>{props.name}</h2>
            <h2>I am child component</h2>
        </div>
    );
}

export default React.memo(Child);


//Even though Child compoent dont uses  setCount props it re-renders whenever parent component changes

//React Memo is a higher-order component that wraps around a component to memoize the rendered output and avoid unnecessary renderings. This improves performance because it memoizes the result and skips rendering to reuse the last rendered result. 


