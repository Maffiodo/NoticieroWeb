
import React from 'react';
import Clima from './Componentes/Clima';
import Peliculas from './Componentes/Peliculas';
import Deportes from './Componentes/Deportes';
import NoticiasMexico from './Componentes/NoticiasMexico';


function App() {
  return (
    <div>
      
      <Clima /> 
      <Peliculas/>
      <Deportes/>
      <NoticiasMexico/>
    </div>
  );
}

export default App;
