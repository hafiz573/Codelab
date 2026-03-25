import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Technology from './components/Technology';
import Impact from './components/Impact';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-emerald-500/30 selection:text-emerald-400">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Technology />
        <Impact />
        <About />
        <ContactForm />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
}

export default App;
