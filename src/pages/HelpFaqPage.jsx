import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HelpFaqPage = () => {
  const faqs = [
    {
      question: 'How does the hiring process work?',
      answer: 'Just choose the desired service, select an available professional, and schedule the time that best suits your needs. Payment is made securely through our platform.'
    },
    {
      question: 'Are the professionals verified?',
      answer: 'Yes! All professionals go through a strict verification process, including document checks, background verification, and professional references.'
    },
    {
      question: 'How does the service warranty work?',
      answer: 'We offer satisfaction guarantee on all services. If any issue arises, our support team is ready to assist and resolve the situation.'
    },
    {
      question: 'What is the service time frame?',
      answer: 'The response time depends on the availability of professionals and service urgency. For emergencies, we can attend within 2 hours.'
    },
    {
      question: 'How can I become a professional?',
      answer: 'To register as a professional, go to the "For Professionals" section and follow the registration process. You’ll need to provide documentation and go through an interview.'
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
          Help and <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">FAQ</span>
        </motion.h1>

        <motion.p 
          className="text-xl text-slate-300 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Find answers to the most frequently asked questions
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
          <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
          <p className="text-slate-300 mb-6">
            Our support team is always ready to help you.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-green-500/50 transition-all duration-300">
            Talk to Support
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HelpFaqPage;
