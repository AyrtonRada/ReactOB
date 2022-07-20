import React, { useState, useEffect } from 'react'

const Life_cycle = () => {
    
    const data = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Ayrton',
        apellidos: 'Rada Espinoza'
    }

   const [fecha, set_fecha] = useState(data)

    useEffect(() => {

    const timerID = setInterval(() => {
            //** tick() es un actualizador de contenido 
           actualice_user()
        }, 1000);

        return () => {
          clearInterval(timerID)
        };
    })

    const actualice_user = () => {
        return set_fecha({
            fecha: fecha.fecha,
            edad: fecha.edad + 1,
            nombre: fecha.nombre,
            apellidos: fecha.apellidos
        })
    }
  
    return (
    <div>
      <h2>
          Hora Actual: { fecha.fecha.toLocaleTimeString()}
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

export default Life_cycle