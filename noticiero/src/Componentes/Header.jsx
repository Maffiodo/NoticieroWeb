import "../style/Header.css";

function Header() {
    return (
        <header>
            <div className="logo">
                <a href="/"><img src="https://i.imgur.com/FguKtbN.png" alt="Logo" /></a>
                <a href="/"><div className="logo-text">News Environment Project</div></a>
            </div>
            <nav>
                <div>
          
<a href="/"><img className="inicio-logo" src="/img/casa.png" alt="Logo" /></a>
<a href="Noticias">Noticias</a>
<a href="Clima">Clima</a>
<a href="Epic Games">Juegos</a>
<a href="Peliculas">Peliculas</a>

                </div>
            </nav>
            <div className="social-media">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <img src="/img/facebook.png" alt="Logo de Facebook" />
</a>
<a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <img src="/img/twitter.png" alt="Logo de Twitter" />
</a>
<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <img src="/img/instagram.png" alt="Logo de Instagram" />
</a>

            </div>
        </header>
    );
}

export default Header;
