import { Globe, Mail, Landmark, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
                <Zap className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">Civic<span className="text-emerald-400">Net</span></span>
            </div>
            <p className="text-gray-400 text-lg max-w-sm mb-8 leading-relaxed">
              Global leaders in smart digital solutions for public services and social impact. Shaping the cities of tomorrow, today.
            </p>
            <div className="flex space-x-6">
              {[Globe, Mail, Landmark].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-emerald-400 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8">Platform</h4>
            <ul className="space-y-4 text-gray-400">
              {['Solutions', 'Impact Stories', 'Governance', 'Security', 'Compliance'].map((item) => (
                <li key={item}><a href="#" className="hover:text-emerald-400 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8">Company</h4>
            <ul className="space-y-4 text-gray-400">
              {['About Us', 'Careers', 'Partners', 'Newsroom', 'Contact'].map((item) => (
                <li key={item}><a href="#" className="hover:text-emerald-400 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2026 CivicNet Technologies Inc. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
