import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  message: ''
};

function ContactForm() {
  const [form, setForm] = useState(initialForm);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log('Datos enviados:', form);

    alert(`Gracias ${form.name}. Tu mensaje fue recibido.`);

    setForm(initialForm);
  }

  return (
    <section className="contact section" id="contacto">

      <div className="container contact-grid">

        <div className="contact-info">

          <span className="eyebrow">
            Hablemos
          </span>

          <h2>
            Construyamos algo que valga la pena recordar.
          </h2>

          <p>
            Cuéntanos brevemente qué necesitas y transformaremos
            esa idea en una experiencia digital.
          </p>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">

            <label htmlFor="name">
              Nombre
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />

          </div>

          <div className="form-group">

            <label htmlFor="email">
              Correo
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="correo@ejemplo.com"
              required
            />

          </div>

          <div className="form-group">

            <label htmlFor="message">
              Proyecto
            </label>

            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Cuéntanos qué quieres construir..."
              rows="5"
              required
            ></textarea>

          </div>

          <button
            type="submit"
            className="button button-primary"
          >
            Enviar mensaje
          </button>

        </form>

      </div>

    </section>
  );
}

export default ContactForm;