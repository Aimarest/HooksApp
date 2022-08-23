
import { TodoList } from "./TodoList";
import { TodoAdd } from './TodoAdd';
import { useTodo } from '../Hooks';




export const TodoApp = () => {

    const { todos, handleDelete, handleAddTodo, handleToggleTodo } = useTodo();


    return (
        <>

            <h1>TodoApp: 10,<small>pendientes: 2</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                    todos={ todos } 
                    handleDelete={ handleDelete }
                    onToggleTodo={ handleToggleTodo } />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>
           <TodoAdd
           handleAddTodo={ handleAddTodo }

           />
                </div>
            </div>
          
        </>
  )
}
