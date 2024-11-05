import React from 'react';
import proceso1 from '../assets/proceso1.jpg';

const procesoInfo = [
  {
    id: 1,
    titulo: "Investigación de Productos Similares",
    contenido: `Al terminar la investigación de los productos similares que se encuentran en el mercado respecto a nuestro proyecto, 
                procedimos con la selección de elementos/piezas a usar para el termómetro áulico. Para comenzar averiguamos en 
                Tinkercad si existía algún esquema del armado del proyecto para guiarnos; desde el principio sabíamos que íbamos 
                a necesitar un sensor de temperatura sin falta ya que poder medir la temperatura es la función principal de nuestro diseño.`,
  },
  {
    id: 2,
    titulo: "Selección de Componentes",
    contenido: `También necesitaríamos de LEDs para indicar la intensidad de la temperatura. Con lo último en mente logramos fusionar 
                varios diseños ya hechos para lograr crear uno que se adaptara a lo que queríamos. Para complejizar el armado y que 
                nuestro proyecto esté más completo, le agregamos un display que irá indicando la temperatura y avisará cuando la misma 
                empiece a ser riesgosa para los alumnos.`,
  },
  {
    id: 3,
    titulo: "Adición de Sensores y Mejoras",
    contenido: `Al mismo tiempo nos percatamos de que para facilitar un poco el encendido del ventilador, iba a ser necesario un sensor 
                infrarrojo que fue recomendado por el profesor. Teniendo en cuenta lo ya descrito anteriormente, tuvimos un armado inicial.`,
  }
];

function Proceso() {
  return (
    <div className='proceso' id='proceso'>
      <div className='texto'>
        <h1>Proceso</h1>
        {/* Usamos map() para recorrer el array de procesoInfo */}
        {procesoInfo.map((item) => (
          <div key={item.id}>
            <h2>{item.titulo}</h2>
            <p>{item.contenido}</p>
          </div>
        ))}
      </div>
      <img className='img-proceso' src={proceso1} alt="Proceso" />
    </div>
  );
}

export default Proceso;