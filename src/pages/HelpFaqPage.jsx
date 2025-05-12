
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HelpFaqPage = () => {
  const faqs = [
    {
      question: 'Como funciona o processo de contratação?',
      answer: 'Basta escolher o serviço desejado, selecionar um profissional disponível e agendar o horário que melhor se adequa à sua necessidade. O pagamento é feito de forma segura através da nossa plataforma.'
    },
    {
      question: 'Os profissionais são verificados?',
      answer: 'Sim! Todos os profissionais passam por um rigoroso processo de verificação que inclui checagem de documentos, antecedentes e referências profissionais.'
    },
    {
      question: 'Como funciona a garantia dos serviços?',
      answer: 'Oferecemos garantia de satisfação em todos os serviços. Caso haja algum problema, nossa equipe de suporte está pronta para ajudar e resolver a situação.'
    },
    {
      question: 'Qual é o prazo de atendimento?',
      answer: 'O tempo de atendimento varia de acordo com a disponibilidade dos profissionais e a urgência do serviço. Em casos emergenciais, conseguimos atendimento em até 2 horas.'
    },
    {
      question: 'Como faço para me tornar um profissional?',
      answer: 'Para se cadastrar como profissional, acesse a seção "Para Profissionais" e siga o processo de cadastro. Será necessário apresentar documentação e passar por uma entrevista.'
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
          Ajuda e <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">FAQ</span>
        </motion.h1>

        <motion.p 
          className="text-xl text-slate-300 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Encontre respostas para as dúvidas mais frequentes
        </motion.p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-slate-800/50 rounded-xl border border-slate-700"
            >
              <button className="w-full text-left p-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <ChevronDown className="h-5 w-5 text-slate-400" />
              </button>
              <div className="px-6 pb-6">
                <p className="text-slate-300">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 bg-gradient-to-r from-green-500/10 to-blue-500/10 p-8 rounded-xl border border-slate-700 text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">Ainda tem dúvidas?</h2>
          <p className="text-slate-300 mb-6">
            Nossa equipe de suporte está sempre pronta para ajudar você.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-green-500/50 transition-all duration-300">
            Falar com Suporte
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HelpFaqPage;
