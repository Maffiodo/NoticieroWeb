import React, { useEffect, useState } from 'react';
import '../style/Peliculas.css';

function Peliculas() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const obtenerPeliculas = async () => {
      // Lista de IDs de películas para obtener detalles
      const idsPeliculas = ['tt3896198', 'tt1375666', 'tt0816692', 'tt6751668', 'tt7286456'];

      const detallesPeliculas = await Promise.all(
        idsPeliculas.map(async (id) => {
          const url = `http://www.omdbapi.com/?i=${id}&apikey=ec0bec91`;
          const response = await fetch(url);
          const pelicula = await response.json();
          return pelicula;
        })
      );

      setPeliculas(detallesPeliculas);
    };

    obtenerPeliculas();
  }, []);

  if (peliculas.length === 0) {
    return <div>Cargando información de las películas...</div>;
  }

  return (
    <div className='blackdiv'><h1 className='blackreddiv'>NETFLIX</h1>
    <div className="peliculas-container">
      <h1 className="titulo-peliculas">Recomendaciones de las Mejores <h2 className="titulo-semanal">peliculas para botanear</h2></h1>
  
      {peliculas.map((pelicula) => (
        <div className="pelicula" key={pelicula.imdbID}>
        <h3>{pelicula.Title}</h3>
        <div className="pelicula-imagen">
          <img src={pelicula.Poster} alt={pelicula.Title} />
        </div>
      </div>
      ))}
    </div>
    </div>
  );
}

export default Peliculas;
