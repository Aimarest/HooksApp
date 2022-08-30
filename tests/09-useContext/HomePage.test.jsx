import { HomePage } from '../../src/09-useContext/HomePage';
import { render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
describe('Pruebas sobre el componente HomePage', () => { 

    const user = {
        id:1,
        name:'Ana'
    }
  test('Debe de mostrar el componente sin el usuario', () => { 

    render(
        <UserContext.Provider value={ { user: null }}>
           <HomePage/> 
        </UserContext.Provider> );
 

    const preTag  = screen.getByLabelText('pre');
    //console.log( preTag.innerHTML );
    expect( preTag.innerHTML ).toBe('null') // IMPORTANTE PONERLO CON COMILLAS
  })

  test('Debe de mostrar el componente con el usuario', () => { 
    render(
        <UserContext.Provider value={ { user: user }}>
           <HomePage/> 
        </UserContext.Provider> );
    const preTag = screen.getByLabelText('pre');

    expect( preTag.innerHTML ).toContain( user.name );
    expect( preTag.innerHTML ).toContain( user.id.toString() );
  })

 })