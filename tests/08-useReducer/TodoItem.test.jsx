import { render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Pruebas sobre el componente TodoItem', () => {

    const initialToDo = {
        id: 1,
        description: 'Prueba TodoItem',
        done: false,
    }
    const MockHandleDelete = jest.fn();
    const MockOnToggleTodo = jest.fn();

    beforeEach( ()=> jest.clearAllMocks() );

    test('Debe de mostrar un Todo', () => {

        render(<TodoItem todo={initialToDo} handleDelete={ MockHandleDelete } onToggleTodo={ MockOnToggleTodo } />);
      
        expect(screen.getByText('Prueba TodoItem')).toBeTruthy();
        expect(screen.getByRole('button')).toBeTruthy()

    })

    test('Debe de mostrar el ToDo pendiente de completar', () => { 

        render(<TodoItem todo={initialToDo} handleDelete={ MockHandleDelete } onToggleTodo={ MockOnToggleTodo } />)

        const liElement = screen.getByRole('listitem');
        console.log(liElement);
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        console.log(spanElement.className )
        expect( spanElement.className ).toBe( "align-self-center ") //OJO!!!! TIENE UN ESPACIO, PORQUE EN EL TODOITEM TIENE UN ESPACIO AHÍ POR LA CLASE VARIABLE QUE PONEMOS DESPUES
    })

    test('Debe de mostrar el ToDo completado', () => { 

        initialToDo.done = true; // Con esto simulamos que el ToDo ha sido completado, y por lo tanto debería estar tachado en el Dom

        render(<TodoItem todo={ initialToDo } handleDelete={ MockHandleDelete } onToggleTodo={ MockOnToggleTodo } />)


        const spanElement = screen.getByLabelText('span');
        console.log(spanElement.className )
        expect( spanElement.className ).toBe( "align-self-center text-decoration-line-through" ) 
    })
});
