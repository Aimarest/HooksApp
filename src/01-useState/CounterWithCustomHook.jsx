import { useCounter } from "../Hooks/useCounter"


export const CounterWithCustomHook = () => {

    const { counter, onAdd, onReset, onSubtract, } = useCounter();

  return (
    <>
    <h1> CounterWithCustomHook:{ counter } </h1>
    <button onClick={onAdd} className="btn btn-primary">+1</button>
    <button onClick={onReset} className="btn btn-primary">Reset</button>
    <button onClick={onSubtract} className="btn btn-primary">-1</button>
    </>
  )
}

