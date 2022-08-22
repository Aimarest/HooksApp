import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef();
 
    const onClickRef = () =>{

        inputRef.current.select() //ESTO HACE QUE CUANDO YO PULSE EL BOTÓN SE SELECCIONE LO QUE TENGO ESCRITO EN EL INPUT CON ESTA REFERENCIA.

    }
    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
                ref={ inputRef } 
            />
              <input
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control mt-2"
            />
            <button onClick={ onClickRef } className="btn btn-primary mt-2">
                Set focus
            </button>
        </>
    )
}
