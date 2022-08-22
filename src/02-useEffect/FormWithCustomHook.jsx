
import { Message } from "./Message";
import { useForm } from "../Hooks/useForm";
export const FormWithCustomHook = () => {

   const { formState, onInputChange, username, email, password, onResetForm, onPreventDefault } = useForm({
      username: '',
      email: '',
      password: '',
   });
//const { username, email, password } = formState; ESTA LINEA NOS LA AHORRAMOS AL UTILIZAR EL OPERADOR SPREAD EN EL USEfORM
 
  return (
 <>
    <h1>Form with custom Hook</h1>
    <form onSubmit={ onPreventDefault }>
              <input type="text"
                  className="form-control"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={onInputChange}>

              </input>

              <input type="email"
                  className="form-control mt-2"
                  placeholder="aimarest@gmail.com"
                  name="email"
                  value={email}
                  onChange={onInputChange}>

              </input>
              
              <input type="password"
                  className="form-control mt-2"
                  placeholder="password"
                  name="password"
                  value={password}
                  onChange={onInputChange}>

              </input>
              <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
    </form>

    {
       ( username === 'Ana')&&  <Message />
    }
   
 </>
  )
}
