import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../src/Hooks/useCounter';


describe('Pruebas sobre el hook useCounter', () => { 

    test('Debe de retornar los valores por defecto', () => { 

        const { result } = renderHook( ()=> useCounter())
        const { counter, onAdd, onReset, onSubtract } = result.current;

        expect( counter ).toBe( 1 );
        expect( onAdd ).toEqual( expect.any( Function )); //ESTO LO QUE DICE ES QUE ESPERA QUE onAdd SEA UNA FUNCION
        expect( onReset ).toEqual( expect.any( Function ));
        expect( onSubtract ).toEqual( expect.any( Function ));
     })
     test('debe de generar el counter con el valor de 100', () => { 

        const { result } = renderHook( () => useCounter(100) )
        const { counter } = result.current;
        expect( counter ).toBe( 100 );
      })

      test('Debe de incrementar el contador', () =>{

        const { result } = renderHook( ()=> useCounter());
        const { onAdd } = result.current;
        // HAY QUE UTILIZAR LA FUNCION ACT PARA PODER UTILIZAR UNA FUNCION QUE CAMBIA EL VALOR DE UNA VARIABLE DE ESTADO DENTRO DEL TEST
        act( ()=>{
            onAdd()
        });

        //expect( counter ).toBe(2); ESTO NO FUNCIONA PORQUE SE COGE EL VALOR INICIAL DEL COUNTER, NO EL ACTUAL,POR ELLO HAY QUE HACERLO ASÍ:
        expect( result.current.counter ).toBe(2);
      
        })
    })