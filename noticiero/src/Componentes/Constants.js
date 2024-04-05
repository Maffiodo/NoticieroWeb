
export const carrouselAPI = {
    URL: "https://epic-store-games.p.rapidapi.com/onSale?All&locale=us&country=us",
    API_KEY: "5a2cdbf83bmsh7d96b1f62a262fap1e66cfjsne6a98560ee43",
    API_HOST: "epic-store-games.p.rapidapi.com",
    METHOD: "GET"
}

const latitud = 28.6352800;
const longitud = -106.0888900;

export const climaAPI = {
   URL: `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum`,
   BG_IMG: `url(https://council.science/wp-content/uploads/2021/03/sam-schooler-E9aetBe2w40-unsplash-clouds-weather-sky-gcos-e1614965867837-1536x768.jpg)`
}

export const deportesAPI = {
    URL: 'https://sportapi7.p.rapidapi.com/api/v1/sport/football/events/live',
    API_KEY: '9b3ac0e899msh76b965c36dca254p161cf8jsnab5d37dedaf4',
    API_HOST: 'sportapi7.p.rapidapi.com',
    METHOD: 'GET'
}

export const noticiasMexicoAPI = {
    URL: 'https://newsapi.org/v2/top-headlines?country=mx&apiKey=e6bd42d4a2fb45e3b0e3c1abc457699a',
    IMG_NOTICIA: 'https://www.telemundo.com/sites/nbcutelemundo/files/styles/sponsored_image_medim/public/9b_latinx_ultimasnoticias_pp_1200x200.jpg?itok=UAUkV9W7'
}

export const idsPeliculas = ['tt3896198', 'tt1375666', 'tt0816692', 'tt6751668', 'tt7286456'];
export const peliculasAPI = {
    URL: (payload) => { return `http://www.omdbapi.com/?i=${payload}&apikey=ec0bec91`}
}