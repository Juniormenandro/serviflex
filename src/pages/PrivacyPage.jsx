import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database } from 'lucide-react';

const PrivacyPage = () => {
  const privacyTopics = [
    {
      icon: Shield,
      title: 'Data Protection',
      content: 'Your personal data is protected with the most advanced security technologies.'
    },
    {
      icon: Lock,
      title: 'Security',
      content: 'We use end-to-end encryption to safeguard your information.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      content: 'You have full control over your data and how it is used.'
    },
    {
      icon: Database,
      title: 'Storage',
      content: 'Your data is stored on secure servers with regular backups.'
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
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Privacy</span> Policy
        </motion.h1>

        <motion.p 
          className="text-xl text-slate-300 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Your right to privacy is our top priority
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
            <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
            <p className="text-slate-300 mb-4">
              We collect only the data necessary to operate the platform and improve our services:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Registration information</li>
              <li>Platform usage data</li>
              <li>Ratings and feedback</li>
              <li>Payment information</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-slate-300 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Access your data</li>
              <li>Request corrections</li>
              <li>Delete your account</li>
              <li>Export your information</li>
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
            Last updated: May 9, 2025
          </p>
          <p className="text-slate-400 mt-2">
            For questions about privacy, contact our DPO at: privacidade@serviflex.com
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PrivacyPage;
