
import { todoReducer } from '../../src/08-useReducer/todoReducer';




describe('Pruebas sobre el componente TodoReducer', () => {

    const initialState = [{
        id: 1,
        todo: 'Demo todo',
        done: false,
    }];

    test('Debe de regresar el estado inicial', () => {

        const newState = todoReducer(initialState, {})
        expect(newState).toBe(initialState);
    })
});
