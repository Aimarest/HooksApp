
import { useState } from "react";
import { useCounter } from "../Hooks"
import { Small } from "./Small";

export const Memorize = () => {

    const { counter, onAdd } = useCounter( 10 );
    const [show, setShow] = useState(true);
    const onShow = () =>{
        setShow( !show )
    }
  return (
    <>
        <h1>Counter: <Small value={ counter } /></h1>
        <hr></hr>

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
