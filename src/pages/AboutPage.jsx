
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Clock, Star } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Cuidado e Empatia",
      description: "Entendemos que cada chamado é um momento de necessidade. Tratamos cada situação com a atenção que merece."
    },
    {
      icon: Shield,
      title: "Confiança e Segurança",
      description: "Todos os nossos profissionais são rigorosamente verificados e avaliados para sua tranquilidade."
    },
    {
      icon: Clock,
      title: "Agilidade",
      description: "Quando você precisa, precisa rápido. Nossa plataforma conecta você a profissionais disponíveis em minutos."
    },
    {
      icon: Star,
      title: "Excelência",
      description: "Mantemos os mais altos padrões de qualidade em todos os serviços prestados."
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
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Sobre a <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">ServiFlex</span>
        </motion.h1>

        <motion.p 
          className="text-xl text-slate-300 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A escolha certa quando você mais precisa
        </motion.p>

        <motion.div 
          className="prose prose-invert max-w-none mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lg text-slate-300 mb-6">
            Na ServiFlex, entendemos que a vida nem sempre segue o planejado. Um cano estourado, um carro que não liga, uma fechadura travada - são momentos que podem causar estresse e preocupação. É aí que entramos em ação.
          </p>
          
          <p className="text-lg text-slate-300 mb-6">
            Nossa missão é transformar momentos de dificuldade em soluções rápidas e confiáveis. Conectamos você aos melhores profissionais, cuidadosamente selecionados e comprometidos com a excelência, para resolver seus problemas com agilidade e qualidade.
          </p>

          <p className="text-lg text-slate-300">
            Mais do que uma plataforma de serviços, somos um parceiro presente nos momentos em que você mais precisa de ajuda. Nossa equipe trabalha incansavelmente para garantir que cada experiência seja marcada por profissionalismo, confiança e satisfação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700"
            >
              <value.icon className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-slate-400">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-8 rounded-xl border border-slate-700"
        >
          <h2 className="text-2xl font-bold mb-4">Nossa Promessa</h2>
          <p className="text-slate-300">
            Continuaremos inovando e evoluindo para oferecer sempre a melhor experiência em serviços, mantendo nosso compromisso de ser "a escolha certa quando você mais precisa".
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
