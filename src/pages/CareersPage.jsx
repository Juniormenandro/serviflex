import React from 'react';
import { motion } from 'framer-motion';

const CareersPage = () => {
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
          Careers at <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">ServiFlex</span>
        </motion.h1>

        <motion.p 
          className="text-xl text-slate-300 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Join us on our mission to transform service delivery in Brazil
        </motion.p>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-800/50 p-8 rounded-xl border border-slate-700"
          >
            <h2 className="text-2xl font-semibold mb-4">Why work with us?</h2>
            <ul className="space-y-4 text-slate-300">
              <li>• Dynamic and innovative environment</li>
              <li>• Growth opportunities</li>
              <li>• Competitive benefits</li>
              <li>• Collaborative culture</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-8 rounded-xl border border-slate-700"
          >
            <h2 className="text-2xl font-semibold mb-4">Open Positions</h2>
            <p className="text-slate-300 mb-4">
              We’re always looking for great talent to join our team.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <h3 className="font-semibold">Full Stack Developer</h3>
                <p className="text-slate-400">São Paulo - Remote</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <h3 className="font-semibold">Product Designer</h3>
                <p className="text-slate-400">São Paulo - Remote</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <h3 className="font-semibold">Customer Success</h3>
                <p className="text-slate-400">São Paulo - Hybrid</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-green-500/50 transition-all duration-300">
              View All Openings
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CareersPage;
