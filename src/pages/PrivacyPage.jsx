
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database } from 'lucide-react';

const PrivacyPage = () => {
  const privacyTopics = [
    {
      icon: Shield,
      title: 'Proteção de Dados',
      content: 'Seus dados pessoais são protegidos com as mais avançadas tecnologias de segurança.'
    },
    {
      icon: Lock,
      title: 'Segurança',
      content: 'Utilizamos criptografia de ponta a ponta para proteger suas informações.'
    },
    {
      icon: Eye,
      title: 'Transparência',
      content: 'Você tem total controle sobre seus dados e como eles são utilizados.'
    },
    {
      icon: Database,
      title: 'Armazenamento',
      content: 'Seus dados são armazenados em servidores seguros e com backup regular.'
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
          Política de <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Privacidade</span>
        </motion.h1>

        <motion.p 
          className="text-xl text-slate-300 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Seu direito à privacidade é nossa prioridade
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {privacyTopics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700"
            >
              <topic.icon className="h-12 w-12 text-green-400 mb-4" />
              <h2 className="text-2xl font-semibold mb-3">{topic.title}</h2>
              <p className="text-slate-300">{topic.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="space-y-8"
        >
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <h2 className="text-2xl font-semibold mb-4">Coleta de Dados</h2>
            <p className="text-slate-300 mb-4">
              Coletamos apenas os dados necessários para o funcionamento da plataforma e melhoria dos serviços:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Informações de cadastro</li>
              <li>Dados de uso da plataforma</li>
              <li>Avaliações e feedback</li>
              <li>Informações de pagamento</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <h2 className="text-2xl font-semibold mb-4">Seus Direitos</h2>
            <p className="text-slate-300 mb-4">
              Você tem direito a:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Acessar seus dados</li>
              <li>Solicitar correções</li>
              <li>Excluir sua conta</li>
              <li>Exportar suas informações</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 bg-gradient-to-r from-green-500/10 to-blue-500/10 p-8 rounded-xl border border-slate-700 text-center"
        >
          <p className="text-slate-300">
            Última atualização: 9 de Maio, 2025
          </p>
          <p className="text-slate-400 mt-2">
            Para questões sobre privacidade, contate nosso DPO: privacidade@serviflex.com
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PrivacyPage;
