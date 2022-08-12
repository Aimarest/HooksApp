import { useState } from "react";

export const useCounter = (initialValue = 10) => {

  const [counter, setCounter] = useState(initialValue);

  
  const onAdd = () =>{
    setCounter( counter +1)
}
const onReset = () =>{
    setCounter( initialValue )
}
const onSubtract = () =>{
setCounter( counter -1 )
}
  
  
  
  return {
    counter,
    onAdd,
    onReset,
    onSubtract,
  }
}
