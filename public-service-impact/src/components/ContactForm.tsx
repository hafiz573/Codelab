import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, User, MessageSquare } from 'lucide-react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-black">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card inline-block p-12 rounded-3xl"
          >
            <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="text-emerald-400 w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Message Received!</h2>
            <p className="text-gray-400 max-w-sm mx-auto">
              Our team will review your inquiry and get back to you within 24 hours. Thank you for reaching out.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-8 text-emerald-400 font-bold hover:text-emerald-300 transition-colors"
            >
              Send another message
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
              Ready to Transform Your <span className="text-cyan-400">Community?</span>
            </motion.h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Contact our specialists to discuss how CivicNet can be tailored to your local government or NGO's specific needs.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                  <Mail className="text-emerald-400 w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-bold">Email Us</div>
                  <div className="text-gray-500">contact@civicnet.io</div>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                  <CheckCircle className="text-emerald-400 w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-bold">24/7 Support</div>
                  <div className="text-gray-500">Priority for public service partners.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="glass-card p-10 rounded-3xl"
            >
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-400 text-sm font-bold mb-2 ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5" />
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-400 text-sm font-bold mb-2 ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5" />
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm font-bold mb-2 ml-1">Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-6 text-gray-600 w-5 h-5" />
                    <textarea 
                      required
                      rows={4}
                      placeholder="How can we help your city?" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>

                <button 
                  disabled={loading}
                  type="submit" 
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 flex items-center justify-center disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  {!loading && <Send className="ml-2 w-5 h-5" />}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
