
import { useState, useMemo } from "react";
import { useCounter } from "../Hooks";

const heavyStuff = ( iterationNumber = 100) =>{

for( let i = 0; i < iterationNumber; i++){
    console.log('Ahí vamos...')
}

return `${ iterationNumber } iteraciones realizadas`
}

export const MemoHook = () => {

    const { counter, onAdd } = useCounter( 400 );
    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

    const onShow = () =>{
        setShow( !show )
    }
  return (
    <>
        <h1>Counter: <small>{ counter }</small> </h1>
        <hr></hr>
        <h4>{ memorizedValue }</h4>
        <button className="btn btn-primary"
        onClick={ onAdd }
        >
        +1 
        </button>

        <button 
        className="btn btn-secondary"
        onClick={ onShow }
        > 
        Show/Hide { JSON.stringify(show) } 
        </button>
    </>
  )
}