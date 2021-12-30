import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user } = useFirebase();

    if (user.email) {

        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
};

export default PrivateRoute;