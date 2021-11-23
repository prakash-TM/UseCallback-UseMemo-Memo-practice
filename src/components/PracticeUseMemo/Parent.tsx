import React from "react";
import { useState,useMemo } from "react";
import ReactDOM from "react-dom";

const UseMemofun=()=>{
    const[counter1,setCounter1]=useState(0)
    const[counter2,setCounter2]=useState(0)


    const count1Increment=async()=>{
        // const data= await fetch("https://api.publicapis.org/entries");
        // const response = await data.json()
        // IsEven(response)
        setCounter1(counter1+1)
    }
    const count2Increment=()=>{
        setCounter2(counter2+1)
    }

const isEven=useMemo(()=>{
 let i=0
 while(i<2000000000) i++
 return(counter2%2===0)
},[counter2])





    return(
        <div>
            <button onClick={count1Increment}>COUNTER 1 - {counter1}</button>
            <button onClick={count2Increment}>COUNTER 2 - {counter2}</button>
            <p>Counter 2 is {isEven?"Even":"Odd"}</p>
        </div>
    )
}


ReactDOM.render(
    <React.StrictMode>
      <UseMemofun />
    </React.StrictMode>,
    document.getElementById('root')
  )