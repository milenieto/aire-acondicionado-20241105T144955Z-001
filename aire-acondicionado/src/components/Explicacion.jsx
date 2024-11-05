import React from 'react';
import logo from '../assets/logo.jpg';

function Explicacion() {
  return (
    <div className='contenedor' id='home'>
      <div className='explicacion'>
        <h1>Termómetro Áulico</h1>
        <h4>
          El termómetro áulico, como lo indica su nombre, es un termómetro pensado en un contexto de colegio con el objetivo de
          tener a raya la temperatura de un curso o espacio bajo techo. Este nos ayudará a tener una temperatura estable y saludable
          para los alumnos de la institución, el mismo tendrá un límite de temperatura y al llegar a esta se encenderá el aire
          acondicionado o ventilador al que esté conectado, al mismo tiempo irá indicando la variación de la temperatura mediante unas
          luces y pantalla.
        </h4>
      </div>
      <div className='producto'>
        <img alt="producto" src={logo} width="500" height="500" className='logo' />
      </div>
    </div>
  );
}

export default Explicacion;