import { motion } from 'framer-motion';
import { ArrowRight, Shield, BarChart3, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass border-emerald-500/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-400">Next Gen Public Service</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold leading-[1.1] mb-8 text-white tracking-tight"
          >
            Smart Digital Solutions for <span className="impact-gradient italic">Real World</span> Problems.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl leading-relaxed"
          >
            Empowering cities and communities with high-impact technology to solve civic challenges and drive sustainable social growth.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a href="#solutions" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 flex items-center justify-center group">
              Explore solutions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#impact" className="px-8 py-4 rounded-2xl glass font-bold text-lg text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
              Watch Demo
            </a>
          </motion.div>
        </div>

        {/* Stats Preview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: Users, label: "Lives Impacted", value: "2.4M+" },
            { icon: BarChart3, label: "Efficiency Boost", value: "45%" },
            { icon: Shield, label: "Cities Secured", value: "120+" }
          ].map((stat, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl flex items-center space-x-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-emerald-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Hero Visual Element (Placeholder for Image or Animation) */}
      <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 pointer-events-none opacity-50">
          <div className="relative w-full h-full">
               <div className="absolute inset-0 bg-gradient-to-l from-emerald-500/20 to-transparent blur-3xl"></div>
               {/* This will be replaced by the generated image */}
          </div>
      </div>
    </section>
  );
};

export default Hero;
