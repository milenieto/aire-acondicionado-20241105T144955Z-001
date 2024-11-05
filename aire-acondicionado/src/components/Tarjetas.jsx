import React from 'react';

function Tarjetas({ foto, name }) {
  return (
    <div className='tarjeta'>
      <img className='participante' src={foto} alt={name} />
      <div>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Tarjetas;