import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

const Impact = () => {
  const [stats, setStats] = useState<any[]>([]);
  const [progressStats, setProgressStats] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImpactData = async () => {
      const { data, error } = await supabase.from('impact_stats').select('*');
      if (!error && data) {
        setStats(data.filter(s => s.category === 'main_stat'));
        setProgressStats(data.filter(s => s.category === 'progress_stat'));
      } else if (error) {
        console.error('Error fetching impact data:', error);
        setError(error.message);
      }
      setLoading(false);
    };
    fetchImpactData();
  }, []);

  if (loading) return null;

  if (error) {
    return (
      <div className="py-12 bg-black text-center">
        <p className="text-red-400 text-sm">Failed to load impact metrics: {error}</p>
      </div>
    );
  }

  return (
    <section id="impact" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight"
            >
              Measurable Impact on <br/>
              <span className="impact-gradient">Global Communities</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg mb-10 leading-relaxed"
            >
              We don't just build software; we drive social transformation. Our platform is deployed in over 40 countries, helping governments and NGOs reach those who need it most.
            </motion.p>
            
            <div className="space-y-6">
              {progressStats.map((item, i) => (
                <div key={item.id || i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{item.label}</span>
                    <span className="text-emerald-400 font-bold">{item.value}</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.id || i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 rounded-3xl text-center flex flex-col justify-center aspect-square"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
