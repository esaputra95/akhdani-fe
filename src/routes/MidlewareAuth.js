import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { HasAccess } from '@permify/react-role';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import Loader from 'ui-component/Loader';
import MainCard from 'ui-component/cards/MainCard';

const MidleWareAuth = (props) => {
    const { pathname } = useLocation();
    const token = sessionStorage.getItem('token');
    if (!token) return <Navigate to="/login" />;

    return (
        <HasAccess
            roles={[pathname]}
            isLoading={<Loader />}
            renderAuthFailed={
                <MainCard>
                    <Box>
                        <Typography align="center">Anda tidak memliliki akses untuk membuka halaman ini {pathname}</Typography>
                    </Box>
                </MainCard>
            }
        >
            {props.children}
        </HasAccess>
    );
};

export default MidleWareAuth;
