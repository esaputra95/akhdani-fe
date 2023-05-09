import { Box, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

const ReportMasterItem = () => {
    return (
        <MainCard title="Laporan Item">
            <Box
                sx={{
                    color: 'red',
                    display: 'flex',
                    backgroundColor: 'pink',
                    flexDirection: 'row'
                }}
            >
                <Box sx={{ width: '50%' }}>
                    <Typography>Ayam Goreng</Typography>
                </Box>
                <Box sx={{ width: '50%' }}>
                    <Typography>Ayam Goreng</Typography>
                </Box>
            </Box>
        </MainCard>
    );
};

export default ReportMasterItem;
