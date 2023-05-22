import { Navigate } from 'react-router';

const MidleWareAuth = (props) => {
    // const token = sessionStorage.getItem('token');
    const token = '123';

    if (!token) return <Navigate to="/login" />;

    return props.children;
};

export default MidleWareAuth;
