

export const TodoItem = ( { todo, handleDelete }) => {

    const onDelete = ( event ) =>{
        const currentItem = event.target;
     console.log(currentItem)
        handleDelete(currentItem)
    
    }


  return (
    <li className="list-group-item d-flex justify-content-between">
                <span className="align-self-center">{ todo.todo }</span>
                <button key={ todo.id + 1 } onClick={ onDelete } className="btn btn-danger">Borrar</button>
            </li> 
  )
}
