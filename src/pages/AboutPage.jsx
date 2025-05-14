import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Clock, Star } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Care & Empathy",
      description: "We understand that every request is a moment of need. We treat each situation with the attention it deserves."
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "All of our professionals are rigorously verified and reviewed for your peace of mind."
    },
    {
      icon: Clock,
      title: "Speed",
      description: "When you need help, you need it fast. Our platform connects you with available professionals in minutes."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We maintain the highest standards of quality in all services provided."
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
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">ServiFlex</span>
        </motion.h1>

        <motion.p 
          className="text-xl text-slate-300 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          The right choice when you need it most
        </motion.p>

        <motion.div 
          className="prose prose-invert max-w-none mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lg text-slate-300 mb-6">
            At ServiFlex, we understand that life doesn’t always go as planned. A burst pipe, a car that won’t start, a stuck lock – these moments can bring stress and concern. That’s where we come in.
          </p>
          
          <p className="text-lg text-slate-300 mb-6">
            Our mission is to turn difficult moments into quick and reliable solutions. We connect you to the best professionals, carefully selected and committed to excellence, to solve your problems with speed and quality.
          </p>

          <p className="text-lg text-slate-300">
            More than a service platform, we are a reliable partner when you need help the most. Our team works tirelessly to ensure every experience is marked by professionalism, trust, and satisfaction.
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
          <h2 className="text-2xl font-bold mb-4">Our Promise</h2>
          <p className="text-slate-300">
            We will continue to innovate and evolve to deliver the best service experience, upholding our commitment to being "the right choice when you need it most."
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
