import React, { useState } from 'react'

//** Definiendo estilos:
// ? Usuario Logeado: 
const logged_style = {
    color: 'blue'
}

// ? Usuario no logeado
const unlogged_style = {
    color: 'tomato',
    fontWeight: ' bold'
}

const Greeting_styled = (props) => {

    //** Generamos un estado para el componenet y asi controlar si el usuario esta o no logueado
    const [logged, set_logged] = useState(false)
    const session_logged = () => {
        set_logged(!logged)
    }


    return (
    <div style={ logged ? logged_style : unlogged_style }>
        { logged ? 
        <h1> Hola, {props.name} </h1>
        :
        <h1> Please Login</h1>}
        <button onClick={ session_logged }>
                { logged ? 'Logout' : 'Login' }
        </button>
    </div>
  )
}

export default Greeting_styled
