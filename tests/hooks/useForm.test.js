import { useForm } from '../../src/Hooks/useForm';
import { renderHook, act  } from '@testing-library/react';



describe('Pruebas sobre el useForm', () => {


     const initialForm = {
        name:'Ana',
        email: 'ana@gmail.com'
     }

test('Debe regresar los valores por defecto', () => { 

    const { result } = renderHook( ()=>  useForm( initialForm ) );
    
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
 test('Debe de cambiar el nombre del formulario', () => { 

   
    const { result } = renderHook( ()=>  useForm(initialForm) );
    const {  onInputChange } = result.current;

   const newValue = 'MariCarmen';

    act(()=>{
        onInputChange({ target:{ name:'name', value: newValue} })
    })
   
    expect( result.current.name ).toBe(newValue)
    expect( result.current.formState.name ).toBe(newValue)
 })

 test('Debe de realizar el reset del formulario', () => { 

   
    const { result } = renderHook( ()=>  useForm( initialForm ) );
    const {  onInputChange, onResetForm } = result.current;

   const newValue = 'MariCarmen';

    act(()=>{
        onInputChange({ target:{ name:'name', value: newValue} })
        onResetForm()
    })
   
    expect( result.current.name ).toBe( initialForm.name )
    expect( result.current.formState.name ).toBe( initialForm.name )
 })
});




