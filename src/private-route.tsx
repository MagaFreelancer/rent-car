import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '@/utils/hooks/useAuth.ts';

const PrivateRoute = () => {
    const { status } = useAuth();

    return status ? <Outlet /> : <Navigate to="auth/login" />;
};

export default PrivateRoute;
