/* eslint-disable no-unused-vars */
import { Button, Dialog, DialogContent, DialogTitle, Grid, Skeleton } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { useFetch } from 'hooks/useFetch';
import { storeReportBrand } from 'services/endPoint';
import { useState } from 'react';
import { IconFileEuro } from '@tabler/icons';
import FilterReport from './filterReport';
import TableReport from './tableReport';

const ReportMasterBrand = () => {
    const [filter, setFilter] = useState({ type: '' });
    const [openDialog, setOpanDialog] = useState(false);
    const [isloading, setIsLoading] = useState(false);
    const { useGet: getBrand, data: dataBrand } = useFetch();

    const handleOnFilter = (key, value) => {
        setFilter({ ...filter, [key]: value.value });
    };

    const handleOpen = async () => {
        setIsLoading(true);
        setOpanDialog(openDialog ? false : true);
        await getBrand(storeReportBrand, { ...filter });
        setIsLoading(false);
    };

    return (
        <MainCard title="Laporan Merek Item">
            <FilterReport handleOnFilter={handleOnFilter} />
            <Grid style={{ marginTop: 12, display: 'flex', justifyContent: 'right' }}>
                <Grid>
                    <Button onClick={handleOpen} title="Preview" variant="contained" color="primary" startIcon={<IconFileEuro />}>
                        Preview
                    </Button>
                </Grid>
            </Grid>
            <Dialog maxWidth="xl" open={openDialog} onClose={handleOpen} style={{ overflow: 'auto' }}>
                <DialogTitle sx={{ width: '100%' }} id="alert-dialog-title" style={{ fontSize: 16 }}>
                    Laporan Merek Item
                </DialogTitle>
                <DialogContent>
                    <TableReport data={dataBrand} />
                    {isloading ? (
                        <>
                            <Skeleton variant="rectangular" style={{ marginTop: 8 }} height={30} />
                            <Skeleton variant="rectangular" style={{ marginTop: 8 }} height={30} />
                            <Skeleton variant="rectangular" style={{ marginTop: 8 }} height={30} />
                            <Skeleton variant="rectangular" style={{ marginTop: 8 }} height={30} />
                            <Skeleton variant="rectangular" style={{ marginTop: 8 }} height={30} />
                        </>
                    ) : null}
                </DialogContent>
            </Dialog>
        </MainCard>
    );
};

export default ReportMasterBrand;
