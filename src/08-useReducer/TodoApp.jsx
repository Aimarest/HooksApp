import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [
    {
        id: new Date().getTime(),
        todo: 'Recolectar la piedra del alma',
        donde: false,
    },
    {
        id: new Date().getTime() * 3,
        todo: 'Recolectar la piedra del poder',
        donde: false,
    }
]

export const TodoApp = () => {


const [ todos, dispatchTodo] = useReducer( todoReducer, initialState )



    return (
        <>

            <h1>Todo app</h1>
            <hr />
            <ul>
                <li>
                Item 1
                </li>
                <li>
                Item 2
                </li>
                <li>
                Item 3
                </li>
            </ul>
        </>
  )
}
