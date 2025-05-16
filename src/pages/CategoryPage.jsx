import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchFormattedCategories } from '@/lib/categoriesData';
import { iconMap } from '@/lib/categoriesData';
import { ArrowLeft } from 'lucide-react';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  const category = categories.find(
    cat => cat.name.toLowerCase() === categoryName.toLowerCase()
  );

  const handleClick = (e, categoryName, subcategoryName) => {
    e.stopPropagation();
    navigate(`/category/${categoryName}/${subcategoryName.toLowerCase()}`);
    setTimeout(() => {
    window.scrollTo({ top: 100, behavior: 'smooth' });
  }, 200);
  };

  useEffect(() => {
    window.scrollTo({ top: 30, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchFormattedCategories();
      setCategories(data);
    };
    
    loadCategories();
  }, []);

  if (!category) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold text-red-400">Category not found</h1>
      </div>
    );
  }

  const CategoryIcon = iconMap[category.icon] || iconMap['Briefcase'];

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
          to={`/#categories-section`}
          className="inline-flex items-center text-slate-400 hover:text-green-400 transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Category
        </Link>

        <div className="flex items-center justify-center mb-8">
          <CategoryIcon className={`h-24 w-24 ${category.color}`} strokeWidth={1.5} />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          {category.name} <span className="text-slate-300">Services</span>
        </h1>
        
        <p className="text-slate-400 text-center mb-12 text-lg">
          Find top-rated professionals specialized in {category.name.toLowerCase()} services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.subcategories.map((subcategory, index) => (
            <motion.div
              key={subcategory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={(e) => handleClick(e, category.name, subcategory.name)}
              className={`${category.bgColor} ${category.hoverColor} p-6 rounded-xl border border-slate-700 cursor-pointer transition-all duration-300 hover:scale-105`}
            >
              <h3 className="text-xl font-semibold mb-2 text-slate-100">{subcategory.name}</h3>
              <p className="text-sm text-slate-400">
                Skilled professionals in {subcategory.name.toLowerCase()}
              </p>

            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryPage;
