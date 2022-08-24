import { renderHook } from '@testing-library/react';
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
 })