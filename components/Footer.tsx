export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>© {new Date().getFullYear()} Soren Hale. Built with Next.js and Framer Motion.</span>
        <span className="mono">GitHub · LinkedIn · Read.cv</span>
      </div>
    </footer>
  );
}
