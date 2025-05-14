import React from 'react';
import { motion } from 'framer-motion';

const BlogPage = () => {
  const blogPosts = [
    {
      image: <img alt="Home maintenance tips" src="https://images.unsplash.com/photo-1649108001074-163a7b7c4b40" />,
      category: 'Maintenance',
      title: '10 Essential Tips for Home Maintenance',
      excerpt: 'Learn how to keep your home in perfect condition with these practical expert tips.',
      date: 'May 9, 2025'
    },
    {
      image: <img alt="Garden care" src="https://images.unsplash.com/photo-1562778380-180f296dd897" />,
      category: 'Gardening',
      title: 'Complete Guide to a Perfect Garden',
      excerpt: 'Discover the secrets to keeping your garden beautiful and healthy all year round.',
      date: 'May 8, 2025'
    },
    {
      image: <img alt="Vehicle maintenance" src="https://images.unsplash.com/photo-1596986952526-3be237187071" />,
      category: 'Automotive',
      title: 'Essential Car Care Tips',
      excerpt: 'Find out how to extend the lifespan of your car with these preventive maintenance tips.',
      date: 'May 7, 2025'
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
      <div className="max-w-5xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">ServiFlex</span> Blog
        </motion.h1>

        <motion.p 
          className="text-xl text-slate-300 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Tips, news, and exclusive content about services and maintenance
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-green-400/50 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                {post.image}
              </div>
              <div className="p-6">
                <span className="text-sm text-green-400">{post.category}</span>
                <h2 className="text-xl font-semibold mt-2 mb-3">{post.title}</h2>
                <p className="text-slate-300 text-sm mb-4">{post.excerpt}</p>
                <p className="text-slate-400 text-sm">{post.date}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-green-500/50 transition-all duration-300">
            View More Posts
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogPage;
