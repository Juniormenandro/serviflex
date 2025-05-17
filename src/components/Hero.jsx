import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, X, Trash2, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';

const Hero = () => {
  const [isChatMode, setIsChatMode] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    const id = localStorage.getItem('chat_session_id') || uuidv4();
    localStorage.setItem('chat_session_id', id);
    setSessionId(id);

    const savedMessages = localStorage.getItem(`chat_messages_${id}`);
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(`chat_messages_${sessionId}`, JSON.stringify(messages));
  }, [messages]);


  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);
  
  
  const whatsappNumber = import.meta.env.VITE_whatsappNumber;
  const openWhatsApp = () => {
    const mensagem = 'Olá! Gostaria de continuar meu atendimento do ServiFlex pelo WhatsApp.';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  const handleDeleteChat = () => {
  const confirmed = window.confirm('Are you sure you want to delete this conversation? This action cannot be undone.');
  if (!confirmed) return;

  localStorage.removeItem(`chat_messages_${sessionId}`);
  localStorage.removeItem('chat_session_id');
  setIsChatMode(false);
  setMessages([]);
  setInputValue('');
};


  const urlApi = import.meta.env.VITE_urlApi;
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user'
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue('');
    setLoading(true);
    setIsChatMode(true);


  const limitedHistory = messages.slice(-5).map(m => ({
    role: m.sender === 'user' ? 'user' : 'assistant',
    content: m.text
  }));
    try {
      const res = await fetch(urlApi, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            message: inputValue,
            history: limitedHistory
          })
        });

      const data = await res.json();
      const aiResponse = {
        id: Date.now() + 1,
        text: data.reply,
        sender: 'ai'
      };

      setMessages((prev) => [...prev, aiResponse]);
    } catch (err) {
      console.error('Erro ao enviar mensagem:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseChat = () => {
    setIsChatMode(false);
    // setMessages([]);
    setInputValue('');
  };

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-neutral-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container relative z-10 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-400 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          How can I help you today?
        </motion.h1>

        <motion.p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Hello! I'm your virtual assistant and I'm here to help you find the right professional for your service. Tell me what you need!
        </motion.p>

        <Sheet open={isChatMode} onOpenChange={setIsChatMode}>
          <SheetTrigger asChild>
            <form onSubmit={handleSendMessage} className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4 mb-12">
              <Button
                type="submit"
                size="lg"
                className="h-14 md:w-full rounded-full text-lg bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg"
              >
                Start Chat
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </SheetTrigger>

          <SheetContent className="w-full bg-slate-900 text-white p-4 flex flex-col h-full">
            <style>{`.absolute.right-4.top-4 { display: none !important; }`}</style>

            <SheetHeader>
              <SheetTitle className="flex justify-between items-center w-full">
                <div className="flex items-center justify-between w-full text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                  {/* Bloco esquerdo */}
                  <button onClick={handleDeleteChat} className="text-slate-400 hover:text-green-400 transition-colors">
                    <ArrowLeft className="h-5 w-5 mr-2" />
                  </button>
                  <button onClick={handleDeleteChat} className="flex items-center space-x-2">
                    <span>ServiFlex Support</span>
                  </button>

                  {/* Bloco direito (lixeira) */}
                  <button onClick={handleDeleteChat} className="text-red-400 hover:text-red-300">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </SheetTitle>
            </SheetHeader>

            {/* Área de mensagens */}
            <div
              className="flex-1 overflow-y-auto space-y-4 scroll-smooth custom-scroll mt-4 pr-1"
              style={{ scrollbarWidth: 'none' }}
              ref={messagesContainerRef}
            >
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
                      className={`max-w-[80%] p-3 rounded-xl text-sm md:text-base whitespace-pre-wrap ${
                        message.sender === 'user'
                          ? 'bg-green-500/20 text-green-100 rounded-tr-none'
                          : 'bg-blue-500/20 text-blue-100 rounded-tl-none'
                      }`}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}
                {loading && (
                  <motion.div className="flex justify-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="text-blue-300 italic text-sm">Typing...</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Botão WhatsApp inteligente */}
            {messages.some(m => m.sender === 'ai' && m.text.toLowerCase().includes('whatsapp')) && (
              <div className="text-center text-xs ">
                <p className="text-slate-400 mb-2">Do you want to continue with an attendant?</p>
                <Button
                  onClick={openWhatsApp}
                  className=" w-full h-8 bg-green-600 hover:bg-green-700 text-white text-xs gap-x-2"
                >
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-5 w-5" />

                  Talk to an expert
                </Button>
              </div>
            )}

            {/* Formulário fixo */}
            <form onSubmit={handleSendMessage} className="flex gap-2 mt-4 pt-2 border-t border-slate-700">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="text-base flex-grow bg-slate-700/50 border-slate-600 focus:border-green-400"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
              >
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
};

export default Hero;
