import { motion } from 'framer-motion';
import { Layers, Zap, Shield, Rocket, Database, Terminal } from 'lucide-react';

const technologies = [
  {
    name: "React 18",
    description: "Next-gen reactive UI components for a fluid user experience.",
    icon: Layers,
    color: "from-blue-400 to-cyan-500"
  },
  {
    name: "Supabase",
    description: "Enterprise-grade real-time database and authentication.",
    icon: Database,
    color: "from-emerald-400 to-green-500"
  },
  {
    name: "Framer Motion",
    description: "Production-ready animations for cinematic interactions.",
    icon: Rocket,
    color: "from-purple-400 to-pink-500"
  },
  {
    name: "TypeScript",
    description: "Strongly typed architecture for mission-critical reliability.",
    icon: Terminal,
    color: "from-blue-500 to-indigo-600"
  },
  {
    name: "Tailwind v4",
    description: "Cutting-edge CSS engine for lightning-fast styling.",
    icon: Zap,
    color: "from-yellow-400 to-orange-500"
  },
  {
    name: "Advanced Security",
    description: "Built-in RLS and JWT-based security protocols.",
    icon: Shield,
    color: "from-red-400 to-rose-500"
  }
];

const Technology = () => {
  return (
    <section id="technology" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Tech Stack</span> Behind the Impact
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            We leverage industry-leading technologies to ensure scalability, security, and world-class performance for public services.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-emerald-500/20 transition-all duration-500 group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tech.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <div className="w-full h-full bg-[#0a0a0a] rounded-[14px] flex items-center justify-center">
                   <tech.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{tech.name}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
