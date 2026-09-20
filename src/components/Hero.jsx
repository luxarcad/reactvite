import GradientText from './reactbits/GradientText/GradientText';

function Hero() {
  return (
    <section className="hero" id="inicio">

      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="container hero-grid">

        <div className="hero-content">

          <span className="eyebrow">
            Diseño · Desarrollo · Tecnología
          </span>

          <h1>
            Creamos experiencias digitales que
          </h1>

          <GradientText
            colors={['#8b5cf6', '#38bdf8', '#c084fc']}
            animationSpeed={5}
            showBorder={false}
            className="hero-gradient"
          >
            se sienten del futuro.
          </GradientText>

          <p className="hero-description">
            Diseñamos productos digitales modernos, rápidos y pensados
            para transformar buenas ideas en experiencias memorables.
          </p>

          <div className="hero-actions">

            <a href="#contacto" className="button button-primary">
              Crear un proyecto
            </a>

            <a href="#servicios" className="button button-secondary">
              Explorar servicios
            </a>

          </div>

          <div className="hero-stats">

            <div>
              <strong>32+</strong>
              <span>Proyectos</span>
            </div>

            <div>
              <strong>18</strong>
              <span>Clientes</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Creatividad</span>
            </div>

          </div>

        </div>

        <div className="hero-visual">

          <div className="dashboard-card">

            <div className="dashboard-header">
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <p>analytics.app</p>
            </div>

            <div className="dashboard-content">

              <span className="dashboard-label">
                Rendimiento
              </span>

              <strong className="dashboard-number">
                +84.7%
              </strong>

              <p>
                Crecimiento de interacción
              </p>

              <div className="chart">
                <span style={{ height: '25%' }}></span>
                <span style={{ height: '42%' }}></span>
                <span style={{ height: '38%' }}></span>
                <span style={{ height: '64%' }}></span>
                <span style={{ height: '58%' }}></span>
                <span style={{ height: '80%' }}></span>
                <span style={{ height: '100%' }}></span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;