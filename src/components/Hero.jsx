
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [isChatMode, setIsChatMode] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Simula resposta da IA
  const generateAIResponse = (userMessage) => {
    const responses = [
      "Entendi sua necessidade! Posso ajudar você a encontrar o profissional ideal para esse serviço. Pode me contar mais detalhes?",
      "Ótimo! Temos vários especialistas nessa área. Qual seria o melhor horário para o serviço?",
      "Claro, posso ajudar com isso! Em qual região você precisa do serviço?",
      "Perfeito! Vou buscar os melhores profissionais disponíveis para você. Tem alguma preferência específica?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user'
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');

    // Simula resposta da IA após 1 segundo
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        text: generateAIResponse(inputValue),
        sender: 'ai'
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);

    if (!isChatMode) {
      setIsChatMode(true);
    }
  };

  const handleCloseChat = () => {
    setIsChatMode(false);
    setMessages([]);
    setInputValue('');
  };

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-neutral-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container relative z-10">
        <AnimatePresence mode="wait">
          {!isChatMode ? (
            // Modo inicial
            <motion.div
              key="initial-mode"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-400 to-purple-500"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                How can I help you today?
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hello! I'm your virtual assistant and I'm here to help you find the right professional for your service. Tell me what you need!
              </motion.p>
              
              <form onSubmit={handleSendMessage} className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4 mb-12">
                <div className="relative flex-grow">
                  <Input 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Digite sua mensagem..." 
                    className="pl-4 pr-4 py-3 h-14 rounded-full text-lg bg-slate-800 border-2 border-slate-700 focus:border-green-400 focus:ring-green-400 transition-all duration-300 placeholder-slate-400"
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg" 
                  className="h-14 rounded-full text-lg bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white shadow-lg hover:shadow-green-500/50 transition-all duration-300 group"
                >
                  Start Chat
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              <motion.div 
                className="flex justify-center items-center space-x-2 text-sm text-slate-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span>24/7 Support</span>
                <span className="text-green-400">&bull;</span>
                <span>Instant Response</span>
                <span className="text-blue-400">&bull;</span>
                <span>Personalized Assistance</span>
              </motion.div>
            </motion.div>
          ) : (
            // Modo chat
            <motion.div
              key="chat-mode"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-2xl mx-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-slate-100">ServiFlex Support</h2>
                <Button
                  onClick={handleCloseChat}
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:text-slate-100"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-4 mb-4">
                <div className="h-[400px] overflow-y-auto space-y-4 mb-4">
                  <AnimatePresence>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] p-3 rounded-xl ${
                            message.sender === 'user'
                              ? 'bg-green-500/20 text-green-100 rounded-tr-none'
                              : 'bg-blue-500/20 text-blue-100 rounded-tl-none'
                          }`}
                        >
                          {message.text}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Digite sua mensagem..."
                    className="flex-grow bg-slate-700/50 border-slate-600 focus:border-green-400"
                  />
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
};

export default Hero;
