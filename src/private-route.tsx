import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '@/utils/hooks/useAuth.ts';

const PrivateRoute = ({ restrictedToAuth }: { restrictedToAuth: boolean }) => {
    const { status } = useAuth();
    const location = useLocation();

    if (restrictedToAuth && !status) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    if (!restrictedToAuth && status) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return <Outlet />;
};

export default PrivateRoute;
