// src/lib/categoriesData.js
import { createClient } from '@supabase/supabase-js';
import { Car, Home, PawPrint, SprayCan, Wrench, TreePine, Briefcase } from 'lucide-react';
import { colorClassMap } from './tailwindClassMap';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const iconMap = {
  Car,
  Home,
  PawPrint,
  SprayCan,
  Wrench,
  TreePine,
  Briefcase
};

export const fetchFormattedCategories = async () => {
  const { data: categories, error: catErr } = await supabase.from('categories').select('*');
  const { data: subcategories, error: subErr } = await supabase.from('subcategories').select('*');

  if (catErr || subErr) {
    console.error('Error loading categories or subcategories:', catErr || subErr);
    return [];
  }

  return categories.map(cat => {
    const colorClasses = colorClassMap[cat.bgColor] || colorClassMap.green; // fallback para verde

    return {
      id: cat.id,
      name: cat.name,
      icon: cat.icon,
      color: colorClasses.text,
      bgColor: colorClasses.bg,
      hoverColor: colorClasses.hover,
      subcategories: subcategories
        .filter(sub => sub.category_id === cat.id)
        .map(sub => ({
          id: sub.id,
          name: sub.name
        }))
    };
  });
};
