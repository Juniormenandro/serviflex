import React from 'react';
import { motion } from 'framer-motion';

const PressPage = () => {
  const pressReleases = [
    {
      date: 'May 15, 2025',
      title: 'ServiFlex expands operations to 10 more cities',
      description: 'The leading home services platform announces a significant expansion of its coverage area.'
    },
    {
      date: 'April 3, 2025',
      title: 'New record: 100,000 registered professionals',
      description: 'ServiFlex reaches a historic milestone with verified professionals on its platform.'
    },
    {
      date: 'March 12, 2025',
      title: 'Launch of professional training program',
      description: 'The initiative aims to further improve the quality of services offered on the platform.'
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
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Press</span> Room
        </motion.h1>

        <motion.p 
          className="text-xl text-slate-300 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Latest news and updates from ServiFlex
        </motion.p>

        <div className="space-y-8">
          {pressReleases.map((release, index) => (
            <motion.div
              key={release.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-green-400/50 transition-colors cursor-pointer"
            >
              <p className="text-green-400 mb-2">{release.date}</p>
              <h2 className="text-2xl font-semibold mb-3">{release.title}</h2>
              <p className="text-slate-300">{release.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 bg-gradient-to-r from-green-500/10 to-blue-500/10 p-8 rounded-xl border border-slate-700"
        >
          <h2 className="text-2xl font-semibold mb-4">Press Contact</h2>
          <p className="text-slate-300 mb-4">
            For media inquiries and additional information, please contact our press office.
          </p>
          <div className="text-slate-300">
            <p>Email: press@serviflex.com</p>
            <p>Phone: +55 11 9999-9999</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PressPage;
