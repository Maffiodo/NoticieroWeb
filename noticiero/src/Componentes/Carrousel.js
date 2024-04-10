import React, { useState, useEffect } from 'react';
import '../style/Carrousel.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { carrouselAPI } from './Constants';

const Carrousel = () => {
  const [games, setGames] = useState([]);
  const buttonStyle = {
    backgroundColor: '#4CAF50', /* Green */
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '12px'
  };
  useEffect(() => {
    const {URL, METHOD, API_KEY, API_HOST} = carrouselAPI
    const fetchGames = async (start, end) => {
      const url = URL;
      const options = {
        method: METHOD,
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': API_HOST
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        const limitedResult = result.slice(start, end); // Limita los resultados a los primeros 15
    setGames(limitedResult);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGames(0, 10);
  }, []);

  return (
    <div>
      <head>
       
      </head>
      <div className='blackdiv'>
      <h1 className='blackdiv'>
          Nuevos Lanzamientos  de Epic Games
          </h1>
      {games.length > 0 && (
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          transitionTime={500}
        >
          {games.map((game, index) => (
            <div key={index} className="img-style">
              <img src={game.keyImages[0].url} alt={game.title} />
              <div className="carousel-text">
                <h2>{game.title}</h2>
                {game.currentPrice === 0 ? (
                  <p>Gratis</p>
                ) : (
                  <p>${game.currentPrice}</p>
                )}
                <button style={buttonStyle} onClick={() => window.open(game.url, '_blank')}>Ir al juego</button>

              </div>
            </div>
          ))}
        </Carousel>
      )}

       </div>
    </div>
  );
};

export default Carrousel;