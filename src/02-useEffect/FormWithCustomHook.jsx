
import { Message } from "./Message";
import { useForm } from "../Hooks/useForm";
export const FormWithCustomHook = () => {

   const { formState, onInputChange, username, email, password } = useForm({
      username: '',
      email: '',
      password: '',
   });
//const { username, email, password } = formState; ESTA LINEA NOS LA AHORRAMOS AL UTILIZAR EL OPERADOR SPREAD EN EL USEfORM
 
  return (
 <>
    <h1>Form with custom Hook</h1>
    <form>
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
    </form>

    {
       ( username === 'Ana')&&  <Message />
    }
   
 </>
  )
}
