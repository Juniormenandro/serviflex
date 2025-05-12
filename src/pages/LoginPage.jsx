import React from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) console.log('Erro ao logar:', error.message);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-slate-100">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <Button
        onClick={handleLoginGoogle}
        className="bg-gradient-to-r from-green-500 to-blue-600 text-white"
      >
        Login with Google
      </Button>
    </div>
  );
};

export default LoginPage;
