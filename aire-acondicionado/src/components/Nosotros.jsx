import React from 'react';
import Tarjetas from './Tarjetas';
import mile from '../assets/Mile.jpg';
import tomi from '../assets/Tomi.jpg';
import uma from '../assets/Uma.jpg';
import pau from '../assets/pau.jpg';

const miembros = [
  { id: 1, foto: mile, nombre: 'Milena Nieto' },
  { id: 2, foto: tomi, nombre: 'Tomás Retamar' },
  { id: 3, foto: uma, nombre: 'Uma Lubbatti' },
  { id: 4, foto: pau, nombre: 'Paula Olariaga' },
];

function Nosotros() {
  return (
    <div className='nosotros' id='nosotros'>
      <h1>Nuestro grupo!</h1>
      <div className='nosotros-orden'>
        {miembros.map((miembro) => (
          <Tarjetas key={miembro.id} foto={miembro.foto} name={miembro.nombre} />
        ))}
      </div>
    </div>
  );
}

export default Nosotros;