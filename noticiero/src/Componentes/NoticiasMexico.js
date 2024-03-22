import React, { useEffect, useState } from 'react';

const NoticiasMexico = () => {
    const [noticias, setNoticias] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null); // Reseteamos el estado de error en cada nueva solicitud.
            try {
                const response = await fetch('https://newsapi.org/v2/top-headlines?country=mx&apiKey=e6bd42d4a2fb45e3b0e3c1abc457699a');
                if (!response.ok) throw new Error('Algo salió mal con la solicitud.');
                
                const data = await response.json();

                setNoticias(data.articles);
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
            <h1>Noticias de México</h1>
            {isLoading ? (
                <p>Cargando noticias...</p>
            ) : error ? (
                <p>Ha ocurrido un error: {error}</p>
            ) : noticias.length > 0 ? (
                
                noticias.map((noticia, index) => (
                    <div key={index}>
                        <h2>{noticia.title}</h2>
                        {noticia.urlToImage ? (
                            <img src={noticia.urlToImage} alt={noticia.title} />
                        ) : (
                            <img src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/6721.png" alt="Imagen no disponible" />
                        )}
                        <p>{noticia.description}</p>
                        <a href={noticia.url}>Leer más</a>
                    </div>
                ))
            ) : (
                <p>No se encontraron noticias.</p>
            )}
        </div>
    );
};

export default NoticiasMexico;
