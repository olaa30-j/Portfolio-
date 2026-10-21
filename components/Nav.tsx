export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="logo" aria-label="Soren Hale, home">
          <i /> soren.dev
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#proof">Proof</a>
          <a href="#stack">Stack</a>
          <a href="#journey">Journey</a>
          <a href="#reviews">Reviews</a>
        </nav>
        <a href="#contact" className="btn btn-dark" style={{ padding: "10px 18px", fontSize: 14 }}>
          Start a project
        </a>
      </div>
    </header>
  );
}
