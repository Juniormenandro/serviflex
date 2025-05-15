import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabaseClient';
import { useUser } from '@supabase/auth-helpers-react';
import { ShieldCheck, Mail, Users, Star, Loader2, Trash2 } from 'lucide-react';
import ServicosConcluidosSection from '../components/ServicosConcluidosSection';
import usePaginatedData from '../lib/usePaginatedData';

const AdminDashboardPage = () => {
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [a, c, r, p] = await Promise.all([
        supabase.from('appointments').select('*').not('status','eq', 'concluído').order('created_at', { ascending: false }),
        supabase.from('contacts').select('*').order('created_at', { ascending: false }),
        supabase.from('reviews').select('*').order('created_at', { ascending: false }),
        supabase.from('ProfessionalRegister').select('*').order('created_at', { ascending: false }),
      ]);

      if (a.data) setAppointments(a.data);
      if (c.data) setContacts(c.data);
      if (r.data) setReviews(r.data);
      if (p.data) setProfessionals(p.data);

      setLoading(false);
    };
    fetchData();
  }, []);

  const handleApprove = async (id) => {
    await supabase.from('appointments').update({ status: 'aprovado' }).eq('id', id);
    setAppointments(prev => prev.map(app => app.id === id ? { ...app, status: 'aprovado' } : app));
  };

  const handleReject = async (id) => {
    await supabase.from('appointments').update({ status: 'recusado' }).eq('id', id);
    setAppointments(prev => prev.map(app => app.id === id ? { ...app, status: 'recusado' } : app));
  };

  const handleConcluir = async (id) => {
    await supabase.from('appointments').update({ status: 'concluído' }).eq('id', id);
    setAppointments(prev => prev.map(app => app.id === id ? { ...app, status: 'concluído' } : app));
  };

  const handleDelete = async (table, id, setState) => {
    await supabase.from(table).delete().eq('id', id);
    setState(prev => prev.filter(item => item.id !== id));
  };

  const { paginatedData: paginatedContacts, totalPages: totalContactsPages, currentPage: currentContactsPage, setCurrentPage: setCurrentContactsPage}
    = usePaginatedData({ data: contacts, itemsPerPage: 4 });
  
  const { paginatedData: paginatedReviews, totalPages: totalReviewPages, currentPage: currentReviewPage, setCurrentPage: setCurrentReviewPage}
    = usePaginatedData({ data: reviews, itemsPerPage: 4 });

  const { paginatedData: paginatedProfessional, totalPages: totalProfessionalPages, currentPage: currentProfessionalPage, setCurrentPage: setCurrentProfessionalPage}
    = usePaginatedData({ data: professionals, itemsPerPage: 4 });

  if (!user) return null;
  if (user.email !== 'jojuniorjo@gmail.com') return <p className="text-center py-20 text-red-400">Restricted access</p>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container py-16"
    >
      <h1 className="text-2xl font-bold text-center mb-10">Admin Dashboard</h1>

      {loading ? (
        <div className="flex justify-center">
          <Loader2 className="h-10 w-10 animate-spin text-slate-400" />
        </div>
      ) : (
        <div className="space-y-16">

          {/* Scheduled Services */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-green-400">
              <ShieldCheck /><span className="text-xl md:text-2xl">Scheduled Services</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {appointments.map(app => (
                <div key={app.id} className="text-xs border border-slate-700 bg-slate-800/50 p-6 rounded-xl space-y-2">
                  <p className="text-lg font-semibold text-slate-100">{app.category} → {app.subcategory}</p>
                  <p className="text-slate-400">{app.date} at {app.time}</p>
                  <p className="text-slate-300 ">Status: <span className="capitalize font-semibold">{app.status}</span></p>
                  <p className="text-slate-300 ">Phone: <span className="capitalize font-semibold">{app.phone}</span></p>
                  <p className="text-slate-300 ">Notes: <span className="capitalize font-semibold">{app.notes}</span></p>
                  <div className="flex gap-2 mt-2">
                    {app.status === 'pendente' && (
                    <>
                        <button onClick={() => handleApprove(app.id)} className=" w-1/2 px-4 py-1 rounded bg-green-600 text-white hover:bg-green-700">Approve</button>
                        <button onClick={() => handleReject(app.id)} className=" w-1/2 px-4 py-1 rounded bg-red-600 text-white hover:bg-red-700">Reject</button>
                    </>
                    )}
                   {
                    (app.status === 'aprovado' || app.status === 'recusado') && (
                    <>
                        <button onClick={() => handleConcluir(app.id)} className=" w-full px-4 py-1 rounded bg-blue-600 text-white text-sm hover:bg-blue-700">Mark as Done</button>
                    </>
                    )
                   }
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Completed Services */}
          <ServicosConcluidosSection />

          {/* Received Messages */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-blue-400">
              <Mail /><span className="text-xl md:text-2xl">Received Messages</span>
            </h2>
            <div className="space-y-4">
              {paginatedContacts.map(c => (
                <div key={c.id} className=" text-xs border border-slate-700 bg-slate-800/50 p-4 rounded-xl">
                  <p className="text-sm text-slate-400">{c.created_at}</p>
                  <p className="font-semibold text-slate-100">{c.name} ({c.email})</p>
                  <p className="text-slate-300 mt-2">{c.message}</p>
                  <button onClick={() => handleDelete('contacts', c.id, setContacts)} className="mt-2 text-red-400 text-xs flex items-center gap-1 hover:text-red-300">
                    <Trash2 className="h-4 w-4" /> Delete
                  </button>
                </div>
              ))}
            </div>
            <div className="text-xs flex justify-center gap-4 mt-6">
                <button onClick={() => setCurrentContactsPage(prev => prev - 1)} disabled={currentContactsPage === 1}
                className="px-4 py-2 rounded bg-slate-700 hover:bg-slate-600 disabled:opacity-40">
                Previous </button>
                <span className="text-slate-300">{currentContactsPage} of {totalContactsPages}</span>
                <button onClick={() => setCurrentContactsPage(prev => prev + 1)} disabled={currentContactsPage === totalContactsPages}
                className="px-4 py-2 rounded bg-slate-700 hover:bg-slate-600 disabled:opacity-40">
                Next </button>
            </div>
          </section>

          {/* Registered Professionals */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-yellow-400">
              <Users /><span className="text-lg md:text-2xl">Registered Professionals</span>
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProfessional.map(pro => (
                <li key={pro.id} className="text-xs border border-slate-700 p-4 rounded-xl bg-slate-800/50">
                    <p className="text-slate-100 font-semibold">{pro.name}</p>
                    <p className="text-slate-400 text-sm">{pro.email}</p>
                    <p className="text-slate-400 text-sm">{pro.phone}</p>
                    <p className="text-slate-400 text-sm">{pro.pps}</p>
                    <p className="text-slate-400 text-sm">{pro.Experiência}</p>
                    <p className="text-slate-400 text-sm">{pro.categoria}</p>
                    <button onClick={() => handleDelete('ProfessionalRegister', pro.id, setProfessionals)} className="mt-2 text-red-400 text-xs flex items-center gap-1 hover:text-red-300">
                      <Trash2 className="h-4 w-4" /> Delete
                    </button>
                </li>
              ))}
            </ul>
            <div className="text-xs flex justify-center gap-4 mt-6">
                <button onClick={() => setCurrentProfessionalPage(prev => prev - 1)} disabled={currentProfessionalPage === 1}
                className="px-4 py-2 rounded bg-slate-700 hover:bg-slate-600 disabled:opacity-40">
                Previous </button>
                <span className="text-slate-300">{currentProfessionalPage} of {totalProfessionalPages}</span>
                <button onClick={() => setCurrentProfessionalPage(prev => prev + 1)} disabled={currentProfessionalPage === totalProfessionalPages}
                className="px-4 py-2 rounded bg-slate-700 hover:bg-slate-600 disabled:opacity-40">
                Next </button>
             </div>
          </section>

          {/* Received Reviews */}
          <section>
            <h2 className=" font-semibold mb-4 flex items-center gap-2 text-purple-400">
                <Star/><span className="text-xl md:text-2xl">Received Reviews</span>
            </h2>
            <ul className="space-y-3">
              {paginatedReviews.map(rev => (
                <li key={rev.id} className=" text-xs border border-slate-700 p-4 rounded-xl bg-slate-800/50">
                  <p className="text-slate-100 font-semibold">{rev.name}</p>
                  <p className="text-slate-300 text-sm">Rating: {rev.rating}/5</p>
                  <p className="text-slate-400 mt-1">{rev.comment}</p>
                  <button onClick={() => handleDelete('reviews', rev.id, setReviews)} className="mt-2 text-red-400 text-xs flex items-center gap-1 hover:text-red-300">
                    <Trash2 className="h-4 w-4" /> Delete
                  </button>
                </li>
              ))}
            </ul>
            <div className="text-xs flex justify-center gap-4 mt-6">
                <button onClick={() => setCurrentReviewPage(prev => prev - 1)} disabled={currentReviewPage === 1}
                className="px-4 py-2 rounded bg-slate-700 hover:bg-slate-600 disabled:opacity-40">
                Previous </button>
                <span className="text-slate-300">{currentReviewPage} of {totalReviewPages}</span>
                <button onClick={() => setCurrentReviewPage(prev => prev + 1)} disabled={currentReviewPage === totalReviewPages}
                className="px-4 py-2 rounded bg-slate-700 hover:bg-slate-600 disabled:opacity-40">
                Next </button>
            </div>
          </section>
        </div>
      )}
    </motion.div>
  );
};

export default AdminDashboardPage;
