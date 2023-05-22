/* eslint-disable no-unused-vars */
import moment from 'moment';
import MainCard from 'ui-component/cards/MainCard';
import { Autocomplete, Box, Button, Dialog, DialogContent, DialogTitle, Divider, Grid, Skeleton } from '@mui/material';
import { useFetch } from 'hooks/useFetch';
import { useEffect } from 'react';
import { storeReportSalesOrder, storeMemberSelect, storeWarehouseSelect, storeUserSelect } from 'services/endPoint';
import { useState } from 'react';
import { useCallback } from 'react';
import { IconFileEuro } from '@tabler/icons';
import FilterReport from './filterReport';
import TableReport from './tableReport';
import TypeReport from './typeReport';

const ReportSalesOrders = () => {
    const [filter, setFilter] = useState();
    const [openDialog, setOpanDialog] = useState(false);
    const [isloading, setIsLoading] = useState(false);
    const [typeReport, setTypeReport] = useState('faktur');
    const { useGet: getWarehouse, data: dataWarehouse, queryForm: queryFormWarehouse, setQueryForm: setQueryFormWarehouse } = useFetch();
    const { useGet: getMember, data: dataMember, queryForm: queryFormMember, setQueryForm: setQueryFormMember } = useFetch();
    const { useGet: getUser, data: dataUser, queryForm: queryFormUser, setQueryForm: setQueryFormUser } = useFetch();
    const { useGet: getSalesOrder, data: dataSalesOrder } = useFetch();

    useEffect(() => {
        getDataMaster();
    }, []);

    useEffect(() => {
        let warehouse = dataWarehouse.find((warehouse) => warehouse.type === 'main');
        setFilter({
            ...filter,
            warehouse: { value: warehouse?.value, label: warehouse?.label },
            startDate: moment().startOf('month').format('YYYY-MM-DD'),
            finishDate: moment().endOf('month').format('YYYY-MM-DD')
        });
    }, [dataWarehouse]);

    const getDataMaster = useCallback(
        async (key, query) => {
            if (key === 'warehouse') {
                getWarehouse(storeWarehouseSelect, query);
            } else if (key === 'member') {
                getMember(storeMemberSelect, query);
            } else if (key === 'user') {
                getUser(storeUserSelect, query);
            } else {
                getWarehouse(storeWarehouseSelect, query);
                getMember(storeMemberSelect, query);
                getUser(storeUserSelect, query);
            }
        },
        [queryFormWarehouse, queryFormMember, queryFormUser]
    );

    const handleOnFilter = (key, value) => {
        if (key === 'startDate' || key === 'finishDate') {
            setFilter({ ...filter, [key]: moment(value).format('YYYY-MM-DD') });
        } else {
            setFilter({ ...filter, [key]: { value: value.value, label: value.label } });
        }
    };

    const handleOnChangeSelect = async (key, e) => {
        let newQuery = {};
        if (key === 'warehouse') {
            newQuery = { ...queryFormWarehouse, [e.target.name]: e.target.value };
            setQueryFormWarehouse(newQuery);
        } else if (key === 'member') {
            newQuery = { ...queryFormMember, [e.target.name]: e.target.value };
            setQueryFormMember(newQuery);
        } else if (key === 'user') {
            newQuery = { ...queryFormUser, [e.target.name]: e.target.value };
            setQueryFormUser(newQuery);
        }
        getDataMaster(key, newQuery);
    };

    const handleOpen = async () => {
        setIsLoading(true);
        setOpanDialog(openDialog ? false : true);
        await getSalesOrder(storeReportSalesOrder, { ...filter, limit: 100000 });
        setIsLoading(false);
    };

    const handleOnClickTypeReport = async (value) => {
        setTypeReport(value);
    };

    // if (isLoading) return <Loader />;

    return (
        <MainCard title="Laporan Pesanan Penjualan">
            <FilterReport
                dataWarehouse={dataWarehouse}
                dataMember={dataMember}
                dataUser={dataUser}
                filter={filter}
                handleOnFilter={handleOnFilter}
                handleOnChangeSelect={handleOnChangeSelect}
            />
            <Divider sx={{ marginTop: 4, marginBottom: 4 }} />
            <TypeReport typeReport={typeReport} handleOnClickTypeReport={handleOnClickTypeReport} />
            <Grid style={{ marginTop: 12, display: 'flex', justifyContent: 'right' }}>
                <Grid>
                    <Button onClick={handleOpen} title="Preview" variant="contained" color="primary" startIcon={<IconFileEuro />}>
                        Preview
                    </Button>
                </Grid>
            </Grid>
            <Dialog maxWidth="xl" open={openDialog} onClose={handleOpen} style={{ overflow: 'auto' }}>
                <DialogTitle sx={{ width: '100%' }} id="alert-dialog-title" style={{ fontSize: 16 }}>
                    Laporan Pesanan Penjualan
                </DialogTitle>
                <DialogContent>
                    <TableReport data={dataSalesOrder} filter={filter} typeReport={typeReport} isloading={isloading} />
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

export default ReportSalesOrders;
