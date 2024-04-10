
import React from 'react';
import Clima from './Componentes/Clima';
import Peliculas from './Componentes/Peliculas';
import Deportes from './Componentes/Deportes';
import NoticiasMexico from './Componentes/NoticiasMexico';
import {Route,Routes,BrowserRouter}from "react-router-dom";
import Header from './Componentes/Header';

import Carousel from './Componentes/Carrousel'; 



function App() {
  return (


    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/" element={<MainComponenteWithProps />}
        />
        <Route
          path="/Epic Games" element={<Carousel />}
        />
        <Route
          path="/Clima" element={<Clima />}
        />
        <Route
          path="/Noticias" element={<NoticiasMexico/>}
        />
        <Route
          path="/Deportes" element={<Deportes/>}
        />
        <Route
          path="/Peliculas" element={<Peliculas/>}
        />
      </Routes>
      
    </BrowserRouter>
  );
}


function MainComponenteWithProps() {
  return (
    <>
      <Carousel/>
      <Clima />
      <Deportes />
      <Peliculas />
      <NoticiasMexico />
    </>

  );
}
function noticias(){
  return(
    <>
    </>
  )
}

export default App;
