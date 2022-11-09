import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import SpinnerPage from '../components/Pages/SpinnerPage';
import { AuthContext } from '../UserContext/ContextProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <SpinnerPage></SpinnerPage>
    }
    if(!user){
        return <Navigate to='/signin' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoutes;