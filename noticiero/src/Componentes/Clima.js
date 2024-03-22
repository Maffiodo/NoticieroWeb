import React, { useEffect, useState } from 'react';
import '../style/Clima.css';

function Clima() {
  const [clima, setClima] = useState(null);

  useEffect(() => {
    const obtenerClima = async () => {
      const latitud = 28.6352800;
      const longitud = -106.0888900;
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum`;

      try {
        const response = await fetch(url);
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

  return (
    <div className="container">
      <div className="card-container">
        {clima.daily.time.slice(0, 5).map((time, i) => (
          <div className="card" key={i}>
            <h3>Información del clima</h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr className='centrar'>
                    <th>Fecha</th>
                    <th>máxima </th>
                    <th>mínima</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{time}</td>
                    <td>{clima.daily.temperature_2m_max[i]}°C </td>
                    <td>{clima.daily.temperature_2m_min[i]}°C</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clima;