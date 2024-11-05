import React from 'react';
import './App.css';
import Navegador from './components/Navegador';
import Explicacion from './components/Explicacion';
import Proceso from './components/Proceso';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';

function App() {
  return (
    <>
      <Navegador />
      <Explicacion />
      <Proceso />
      <Nosotros />
      <Contacto />
    </>
  );
}

export default App;