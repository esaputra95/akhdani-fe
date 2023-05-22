/* eslint-disable no-unused-vars */
import { Autocomplete, Box, Button, Dialog, DialogContent, DialogTitle, Grid, Skeleton } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { useFetch } from 'hooks/useFetch';
import { useEffect } from 'react';
import { storeBrandSelect, storeReportItem, storeTypeSelect, storeWarehouseSelect } from 'services/endPoint';
import { useState } from 'react';
import { useCallback } from 'react';
import { IconFileEuro } from '@tabler/icons';
import FilterReport from './filterReport';
import TableReport from './tableReport';

const ReportMasterItem = () => {
    const [filter, setFilter] = useState({ type: '' });
    const [openDialog, setOpanDialog] = useState(false);
    const [isloading, setIsLoading] = useState(false);
    const { useGet: getType, data: dataType, setQueryForm: setQueryFormType, queryForm: queryFormType } = useFetch();
    const { useGet: getBrand, data: dataBrand, queryForm: queryFormBrand, setQueryForm: setQueryFormBrand } = useFetch();
    const { useGet: getWarehouse, data: dataWarehouse, queryForm: queryFormWarehouse, setQueryForm: setQueryFormWarehouse } = useFetch();
    const { useGet: getItem, data: dataItem } = useFetch();

    useEffect(() => {
        getDataType();
        getDataBrand();
        getDataWarehouse();
    }, []);

    const getDataType = useCallback(
        async (queryFormType) => {
            getType(storeTypeSelect, queryFormType);
        },
        [queryFormType]
    );

    const getDataBrand = useCallback(
        async (query) => {
            getBrand(storeBrandSelect, query);
        },
        [queryFormBrand]
    );

    const getDataWarehouse = useCallback(
        async (query) => {
            getWarehouse(storeWarehouseSelect, query);
        },
        [queryFormWarehouse]
    );

    const handleOnFilter = (key, value) => {
        setFilter({ ...filter, [key]: value.value });
    };

    const handleOnChangeInputType = async (e) => {
        let newQuery = { ...queryFormType, [e.target.name]: e.target.value };
        setQueryFormType(newQuery);
        getDataType(newQuery);
    };

    const handleOnChangeInputBrand = async (e) => {
        let newQuery = { ...queryFormBrand, [e.target.name]: e.target.value };
        setQueryFormBrand(newQuery);
        getDataBrand(newQuery);
    };

    const handleOnChangeInputWarehouse = async (e) => {
        let newQuery = { ...queryFormWarehouse, [e.target.name]: e.target.value };
        setQueryFormWarehouse(newQuery);
        getDataWarehouse(newQuery);
    };

    const handleOpen = async () => {
        setIsLoading(true);
        setOpanDialog(openDialog ? false : true);
        await getItem(storeReportItem, { ...filter });
        setIsLoading(false);
    };

    // if (isLoading) return <Loader />;

    return (
        <MainCard title="Laporan Item">
            <FilterReport
                dataType={dataType}
                dataBrand={dataBrand}
                dataWarehouse={dataWarehouse}
                handleOnFilter={handleOnFilter}
                handleOnChangeInputBrand={handleOnChangeInputBrand}
                handleOnChangeInputType={handleOnChangeInputType}
                handleOnChangeInputWarehouse={handleOnChangeInputWarehouse}
            />
            <Grid style={{ marginTop: 12, display: 'flex', justifyContent: 'right' }}>
                <Grid>
                    <Button onClick={handleOpen} title="Preview" variant="contained" color="primary" startIcon={<IconFileEuro />}>
                        Preview
                    </Button>
                </Grid>
            </Grid>
            <Dialog maxWidth="xl" open={openDialog} onClose={handleOpen} style={{ overflow: 'auto' }}>
                <DialogTitle sx={{ width: '100%' }} id="alert-dialog-title" style={{ fontSize: 16 }}>
                    Laporan Item
                </DialogTitle>
                <DialogContent>
                    <TableReport data={dataItem} filter={filter} />
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

export default ReportMasterItem;
