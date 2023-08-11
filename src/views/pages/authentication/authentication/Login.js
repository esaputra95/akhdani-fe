import { Link } from 'react-router-dom';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthLogin from '../auth-forms/AuthLogin';
import Logo from 'ui-component/Logo';
import AuthFooter from 'ui-component/cards/AuthFooter';
import jwt_decode from 'jwt-decode';
import { useState } from 'react';
import { storeLogin } from 'services/endPoint';
import { api } from 'services';
import { useNavigate } from 'react-router-dom';
import { usePermify } from '@permify/react-role';

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { setUser } = usePermify();
    const navigate = useNavigate();
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    const handleLogin = async (form) => {
        try {
            const data = await api.post(storeLogin, { ...form });
            sessionStorage.setItem('token', data.data.token);
            api.defaults.headers = {
                'X-Custom-Header': 'foobar',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${data?.data?.token ?? ''}`
            };
            let token = data?.data?.token ?? '';
            let decodedToken = jwt_decode(token);
            if (decodedToken.levelAccess === 'Admin') {
                setUser({
                    id: '1',
                    roles: ['/master/users', '/master/pocket-moneys', '/master/citys', '/activity/perdin', '/dashboard', 'approve']
                });
            } else {
                setUser({
                    id: '2',
                    roles: ['/activity/perdin', '/dashboard']
                });
            }

            navigate('/dashboard');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthWrapper1>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid item sx={{ mb: 3 }}>
                                        <Logo />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={matchDownSM ? 'column-reverse' : 'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Grid item>
                                                <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                    <Typography
                                                        color={theme.palette.secondary.main}
                                                        gutterBottom
                                                        variant={matchDownSM ? 'h3' : 'h2'}
                                                    >
                                                        Hi, Selamat Datang
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <AuthLogin handleLogin={handleLogin} isLoading={isLoading} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    <AuthFooter />
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default Login;
