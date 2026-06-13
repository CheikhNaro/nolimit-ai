import { Link } from "react-router-dom";
import AICard from "./AICard";
import { Arrow } from "./Icons";

export default function CategoryRow({ category, items }) {
  if (!items.length) return null;
  return (
    <section className="section" id={category.id}>
      <div className="wrap">
        <div className="row-head">
          <div className="row-title">
            <span className="row-glyph" style={{ color: category.accent }}>{category.glyph}</span>
            <div>
              <span className="tag">{category.tagline}</span>
              <h2>{category.label}</h2>
            </div>
          </div>
          <Link to={`/explorer?cat=${category.id}`} className="row-see">
            Tout voir <Arrow />
          </Link>
        </div>
        <div className="row-scroll">
          {items.map((ai) => (
            <AICard key={ai.id} ai={ai} />
          ))}
        </div>
      </div>
    </section>
  );
}
