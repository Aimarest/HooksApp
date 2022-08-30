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
        screen.debug();
        expect(screen.getByText('Prueba TodoItem')).toBeTruthy();
        expect(screen.getByRole('button')).toBeTruthy()

    })
});
