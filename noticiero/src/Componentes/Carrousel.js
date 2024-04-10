import React, { useState, useEffect } from 'react';
import '../style/Carrousel.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
    const fetchGames = async () => {
      const url = 'https://epic-store-games.p.rapidapi.com/onSale?All&locale=us&country=us';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '5a2cdbf83bmsh7d96b1f62a262fap1e66cfjsne6a98560ee43',
          'X-RapidAPI-Host': 'epic-store-games.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        const limitedResult = result.slice(0, 10); // Limita los resultados a los primeros 15
    setGames(limitedResult);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGames();
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
            <div key={index}>
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