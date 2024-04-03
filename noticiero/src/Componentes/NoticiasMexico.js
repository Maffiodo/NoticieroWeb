import React, { useEffect, useState } from 'react';
import '../style/NoticiasMexico.css';

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
                            <img className="noticia-imagen" src="https://www.telemundo.com/sites/nbcutelemundo/files/styles/sponsored_image_medim/public/9b_latinx_ultimasnoticias_pp_1200x200.jpg?itok=UAUkV9W7" alt="Imagen no disponible" />
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