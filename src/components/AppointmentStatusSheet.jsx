import React, { useEffect, useState } from 'react';
import {
  Loader2,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  ArrowLeft,
} from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { useUser } from '@supabase/auth-helpers-react';
import { motion, AnimatePresence } from 'framer-motion';

const statusMap = {
  pendente: { label: 'Pendente', color: 'text-yellow-400', icon: AlertCircle },
  aprovado: { label: 'Aprovado', color: 'text-green-400', icon: CheckCircle },
  recusado: { label: 'Recusado', color: 'text-red-400', icon: XCircle },
  concluído: { label: 'Concluído', color: 'text-blue-400', icon: CheckCircle },
};

const AppointmentStatusSheet = () => {
  const user = useUser();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!user) return;
      setLoading(true);
      const { data, error } = await supabase
        .from('appointments')
        .select('*')
        .eq('user_id', user.id)
        .not('status', 'eq', 'concluído')
        .order('created_at', { ascending: false });

      if (!error) {
        setAppointments(data);
      }
      setLoading(false);
    };

    fetchAppointments();
  }, [user]);

  if (!user || appointments.length === 0) return null;

  return (
    <AnimatePresence mode="wait">
      {!showList ? (
        <motion.button
          key="botao"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          onClick={() => setShowList(true)}
          className="w-full flex items-center space-x-1 px-2 py-2 mt-4 text-base md:text-2xl rounded-lg border border-slate-700 md:font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-all"
        >
          <Calendar className="h-5 w-5 md:h-8 md:w-8 text-green-400" />
          <span>View Status scheduling</span>
        </motion.button>
      ) : (
        <motion.div
          key="lista"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="mt-4 text-slate-300 overflow-y-auto max-h-[70vh] pr-2"
        >
          <button
            onClick={() => setShowList(false)}
            className="flex items-center mb-4 text-sm text-slate-400 hover:text-green-400 transition-all"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao menu
          </button>

          <h2 className="text-lg font-bold mb-4 text-slate-100 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-green-400" />
            Status scheduling
          </h2>

          {loading ? (
            <div className="flex items-center justify-center h-20">
              <Loader2 className="animate-spin text-slate-400 h-6 w-6" />
            </div>
          ) : (
            <div className="space-y-4">
              {appointments.map((appointment) => {
                const status = statusMap[appointment.status] || statusMap['pendente'];
                const StatusIcon = status.icon;

                return (
                  <div
                    key={appointment.id}
                    className="border border-slate-700 p-4 rounded-xl space-y-3 bg-slate-800/50"
                  >
                    <div>
                      <p className="text-sm mb-1 text-slate-400">Serviço</p>
                      <p className="text-lg font-semibold text-slate-100 capitalize">
                        {appointment.category} → {appointment.subcategory}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-slate-400" />
                      <span>{appointment.date}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-slate-400" />
                      <span>{appointment.time}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <StatusIcon className={`w-5 h-5 ${status.color}`} />
                      <span className={`font-semibold ${status.color}`}>{status.label}</span>
                    </div>

                    {appointment.notes && (
                      <div>
                        <p className="text-sm mb-1 text-slate-400">Observações:</p>
                        <p className="text-slate-300">{appointment.notes}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppointmentStatusSheet;
