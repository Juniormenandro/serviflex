import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabaseClient';
import { useUser } from '@supabase/auth-helpers-react';
import {
  Menu,
  User,
  LogOut,
  LogIn,
  Briefcase,
  Mail,
  Podcast,
  PanelTop,
  Building,
  LayoutDashboard,
  Grid,
  Star,
  Settings,
  Calendar
} from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useUser();
  const [open, setOpen] = useState(false);

  // Função login
  const handleLoginGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) console.log('Erro ao logar:', error.message);
  };

  // Função logout
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.log('Erro ao sair:', error.message);
  };

  const handleLogoClick = () => {
  if (location.pathname === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (open) {
      setOpen(false)
    }
  } else {
    navigate('/');
  }
};

  // fecha o menu 
  useEffect(() => {
    setOpen(false); 
  }, [location.pathname, location.hash]);

  
 

  const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
  const menuItems = user
    ? [
        // Itens visíveis somente para o admin
        ...(user.email === ADMIN_EMAIL
          ? [
              { label: 'Admin Dashboard', path: '/admin', icon: LayoutDashboard },
              { label: 'Categories Dashboard', path: '/admin/categoria', icon: Settings },
            ]
          : []),
        { label: 'Appointments', path: '/client/appointments', icon: Calendar },
        { label: 'Categories', path: '/#categories-section', icon: Grid },
        { label: 'Reviews', path: '/#Reviews', icon: Star },
        { label: 'Contact', path: '/#contact', icon: Mail },
        { label: 'For Professionals', path: '/#HowItWorks', icon: Briefcase },
        { label: 'Blog', path: '/blog', icon: Podcast },
        { label: 'About Us', path: '/about', icon: Building },
        { label: 'Logout', isAction: true, action: handleLogout, icon: LogOut },
      ]
    : [
        { label: 'Login', isAction: true, action: handleLoginGoogle, icon: LogIn },
        { label: 'Categories', path: '/#categories-section', icon: Grid },
        { label: 'Reviews', path: '/#Reviews', icon: Star },
        { label: 'Contact', path: '/#contact', icon: Mail },
        { label: 'For Professionals', path: '/#HowItWorks', icon: Briefcase },
        { label: 'Blog', path: '/blog', icon: Podcast },
        { label: 'About Us', path: '/about', icon: Building },
      ];



  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 50, delay: 0.1 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-12 md:h-20 items-center justify-between">
        <motion.div whileHover={{ scale: 1.05 }}>
          <button
            onClick={handleLogoClick}
            className="flex items-center space-x-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-all"
          >
            <Briefcase className="h-8 w-8 text-green-400" />
            <span>ServiFlex</span>
          </button>
        </motion.div>
        <Sheet open={open} onOpenChange={(state) => {
          setOpen(state);
        }}>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-slate-300 hover:text-green-400"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-5/6 bg-slate-900/95 backdrop-blur-lg border-slate-800">
            <SheetHeader>
              <SheetTitle className="text-slate-100">
                <motion.div whileHover={{ scale: 1.05 }}>
                    <button onClick={handleLogoClick} className="flex items-center space-x-1 text-sm md:text-2xl md:font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-all">
                    {user
                    ?
                      <><User className="md:h-8 md:w-8 text-green-400" />
                      <span>Hello, {user.user_metadata.full_name}</span></> 
                    : 
                      <><Menu className="h-5 w-5 md:h-8 md:w-8 text-green-400" />
                      <span>Menu ServiFlex </span></>
                    }
                    </button>
                </motion.div>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-5 mt-5 md:mt-10">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const currentPath = `${location.pathname}${location.hash}`;
              const isActive = item.path === currentPath;
              return (
                <motion.button
                  key={item.label}
                  onClick={() => {
                    if (item.isDisabled) return;
                    if (item.isAction && item.action) {
                      item.action();
                    } else if (item.path) {
                      navigate(item.path);
                    }
                  }}
                  disabled={item.isDisabled}
                  className={`flex items-center pl-2 py-1 md:py-2 text-base rounded-lg border border-slate-700 md:text-2xl md:font-bold
                    ${item.isDisabled
                      ? 'bg-green-500 text-white '
                      : isActive
                        ? 'bg-green-500 text-white'
                        : 'bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-all'
                    }`}
                  whileHover={item.isDisabled ? {} : { x: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Icon className="h-5 w-5 mr-2 md:h-8 md:w-8 text-green-400" />
                  {item.label}
                </motion.button>
              );
            })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Header;
