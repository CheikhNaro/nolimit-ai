import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categoryMap } from "../data/ais";
import { useFavorites } from "../context/FavoritesContext";
import { Heart } from "./Icons";

export default function AICard({ ai, grid = false }) {
  const cat = categoryMap[ai.category];
  const { isFav, toggle } = useFavorites();
  const fav = isFav(ai.id);
  const ref = useRef(null);

  // subtle 3D tilt toward the cursor
  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `translateY(-4px) rotateX(${py * -3}deg) rotateY(${px * 4}deg)`;
  }
  function onLeave() {
    if (ref.current) ref.current.style.transform = "";
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ "--card-accent": cat.accent, transformStyle: "preserve-3d" }}
      className={`card ${grid ? "grid-card" : ""} ${ai.hot ? "with-hot" : ""}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {ai.hot && <span className="badge-hot">HOT</span>}
      <div className="card-top">
        <Link to={`/ia/${ai.id}`} className="card-logo" aria-label={ai.name}>
          {ai.name.charAt(0)}
        </Link>
        <button
          className={`card-fav ${fav ? "on" : ""}`}
          onClick={(e) => { e.preventDefault(); toggle(ai.id); }}
          aria-label={fav ? "Retirer des favoris" : "Ajouter aux favoris"}
          aria-pressed={fav}
        >
          <Heart filled={fav} />
        </button>
      </div>

      <Link to={`/ia/${ai.id}`} style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 className="card-name">{ai.name}</h3>
        <p className="card-desc">{ai.desc}</p>
        <div className="card-foot">
          <span className="card-cat">{cat.label}</span>
          {ai.tags.slice(0, 2).map((t) => (
            <span key={t} className="card-tag">#{t}</span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
