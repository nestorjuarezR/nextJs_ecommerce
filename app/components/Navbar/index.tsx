import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary">
      <div className="container">
        {/* Lado Izquierdo */}
        <Link href="/" className="navbar-brand fw-bold">
          LOGO
        </Link>

        {/* Botón Móvil */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Lado Derecho */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-2">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/categorias" className="nav-link">Categorías</Link>
            </li>
            <li className="nav-item">
              <Link href="/productos" className="nav-link">Productos</Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" className="nav-link">Blog</Link>
            </li>
            <li className="nav-item">
              <Link href="/carrito" className="nav-link btn btn-outline-primary text-white px-3">
                🛒 Carrito
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}