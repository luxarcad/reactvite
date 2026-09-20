function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="container footer-content">

        <a href="#inicio" className="brand">
          NOVA<span>LAB</span>
        </a>

        <p>
          © {currentYear} NovaLab. Todos los derechos reservados.
        </p>

      </div>

    </footer>
  );
}

export default Footer;