
import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

   const [formState, setFormState] = useState({
    username: '',
    email: '',
   }); 

    const { username, email } = formState;
    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({ ...formState, [name]: value })
    }

    useEffect(() => {
       console.log('useEffect called!')
    }, []);
    useEffect(() => {
        console.log('email changed!')
     }, [ email ]);

  return (
 <>
    <h1>Simple Form</h1>
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
    </form>

    {
       ( username === 'Ana')&&  <Message />
    }
   
 </>
  )
}
