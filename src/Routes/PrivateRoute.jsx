import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if(loading){
        return <div className="text-center mt-10">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes={
    children: PropTypes.node,
}