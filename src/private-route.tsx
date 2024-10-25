import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '@/utils/hooks/useAuth.ts';

const PrivateRoute = () => {
    const isLogged = useAuth();

    return isLogged ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
