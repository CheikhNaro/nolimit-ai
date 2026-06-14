import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getAi, categoryMap, aisByCategory } from "../data/ais";
import { useFavorites } from "../context/FavoritesContext";
import AICard from "../components/AICard";
import { ArrowLeft, External, Heart } from "../components/Icons";

export default function Detail() {
  const { id } = useParams();
  const ai = getAi(id);
  const { isFav, toggle } = useFavorites();

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!ai) {
    return (
      <div className="wrap empty" style={{ paddingTop: 120 }}>
        <div className="em">🚫</div>
        <h3>IA introuvable</h3>
        <p style={{ marginBottom: 24 }}>Cet outil n'existe pas ou a été déplacé.</p>
        <Link to="/explorer" className="btn btn-primary">Retour à l'explorateur</Link>
      </div>
    );
  }

  const cat = categoryMap[ai.category];
  const fav = isFav(ai.id);
  const host = (() => { try { return new URL(ai.url).hostname.replace("www.", ""); } catch { return ai.url; } })();
  const related = aisByCategory(ai.category).filter((a) => a.id !== ai.id).slice(0, 4);

  return (
    <div className="detail">
      <div className="wrap">
        <Link to="/explorer" className="back-link"><ArrowLeft /> Tous les outils</Link>

        <motion.div
          className="detail-hero"
          style={{ "--d-accent": cat.accent, marginTop: 18 }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="detail-top">
            <div className="detail-logo">{ai.name.charAt(0)}</div>
            <div>
              <h1>{ai.name}</h1>
              <span className="detail-cat">{cat.glyph} {cat.label} — {cat.tagline}</span>
            </div>
          </div>

          <p className="detail-desc">{ai.desc}</p>

          <div className="detail-tags">
            {ai.tags.map((t) => <span key={t} className="chip">#{t}</span>)}
            {ai.free && <span className="chip" style={{ color: cat.accent }}>● Gratuit</span>}
            {ai.hot && <span className="chip" style={{ color: "var(--red)" }}>🔥 Populaire</span>}
          </div>

          <div className="detail-actions">
            <a href={ai.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Lancer {ai.name} <External />
            </a>
            <button
              className="btn btn-ghost"
              onClick={() => toggle(ai.id)}
              style={fav ? { borderColor: "var(--red)", color: "var(--red)" } : undefined}
            >
              <Heart filled={fav} /> {fav ? "Dans tes favoris" : "Ajouter aux favoris"}
            </button>
          </div>

          <div className="detail-meta-grid">
            <div className="meta-cell">
              <div className="k">Catégorie</div>
              <div className="v" style={{ color: cat.accent }}>{cat.label}</div>
            </div>
            <div className="meta-cell">
              <div className="k">Accès</div>
              <div className="v">{ai.free ? "Gratuit" : "Freemium"}</div>
            </div>
            <div className="meta-cell">
              <div className="k">Site</div>
              <div className="v"><a href={ai.url} target="_blank" rel="noopener noreferrer">{host}</a></div>
            </div>
            <div className="meta-cell">
              <div className="k">Tags</div>
              <div className="v">{ai.tags.length}</div>
            </div>
          </div>
        </motion.div>

        {related.length > 0 && (
          <>
            <h2 className="related-head">Dans la même catégorie</h2>
            <div className="grid">
              {related.map((r) => <AICard key={r.id} ai={r} grid />)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
