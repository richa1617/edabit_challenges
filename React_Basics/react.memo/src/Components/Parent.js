import React, {useState} from 'react';
import Child from './Child';


function Parent() {

  const [count,setCount] =useState(0)
  const [name,setName] =useState("Richa")

  console.log("Parent render")

  function nameHandler(){
    if(name=="Richa"){
        setName("Akash")
    }else{
        setName("Richa")
    }
  }


    return (
        <div>
            <button onClick={()=>setCount((prev)=>prev+1)}>Count -{count}</button>

            <button onClick={nameHandler}>Change name</button>
            <Child name={name}></Child>
        </div>
    );
}

export default Parent;