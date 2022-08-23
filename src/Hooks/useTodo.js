import { todoReducer } from "../08-useReducer/todoReducer";
import { useReducer, useEffect } from "react";

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

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || initialState;
}

export const useTodo = ( initialState=[]) => {


    const [ todos, dispatchTodo] = useReducer( todoReducer, initialState, init )


    useEffect(() => {
       localStorage.setItem('todos', JSON.stringify( todos ) || [] )
    }, [ todos ]);
    
    const handleDelete = (id) =>{
    
    dispatchTodo({
        type: '[TODO] Remove Todo',
        payload:id,
    })
    }
    
    const handleAddTodo = ( newTodo ) => {
     const action = {
        type: '[TODO] Add Todo',
        payload: newTodo
     }
     dispatchTodo( action )
    
    }
    const handleToggleTodo = (id) => {
    dispatchTodo({
        type:  '[TODO] Toggle Todo',
        payload:id,
    })
    }

return {
    ...initialState,
    handleDelete,
    handleAddTodo,
    handleToggleTodo,
    todos,
}

}