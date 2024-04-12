import React from 'react';
import Clima from './Componentes/Clima';
import Peliculas from './Componentes/Peliculas';
import NoticiasMexico from './Componentes/NoticiasMexico';
import {Route,Routes,BrowserRouter}from "react-router-dom";
import Header from './Componentes/Header';
import Carousel from './Componentes/Carrousel'; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/Epic Games" element={<Carousel />} />
        <Route path="/Clima" element={<Clima />} />
        <Route path="/Noticias" element={<NoticiasMexico/>} />
        <Route path="/Peliculas" element={<Peliculas/>} />
      </Routes>
    </BrowserRouter>
  );
}

function MainComponent() {
  const creators = [
    { name: "Erick Maffiodo", description: "La idea surgio para que las personas puedan estar al pendiente de las noticias mas importantes de Mexico", image: "/img/fotoerick.jpg" },
    { name: "Raquel Almuina", description: "Me encanto la idea de poder compartir lo que sucede en Mexico, pero dandole un plus que ninguna otra pagina de noticias da", image: "/img/fotoraque.jpg" },
    { name: "Jorge López", description: "Me encanto desarrollar la pagina, ayudar a otras personas y adentrarme en como poder ayudar de verdad a la gente", image: "/img/foto.jpg" },
  ];

  return (
    <>
      <div className="main-content">
        <div className="events section">
          <h2>Eventos</h2>
          <div className="event-item">
            <h3>Cierre de catrimestre en la utch</h3>
            <p>La UTCH esta a una nada de acabar cuatrimestre</p>
          </div>
          <div className="event-item">
            <h3>Podremos pasar con el profesor? </h3>
            <p>se revisara </p>
          </div>
          <div className="event-item">
            <h3>Espero nos ponga 10</h3>
            <p>Nomas que suba la calificacion a proyecta</p>
          </div>
        </div>
        <div className="blogs section">
          <h2>Blogs</h2>
          <div className="blog-item">
            <h3>El blog escolar</h3>
            <p>Aqui no hay nada</p>
          </div>
          <div className="blog-item">
            <h3>El blog de bloges</h3>
            <p>aqui tampoco</p>
          </div>
          <div className="blog-item">
            <h3>El blog del RA</h3>
            <p>aqui menos</p>
          </div>
        </div>
        <div className="videos section">
          <h2>Videos</h2>
          <div className="video-item">
            <h3>Musica alterada</h3>
            <p>Solo hay musica alterada</p>
          </div>
          <div className="video-item">
            <h3>Musica triste</h3>
            <p>Aqui solo hay musica triste</p>
          </div>
          <div className="video-item">
            <h3>Musica de rock</h3>
            <p>Aqui solo hay musica de rock</p>
          </div>
        </div>
      </div>
      <div className="creadores">
  <h2>Conoce a los creadores</h2>
  <div className="creators">
    {creators.map((creator, index) => (
      <div key={index} className="card">
        <img src={creator.image} alt={creator.name} />
        <div className="text">
          <h3>{creator.name}</h3>
          <p>{creator.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>
      <div className="about">
        <div className="about-section">
          <h2>Nosotros</h2>
          <p>Somos un equipo dedicado a proporcionar las noticias más recientes y relevantes. Nuestro compromiso es con la verdad y la precisión en todo lo que hacemos.</p>
        </div>
        
        <div className="about-section">
          <h2>Visión</h2>
          <p>Nuestra visión es ser la fuente de noticias más confiable. Queremos ser reconocidos por nuestra integridad, nuestra precisión y nuestro compromiso con la verdad.</p>
        </div>
        <div className="about-section">
          <h2>Misión</h2>
          <p>Nuestra misión es informar al público con precisión y responsabilidad. Creemos en el poder de la información para mejorar nuestras comunidades y nuestro mundo.</p>
        </div>
      </div>
    </>
  );
}

export default App;