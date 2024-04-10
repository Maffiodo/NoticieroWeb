import React, { useEffect, useState } from 'react';
import '../style/Peliculas.css';
import { idsPeliculas, peliculasAPI } from './Constants';

function Peliculas() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const obtenerPeliculas = async () => {
      // Lista de IDs de películas para obtener detalles
      const { URL } = peliculasAPI
      const fetchFilm = async (id) => {
        const response = await fetch(URL(id));
        return response.json();
      }

      const promisesArray = [];
      idsPeliculas.forEach((film) => {
        promisesArray.push(fetchFilm(film))
      })

      Promise.all(promisesArray)
      .then(results => {
        console.log("All requests completed successfully.");
        setPeliculas(results);
        // return results
      })
      .catch(error => {
        console.error("An error occurred:", error);
      });
    };

    obtenerPeliculas();
  }, []);

  if (peliculas.length === 0) {
    return <div>Cargando información de las películas...</div>;
  }

  return (
    <div className='blackdiv'><h1 className='blackreddiv'>NETFLIX</h1>
    <div className="peliculas-container">
      <h2 className="titulo-peliculas">Recomendaciones de las Mejores <h1 className="titulo-semanal">peliculas para botanear</h1></h2>
  
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
