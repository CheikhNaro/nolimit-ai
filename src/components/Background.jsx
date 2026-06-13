export default function Background() {
  return (
    <>
      <div className="bg-field" aria-hidden="true">
        <div className="bg-grid" />
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
        <span className="blob b4" />
      </div>
      <div className="grain" aria-hidden="true" />
    </>
  );
}
