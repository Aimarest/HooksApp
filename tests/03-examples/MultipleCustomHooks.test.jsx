import { render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useFetch } from '../../src/Hooks/useFetch';

 jest.mock('../../src/Hooks/useFetch');
describe('Pruebas en el componente MultipleCustomHooks', () => { 

  

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
        screen.debug()
        expect(screen.getByText('Ana'));
        expect(screen.getByText('Hoy es jueves'));
        
        const button = screen.getByRole('button', { name:'Next quote'})
        expect(button.disabled).toBeFalsy();
      })
})
