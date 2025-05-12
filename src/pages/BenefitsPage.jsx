
import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Clock, Shield, Award, Target, Users, Zap, TrendingUp } from 'lucide-react';

const BenefitsPage = () => {
  const mainBenefits = [
    {
      icon: Wallet,
      title: 'Ganhos Atraentes',
      description: 'Defina seus preços e receba pagamentos de forma segura e pontual.'
    },
    {
      icon: Clock,
      title: 'Flexibilidade Total',
      description: 'Trabalhe nos horários que melhor se adequam à sua rotina.'
    },
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Proteção completa para você e seus serviços.'
    },
    {
      icon: Award,
      title: 'Reconhecimento',
      description: 'Sistema de avaliações que valoriza os melhores profissionais.'
    }
  ];

  const additionalBenefits = [
    {
      icon: Target,
      title: 'Clientes Qualificados',
      description: 'Acesso a uma base de clientes verificados e prontos para contratar.'
    },
    {
      icon: Users,
      title: 'Comunidade Ativa',
      description: 'Faça parte de uma rede de profissionais e troque experiências.'
    },
    {
      icon: Zap,
      title: 'Suporte Prioritário',
      description: 'Atendimento exclusivo para resolver suas questões rapidamente.'
    },
    {
      icon: TrendingUp,
      title: 'Crescimento Profissional',
      description: 'Acesso a treinamentos e oportunidades de desenvolvimento.'
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
          Benefícios para <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Profissionais</span>
        </motion.h1>

        <motion.p 
          className="text-xl text-slate-300 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Descubra as vantagens de fazer parte da nossa plataforma
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mainBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700"
            >
              <benefit.icon className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-slate-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-8 rounded-xl border border-slate-700 mb-16"
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">Mais Benefícios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 flex items-start gap-4"
              >
                <benefit.icon className="h-6 w-6 text-green-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-slate-300 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="text-center space-y-6"
        >
          <h2 className="text-2xl font-semibold">Pronto para começar?</h2>
          <p className="text-slate-300">
            Junte-se a milhares de profissionais que já estão crescendo com a ServiFlex
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-green-500/50 transition-all duration-300">
            Cadastre-se como Profissional
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BenefitsPage;
