import React from 'react'
import {useState} from 'react'

function Counter() {
    const [counter,setCounter]=useState(1)

    function increment(){
        setCounter(counter+1)
    }
    function decrement(){
        setCounter(counter-1)
    }
    function reset(){
        setCounter(1)
    }



  return (
    <div>
        <p>The value is {counter}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter