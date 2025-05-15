import { useUser, useSessionContext } from '@supabase/auth-helpers-react';
import { Navigate } from 'react-router-dom';


const AdminProtectedRoute = ({ children }) => {
  const { isLoading } = useSessionContext();
  const user = useUser();
  const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
  
  if (isLoading) return null;
  
  if (!user)  return <Navigate to="/login" replace />;
  if (user.email !== ADMIN_EMAIL) return <Navigate to="/" replace />;

  return children;
};

export default AdminProtectedRoute;
