import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

import SectionTitle from '../components/ui/SectionTitle';

import GlideSelect from '../components/reactbits/GlideSelect/GlideSelect';
import InfiniteSpiral from '../components/reactbits/InfiniteSpiral/InfiniteSpiral';

const BASE_URL = import.meta.env.BASE_URL;

const technologies = [
  {
    value: 'react',
    label: 'React',
    tag: 'Frontend'
  },
  {
    value: 'vite',
    label: 'Vite',
    tag: 'Build'
  },
  {
    value: 'fastapi',
    label: 'FastAPI',
    tag: 'Backend'
  },
  {
    value: 'postgres',
    label: 'PostgreSQL',
    tag: 'Database'
  }
];

const spiralImages = [
  {
    src: `${BASE_URL}images/project-1.png`,
    alt: 'Proyecto digital uno'
  },
  {
    src: `${BASE_URL}images/project-2.png`,
    alt: 'Proyecto digital dos'
  },
  {
    src: `${BASE_URL}images/project-3.png`,
    alt: 'Proyecto digital tres'
  },
  {
    src: `${BASE_URL}images/project-4.png`,
    alt: 'Proyecto digital cuatro'
  },
  {
    src: `${BASE_URL}images/project-5.png`,
    alt: 'Proyecto digital cinco'
  },
  {
    src: `${BASE_URL}images/project-6.png`,
    alt: 'Proyecto digital seis'
  }
];

function Home() {
  function handleTechnologyChange(value, option) {
    console.log('Tecnología seleccionada:');
    console.log(value);
    console.log(option);
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Services />

        <section className="section interactive-demo">
          <div className="container">

            <SectionTitle
              eyebrow="React Bits"
              title="Interacciones que se sienten naturales."
              description="Podemos integrar componentes externos sin renunciar al control sobre nuestra aplicación."
            />

            <div className="component-demo-card">

              <div>
                <span className="demo-label">
                  Stack preferido
                </span>

                <h3>
                  Selecciona una tecnología
                </h3>

                <p>
                  Este selector es un componente reutilizable de React Bits.
                </p>
              </div>

              <GlideSelect
                options={technologies}
                defaultValue="react"
                onChange={handleTechnologyChange}
                ariaLabel="Seleccionar tecnología"
                showTags
                accentColor="#ffffff"
                surfaceColor="#18181b"
                highlightColor="#3f3f46"
                textColor="#ffffff"
                size="lg"
                radius={12}
                menuWidth={230}
                placement="bottom"
                align="right"
              />

            </div>

          </div>
        </section>

        <section className="spiral-section">

          <div className="container">

            <SectionTitle
              eyebrow="Galería"
              title="Una interfaz también puede tener profundidad."
              description="InfiniteSpiral usa transforms, perspectiva y requestAnimationFrame para crear una galería tridimensional."
            />

          </div>

          <div className="spiral-container">

            <InfiniteSpiral
              items={spiralImages}
              animationMode="all"
              speed={0.4}
              radius={220}
              cardWidth={150}
              cardHeight={190}
              verticalSpacing={85}
              perspective={1100}
              cardRadius={18}
              centerScale={1.18}
              edgeBlur={5}
              cardsPerTurn={7}
              pauseOnHover
            />

          </div>

        </section>

        <ContactForm />
      </main>

      <Footer />
    </>
  );
}

export default Home;