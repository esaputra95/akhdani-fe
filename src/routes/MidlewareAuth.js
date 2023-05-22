import { Navigate } from 'react-router';

const MidleWareAuth = (props) => {
    const token = sessionStorage.getItem('token');

    if (!token) return <Navigate to="/login" />;

    return props.children;
};

export default MidleWareAuth;
