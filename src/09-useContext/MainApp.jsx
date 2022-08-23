
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage, LoginPage, AboutPage } from './';

export const MainApp = () => {




  return (
 
    <>
      <h1>MainApp</h1>
      <hr></hr> 

      <Routes>
        <Route path = "/" element = { <HomePage/> }/>
        <Route path = "login" element = { <LoginPage/> }/>
        <Route path = "about" element = { <AboutPage/> }/>

        <Route path = "/*" element = { <Navigate to="/" /> } /> {/* ESTO SE UTILIZA PARA REDIRIGIR A LA PERSONA CUANDO ESCRIBE UNA RUTA QUE NO EXISTE EN NUESTRA APLICACIÓN*/}
      </Routes> 
    </>
  )
}
