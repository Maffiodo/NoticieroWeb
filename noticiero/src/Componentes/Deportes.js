import React, { useEffect, useState } from 'react';

const Deportes = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null); // Reseteamos el estado de error en cada nueva solicitud.
            try {
                const response = await fetch('https://sportapi7.p.rapidapi.com/api/v1/sport/football/live-categories', {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': 'f17768b7a8mshc3e7425ec96bd7dp1d5bd4jsn67af2baa188f',
                        'X-RapidAPI-Host': 'sportapi7.p.rapidapi.com'
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
        <div>
            {isLoading ? (
                <p>Cargando datos...</p>
            ) : error ? (
                <p>Ha ocurrido un error: {error}</p>
            ) : data ? (
                <>
                    {Object.entries(data).map(([key, value]) => (
                        <p key={key}>{key}: {JSON.stringify(value)}</p>
                    ))}
                </>
            ) : (
                <p>No se encontraron datos.</p>
            )}
        </div>
    );
};

export default Deportes;
