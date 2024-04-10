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

                const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
                const promises = categories.map(category =>
                    fetch(`https://newsapi.org/v2/top-headlines?country=mx&category=${category}&pageSize=3&apiKey=0e7a20c3180a4c19bdeccd213a87e2e5`)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`Algo salió mal con la solicitud de la categoría ${category}`);
                            }
                            return response.json();
                        })
                );
                
                const results = await Promise.all(promises);
                const mergedArticles = results.flatMap(result => result.articles);

                setNoticias(mergedArticles);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const { IMG_NOTICIA } = noticiasMexicoAPI

    const categories = ['Negocios', 'Entretenimiento', 'General', 'Salud', 'Ciencia', 'Deportes', 'Tecnología'];


    return (
        
        <div className="noticias-container">
            <h1 className="whiteh1">Noticias de México</h1>
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

                <>
                    {noticias.map((noticia, index) => (
                       <div style={{ width: '100vw'}}>                          
                            {index % 3 === 0 && index !== noticias.length - 1 && <div className="categoria-separadora">{categories[(index / 3)]}</div>}

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
                            </div>
                    ))}
                </>

            ) : (
                <p className="sin-noticias">No se encontraron noticias.</p>
            )}
        </div>
    );
};

export default NoticiasMexico;
