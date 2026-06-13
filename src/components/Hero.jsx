import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ais, categories } from "../data/ais";
import { Arrow, Bolt } from "./Icons";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const marqueeNames = ais.filter((a) => a.hot).map((a) => a.name);

  return (
    <section className="hero">
      <div className="wrap">
        <motion.div className="hero-tags" variants={fadeUp} initial="hidden" animate="show" custom={0}>
          <span className="chip"><Bolt width="12" height="12" style={{ color: "var(--lime)" }} /> {ais.length} IA référencées</span>
          <span className="chip">{categories.length} catégories</span>
          <span className="chip" style={{ color: "var(--lime)" }}>100% gratuit</span>
        </motion.div>

        <h1>
          <motion.span className="line" variants={fadeUp} initial="hidden" animate="show" custom={1}>
            TOUTE
          </motion.span>
          <motion.span className="line out" variants={fadeUp} initial="hidden" animate="show" custom={2}>
            L'INTELLIGENCE
          </motion.span>
          <motion.span className="line" variants={fadeUp} initial="hidden" animate="show" custom={3}>
            <em>EN UN CLIC.</em>
          </motion.span>
        </h1>

        <motion.p className="hero-sub" variants={fadeUp} initial="hidden" animate="show" custom={4}>
          Un seul portail pour <b>parler, créer, générer et automatiser</b> avec les
          meilleures IA du moment. Choisis une tâche, lance l'outil, c'est tout.
        </motion.p>

        <motion.div className="hero-cta" variants={fadeUp} initial="hidden" animate="show" custom={5}>
          <Link to="/explorer" className="btn btn-primary">
            Explorer les IA <Arrow />
          </Link>
          <a href="#chatbots" className="btn btn-ghost">Voir les catégories</a>
        </motion.div>

        <motion.div className="hero-stats" variants={fadeUp} initial="hidden" animate="show" custom={6}>
          <div className="stat"><div className="num">{ais.length}+</div><div className="lbl">Outils</div></div>
          <div className="stat"><div className="num">{categories.length}</div><div className="lbl">Catégories</div></div>
          <div className="stat"><div className="num">∞</div><div className="lbl">Possibilités</div></div>
          <div className="stat"><div className="num">0€</div><div className="lbl">Pour commencer</div></div>
        </motion.div>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {[...marqueeNames, ...marqueeNames].map((n, i) => (
            <span key={i}>{n}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
