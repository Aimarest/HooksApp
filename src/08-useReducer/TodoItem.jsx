

export const TodoItem = ( { todo, handleDelete }) => {

  


  return (
    <li className="list-group-item d-flex justify-content-between">
                <span className="align-self-center">{ todo.todo }</span>
                <button key={ todo.id + 1 } onClick={ () => handleDelete( todo.id ) } className="btn btn-danger">Borrar</button>
            </li> 
  )
}
