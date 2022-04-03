import React from 'react'

function TopMessage({num}) {
  return (
    <>
        <h3>Crear Equipo {num}</h3>
        <h5>Debe contener 1 arquero</h5>
        <h5>y 4 jugadores de campo</h5>
    </>
  )
}

export default TopMessage