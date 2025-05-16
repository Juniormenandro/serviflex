// src/pages/ClientAppointmentsPage.jsx
import React, { useEffect, useState } from 'react';
import {
  Loader2,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
} from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { useUser } from '@supabase/auth-helpers-react';
import { motion } from 'framer-motion';

const statusMap = {
  pendente: { label: 'Pending', color: 'text-yellow-400', icon: AlertCircle },
  aprovado: { label: 'Approved', color: 'text-green-400', icon: CheckCircle },
  recusado: { label: 'Rejected', color: 'text-red-400', icon: XCircle },
  concluído: { label: 'Completed', color: 'text-blue-400', icon: CheckCircle },
};

const ClientAppointmentsPage = () => {
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [activeAppointments, setActiveAppointments] = useState([]);
  const [completedAppointments, setCompletedAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!user) return;
      setLoading(true);
      const [{ data: active }, { data: completed }] = await Promise.all([
        supabase.from('appointments').select('*').eq('user_id', user.id).not('status', 'eq', 'concluído').order('created_at', { ascending: false }),
        supabase.from('appointments').select('*').eq('user_id', user.id).eq('status', 'concluído').order('created_at', { ascending: false })
      ]);

      setActiveAppointments(active || []);
      setCompletedAppointments(completed || []);
      setLoading(false);
    };

    fetchAppointments();
  }, [user]);

  if (!user) return null;

  return (
    <div className="container py-16 text-slate-100">
      <h1 className="text-3xl font-bold text-center mb-12">My Services</h1>

      {loading ? (
        <div className="flex justify-center items-center h-32">
          <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
        </div>
      ) : (
        <>
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-green-400">In Progress</h2>
            {activeAppointments.length === 0 ? (
              <p className="text-slate-400">You have no active services.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeAppointments.map((appointment) => {
                  const status = statusMap[appointment.status] || statusMap['pendente'];
                  const StatusIcon = status.icon;

                  return (
                    <div
                      key={appointment.id}
                      className="border border-slate-700 p-6 rounded-xl bg-slate-800/50 space-y-3"
                    >
                      <p className="text-lg font-semibold text-slate-100 capitalize">
                        {appointment.category} → {appointment.subcategory}
                      </p>
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
                          <p className="text-sm text-slate-400 mb-1">Notes:</p>
                          <p className="text-slate-300 text-sm">{appointment.notes}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">Completed</h2>
            {completedAppointments.length === 0 ? (
              <p className="text-slate-400">You haven't completed any services yet.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {completedAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="border border-slate-700 p-6 rounded-xl bg-slate-800/50 space-y-3"
                  >
                    <p className="text-lg font-semibold text-slate-100 capitalize">
                      {appointment.category} → {appointment.subcategory}
                    </p>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-slate-400" />
                      <span>{appointment.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-slate-400" />
                      <span>{appointment.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      <span className="font-semibold text-blue-400">Completed</span>
                    </div>
                    {appointment.notes && (
                      <div>
                        <p className="text-sm text-slate-400 mb-1">Notes:</p>
                        <p className="text-slate-300 text-sm">{appointment.notes}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
};

export default ClientAppointmentsPage;
