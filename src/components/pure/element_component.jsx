import React, { useRef } from 'react'

const Component = () => {
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
  function detener(){
      cuadrado.color = 'black'
  }
  let red = 0
  let green = 125
  let blue = 200

  function cambio_de_color(){
    cuadrado.color = `rgb(${red},${green}, ${blue})`
  }
    return (
    <div style={cuadrado} onMouseOver={cambio_de_color} onMouseOut={detener} onDoubleClick={detener}>
        {Component}
    </div>
  )
}

export default Element_component
