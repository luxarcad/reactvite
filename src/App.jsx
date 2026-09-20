import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return(
    <div className='site'>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;