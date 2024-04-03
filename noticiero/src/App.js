
import React from 'react';
import Clima from './Componentes/Clima';
import Peliculas from './Componentes/Peliculas';
import Deportes from './Componentes/Deportes';
import NoticiasMexico from './Componentes/NoticiasMexico';
import Header from './Componentes/Header';


function App() {
  return (
    <div>
      <Header/>
      <Clima /> 
      <Peliculas/>
      <Deportes/>
      <NoticiasMexico/>
    </div>
  );
}

export default App;
