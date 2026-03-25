import { motion } from 'framer-motion';
import { Target, Heart, Eye } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
             <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 blur-3xl rounded-full"></div>
              <div className="glass-card p-12 rounded-[40px] relative z-10 border-white/10">
                <blockquote className="text-2xl md:text-3xl font-medium text-white italic leading-relaxed mb-8">
                  "Our mission is to bridge the gap between complex urban challenges and digital potential. We believe every citizen deserves seamless, smart public services."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500"></div>
                  <div>
                    <div className="text-white font-bold">CivicNet Leadership</div>
                    <div className="text-gray-500 text-sm">Shaping Future Cities</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
              Building a <span className="text-emerald-400">Better Future</span> for Everyone
            </motion.h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0">
                  <Target className="text-emerald-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                  <p className="text-gray-400 leading-relaxed">
                    To empower governments and social organizations with state-of-the-art digital tools that drive efficiency and transparency.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0">
                  <Eye className="text-cyan-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                  <p className="text-gray-400 leading-relaxed">
                    A world where public services are as intuitive and powerful as the best private technology, accessible by all regardless of location.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0">
                  <Heart className="text-pink-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Our Values</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Integrity, Accessibility, and Innovation. We prioritize the needs of the community and the security of citizen data above all else.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
