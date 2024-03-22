import React, { useEffect, useState } from 'react';

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
    <div>
      <h2>Recomendaciones de películas</h2>
      {peliculas.map((pelicula) => (
        <div key={pelicula.imdbID}>
          <h3>{pelicula.Title}</h3>
          <img src={pelicula.Poster} alt={pelicula.Title} />
        </div>
      ))}
    </div>
  );
}

export default Peliculas;
