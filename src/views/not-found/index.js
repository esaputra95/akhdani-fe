// material-ui
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const PageNotFound = () => (
    <MainCard>
        <Box sx={{ display: 'grid', width: screen, height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                <Typography variant="h1">404</Typography>
                <Typography variant="h3">Halaman tidak ditemukan</Typography>
            </Box>
        </Box>
    </MainCard>
);

export default PageNotFound;
