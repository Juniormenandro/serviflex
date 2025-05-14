import React from 'react';
import { motion } from 'framer-motion';

const TermsPage = () => {
  const sections = [
    {
      title: 'Terms of Use',
      content: 'These terms of use establish the rules for using the ServiFlex platform. By using our services, you agree to these terms.'
    },
    {
      title: 'Platform Usage',
      content: 'ServiFlex is a platform that connects professionals and clients. We are not the direct providers of the services offered.'
    },
    {
      title: 'Responsibilities',
      content: 'ServiFlex is not directly responsible for service delivery, but acts as a facilitator and ensures quality standards.'
    },
    {
      title: 'Payments',
      content: 'All payments are processed securely through our platform, ensuring protection for both clients and professionals.'
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
          Terms of <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Service</span>
        </motion.h1>

        <motion.p 
          className="text-xl text-slate-300 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Please read our terms and conditions carefully
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
            Last updated: May 9, 2025
          </p>
          <p className="text-slate-400 mt-2">
            For questions about our terms, please contact our support team.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TermsPage;
