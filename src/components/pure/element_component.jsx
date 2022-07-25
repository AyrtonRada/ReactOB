import React, { useRef } from 'react'

const component = () => {
    return(
        <div>

        </div>
    )
}

const cuadrado = {
    width: '255px',
    height: '255px',
    color: 'black'
}

const Element_component = () => {
  
  let red = 0
  let green = 125
  let blue = 200

  function cambio_de_color(){
    cuadrado.color = `rgb(${red},${green}, ${blue})`
  }
    return (
    <div style={cuadrado} onMouseOver={cambio_de_color()} onMouseOut={cuadrado.color} onDoubleClick={cuadrado.color}>
        {component}
    </div>
  )
}

export default Element_component
