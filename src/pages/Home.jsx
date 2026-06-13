import Hero from "../components/Hero";
import CategoryRow from "../components/CategoryRow";
import { categories, aisByCategory } from "../data/ais";

export default function Home() {
  return (
    <>
      <Hero />
      {categories.map((cat) => (
        <CategoryRow key={cat.id} category={cat} items={aisByCategory(cat.id)} />
      ))}
    </>
  );
}
