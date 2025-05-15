import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabaseClient';
import { Plus, Trash2 } from 'lucide-react';
import { iconOptions } from '@/lib/iconOptions'; // lista de ícones importados externamente

const colorOptions = [
  { name: 'Green', base: 'green' },
  { name: 'Blue', base: 'blue' },
  { name: 'Red', base: 'red' },
  { name: 'Yellow', base: 'yellow' },
  { name: 'Purple', base: 'purple' },
  { name: 'Teal', base: 'teal' },
  { name: 'Pink', base: 'pink' },
  { name: 'Orange', base: 'orange' },
  { name: 'Indigo', base: 'indigo' },
  { name: 'Slate', base: 'slate' },
];

const tailwindColorClasses = {
  green: 'bg-green-500',
  blue: 'bg-blue-500',
  red: 'bg-red-500',
  yellow: 'bg-yellow-500',
  purple: 'bg-purple-500',
  teal: 'bg-teal-500',
  pink: 'bg-pink-500',
  orange: 'bg-orange-500',
  indigo: 'bg-indigo-500',
  slate: 'bg-slate-500',
};

const AdminServiceCategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [name, setName] = useState('');
  const [selectedColor, setSelectedColor] = useState('green');
  const [selectedIcon, setSelectedIcon] = useState(iconOptions[0].value);
  const [newSub, setNewSub] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const { data: cat } = await supabase.from('categories').select('*');
      const { data: sub } = await supabase.from('subcategories').select('*');
      setCategories(cat || []);
      setSubcategories(sub || []);
    };
    fetchData();
  }, []);

  const handleCreateCategory = async () => {
    const color = `text-${selectedColor}-400`;
    const bgColor = `bg-${selectedColor}-500/10`;
    const hoverColor = `hover:bg-${selectedColor}-500/20`;

    const { data, error } = await supabase.from('categories').insert({
      name,
      icon: selectedIcon,
      color,
      bgColor,
      hoverColor
    }).select().single();

    if (data) {
      setCategories(prev => [...prev, data]);
      setName('');
    }
  };

  const handleAddSubcategory = async (categoryId) => {
    if (!newSub.trim()) return;
    const { data } = await supabase.from('subcategories').insert({
      name: newSub.trim(),
      category_id: categoryId
    }).select().single();

    if (data) {
      setSubcategories(prev => [...prev, data]);
      setNewSub('');
    }
  };

  const handleDeleteCategory = async (id) => {
    await supabase.from('categories').delete().eq('id', id);
    setCategories(prev => prev.filter(cat => cat.id !== id));
    setSubcategories(prev => prev.filter(sub => sub.category_id !== id));
  };

  const handleDeleteSubcategory = async (id) => {
    await supabase.from('subcategories').delete().eq('id', id);
    setSubcategories(prev => prev.filter(sub => sub.id !== id));
  };

  return (
    <motion.div className="container py-16">
      <h1 className="text-2xl font-bold text-center mb-10">Manage Categories</h1>

      {/* Form */}
      <div>
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Category name"
            className="p-2 rounded border border-slate-600 bg-slate-800 text-white"
            />

            <select
            value={selectedIcon}
            onChange={e => setSelectedIcon(e.target.value)}
            className="p-2 rounded border border-slate-600 bg-slate-800 text-white"
            >
            {iconOptions.map(icon => (
                <option key={icon.value} value={icon.value}>{icon.label}</option>
            ))}
            </select>
        </div>
        <div className="text-xs grid grid-cols-4 sm:grid-cols-5 gap-1 w-full">
            {colorOptions.map((opt) => (
            <button
                key={opt.base}
                type="button"
                onClick={() => setSelectedColor(opt.base)}
                className={`px-2 py-2 rounded-lg border-2 ${
                    selectedColor === opt.base
                    ? 'border-white scale-105'
                    : 'border-transparent opacity-60'
                } ${tailwindColorClasses[opt.base]} text-white shadow-md text-center transition-all`}
                >
                {opt.name}
            </button>
            ))}
        </div>
        <div className="flex justify-center mt-5 mb-20">
            <button
                onClick={handleCreateCategory}
                className="w-full py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 shadow-md hover:shadow-green-500/40 transition-all duration-300"
            >
                Add Category
            </button>
        </div>
      </div>

      {/* List */}
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(cat => {
          const Icon = iconOptions.find(i => i.value === cat.icon)?.icon;
          const subs = subcategories.filter(sub => sub.category_id === cat.id);

          return (
            <div key={cat.id} className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  {Icon && <Icon className={`h-6 w-6 ${cat.color}`} />} 
                  <h2 className="font-bold text-slate-100 text-ms">{cat.name}</h2>
                </div>
                <button onClick={() => handleDeleteCategory(cat.id)} className="text-red-400 hover:text-red-300">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
              <ul className="text-sm text-slate-300 space-y-1 mb-2">
                {subs.map(sub => (
                  <li key={sub.id} className="flex justify-between items-center">
                    {sub.name}
                    <button onClick={() => handleDeleteSubcategory(sub.id)} className="text-xs text-red-400 hover:text-red-300">remove</button>
                  </li>
                ))}
              </ul>
              <div className="flex gap-2 mt-2">
                <input
                  value={newSub}
                  onChange={e => setNewSub(e.target.value)}
                  placeholder="New subcategory"
                  className="flex-1 py-1 px-2 md:p-2 rounded border border-slate-600 bg-slate-700 text-white text-xs"
                />
                <button
                  onClick={() => handleAddSubcategory(cat.id)}
                  className="bg-blue-600 text-white px-2 py-1 md:px-4 md:py-2 rounded hover:bg-blue-700"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default AdminServiceCategoriesPage;
