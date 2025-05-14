import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '@/components/ServiceCategories';
import AppointmentSheet from '@/components/AppointmentSheet';

import { ArrowLeft } from 'lucide-react';

const SubcategoryPage = () => {
  const { categoryName, subcategoryName } = useParams();
  
  const category = categories.find(
    cat => cat.name.toLowerCase() === categoryName.toLowerCase()
  );

  if (!category) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold text-red-400">Category not found</h1>
      </div>
    );
  }

  const subcategory = category.subcategories.find(
    sub => sub.toLowerCase() === subcategoryName.toLowerCase()
  );

  if (!subcategory) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold text-red-400">Subcategory not found</h1>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container py-16 md:py-24"
    >
      <div className="max-w-4xl mx-auto">
        <Link
          to={`/category/${categoryName}`}
          className="inline-flex items-center text-slate-400 hover:text-green-400 transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to {category.name}
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            {subcategory}
          </span>
        </h1>
        
        <p className="text-slate-400 text-center mb-12 text-lg">
          You are viewing services for {subcategory} under the {category.name} category.
        </p>

        <div className={`${category.bgColor} rounded-xl p-8 border border-slate-700`}>
          <h2 className="text-2xl font-semibold mb-4 text-slate-100">
            Find professionals for {subcategory}
          </h2>
          <p className="text-slate-400 mb-6">
            Our professionals are verified and rated by the community to ensure the best service.
          </p>
          <AppointmentSheet />
        </div>
      </div>
    </motion.div>
  );
};

export default SubcategoryPage;
