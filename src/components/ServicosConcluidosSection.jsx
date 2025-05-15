import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import usePaginatedData from '../lib/usePaginatedData';

const ServicosConcluidosSection = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
  const fetchData = async () => {
    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .eq('status', 'concluído')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Erro ao buscar serviços concluídos:', error.message);
    } else {
      setAppointments(data);
    }
  };
  fetchData();
  }, []);

  const handleDelete = async (id) => {
    const { error } = await supabase.from('appointments').delete().eq('id', id);
    if (error) {console.error('Erro ao deletar:', error.message);return;}
    setAppointments(prev => prev.filter(app => app.id !== id));
  };

  const { paginatedData, totalPages, currentPage, setCurrentPage} = usePaginatedData({
        data: appointments, statusFilter: 'concluído', selectedMonth, itemsPerPage: 4 
    });
  
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-blue-400">
        <CheckCircle /><span className="text-xl md:text-2xl">Completed Services</span>
      </h2>

      <div className="mb-4">
        <label className="block text-xs font-medium text-slate-300 mb-1">Select Month</label>
        <input
            type="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-lg px-2 py-0 text-slate-100 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paginatedData.map(app => (
          <div key={app.id} className=" text-xs border border-slate-700 bg-slate-800/50 p-6 rounded-xl space-y-2">
            <p className="text-ms font-semibold text-slate-100">{app.category} → {app.subcategory}</p>
            <p className="text-slate-400">{app.date} and {app.time}</p>
            <p className="text-slate-300">telephone: <span className="capitalize font-semibold">{app.phone}</span></p>
            <p className="text-slate-300">notes: <span className="capitalize font-semibold">{app.notes}</span></p>
            <div className="flex justify-end mt-2">
              <button
                onClick={() => handleDelete(app.id)}
                className="px-4 py-1 rounded bg-red-600 text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className=" text-xs flex justify-center gap-4 mt-6">
        <button
          onClick={() => setCurrentPage(prev => prev - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded bg-slate-700 hover:bg-slate-600 disabled:opacity-40"
        >
          Previous
        </button>
        <span className="text-slate-300">{currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded bg-slate-700 hover:bg-slate-600 disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default ServicosConcluidosSection;
