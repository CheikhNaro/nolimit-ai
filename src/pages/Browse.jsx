import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ais, categories } from "../data/ais";
import AICard from "../components/AICard";
import { Search } from "../components/Icons";

export default function Browse() {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const active = params.get("cat") || "all";
  const inputRef = useRef(null);

  // focus shortcut "/"
  useEffect(() => {
    function onKey(e) {
      if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function setCat(id) {
    const next = new URLSearchParams(params);
    if (id === "all") next.delete("cat");
    else next.set("cat", id);
    setParams(next, { replace: true });
  }

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ais.filter((a) => {
      const matchCat = active === "all" || a.category === active;
      const matchQ =
        !q ||
        a.name.toLowerCase().includes(q) ||
        a.desc.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchQ;
    });
  }, [query, active]);

  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <h1>Explorer <span className="accent">les IA</span></h1>
          <p>Filtre par catégorie ou cherche directement l'outil qu'il te faut.</p>
        </div>
      </div>

      <div className="controls">
        <div className="wrap">
          <div className="search-bar">
            <Search />
            <input
              ref={inputRef}
              type="text"
              placeholder="Rechercher : chatbot, image, voix, musique…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button className="search-clear" onClick={() => setQuery("")} aria-label="Effacer">✕</button>
            )}
          </div>

          <div className="filters">
            <button
              className={`filter-pill ${active === "all" ? "active" : ""}`}
              onClick={() => setCat("all")}
            >
              Tout
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                className={`filter-pill ${active === c.id ? "active" : ""}`}
                style={{ "--pill-accent": c.accent }}
                onClick={() => setCat(c.id)}
              >
                <span className="dot" /> {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="result-meta">
          <span className="count"><b>{results.length}</b> résultat{results.length > 1 ? "s" : ""}</span>
        </div>

        {results.length === 0 ? (
          <div className="empty">
            <div className="em">🛸</div>
            <h3>Aucune IA trouvée</h3>
            <p>Essaie un autre mot-clé ou réinitialise les filtres.</p>
          </div>
        ) : (
          <motion.div layout className="grid">
            {results.map((ai) => (
              <AICard key={ai.id} ai={ai} grid />
            ))}
          </motion.div>
        )}
      </div>
    </>
  );
}
