import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import FormField from '../components/ui/FormField';
import Button from '../components/ui/Button';
import GradientText from '../components/reactbits/GradientText/GradientText';

import { useAuth } from '../context/AuthContext';

const initialForm = {
  email: '',
  password: ''
};

function Login() {
  const navigate = useNavigate();

  const {
    login,
    isAuthenticated
  } = useAuth();

  const [form, setForm] = useState(initialForm);

  const [remember, setRemember] = useState(false);

  const [errors, setErrors] = useState({});

  const [serverError, setServerError] = useState('');

  const [submitting, setSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm(previous => ({
      ...previous,
      [name]: value
    }));

    setErrors(previous => ({
      ...previous,
      [name]: ''
    }));

    setServerError('');
  }

  function validate() {
    const newErrors = {};

    if (!form.email.trim()) {
      newErrors.email = 'Escribe tu correo.';
    } else if (!form.email.includes('@')) {
      newErrors.email = 'Escribe un correo válido.';
    }

    if (!form.password) {
      newErrors.password = 'Escribe tu contraseña.';
    } else if (form.password.length < 6) {
      newErrors.password =
        'Debe contener mínimo 6 caracteres.';
    }

    return newErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setSubmitting(true);
      setServerError('');

      await login(
        form.email,
        form.password,
        remember
      );

      navigate('/dashboard');

    } catch (error) {

      setServerError(
        error.message || 'No fue posible iniciar sesión.'
      );

    } finally {

      setSubmitting(false);

    }
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <main className="login-page">

      <div className="login-glow"></div>

      <div className="login-container">

        <section className="login-copy">

          <Link to="/" className="brand">
            NOVA<span>LAB</span>
          </Link>

          <div>

            <span className="eyebrow">
              Área privada
            </span>

            <h1>
              Construye.
              <br />

              <GradientText
                colors={[
                  '#8b5cf6',
                  '#38bdf8',
                  '#c084fc'
                ]}
                animationSpeed={5}
                showBorder={false}
              >
                Aprende.
              </GradientText>

              Evoluciona.
            </h1>

            <p>
              Este formulario utiliza componentes,
              validación, estado, Context y React Router.
            </p>

          </div>

        </section>

        <section className="login-panel">

          <div className="login-heading">

            <span className="login-small">
              Bienvenido
            </span>

            <h2>
              Iniciar sesión
            </h2>

            <p>
              Introduce cualquier correo válido y una contraseña
              de mínimo seis caracteres.
            </p>

          </div>

          {serverError && (
            <div
              className="alert-error"
              role="alert"
            >
              {serverError}
            </div>
          )}

          <form
            className="login-form"
            onSubmit={handleSubmit}
            noValidate
          >

            <FormField
              label="Correo electrónico"
              name="email"
              type="email"
              placeholder="nombre@correo.com"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              autoComplete="email"
            />

            <FormField
              label="Contraseña"
              name="password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              error={errors.password}
              autoComplete="current-password"
            />

            <label className="remember-control">

              <input
                type="checkbox"
                checked={remember}
                onChange={event =>
                  setRemember(event.target.checked)
                }
              />

              <span>
                Mantener sesión
              </span>

            </label>

            <Button
              type="submit"
              disabled={submitting}
              className="login-submit"
            >
              {submitting
                ? 'Iniciando sesión...'
                : 'Entrar'
              }
            </Button>

          </form>

          <div className="login-footer">

            <span>
              ¿Solo estás mirando?
            </span>

            <Link to="/">
              Volver al inicio
            </Link>

          </div>

        </section>

      </div>

    </main>
  );
}

export default Login;