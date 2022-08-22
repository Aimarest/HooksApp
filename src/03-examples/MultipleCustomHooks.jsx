import { useFetch } from "../Hooks/useFetch"


export const MultipleCustomHooks = () => {


    const { getFetch, data, isLoading, hasError } = useFetch(' https://www.breakingbadapi.com/api/quotes/1 ')

  return (
    <>
        <h1>BreakingBad Quotes</h1>
    </>
  )
}
