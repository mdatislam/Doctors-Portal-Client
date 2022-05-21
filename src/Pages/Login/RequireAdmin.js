import React from 'react';
import Loading from './../SharedPage/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import useAdmin from './../Hook/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const RequireAdmin = ({children}) => {
    const [user,loading] = useAuthState(auth)
    const [admin,adminLoading] = useAdmin(user)
    const location = useLocation()
    const navigate = useNavigate()

    if(loading || adminLoading){
        return <Loading></Loading>
    }
    if(!user || !admin){
        signOut(auth);
        return <Navigate to ='/Login' state={{from:location}} replace></Navigate>
}
    
    return children
};

export default RequireAdmin;