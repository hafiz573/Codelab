import { useEffect, useState, Suspense, lazy, useRef } from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { supabase } from './lib/supabaseClient';

// Lazy Loaded Components
const About = lazy(() => import('./components/About'));
const Solutions = lazy(() => import('./components/Solutions'));
const Impact = lazy(() => import('./components/Impact'));
const Contact = lazy(() => import('./components/Contact'));

// Types
interface Solution {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface ImpactStat {
  id: number;
  number_text: string;
  label: string;
}

function App() {
  const [email, setEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [impactStats, setImpactStats] = useState<ImpactStat[]>([]);
  const [loading, setLoading] = useState(true);
  
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [sol, imp] = await Promise.all([
          supabase.from('solutions').select('*').order('display_order', { ascending: true }),
          supabase.from('impact_stats').select('*').order('display_order', { ascending: true })
        ]);
        if (sol.data) setSolutions(sol.data);
        if (imp.data) setImpactStats(imp.data);
      } catch (err) {
        console.error("Data fetch error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Intersection Observer for Reveal Animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const revealItems = document.querySelectorAll('.reveal-on-scroll');
    revealItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, [loading]); // Re-run when data is loaded to catch new elements

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitStatus('loading');
    try {
      const { error } = await supabase.from('subscribers').insert([{ email }]);
      if (error) throw error;
      setSubmitStatus('success');
      setEmail('');
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    }
  };

  const SectionLoader = () => (
    <div className="container" style={{padding: '4rem 0'}}>
      <div className="skeleton" style={{height: '300px', width: '100%', borderRadius: '1rem'}}></div>
    </div>
  );

  return (
    <div className="app-wrapper" ref={mainRef}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <a href="#" className="logo">
            <ShieldCheck size={32} />
            <span>ImpactTech</span>
          </a>
          <div className="nav-links">
            <a href="#about" className="nav-link">Corporate Profile</a>
            <a href="#solutions" className="nav-link">Solutions</a>
            <a href="#impact" className="nav-link">Performance</a>
          </div>
          <a href="#contact" className="btn btn-p">Inquire Now</a>
        </div>
      </nav>

      {/* Hero Section - Static (Loaded First) */}
      <header className="hero">
        <div className="container">
          <div className="hero-badge">Smart Infrastructure Solutions</div>
          <h1 className="hero-title">Modernizing Public Services Through Intelligent Tech</h1>
          <p className="hero-subtitle">
            We provide enterprise-grade digital solutions designed to enhance administration, transparency, and citizen engagement.
          </p>
          <div className="hero-btns">
            <a href="#solutions" className="btn btn-p">Review Core Solutions <ArrowRight size={18} /></a>
            <a href="#about" className="btn btn-s">Strategic Approach</a>
          </div>
        </div>
      </header>

      {/* Lazy Loaded Sections with Suspense */}
      <Suspense fallback={<SectionLoader />}>
        <About />
        <Solutions solutions={solutions} loading={loading} />
        <Impact impactStats={impactStats} loading={loading} />
        <Contact 
          email={email} 
          setEmail={setEmail} 
          handleSubscribe={handleSubscribe} 
          submitStatus={submitStatus} 
        />
      </Suspense>

      {/* Footer */}
      <footer>
        <div className="container">
          <span className="footer-logo">ImpactTech</span>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} ImpactTech Public Services. All rights reserved.<br/>
            Smart Digital Solution For Real World Problems
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
