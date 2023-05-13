/* eslint-disable no-unused-vars */
import { Button, Dialog, DialogContent, DialogTitle, Grid, Skeleton } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { useFetch } from 'hooks/useFetch';
import { storeReportMember, storeMemberLevelSelect } from 'services/endPoint';
import { useState } from 'react';
import { IconFileEuro } from '@tabler/icons';
import FilterReport from './filterReport';
import TableReport from './tableReport';
import { useEffect } from 'react';

const ReportMasterMember = () => {
    const [filter, setFilter] = useState({ type: '' });
    const [openDialog, setOpanDialog] = useState(false);
    const [isloading, setIsLoading] = useState(false);
    const { useGet: getMember, data: dataMember, setRowsPerPage } = useFetch();
    const { useGet: getMemberLevel, data: dataMemberLevel } = useFetch();

    useEffect(() => {
        setRowsPerPage(1000);
        getDataMemberLevel();
    }, []);

    const getDataMemberLevel = async () => {
        getMemberLevel(storeMemberLevelSelect);
    };

    const handleOnFilter = (key, value) => {
        setFilter({ ...filter, [key]: value.value });
    };

    const handleOpen = async () => {
        setIsLoading(true);
        setOpanDialog(openDialog ? false : true);
        await getMember(storeReportMember, { ...filter });
        setIsLoading(false);
    };

    return (
        <MainCard title="Laporan Data Pelanggan">
            <FilterReport handleOnFilter={handleOnFilter} dataMemberLevel={dataMemberLevel} filter={filter} />
            <Grid style={{ marginTop: 12, display: 'flex', justifyContent: 'right' }}>
                <Grid>
                    <Button onClick={handleOpen} title="Preview" variant="contained" color="primary" startIcon={<IconFileEuro />}>
                        Preview
                    </Button>
                </Grid>
            </Grid>
            <Dialog maxWidth="xl" open={openDialog} onClose={handleOpen} style={{ overflow: 'auto' }}>
                <DialogTitle sx={{ width: '100%' }} id="alert-dialog-title" style={{ fontSize: 16 }}>
                    Laporan Data Pelanggan
                </DialogTitle>
                <DialogContent>
                    <TableReport data={dataMember} />
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

export default ReportMasterMember;
