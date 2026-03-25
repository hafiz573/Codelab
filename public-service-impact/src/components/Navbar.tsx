import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass shadow-2xl' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Zap className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">Civic<span className="text-emerald-400">Net</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
            <a href="#solutions" className="text-sm font-medium text-gray-400 hover:text-emerald-400 transition-colors">Solutions</a>
            <a href="#impact" className="text-sm font-medium text-gray-400 hover:text-emerald-400 transition-colors">Impact</a>
            <a href="#technology" className="text-sm font-medium text-gray-400 hover:text-emerald-400 transition-colors">Technology</a>
            <a href="#about" className="text-sm font-medium text-gray-400 hover:text-emerald-400 transition-colors">About</a>
            <a href="#solutions" className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-300 shadow-xl shadow-white/5">
              Get Started
            </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 py-6 px-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {['Solutions', 'Impact', 'Technology', 'About'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block text-lg font-medium text-gray-300" onClick={() => setMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
          <button className="w-full py-3 rounded-xl bg-emerald-500 text-white font-semibold">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
