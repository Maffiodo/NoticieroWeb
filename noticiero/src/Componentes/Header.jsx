import "../style/Header.css";

function Header() {
    return (
        <header>
            <div className="logo">
                <img src="https://i.imgur.com/FguKtbN.png" alt="Logo" />
                <div className="logo-text">News Environment Project</div>
            </div>
            <nav>
                <a href="Clima">Clima</a>
                <a href="Noticias">Noticias</a>
                <a href="Deportes">Deportes</a>
                <a href="Peliculas">Peliculas</a>
            </nav>
        </header>
    );
}

export default Header;
