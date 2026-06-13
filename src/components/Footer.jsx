import { Link } from "react-router-dom";
import { categories } from "../data/ais";
import { Bolt } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-inner">
          <div>
            <Link to="/" className="brand">
              <span className="mark"><Bolt /></span>
              <span><span className="no">MegaIA</span><span className="limit"> Pro</span></span>
            </Link>
            <p>
              Le portail des intelligences artificielles. Découvre, filtre et lance
              les meilleurs outils IA — gratuits, classés et toujours à jour.
            </p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h4>Catégories</h4>
              {categories.slice(0, 5).map((c) => (
                <Link key={c.id} to={`/explorer?cat=${c.id}`}>{c.label}</Link>
              ))}
            </div>
            <div className="footer-col">
              <h4>Plus</h4>
              {categories.slice(5).map((c) => (
                <Link key={c.id} to={`/explorer?cat=${c.id}`}>{c.label}</Link>
              ))}
            </div>
            <div className="footer-col">
              <h4>Naviguer</h4>
              <Link to="/">Accueil</Link>
              <Link to="/explorer">Explorer tout</Link>
              <Link to="/favoris">Mes favoris</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} MegaIA Pro — toute l'IA au même endroit.</span>
          <span>Données curées depuis fmhy.net/ai</span>
        </div>
      </div>
    </footer>
  );
}
