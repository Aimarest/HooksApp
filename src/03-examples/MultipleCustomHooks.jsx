import { useFetch, useCounter } from "../Hooks";
import { LoadingQuote, Quote } from "./";


export const MultipleCustomHooks = () => {

    const { onAdd, onSubtract, counter } = useCounter();
    const { data, isLoading, hasError } = useFetch(` https://www.breakingbadapi.com/api/quotes/${ counter } `)
    const { author, quote } = !!data && data[0];  // Esto lo que hace es que coge la posición 0 del array data si data no es nulo.
   

  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />
        {

            isLoading
                ? <LoadingQuote />
                :  <Quote author={ author } quote={ quote }/>
                
        }

       <button onClick={ onAdd } className="btn btn-primary" disabled={ isLoading }>
        Next quote
       </button>
       <button onClick={ onSubtract } className="btn btn-primary" disabled={ isLoading } >
        Previous quote
       </button>
    </>
  )
}
