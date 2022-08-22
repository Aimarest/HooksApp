
import React from 'react';
export const ShowIncrement = React.memo( ( { increment } ) => {


    const onClick = () =>{
        increment( 5 ); 
    }
  return (
<button 
className="btn btn-primary"
onClick={ onClick }>
    Incrementar
</button>
  )
}
)