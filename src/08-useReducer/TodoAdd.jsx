import { useState } from "react";

export const TodoAdd = ({ handleAddTodo }) => {

    const [value, setValue] = useState('')

    const onChangeValue = (event) => {
        const inputValue = event.target.value;
        setValue(inputValue);
    }
    const onPreventDefault = (event) => {
        event.preventDefault();
    }
    const onNewTodo = () => {

        if (value) {

            const newTodo = {
                id: new Date().getTime(),
                todo: value,
                done: false,
            }
            handleAddTodo(newTodo)
            setValue('')
        }
        
        else {

            return (console.log('tiene que escribir un todo'))
        }

    }

  return (
    
      <form onSubmit={ onPreventDefault }>
          <input
              type="text"
              placeholder="¿qué hay que hacer?"
              className="form-control"
              onChange={ onChangeValue }
              value={ value }
          ></input>
          <button
              onClick={ onNewTodo }
              type="submit"
              className="btn btn-outline-primary mt-1">
              Agregar
          </button>
      </form>

  )
}
