import React, { useEffect, useState } from 'react';
import '../style/Clima.css';
import { climaAPI } from './Constants';

function Clima() {
  const [clima, setClima] = useState(null);

  useEffect(() => {
  const {URL} = climaAPI
  const obtenerClima = async () => {
      
      try {
        const response = await fetch(URL);
        const result = await response.json();
        setClima(result);
      } catch (error) {
        console.error(error);
      }
    };

    obtenerClima();
  }, []);

  if (!clima) {
    return <div>Cargando información del clima...</div>;
  }
    const {BG_IMG} = climaAPI;
    return (
      <div className="container">
        <h1 className='whiteh1'>Clima de 5 días en Chihuahua Chihuahua</h1>

        <div className="card-container">
          {clima.daily.time.slice(0, 7).map((time, i) => {
            const fecha = new Date(time);
            const diaSemana = fecha.toLocaleDateString('es-ES', { weekday: 'long' });
            return (
              <div className="card" key={i} style={{backgroundImage: `url(https://council.science/wp-content/uploads/2021/03/sam-schooler-E9aetBe2w40-unsplash-clouds-weather-sky-gcos-e1614965867837-1536x768.jpg)`}}>
                <h3>Clima Chihuahua, Chihuahua</h3>
                <div className="table-container">
                  <table>
                    <thead>
                      <tr className='centrar'>
                        <th>Día</th>
                        <th>Máxima</th>
                        <th>Mínima</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{diaSemana}</td>
                        <td>{clima.daily.temperature_2m_max[i]}°C</td>
                        <td>{clima.daily.temperature_2m_min[i]}°C</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  export default Clima;
