import { useFetch } from "../Hooks/useFetch"
import { useCounter } from "../Hooks/useCounter";

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
                ? (
                      <div className="alert alert-info text-center">
                          Loading...
                      </div>
                )
                : (
                      <blockquote className="blockquote text-end">
                          <p className="mb-1">{ quote } </p>
                          <footer className="blockquote-footer"> { author } </footer>
                      </blockquote>
                )
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
