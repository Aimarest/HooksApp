import { render, screen, renderHook, fireEvent } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useFetch } from '../../src/Hooks/useFetch';
import { useCounter } from '../../src/Hooks';

 jest.mock('../../src/Hooks/useFetch');
 jest.mock('../../src/Hooks/useCounter');
describe('Pruebas en el componente MultipleCustomHooks', () => { 

    const mockOnAdd = jest.fn();
    useCounter.mockReturnValue({
       counter:1,
       onAdd:mockOnAdd,
   })

   beforeEach(()=>
   jest.clearAllMocks())
   

    test('Debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        })

       render( <MultipleCustomHooks /> );

       expect(screen.getByText('Loading...'));
       expect(screen.getByText('BreakingBad Quotes'));

       const button = screen.getByRole('button', {name:'Next quote'})
       expect(button.disabled).toBeTruthy();

     })
     test('Debe mostrar un quote', () => { 

         useFetch.mockReturnValue({
            data:[{ author:'Ana', quote:'Hoy es jueves'}],
            isLoading: false,
            hasError: null,
        })
        render( <MultipleCustomHooks/> );

        expect(screen.getByText('Ana'));
        expect(screen.getByText('Hoy es jueves'));
        
        const button = screen.getByRole('button', { name:'Next quote'})
        expect(button.disabled).toBeFalsy();
      })

      test('Debe de llamar la función de incrementar', () => { 

     

        useFetch.mockReturnValue({
            data:[{ author:'Ana', quote:'Hoy es jueves'}],
            isLoading: false,
            hasError: null,
        })
      
       
        render( <MultipleCustomHooks/> );

        const button = screen.getByRole('button', {name:'Next quote'})
       

        fireEvent.click( button );
        
      
       
        expect( mockOnAdd ).toHaveBeenCalled();

        

       })
})
