import { useForm } from '../../src/Hooks/useForm';
import { renderHook } from '@testing-library/react';


describe('Pruebas sobre el useForm', () => {



test('Debe regresar los valores por defecto', () => { 

     const initialForm = {
        name:'Ana',
        email: 'ana@gmail.com'
     }
    const { result } = renderHook( ()=>  useForm( initialForm ) );
     console.log(result.current)
    // const { formState, onInputChange, onResetForm } = result.current;
     expect(result.current).toEqual({
        name:initialForm.name,
        email: initialForm.email,
        formState: {
            name:'Ana',
            email: 'ana@gmail.com'
        },
        onInputChange:expect.any(Function),
        onResetForm:expect.any(Function),
        onPreventDefault:expect.any(Function),
     })
 })

});




