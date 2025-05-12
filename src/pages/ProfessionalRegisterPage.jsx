
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Wallet, Calendar } from 'lucide-react';

const ProfessionalRegisterPage = () => {
  const benefits = [
    {
      icon: Star,
      title: 'Visibilidade',
      description: 'Seja encontrado por clientes em busca dos seus serviços'
    },
    {
      icon: Wallet,
      title: 'Ganhos',
      description: 'Defina seus preços e horários com total flexibilidade'
    },
    {
      icon: Calendar,
      title: 'Flexibilidade',
      description: 'Trabalhe quando e onde quiser, você controla sua agenda'
    },
    {
      icon: CheckCircle,
      title: 'Credibilidade',
      description: 'Construa sua reputação através de avaliações positivas'
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
          Seja um <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Profissional</span>
        </motion.h1>

        <motion.p 
          className="text-xl text-slate-300 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Junte-se à maior plataforma de serviços do Brasil
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700"
            >
              <benefit.icon className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-slate-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-8 rounded-xl border border-slate-700"
        >
          <h2 className="text-2xl font-semibold mb-6">Cadastre-se como Profissional</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nome Completo</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-green-400 focus:outline-none"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">CPF</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-green-400 focus:outline-none"
                  placeholder="000.000.000-00"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-green-400 focus:outline-none"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Telefone</label>
              <input
                type="tel"
                className="w-full px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-green-400 focus:outline-none"
                placeholder="(00) 00000-0000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Área de Atuação</label>
              <select className="w-full px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-green-400 focus:outline-none">
                <option value="">Selecione sua área</option>
                <option value="auto">Automotivo</option>
                <option value="casa">Casa</option>
                <option value="jardim">Jardim</option>
                <option value="pets">Pets</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Experiência</label>
              <textarea
                className="w-full px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-green-400 focus:outline-none h-32"
                placeholder="Descreva sua experiência profissional..."
              ></textarea>
            </div>

            <button className="w-full px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-green-500/50 transition-all duration-300">
              Cadastrar como Profissional
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfessionalRegisterPage;
