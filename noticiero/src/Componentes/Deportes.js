import React, { useEffect, useState } from 'react';
import '../style/Deportes.css';
import { deportesAPI } from './Constants';

const Deportes = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const { URL, API_KEY, API_HOST, METHOD } = deportesAPI
        const fetchData = async () => {
            setIsLoading(true);
            setError(null); // Reseteamos el estado de error en cada nueva solicitud.
            try {
                const response = await fetch(URL, {
                    method: METHOD,
                    headers: {
                        'X-RapidAPI-Key': API_KEY,
                        'X-RapidAPI-Host': API_HOST
                    }
                });
                if (!response.ok) throw new Error('Algo salió mal con la solicitud.');
                
                const data = await response.json();

                setData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="deportes-container">
            {isLoading ? (
                <p>Cargando datos...</p>
            ) : error ? (
                <p>Ha ocurrido un error: {error}</p>
            ) : data ? (
                <>
                    {data.events.slice(0, 10).map((event, index) => (
                        <div key={index} className="event-card" style={{backgroundImage: `url(https://media.istockphoto.com/id/493894950/es/v%C3%ADdeo/noche-el-estadio-de-f%C3%BAtbol-de-fondo-total-de-espectadores.jpg?s=640x640&k=20&c=G-vcbCeyLeIv2vUM6qB3T1lzseZVKJUwzUH00AUQ0f8=)`}}>
                            <h2>{event.homeTeam.name} vs {event.awayTeam.name} </h2>
                            <p>{event.tournament.name}</p>
                            <p>{event.status.description}</p>
                        </div>
                    ))}
                </>
            ) : (
                <p>No se encontraron datos.</p>
            )}
        </div>
    );
};

export default Deportes;
