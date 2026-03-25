import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! I'm your CivicNet Assistant. How can I help you explore our smart digital solutions today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses: Record<string, string> = {
        'solutions': "We offer Smart Reporting, Data-Driven Governance, Public Safety AI, and more. Which area interests you most?",
        'impact': "Our platform has impacted over 2.4M lives across 40+ countries. Check our Impact section for live stats!",
        'price': "CivicNet pricing is modular and depends on your city size and required services. Contact our team for a custom quote.",
        'hello': "Hello! I'm here to answer any questions about our civic technology platform.",
        'thank': "You're welcome! Let me know if you need anything else."
      };

      const lowerInput = input.toLowerCase();
      let reply = "That's a great question! For detailed technical specifications on that, I recommend checking our documentation or speaking with a consultant.";
      
      for (const key in responses) {
        if (lowerInput.includes(key)) {
          reply = responses[key];
          break;
        }
      }

      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-[380px] h-[500px] glass-card rounded-3xl overflow-hidden flex flex-col mb-4 shadow-2xl border-white/10"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <Bot className="text-emerald-400 w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">CivicNet Assistant</div>
                  <div className="text-emerald-400 text-xs flex items-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
                    Online | AI Powered
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex max-w-[80%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end space-x-2`}>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      m.role === 'user' 
                        ? 'bg-emerald-500 text-white rounded-br-none ml-2' 
                        : 'bg-white/5 text-gray-300 rounded-bl-none mr-2'
                    }`}>
                      {m.content}
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                   <div className="bg-white/5 text-gray-400 p-4 rounded-2xl rounded-bl-none flex space-x-1">
                      <span className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                   </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/5 bg-black/40">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center text-white"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white grid place-items-center shadow-2xl shadow-emerald-500/20 relative"
      >
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center z-10">
          <Sparkles className="text-emerald-500 w-3 h-3" />
        </div>
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="msg"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-8 h-8" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default AIChatbot;
