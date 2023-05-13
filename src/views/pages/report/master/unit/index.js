/* eslint-disable no-unused-vars */
import { Autocomplete, Box, Button, Dialog, DialogContent, DialogTitle, Grid, Skeleton } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { useFetch } from 'hooks/useFetch';
import { useEffect } from 'react';
import { storeReportUnit } from 'services/endPoint';
import { useState } from 'react';
import { IconFileEuro } from '@tabler/icons';
import FilterReport from './filterReport';
import TableReport from './tableReport';

const ReportMasterUnit = () => {
    const [filter, setFilter] = useState({ type: '' });
    const [openDialog, setOpanDialog] = useState(false);
    const [isloading, setIsLoading] = useState(false);
    const { useGet: getUnit, data: dataUnit } = useFetch();

    const handleOnFilter = (key, value) => {
        setFilter({ ...filter, [key]: value.value });
    };

    const handleOpen = async () => {
        setIsLoading(true);
        setOpanDialog(openDialog ? false : true);
        await getUnit(storeReportUnit, { ...filter });
        setIsLoading(false);
    };

    // if (isLoading) return <Loader />;

    return (
        <MainCard title="Laporan Daftar Satuan">
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
                    Laporan Daftar Satuan
                </DialogTitle>
                <DialogContent>
                    <TableReport data={dataUnit} />
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

export default ReportMasterUnit;
