import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, Clock } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'react-hot-toast';

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { error } = await supabase.from('contacts').insert({
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    });

    if (error) {
      console.error('Error sending message:', error.message);
      toast.error('Failed to send message.');
    } else {
      toast.success('Message sent successfully!');
      reset();
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      description: 'Available 24/7 for emergencies',
      contact: '0800 123 4567'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Response within 24h',
      contact: 'contact@serviflex.com'
    },
    {
      icon: MessageSquare,
      title: 'Chat',
      description: 'Instant support',
      contact: 'Start chat'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      description: 'Mon-Fri: 8am to 8pm',
      contact: 'Sat: 9am to 3pm'
    }
  ];

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
          Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Touch</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-slate-300 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          We are here to help you
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-slate-800/50 p-4 md:p-8 rounded-xl border border-slate-700 flex items-center space-x-4"
            >
              <method.icon className="h-10 w-10 text-green-400" />
              <div>
                <h3 className="font-semibold text-lg">{method.title}</h3>
                <p className="text-slate-400 text-sm">{method.description}</p>
                <p className="text-slate-300 mt-1">{method.contact}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-8 rounded-xl border border-slate-700"
        >
          <h2 className="md:text-2xl font-semibold mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="md:space-y-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-2 md:py-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-green-400 focus:outline-none"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  className="w-full px-4 py-2 md:py-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-green-400 focus:outline-none"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                {...register('subject', { required: 'Subject is required' })}
                className="w-full px-4 py-2 md:py-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-green-400 focus:outline-none"
                placeholder="How can we help you?"
              />
              {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                className="w-full px-4 py-2 md:py-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-green-400 focus:outline-none h-32"
                placeholder="Describe your message..."
              ></textarea>
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
            </div>
            <button type="submit" className="w-full md:px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-green-500/50 transition-all duration-300">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
