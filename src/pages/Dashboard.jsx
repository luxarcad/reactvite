import { Link } from 'react-router-dom';

import Button from '../components/ui/Button';
import GlideSelect from '../components/reactbits/GlideSelect/GlideSelect';

import { useAuth } from '../context/AuthContext';

const environments = [
  {
    value: 'development',
    label: 'Development',
    tag: 'Local'
  },
  {
    value: 'staging',
    label: 'Staging',
    tag: 'Testing'
  },
  {
    value: 'production',
    label: 'Production',
    tag: 'Live'
  }
];

function Dashboard() {
  const {
    user,
    logout
  } = useAuth();

  return (
    <main className="dashboard-page">

      <header className="dashboard-navbar">

        <Link
          to="/"
          className="brand"
        >
          NOVA<span>LAB</span>
        </Link>

        <div className="dashboard-actions">

          <GlideSelect
            options={environments}
            defaultValue="development"
            ariaLabel="Seleccionar ambiente"
            surfaceColor="#18181b"
            highlightColor="#3f3f46"
            textColor="#ffffff"
            menuWidth={190}
          />

          <Button
            variant="secondary"
            onClick={logout}
          >
            Cerrar sesión
          </Button>

        </div>

      </header>

      <section className="dashboard-content-page">

        <span className="eyebrow">
          Dashboard
        </span>

        <h1>
          Hola, {user?.name}.
        </h1>

        <p>
          Has iniciado sesión como:
        </p>

        <strong>
          {user?.email}
        </strong>

        <div className="dashboard-grid">

          <article className="metric-card">

            <span>
              Componentes
            </span>

            <strong>
              12
            </strong>

            <p>
              Elementos reutilizables.
            </p>

          </article>

          <article className="metric-card">

            <span>
              Estado
            </span>

            <strong>
              Online
            </strong>

            <p>
              Aplicación funcionando.
            </p>

          </article>

          <article className="metric-card">

            <span>
              Framework
            </span>

            <strong>
              React
            </strong>

            <p>
              Construido con Vite.
            </p>

          </article>

        </div>

      </section>

    </main>
  );
}

export default Dashboard;