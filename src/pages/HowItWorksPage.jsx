
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Star, CreditCard } from 'lucide-react';

const HowItWorksPage = () => {
  const steps = [
    {
      icon: Search,
      title: 'Encontre Clientes',
      description: 'Receba solicitações de serviço de clientes em sua região que precisam de suas habilidades profissionais.'
    },
    {
      icon: Calendar,
      title: 'Gerencie sua Agenda',
      description: 'Organize seus horários com flexibilidade. Você decide quando e quantos serviços deseja realizar.'
    },
    {
      icon: Star,
      title: 'Construa sua Reputação',
      description: 'Receba avaliações dos clientes e construa uma reputação sólida na plataforma.'
    },
    {
      icon: CreditCard,
      title: 'Receba seus Pagamentos',
      description: 'Pagamentos seguros e garantidos, transferidos diretamente para sua conta após a conclusão do serviço.'
    }
  ];

  const features = [
    {
      title: 'Suporte Dedicado',
      description: 'Nossa equipe está sempre disponível para ajudar você em qualquer situação.'
    },
    {
      title: 'Ferramentas Profissionais',
      description: 'Acesso a ferramentas de gestão para organizar seus serviços e finanças.'
    },
    {
      title: 'Seguro Profissional',
      description: 'Proteção para você e seus clientes durante a prestação dos serviços.'
    },
    {
      title: 'Capacitação Contínua',
      description: 'Acesso a treinamentos e recursos para aprimorar suas habilidades.'
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
          Como <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Funciona</span>
        </motion.h1>

        <motion.p 
          className="text-xl text-slate-300 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Entenda como é fácil trabalhar com a ServiFlex
        </motion.p>

        <div className="space-y-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 flex items-start gap-6"
            >
              <div className="bg-gradient-to-br from-green-400/20 to-blue-500/20 p-4 rounded-lg">
                <step.icon className="h-8 w-8 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-slate-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-8 rounded-xl border border-slate-700"
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">Recursos Exclusivos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-lg border border-slate-700"
              >
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mt-12 text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-green-500/50 transition-all duration-300">
            Começar Agora
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HowItWorksPage;
