
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

const { user , setUser } = useContext( UserContext );

const onLoginUser = () => {

  setUser({ id:123, name: 'Ana Marcos', email:'pepita@gmail.com'})
}
  
  return (
   <>
    <h1>LoginPage</h1>
    <hr/>
    <pre
    aria-label="pre">
      {JSON.stringify( user )}
    </pre>
    <button
    className="btn btn-primary"
    onClick={ onLoginUser }
    >
    Establecer usuario
    </button>
   </>
  )
}
