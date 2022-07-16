import React, {useState} from 'react'
import PropTypes from 'prop-types'

function GreetingF(props) {

    //const [variable, metodo para actualizarlo] = useState(valor inicial)
    const [age, setage] = useState(29)
    
    const birthday = () => {
        // actualizamos el State
        setage (age + 1) // dentro del () se le pasa el valor
    }

  return (
    <div>
        <h1>
            Hola {props.name} desde componente funcional!
        </h1>
        <h2>
            Edad actual es {age}
        </h2>
        <button onClick={birthday}>
            Cumplir años 
        </button>
    </div>
  )
}

GreetingF.propTypes = {
    name: PropTypes.string
}

export default GreetingF

