import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="container nav-container">

        <a href="#inicio" className="brand">
          NOVA<span>LAB</span>
        </a>

        <button
          className="menu-button"
          onClick={toggleMenu}
          aria-label="Abrir menú">
          ☰
        </button>

        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#inicio" onClick={closeMenu}>
            Inicio
          </a>

          <a href="#servicios" onClick={closeMenu}>
            Servicios
          </a>

          <a href="#contacto" onClick={closeMenu}>
            Contacto
          </a>

          <a
            href="#contacto"
            className="nav-button"
            onClick={closeMenu}
          >
            Iniciar proyecto
          </a>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;