
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '@/components/ServiceCategories';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  
  const category = categories.find(
    cat => cat.name.toLowerCase() === categoryName.toLowerCase()
  );

  if (!category) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold text-red-400">Categoria não encontrada</h1>
      </div>
    );
  }

  const CategoryIcon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container py-16 md:py-24"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <CategoryIcon className={`h-24 w-24 ${category.color}`} strokeWidth={1.5} />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Serviços de{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            {category.name}
          </span>
        </h1>
        
        <p className="text-slate-400 text-center mb-12 text-lg">
          Encontre os melhores profissionais especializados em serviços de {category.name.toLowerCase()}.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.subcategories.map((subcategory, index) => (
            <motion.div
              key={subcategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(`/category/${categoryName}/${subcategory.toLowerCase()}`)}
              className={`${category.bgColor} ${category.hoverColor} p-6 rounded-xl border border-slate-700 cursor-pointer transition-all duration-300 hover:scale-105`}
            >
              <h3 className="text-xl font-semibold mb-2 text-slate-100">{subcategory}</h3>
              <p className="text-sm text-slate-400">
                Profissionais qualificados em {subcategory.toLowerCase()}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryPage;
