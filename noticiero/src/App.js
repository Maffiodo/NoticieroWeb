
import React from 'react';
import Clima from './Componentes/Clima';
import Peliculas from './Componentes/Peliculas';
import Deportes from './Componentes/Deportes';
import NoticiasMexico from './Componentes/NoticiasMexico';
import Header from './Componentes/Header';

import Carousel from './Componentes/Carrousel'; 



function App() {
  return (
    <div>
      <Header/>
      <Carousel />
      <br/>
      <Peliculas/>
      <NoticiasMexico/>
      <Clima /> 
      <Deportes/>
     
    </div>
  );
}

export default App;
