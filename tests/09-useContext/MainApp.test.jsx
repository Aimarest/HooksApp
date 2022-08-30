import { render, screen } from '@testing-library/react';
import { MainApp } from '../../src/09-useContext/MainApp';
import { MemoryRouter } from 'react-router-dom'

describe('Pruebas sobre el componente MainApp', () => {

    test('Debe de mostrar el HomePage cuando estemos en la ruta principal', () => {

        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('HomePage')).toBeTruthy()
        //screen.debug()


    })


    test('Debe de mostrar el LoginPage cuando estamos en esa ruta', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('LoginPage')).toBeTruthy()
        //screen.debug()


    })

    test('Debe de mostrar el AboutPage cuando estamos en esa ruta', () => {

        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('AboutPage')).toBeTruthy()
        //screen.debug()


    })
})