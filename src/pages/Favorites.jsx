import { Link } from "react-router-dom";
import { ais } from "../data/ais";
import { useFavorites } from "../context/FavoritesContext";
import AICard from "../components/AICard";
import { Heart } from "../components/Icons";

export default function Favorites() {
  const { favorites } = useFavorites();
  const items = ais.filter((a) => favorites.includes(a.id));

  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <h1>Tes <span className="accent">favoris</span></h1>
          <p>Ta sélection d'IA, gardée au chaud dans ce navigateur.</p>
        </div>
      </div>

      <div className="wrap" style={{ paddingTop: 24 }}>
        {items.length === 0 ? (
          <div className="empty">
            <div className="em" style={{ color: "var(--red)" }}><Heart filled style={{ width: 56, height: 56 }} /></div>
            <h3>Aucun favori pour l'instant</h3>
            <p style={{ marginBottom: 24 }}>
              Clique sur le cœur d'une IA pour la retrouver ici en un clin d'œil.
            </p>
            <Link to="/explorer" className="btn btn-primary">Explorer les IA</Link>
          </div>
        ) : (
          <>
            <div className="result-meta">
              <span className="count"><b>{items.length}</b> favori{items.length > 1 ? "s" : ""}</span>
            </div>
            <div className="grid">
              {items.map((ai) => <AICard key={ai.id} ai={ai} grid />)}
            </div>
          </>
        )}
      </div>
    </>
  );
}
