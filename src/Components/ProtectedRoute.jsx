/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'; // Assuming you're using Redux for auth state
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Adjust the selector based on your auth state

    if (isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute