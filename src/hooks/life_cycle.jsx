import React, { useState, useEffect } from 'react'

const life_cycle = () => {
    
    const [fecha, set_fecha] = useState(data)

    const data = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Ayrton',
        apellidos: 'Rada Espinoza'
    }
    
    function tick(){
        set_fecha( fecha.edad + 1)
    }

    const timerID = setInterval(() => {
       tick()
    }, 1000);

    useEffect(() => {
        return () => {
              timerID
        };
    }, [])
    
    const clear = clearInterval(timerID)

    useEffect(() => {
        return () => {
            clear
        };
    })
  
    return (
    <div>
      <h2>
          Hora Actual: { fecha.toLocaleTimeString() }
      </h2>
      <h3>
          { fecha.nombre } { fecha.apellidos }
      </h3>
      <h1>
          Edad: { fecha.edad }
      </h1>
    </div>
  )
}

export default life_cycle