import SpotlightCard from './reactbits/SpotlightCard/SpotlightCard';

const services = [
  {
    id: 1,
    number: '01',
    title: 'Diseño UI / UX',
    description:
      'Interfaces modernas enfocadas en claridad, experiencia y conversión.'
  },
  {
    id: 2,
    number: '02',
    title: 'Desarrollo Web',
    description:
      'Aplicaciones rápidas, responsivas y preparadas para crecer.'
  },
  {
    id: 3,
    number: '03',
    title: 'Sistemas a medida',
    description:
      'Soluciones digitales construidas alrededor de procesos reales.'
  }
];

function ServiceCard({ number, title, description }) {
  return (
    <SpotlightCard
      className="service-card"
      spotlightColor="rgba(139, 92, 246, 0.35)"
    >
      <span className="service-number">
        {number}
      </span>

      <h3>{title}</h3>

      <p>{description}</p>

      <span className="service-link">
        Explorar →
      </span>
    </SpotlightCard>
  );
}

function Services() {
  return (
    <section className="services section" id="servicios">

      <div className="container">

        <div className="section-heading">

          <span className="eyebrow">
            Lo que hacemos
          </span>

          <h2>
            Tecnología con propósito.
          </h2>

          <p>
            No se trata de llenar una página de efectos porque podemos.
            Cada elemento debe ayudar al usuario a entender y actuar.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service) => (
            <ServiceCard
              key={service.id}
              number={service.number}
              title={service.title}
              description={service.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;