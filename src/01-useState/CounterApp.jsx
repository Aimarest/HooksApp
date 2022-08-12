import { useState } from "react";

export const CounterApp = () => {

  //  const [{ counter1, counter2, counter3 }, setCounter] = useState({   counter1: 10,  counter2: 20, counter3: 30, });

const [state, setCounter] = useState({

        counter1: 10,
        counter2: 20,
        counter3: 30,
    });
    const { counter1, counter2, counter3 } = state;
 const onClick = () =>{

   // setCounter( {counter1:counter1+1, counter2: counter2+2, counter3: counter3 + 3});
setCounter({...state, counter1:counter1+1})
 }

  return (

    <>

    <h1>CounterApp</h1>

    <h2>Counter1:{ counter1 }</h2>
    <h2>Counter2:{ counter2 }</h2>
    <h2>Counter3:{ counter3 }</h2>

    <button className="btn" onClick={onClick}>+1</button>

    </>
  )
}

