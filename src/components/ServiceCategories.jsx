import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { iconOptions } from '@/lib/iconOptions';
import { fetchFormattedCategories } from '@/lib/categoriesData';


const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
    transition: { type: "spring", stiffness: 300 }
  }
};

const ServiceCategories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  const handleCategoryClick = (categoryName) => {
  navigate(`/category/${categoryName.toLowerCase()}`);
};


  const handleSubcategoryClick = (e, categoryName, subcategoryName) => {
    e.stopPropagation();
    navigate(`/category/${categoryName.toLowerCase()}/${subcategoryName.toLowerCase()}`);
    setTimeout(() => {
    window.scrollTo({ top: 30, behavior: 'smooth' });
  }, 200);
  };

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchFormattedCategories();
      setCategories(data);
    };
    loadCategories();
  }, []);



  return (
    <section className="py-16 md:py-24 bg-slate-800/50">
      <div className="container">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Browse by <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Categories</span>
        </motion.h2>
        <motion.p 
          className="text-center text-slate-400 mb-12 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Quickly find the type of service you need by exploring our top categories.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = iconOptions.find(i => i.value === category.icon)?.icon;

            return (
              <motion.div
                key={category.id}
                className={`rounded-xl p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-300 ${category.bgColor} ${category.hoverColor} border border-slate-700 shadow-lg hover:shadow-2xl`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                custom={index}
                onClick={() => handleCategoryClick(category.name)}
              >
                {Icon && <Icon className={`h-16 w-16 mb-6 ${category.color}`} strokeWidth={1.5} />}
                <h3 className="text-2xl font-semibold mb-3 text-slate-100">{category.name}</h3>
                <ul className="space-y-1 text-sm text-slate-400">
                  {category.subcategories.map(sub => (
                    <li
                      key={sub.id}
                      className="hover:text-green-400 transition-colors"
                      onClick={(e) => handleSubcategoryClick(e, category.name, sub.name)}
                    >
                      {sub.name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
