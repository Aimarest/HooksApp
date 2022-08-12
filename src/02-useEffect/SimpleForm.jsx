


export const SimpleForm = () => {

   const [formState, setFormState] = useState({
    username: 'Ana',
    email: 'aimarest@google.com',
   }); 

const { username, email } = formState;
const onInputChange = (event) =>{

    setFormState(event.target.value)
}

  return (
 <>
    <h1>Simple Form</h1>
    <form>
        <input type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={ onInputChange }></input>
          <input type="email"
        className="form-control mt-2"
        placeholder="aimarest@gmail.com"
        name="email"
        value={ email }
        onChange={ onInputChange }></input>
    </form>
 </>
  )
}
