import "../style/Header.css";

function Header() {
    return (
        <header>
            <div className="logo">
            <a href="/"><img src="https://i.imgur.com/FguKtbN.png" alt="Logo" /></a>
            <a href="/"><div className="logo-text">News Environment Project</div></a>
            </div>
            <nav>
            
                <a href="Epic Games">Juegos</a>
                <a href="Clima">Clima</a>
                <a href="Noticias">Noticias</a>
                <a href="Deportes">Deportes</a>
                <a href="Peliculas">Peliculas</a>
            </nav>
        </header>
    );
}

export default Header;
