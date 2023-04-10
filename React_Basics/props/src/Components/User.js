import React from 'react';

function User(props) {
    return (
        <div>
         <h1>My name is {props.name}.</h1>
         <p>I am currently learning {props.study}.</p>
        </div>
    );
}

export default User;