import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Cpu, Database, Cloud } from 'lucide-react';
import { supabase } from '../lib/supabase';

const iconMap: Record<string, any> = { Zap, Shield, Globe, Cpu, Database, Cloud };

const Solutions = () => {
  const [solutions, setSolutions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSolutions = async () => {
      const { data, error } = await supabase
        .from('solutions')
        .select('*')
        .order('created_at', { ascending: true });
      
      if (!error && data) {
        setSolutions(data);
      } else {
        console.error('Error fetching solutions:', error);
        setError(error?.message || 'Failed to fetch data');
      }
      setLoading(false);
    };
    fetchSolutions();
  }, []);

  if (loading) {
     return <div className="py-24 bg-black text-center text-gray-400">Loading dynamic solutions...</div>;
  }

  if (error) {
    return (
      <div className="py-24 bg-black text-center">
        <div className="glass-card inline-block p-8 rounded-2xl border-red-500/20">
          <p className="text-red-400 font-medium mb-2">Supabase Error</p>
          <p className="text-gray-500 text-sm mb-4">{error}</p>
          <p className="text-gray-600 text-xs">Ensure you have run the SQL setup and enabled RLS policies.</p>
        </div>
      </div>
    );
  }

  return (
    <section id="solutions" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Digital Solutions for <span className="text-emerald-400">Civic Progress</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Our core mission is to provide high-impact technology that addresses the most pressing urban challenges of our time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(solutions.length > 0 ? solutions : []).map((sol, i) => {
            const IconComponent = iconMap[sol.icon] || Zap;
            return (
              <motion.div
                key={sol.id || i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 rounded-3xl"
              >
                <div className={`w-16 h-16 rounded-2xl ${sol.color || 'bg-emerald-500/10'} flex items-center justify-center mb-8`}>
                  <IconComponent className={`w-8 h-8 ${sol.icon_color || 'text-emerald-400'}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{sol.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {sol.description}
                </p>
                <a href="#" className="flex items-center text-emerald-400 font-bold hover:text-emerald-300 transition-colors">
                  Learn more
                  <Zap className="ml-2 w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
