
import React from 'react';
import { motion } from 'framer-motion';

const PressPage = () => {
  const pressReleases = [
    {
      date: '15 de Maio, 2025',
      title: 'ServiFlex expande operações para mais 10 cidades',
      description: 'A plataforma líder em serviços domésticos anuncia expansão significativa de sua área de atuação.'
    },
    {
      date: '3 de Abril, 2025',
      title: 'Novo recorde: 100 mil profissionais cadastrados',
      description: 'ServiFlex alcança marca histórica de profissionais verificados em sua plataforma.'
    },
    {
      date: '12 de Março, 2025',
      title: 'Lançamento do programa de capacitação profissional',
      description: 'Iniciativa visa aprimorar ainda mais a qualidade dos serviços oferecidos na plataforma.'
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
          Sala de <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Imprensa</span>
        </motion.h1>

        <motion.p 
          className="text-xl text-slate-300 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Últimas notícias e atualizações da ServiFlex
        </motion.p>

        <div className="space-y-8">
          {pressReleases.map((release, index) => (
            <motion.div
              key={release.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-green-400/50 transition-colors cursor-pointer"
            >
              <p className="text-green-400 mb-2">{release.date}</p>
              <h2 className="text-2xl font-semibold mb-3">{release.title}</h2>
              <p className="text-slate-300">{release.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 bg-gradient-to-r from-green-500/10 to-blue-500/10 p-8 rounded-xl border border-slate-700"
        >
          <h2 className="text-2xl font-semibold mb-4">Contato para Imprensa</h2>
          <p className="text-slate-300 mb-4">
            Para solicitações de mídia e informações adicionais, entre em contato com nossa assessoria de imprensa.
          </p>
          <div className="text-slate-300">
            <p>Email: imprensa@serviflex.com</p>
            <p>Telefone: (11) 9999-9999</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PressPage;
