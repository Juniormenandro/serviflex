
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoginPage from './pages/LoginPage';
import HomePage from '@/pages/HomePage';
import CategoryPage from '@/pages/CategoryPage';
import SubcategoryPage from '@/pages/SubcategoryPage';
import AboutPage from '@/pages/AboutPage';
import CareersPage from '@/pages/CareersPage';
import PressPage from '@/pages/PressPage';
import BlogPage from '@/pages/BlogPage';
import HelpFaqPage from '@/pages/HelpFaqPage';
import ContactPage from '@/pages/ContactPage';
import TermsPage from '@/pages/TermsPage';
import PrivacyPage from '@/pages/PrivacyPage';
import ProfessionalRegisterPage from '@/pages/ProfessionalRegisterPage';
import HowItWorksPage from '@/pages/HowItWorksPage';
import BenefitsPage from '@/pages/BenefitsPage';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ui/ScrollToTop';
import AdminProtectedRoute from './components/ui/AdminProtectedRoute';
import AdminDashboardPage from './pages/AdminDashboard';

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
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            
            {/* For Professionals */}
            <Route path="/professional-register" element={<ProfessionalRegisterPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/benefits" element={<BenefitsPage />} />
            
            {/* New Routes */}
            <Route path="/login" element={<div>Login Page</div>} />
            <Route path="/admin" element={<AdminProtectedRoute><AdminDashboardPage /></AdminProtectedRoute>} />

          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
