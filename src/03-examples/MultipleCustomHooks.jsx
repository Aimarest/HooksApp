import { useFetch } from "../Hooks/useFetch"


export const MultipleCustomHooks = () => {


    const { data, isLoading, hasError } = useFetch(' https://www.breakingbadapi.com/api/quotes/1 ')
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

       

   
    </>
  )
}
