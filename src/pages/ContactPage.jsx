
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, Clock } from 'lucide-react';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefone',
      description: 'Disponível 24/7 para emergências',
      contact: '0800 123 4567'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Resposta em até 24h',
      contact: 'contato@serviflex.com'
    },
    {
      icon: MessageSquare,
      title: 'Chat',
      description: 'Atendimento instantâneo',
      contact: 'Iniciar conversa'
    },
    {
      icon: Clock,
      title: 'Horário',
      description: 'Seg-Sex: 8h às 20h',
      contact: 'Sáb: 9h às 15h'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container py-16 md:py-24"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Entre em <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Contato</span>
        </motion.h1>

        <motion.p 
          className="text-xl text-slate-300 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Estamos aqui para ajudar você
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex items-center space-x-4"
            >
              <method.icon className="h-10 w-10 text-green-400" />
              <div>
                <h3 className="font-semibold text-lg">{method.title}</h3>
                <p className="text-slate-400 text-sm">{method.description}</p>
                <p className="text-slate-300 mt-1">{method.contact}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-8 rounded-xl border border-slate-700"
        >
          <h2 className="text-2xl font-semibold mb-6">Envie uma mensagem</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-green-400 focus:outline-none"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-green-400 focus:outline-none"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Assunto</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-green-400 focus:outline-none"
                placeholder="Como podemos ajudar?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Mensagem</label>
              <textarea
                className="w-full px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-green-400 focus:outline-none h-32"
                placeholder="Descreva sua mensagem..."
              ></textarea>
            </div>
            <button className="w-full px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-green-500/50 transition-all duration-300">
              Enviar Mensagem
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
