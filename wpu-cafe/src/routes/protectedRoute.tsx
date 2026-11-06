import { ReactNode } from "react";
import { getLocalStorage } from "../utils/storage";
import { Navigate, useLocation } from "react-router";


interface PropTypes {
    children: ReactNode;
}

const ProtectedRoute = (props: PropTypes) => {
    const {children} = props;
    const auth = getLocalStorage('auth');
    const currentRoute = useLocation().pathname;  
    
    if(!auth && currentRoute !== '/login') {
        return <Navigate to='/login' replace/>
    }

    if(auth && currentRoute === 'login'){
        return <Navigate to='/order' replace/>
    }

    return <>{children}</>
}

export default ProtectedRoute;