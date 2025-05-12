
import React from 'react';
import { motion } from 'framer-motion';

const TermsPage = () => {
  const sections = [
    {
      title: 'Termos de Uso',
      content: 'Estes termos de uso estabelecem as regras para uso da plataforma ServiFlex. Ao utilizar nossos serviços, você concorda com estes termos.'
    },
    {
      title: 'Uso da Plataforma',
      content: 'A ServiFlex é uma plataforma de intermediação entre profissionais e clientes. Não somos prestadores diretos dos serviços oferecidos.'
    },
    {
      title: 'Responsabilidades',
      content: 'A ServiFlex não se responsabiliza diretamente pela prestação dos serviços, mas atua como facilitadora e garante padrões de qualidade.'
    },
    {
      title: 'Pagamentos',
      content: 'Todos os pagamentos são processados de forma segura através da nossa plataforma, garantindo proteção tanto para clientes quanto profissionais.'
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
          Termos de <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Serviço</span>
        </motion.h1>

        <motion.p 
          className="text-xl text-slate-300 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Leia com atenção nossos termos e condições de uso
        </motion.p>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700"
            >
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <p className="text-slate-300">{section.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-green-500/10 to-blue-500/10 p-8 rounded-xl border border-slate-700 text-center"
        >
          <p className="text-slate-300">
            Última atualização: 9 de Maio, 2025
          </p>
          <p className="text-slate-400 mt-2">
            Para dúvidas sobre nossos termos, entre em contato com nosso suporte.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TermsPage;
