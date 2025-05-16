
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import AdminProtectedRoute from './components/ui/AdminProtectedRoute';

import LoginPage from './pages/LoginPage';
import HomePage from '@/pages/HomePage';
import CategoryPage from '@/pages/CategoryPage';
import SubcategoryPage from '@/pages/SubcategoryPage';
import AboutPage from '@/pages/AboutPage';
import CareersPage from '@/pages/CareersPage';
import PressPage from '@/pages/PressPage';
import BlogPage from '@/pages/BlogPage';
import HelpFaqPage from '@/pages/HelpFaqPage';
import TermsPage from '@/pages/TermsPage';
import PrivacyPage from '@/pages/PrivacyPage';
import AdminDashboardPage from './pages/AdminDashboard';
import AdminServicesPage from './pages/AdminServices';
import AppointmentStatusSheetPage from './pages/AppointmentStatusSheet';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-neutral-900 text-slate-50">
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/category/:categoryName/:subcategoryName" element={<SubcategoryPage />} />
            
            {/* Company */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/press" element={<PressPage />} />
            <Route path="/blog" element={<BlogPage />} />
            
            {/* Support */}
            <Route path="/help" element={<HelpFaqPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />

            {/* client Routes */}
            <Route path="/client/appointments" element={<AppointmentStatusSheetPage />} />

            {/* Admin Routes */}           
            <Route path="/admin" element={<AdminProtectedRoute><AdminDashboardPage /></AdminProtectedRoute>} />
            <Route path="/admin/categoria" element={<AdminProtectedRoute><AdminServicesPage /></AdminProtectedRoute>} />

          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
