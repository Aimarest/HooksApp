import { useReducer } from "react";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";
import { TodoAdd } from './TodoAdd';

const initialState = [
    {
        id: new Date().getTime(),
        todo: 'Recolectar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        todo: 'Recolectar la piedra del poder',
        done: false,
    }
]

export const TodoApp = () => {


const [ todos, dispatchTodo] = useReducer( todoReducer, initialState )

const handleDelete = (currentItem) =>{

}

const handleAddTodo = ( newTodo ) => {
 const action = {
    type: '[TODO] Add Todo',
    payload: newTodo
 }
 dispatchTodo( action )

}
    return (
        <>

            <h1>TodoApp: 10,<small>pendientes: 2</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={ todos } handleDelete={ handleDelete } />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>
           <TodoAdd handleAddTodo={ handleAddTodo }/>
                </div>
            </div>
          
        </>
  )
}
