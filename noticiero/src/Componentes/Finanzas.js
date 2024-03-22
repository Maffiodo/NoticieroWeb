import React, { useEffect, useState } from 'react';

const Finanzas = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null); // Reseteamos el estado de error en cada nueva solicitud.
            try {
                const response = await fetch('https://api.fastforex.io/fetch-multi?api_key=78abbe7eed-504e98e08c-saqkkc&from=USD&to=EUR,GBP,CHF,MXN');
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
            ) : data && data.results ? (
                <>
                    <p>Base: {data.base}</p>
                    {Object.entries(data.results).map(([currency, rate]) => (
                        <p key={currency}>{currency}: {rate}</p>
                    ))}
                </>
            ) : (
                <p>No se encontraron datos.</p>
            )}
        </div>
    );
};

export default Finanzas;
