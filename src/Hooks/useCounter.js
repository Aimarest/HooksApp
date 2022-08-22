import { useState } from "react";

export const useCounter = (initialValue = 1) => {

  const [counter, setCounter] = useState(initialValue);

  
  const onAdd = () =>{
    setCounter( counter +1)
}
const onReset = () =>{
    setCounter( initialValue )
}
const onSubtract = () =>{
  if( counter === 0 ) return;
setCounter( counter -1 )
}
  
  
  
  return {
    counter,
    onAdd,
    onReset,
    onSubtract,
  }
}
