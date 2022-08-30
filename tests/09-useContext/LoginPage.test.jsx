import { render, screen, fireEvent } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';




describe('Pruebas sobre el componente LoginPage', () => { 
     
   


     test('Debe mostrar el componente sin el usuario', () => { 

        render(
            <UserContext.Provider value={{ user: null }} >
              <LoginPage/>   
            </UserContext.Provider>
        )
        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe( 'null' )
     })

     test('Debe llamar a la función setUser al hacer click en el botón', () => {
      const setUserMock = jest.fn();
     
        render(
            <UserContext.Provider value={{ user: null ,  setUser: setUserMock }} >
              <LoginPage/>   
            </UserContext.Provider>
        ) 
         const button = screen.getByRole('button');
            fireEvent.click( button )
            expect( setUserMock ).toHaveBeenCalledWith({"email": "pepita@gmail.com", "id": 123, "name": "Ana Marcos"});
        })
            

      })
