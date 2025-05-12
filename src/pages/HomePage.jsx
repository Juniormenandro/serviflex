
import React from 'react';
import Hero from '@/components/Hero';
import ServiceCategories from '@/components/ServiceCategories';
import ReviewSection from '../components/ReviewSection';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ServiceCategories />
        <ReviewSection />
      </motion.div>
    </>
  );
};

export default HomePage;
