import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabaseClient';
import { useUser } from '@supabase/auth-helpers-react';
import { toast } from 'react-hot-toast';
import {Calendar } from 'lucide-react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';

const AppointmentSheet = () => {
  const { categoryName, subcategoryName } = useParams();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const user = useUser();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const onSubmit = async (data) => {
    if (!user) {
      toast.error('You must be logged in to schedule.');
      setTimeout(() => navigate('/login'), 2000);
      return;
    }

    const { error } = await supabase.from('appointments').insert({
      user_id: user.id,
      category: categoryName,
      subcategory: subcategoryName,
      date: data.date,
      time: data.time,
      phone: data.phone,
      notes: data.notes,
      status: "pendente",
    });

    if (error) {
      console.error('Error saving:', error.message);
      toast.error('Error saving schedule.');
    } else {
      toast.success('Scheduling completed successfully!');
      reset();
      setOpen(false);
      setTimeout(() => navigate('/client/appointments'), 2000);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full py-2 px-4 sm:py-4 sm:px-6 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium sm:font-semibold bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white transition-all duration-300 shadow-md hover:shadow-green-500/50"
          >
          Request a quote for {subcategoryName}
        </motion.button>
      </SheetTrigger>
      <SheetContent className="bg-slate-900/95 backdrop-blur-lg border-slate-800">
        <SheetHeader>
          <SheetTitle className="text-slate-100">
            <motion.div whileHover={{ scale: 1.05 }}>
                <div className="flex items-center space-x-2 mt-4 text-xl md:text-2xl md:font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-all">
                    <Calendar className="h-5 w-5 md:h-8 md:w-8 text-green-400" />
                    <span>Service Scheduling</span>
                </div>
            </motion.div>
          </SheetTitle>
        </SheetHeader>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-4 flex flex-col gap-4 text-slate-300"
        >
          {/* Nome */}
          <div>
            <label className="block text-sm mb-1">Your name</label>
            <Input {...register('name', { required: 'Name is required' })} placeholder="Enter your name" />
            {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
          </div>

          {/* Telefone */}
          <div>
            <label className="block text-sm mb-1">Telephone</label>
            <Input {...register('phone', { required: 'Telephone is mandatory' })} placeholder="(00) 00000-0000" />
            {errors.phone && <p className="text-red-400 text-sm">{errors.phone.message}</p>}
          </div>

          {/* Data */}
          <div>
            <label className="block text-sm mb-1">Preferred Date</label>
            <Input type="date" {...register('date', { required: 'Date is mandatory' })} />
            {errors.date && <p className="text-red-400 text-sm">{errors.date.message}</p>}
          </div>

          {/* Horário */}
          <div>
            <label className="block text-sm mb-1">Preferred Schedule</label>
            <Input type="time" {...register('time', { required: 'Schedule is mandatory' })} />
            {errors.time && <p className="text-red-400 text-sm">{errors.time.message}</p>}
          </div>

          {/* Observações */}
          <div>
            <label className="block text-sm mb-1">Observations</label>
            <Input {...register('notes')} placeholder="Any observations?" />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full py-2 px-4 sm:py-4 sm:px-6 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium sm:font-semibold bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white transition-all duration-300 shadow-md hover:shadow-green-500/50"
            >
            Confirm Appointment
          </motion.button>
        </motion.form>
      </SheetContent>
    </Sheet>
  );
};

export default AppointmentSheet;
