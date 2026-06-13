import { NavLink, Link, useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { Search, Heart, Bolt } from "./Icons";

export default function Navbar() {
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link to="/" className="brand">
          <span className="mark"><Bolt /></span>
          <span><span className="no">MegaIA</span><span className="limit"> Pro</span></span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end>Accueil</NavLink>
          <NavLink to="/explorer">Explorer</NavLink>
          <NavLink to="/favoris">Favoris</NavLink>
        </nav>

        <span className="nav-spacer" />

        <button className="nav-search" onClick={() => navigate("/explorer")}>
          <Search width="16" height="16" />
          Rechercher une IA
          <kbd>/</kbd>
        </button>

        <Link to="/favoris" className="nav-fav" aria-label="Favoris">
          <Heart filled={favorites.length > 0} />
          {favorites.length > 0 && <span className="count">{favorites.length}</span>}
        </Link>

        <button className="nav-burger" onClick={() => navigate("/explorer")} aria-label="Menu">
          <Search width="18" height="18" />
        </button>
      </div>
    </header>
  );
}
