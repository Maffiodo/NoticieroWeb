import React, { useEffect, useState } from 'react';
import '../style/NoticiasMexico.css';
import { noticiasMexicoAPI } from './Constants';

const NoticiasMexico = () => {
    const [noticias, setNoticias] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const { URL } = noticiasMexicoAPI
        const fetchData = async () => {
            setIsLoading(true);
            setError(null); // Reseteamos el estado de error en cada nueva solicitud.
            try {
                const response = await fetch(URL);
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
    const { IMG_NOTICIA } = noticiasMexicoAPI
    return (
        <div className="noticias-container">
            <h1 className="titulo">Noticias de México</h1>
            {isLoading ? (
                <p className="cargando">Cargando noticias...</p>
            ) : error ? (
                <p className="error">Ha ocurrido un error: {error}</p>
            ) : noticias.length > 0 ? (
                noticias.map((noticia, index) => (
                    <div key={index} className="noticia">
                        <h2 className="noticia-titulo">{noticia.title}</h2>
                        <p className="noticia-descripcion">Autor: {noticia.author}</p>
                        <a className="noticia-link" href={noticia.url}>Leer más</a>
                        <br />
                        {noticia.urlToImage ? (
                            <img className="noticia-imagen" src={noticia.urlToImage} alt={noticia.title} />
                        ) : (
                            <img className="noticia-imagen" src={IMG_NOTICIA} alt="Imagen no disponible" />
                        )}
                    </div>
                ))
            ) : (
                <p className="sin-noticias">No se encontraron noticias.</p>
            )}
        </div>
    );
};

export default NoticiasMexico;