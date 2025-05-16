import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Clock, Shield, Award, Target, Users, Zap, TrendingUp } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const BenefitsPage = () => {
  const mainBenefits = [
    {
      icon: Wallet,
      title: 'Attractive Earnings',
      description: 'Set your own prices and receive secure, on-time payments.'
    },
    {
      icon: Clock,
      title: 'Total Flexibility',
      description: 'Work on the schedule that best fits your routine.'
    },
    {
      icon: Shield,
      title: 'Guaranteed Security',
      description: 'Full protection for you and your services.'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Rating system that highlights top-performing professionals.'
    }
  ];

  const additionalBenefits = [
    {
      icon: Target,
      title: 'Qualified Clients',
      description: 'Access a base of verified clients ready to hire.'
    },
    {
      icon: Users,
      title: 'Active Community',
      description: 'Be part of a network of professionals and share experiences.'
    },
    {
      icon: Zap,
      title: 'Priority Support',
      description: 'Exclusive support to quickly resolve your issues.'
    },
    {
      icon: TrendingUp,
      title: 'Professional Growth',
      description: 'Access to training and development opportunities.'
    }
  ];
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // Já está na home, só rola até o elemento
      const section = document.getElementById('HowItWorks');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Redireciona para a home com hash
      navigate('/#HowItWorks');
    }
  };
  return (
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
          Benefits for <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Professionals</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-slate-300 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Discover the advantages of being part of our platform
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {mainBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-slate-800/50 p-4 md:p-8 rounded-xl border border-slate-700"
            >
              <benefit.icon className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-lg md:text-2xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-sm md:text-base text-slate-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-4 md:p-8 rounded-xl border border-slate-700 mb-16"
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">More Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 flex items-start gap-4"
              >
                <benefit.icon className="h-8 w-8 text-green-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-slate-300 text-xs md:text-sm">{benefit.description}</p>
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
          <h2 className="text-2xl font-semibold">Ready to get started?</h2>
          <p className="text-xs md:text-base text-slate-300">
            Join thousands of professionals already growing with ServiFlex
          </p>
          <button onClick={handleLogoClick} className="w-full text-xs md:text-base px-8 md:px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-green-500/50 transition-all duration-300">
            Register as a Professional
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BenefitsPage;
