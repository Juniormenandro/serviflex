import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Star, CreditCard } from 'lucide-react';
import ProfessionalRegisterPage from './ProfessionalRegisterPage';
import BenefitsPage from './BenefitsPage';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Search,
      title: 'Find Clients',
      description: 'Receive service requests from customers in your area who need your professional skills.'
    },
    {
      icon: Calendar,
      title: 'Manage Your Schedule',
      description: 'Organize your time with flexibility. You decide when and how many jobs you want to take.'
    },
    {
      icon: Star,
      title: 'Build Your Reputation',
      description: 'Receive reviews from clients and build a strong reputation on the platform.'
    },
    {
      icon: CreditCard,
      title: 'Get Paid',
      description: 'Secure and guaranteed payments, transferred directly to your account after completing the service.'
    }
  ];

  return (
    <>
    <ProfessionalRegisterPage />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container py-10 md:py-24"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-3xl md:text-5xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          How It <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Works</span>
        </motion.h1>

        <motion.p 
          className="text-lg text-slate-300 text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          See how easy it is to work with ServiFlex
        </motion.p>

        <div className="space-y-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className=" flex-col bg-slate-800/50 p-4 md:p-8 rounded-xl border border-slate-700 flex items-start gap-6"
            >
            <div className='flex gap-x-3 items-center'>
              <div className=" bg-gradient-to-br from-green-400/20 to-blue-500/20 p-4 rounded-lg">
                <step.icon className=" text-green-400" />
              </div>
              <h3 className="text-lg md:text-2xl font-semibold mb-2">{step.title}</h3>
            </div>
            <p className="text-sm md:text-base text-slate-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
    <BenefitsPage />
  </>
  );
};

export default HowItWorksSection;
