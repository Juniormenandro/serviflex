import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Wallet, Calendar } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'react-hot-toast';


const ProfessionalRegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
      const { error } = await supabase.from('ProfessionalRegister').insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        pps: data.pps,
        Experiência: data.Experiência,
        categoria: data.categoria,
      });
  
      if (error) {
        console.error('Erro ao enviar:', error.message);
        toast.error('Erro ao enviar mensagem.');
      } else {
        toast.success('Mensagem enviada com sucesso!');
        reset();
      }
    };

  const benefits = [
    {
      icon: Star,
      title: 'Visibility',
      description: 'Get found by customers looking for your services'
    },
    {
      icon: Wallet,
      title: 'Earnings',
      description: 'Set your prices and schedules with total flexibility'
    },
    {
      icon: Calendar,
      title: 'Flexibility',
      description: 'Work when and where you want, you control your schedule'
    },
    {
      icon: CheckCircle,
      title: 'Credibility',
      description: 'Build your reputation through positive reviews'
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
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Be a <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">professional</span>
        </motion.h1>

        <motion.p 
          className="text-xl text-slate-300 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Join the largest services platform
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700"
            >
              <benefit.icon className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-slate-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-8 rounded-xl border border-slate-700"
        >
          <h2 className="text-2xl font-semibold mb-6">Register as a Professional</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  {...register('name', { required: 'Assunto é obrigatorio!'})}
                  className="w-full px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-green-400 focus:outline-none"
                  placeholder="Your Full Name"
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">PPS</label>
                <input
                  type="text"
                  {...register('pps', {required: 'Subject is required'})}
                  className="w-full px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-green-400 focus:outline-none"
                  placeholder="000.000.000-00"
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                {...register('email', {required: 'Subject is required'})}
                className="w-full px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-green-400 focus:outline-none"
                placeholder="your@email.com"
              />
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Telephone</label>
              <input
                type="tel"
                {...register('phone', {required: 'Subject is required'})}
                className="w-full px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-green-400 focus:outline-none"
                placeholder="(00) 000-0000"
              />
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Area of ​​Activity</label>
              <select {...register('categoria', {required: 'Subject is required'})} className="w-full px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-green-400 focus:outline-none">
                <option value="">Select your area</option>
                <option value="auto">Automotive</option>
                <option value="casa">Home</option>
                <option value="jardim">Garden</option>
                <option value="pets">Pets</option>
              </select>
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Experience</label>
              <textarea
                {...register('Experiência', {required: 'Subject is required'})}
                className="w-full px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-green-400 focus:outline-none h-32"
                placeholder="Descreva sua experiência profissional..."
              ></textarea>
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <button type='submit' className="w-full px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-green-500/50 transition-all duration-300">
              Register as a Professional
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfessionalRegisterPage;
